#!/usr/bin/env python3
"""Discover tables, GDB, and more URLs."""
import asyncio, os
from playwright.async_api import async_playwright

BPA_URL = 'https://bpa.cuba.eregistrations.org'
GDB_URL = 'https://gdb.cuba.eregistrations.org'
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

    # Try more BPA service paths
    print("=== More service paths ===")
    more_paths = [
        f'/services/{SERVICE_ID}/actions',
        f'/services/{SERVICE_ID}/actions/bots',
        f'/services/{SERVICE_ID}/templates',
        f'/services/{SERVICE_ID}/templates/certificates',
        f'/services/{SERVICE_ID}/templates/notifications',
        f'/services/{SERVICE_ID}/templates/messages',
        f'/services/{SERVICE_ID}/settings',
        f'/services/{SERVICE_ID}/requirements',
        f'/services/{SERVICE_ID}/costs',
        f'/services/{SERVICE_ID}/forms/applicant',
        f'/services/{SERVICE_ID}/guides',
    ]
    for path in more_paths:
        try:
            await page.goto(f'{BPA_URL}{path}', wait_until='networkidle', timeout=15000)
            await asyncio.sleep(1)
            title = await page.evaluate('() => { const h = document.querySelector("h1, h2, .page-title, .list-header-title"); return h ? h.textContent.trim().substring(0,80) : "no title"; }')
            redirected = '' if page.url == f'{BPA_URL}{path}' else f' -> {page.url}'
            print(f"  {path}: {title}{redirected}")
        except Exception as e:
            print(f"  {path}: ERROR {str(e)[:60]}")

    # Try clicking "Parámetros" in sidenav
    print("\n=== Clicking 'Parámetros' ===")
    await page.goto(f'{BPA_URL}/services', wait_until='networkidle', timeout=15000)
    await asyncio.sleep(2)
    try:
        el = page.locator('a.sidenav-item:has-text("Parámetros")')
        if await el.count() > 0:
            await el.first.click()
            await asyncio.sleep(2)
            print(f"  After click: {page.url}")
            title = await page.evaluate('() => { const h = document.querySelector("h1, h2"); return h ? h.textContent.trim().substring(0,80) : "no title"; }')
            print(f"  Title: {title}")
            # Get all links on this page
            links = await page.evaluate('''() => {
                const items = [];
                document.querySelectorAll('a[href], .sidenav-item, .menu-item, .nav-link').forEach(a => {
                    const text = a.textContent.trim();
                    const cls = typeof a.className === 'string' ? a.className : '';
                    if (text && !cls.includes('ck-') && text.length < 80)
                        items.push({ text, href: a.getAttribute('href') || '', visible: a.offsetParent !== null });
                });
                return items;
            }''')
            for l in links:
                vis = 'V' if l['visible'] else 'H'
                print(f"    [{vis}] '{l['text'][:50]}' -> {l['href']}")
    except Exception as e:
        print(f"  Error: {e}")

    # Try GDB
    print("\n=== GDB ===")
    try:
        await page.goto(GDB_URL, wait_until='networkidle', timeout=15000)
        await asyncio.sleep(2)
        print(f"  URL: {page.url}")
        title = await page.evaluate('() => document.title')
        print(f"  Title: {title}")
        # Check if logged in or login page
        body_text = await page.evaluate('() => document.body.textContent.substring(0, 500)')
        print(f"  Body preview: {body_text[:200]}")
    except Exception as e:
        print(f"  Error: {e}")

    # Navigate inside BOT builder and capture sub-pages
    print("\n=== BOT Builder sub-pages ===")
    await page.goto(f'{BPA_URL}/services/{SERVICE_ID}/actions/bots', wait_until='networkidle', timeout=15000)
    await asyncio.sleep(2)
    print(f"  URL: {page.url}")
    # Find all elements on the BOT page
    bot_elements = await page.evaluate('''() => {
        const items = [];
        document.querySelectorAll('a, button, [role="tab"], .nav-link, .nav-item, .tab').forEach(el => {
            const text = el.textContent?.trim();
            const cls = typeof el.className === 'string' ? el.className : '';
            if (text && !cls.includes('ck-') && text.length > 1 && text.length < 80) {
                items.push({
                    tag: el.tagName,
                    text,
                    href: el.getAttribute('href') || '',
                    visible: el.offsetParent !== null,
                    classes: cls.substring(0, 60),
                });
            }
        });
        return items;
    }''')
    seen = set()
    for el in bot_elements:
        key = el['text']
        if key not in seen:
            seen.add(key)
            vis = 'V' if el['visible'] else 'H'
            print(f"    [{vis}] <{el['tag']}> '{el['text'][:50]}' href='{el['href'][:50]}' class='{el['classes'][:40]}'")

    # Navigate inside certificates and capture sub-pages
    print("\n=== Certificates sub-pages ===")
    await page.goto(f'{BPA_URL}/services/{SERVICE_ID}/templates/certificates', wait_until='networkidle', timeout=15000)
    await asyncio.sleep(2)
    print(f"  URL: {page.url}")
    cert_elements = await page.evaluate('''() => {
        const items = [];
        document.querySelectorAll('a, button, .nav-link, h1, h2, h3, .list-header-title').forEach(el => {
            const text = el.textContent?.trim();
            const cls = typeof el.className === 'string' ? el.className : '';
            if (text && !cls.includes('ck-') && text.length > 1 && text.length < 80) {
                items.push({
                    tag: el.tagName,
                    text,
                    href: el.getAttribute('href') || '',
                    visible: el.offsetParent !== null,
                });
            }
        });
        return items;
    }''')
    seen = set()
    for el in cert_elements:
        key = el['text']
        if key not in seen:
            seen.add(key)
            vis = 'V' if el['visible'] else 'H'
            print(f"    [{vis}] <{el['tag']}> '{el['text'][:50]}' href='{el['href'][:50]}'")

    # Check settings sub-pages
    print("\n=== Settings sub-pages ===")
    await page.goto(f'{BPA_URL}/settings', wait_until='networkidle', timeout=15000)
    await asyncio.sleep(2)
    settings_items = await page.evaluate('''() => {
        const items = [];
        document.querySelectorAll('a, .nav-link, .tab, [role="tab"], .settings-item, h2, h3').forEach(el => {
            const text = el.textContent?.trim();
            const cls = typeof el.className === 'string' ? el.className : '';
            if (text && !cls.includes('ck-') && text.length > 1 && text.length < 80) {
                items.push({ tag: el.tagName, text, href: el.getAttribute('href') || '', visible: el.offsetParent !== null });
            }
        });
        return items;
    }''')
    seen = set()
    for el in settings_items:
        key = el['text']
        if key not in seen:
            seen.add(key)
            vis = 'V' if el['visible'] else 'H'
            print(f"    [{vis}] <{el['tag']}> '{el['text'][:50]}' href='{el['href'][:50]}'")

    await browser.close()
    await p.stop()

if __name__ == '__main__':
    asyncio.run(main())
