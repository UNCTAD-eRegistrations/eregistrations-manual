#!/usr/bin/env python3
"""Discover all BPA URLs for remaining manual sections."""
import asyncio, os
from playwright.async_api import async_playwright

BPA_URL = 'https://bpa.cuba.eregistrations.org'
AUTH_STATE_FILE = '/Users/nelsonperez/Desktop/Manual/.auth_state.json'
SERVICE_ID = '2c918084887c7a8f01887c99ed2a6fd5'

async def main():
    p = await async_playwright().start()
    browser = await p.chromium.launch(headless=True)
    context = await browser.new_context(
        viewport={'width': 1440, 'height': 900},
        storage_state=AUTH_STATE_FILE,
    )
    page = await context.new_page()

    # URLs to try
    urls_to_try = [
        # BOT builder variations
        f'/services/{SERVICE_ID}/bots',
        f'/services/{SERVICE_ID}/bot',
        f'/services/{SERVICE_ID}/bot-builder',
        f'/services/{SERVICE_ID}/integrations',
        # Certificates
        f'/services/{SERVICE_ID}/certificates',
        f'/services/{SERVICE_ID}/certificate',
        f'/services/{SERVICE_ID}/print-documents',
        f'/services/{SERVICE_ID}/documents',
        f'/certificates',
        f'/print-documents',
        # Tables
        f'/tables',
        f'/classifications',
        # Useful functions - within applicant form
        f'/services/{SERVICE_ID}/forms/applicant-form',
        # Custom classes
        f'/services/{SERVICE_ID}/custom-classes',
        f'/services/{SERVICE_ID}/classes',
        # User level 2 stuff
        f'/notifications',
        f'/messages',
        # Statistics
        f'/statistics',
        f'/stats',
        # Introduction / home
        f'/',
    ]

    print("=== Testing URL patterns ===\n")
    for path in urls_to_try:
        full_url = f'{BPA_URL}{path}'
        try:
            resp = await page.goto(full_url, wait_until='networkidle', timeout=15000)
            await asyncio.sleep(1)
            final_url = page.url
            status = resp.status if resp else 'N/A'
            redirected = ' -> REDIRECTED' if final_url != full_url else ''
            # Get page title/heading
            title = await page.evaluate('() => { const h1 = document.querySelector("h1"); return h1 ? h1.textContent.trim().substring(0,80) : "no h1"; }')
            print(f"  {path}")
            print(f"    Status: {status} | Final: {final_url}{redirected}")
            print(f"    Title: {title}")
        except Exception as e:
            print(f"  {path}")
            print(f"    ERROR: {str(e)[:80]}")
        print()

    # Now switch to user level 2 and check side menu
    print("\n=== Switching to User Level 2 ===")
    await page.goto(f'{BPA_URL}/services', wait_until='networkidle', timeout=15000)
    await asyncio.sleep(2)

    # Find and click user level toggle
    try:
        level_el = page.get_by_text('Nivel usuario', exact=False).first
        if await level_el.count() > 0:
            await level_el.click()
            await asyncio.sleep(2)
            print(f"  Clicked user level toggle. URL: {page.url}")

            # Get all sidenav items now
            sidenav = await page.evaluate('''() => {
                const items = document.querySelectorAll('.sidenav-item, .sidenav a, aside a');
                return Array.from(items).map(a => ({
                    text: a.textContent.trim(),
                    href: a.getAttribute('href') || '',
                    visible: a.offsetParent !== null,
                }));
            }''')
            print(f"\n  Sidenav items (level 2):")
            for item in sidenav:
                vis = 'V' if item['visible'] else 'H'
                print(f"    [{vis}] '{item['text'][:50]}' -> {item['href']}")
    except Exception as e:
        print(f"  Error toggling level: {e}")

    # Check what's inside a service at level 2 - sidebar sections
    print("\n=== Service sidebar at level 2 ===")
    await page.goto(f'{BPA_URL}/services/{SERVICE_ID}/forms/applicant-form', wait_until='networkidle', timeout=15000)
    await asyncio.sleep(2)

    sidebar = await page.evaluate('''() => {
        const items = document.querySelectorAll('a.sidenav-item, a.sidebar-subtitle-section__link, .sidenav a');
        return Array.from(items).map(a => ({
            text: a.textContent.trim(),
            href: a.getAttribute('href') || '',
            visible: a.offsetParent !== null,
            classes: (typeof a.className === 'string') ? a.className.substring(0,60) : '',
        }));
    }''')
    for item in sidebar:
        vis = 'V' if item['visible'] else 'H'
        print(f"  [{vis}] '{item['text'][:50]}' -> {item['href']}")

    await browser.close()
    await p.stop()

if __name__ == '__main__':
    asyncio.run(main())
