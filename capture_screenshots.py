#!/usr/bin/env python3
"""
Capture key screenshots from eRegistrations BPA using Playwright.
Opens a visible browser, waits for manual login, then captures screenshots.

Usage:
    python3 capture_screenshots.py
"""

import asyncio
import os
import sys
from playwright.async_api import async_playwright

BPA_URL = 'https://bpa.cuba.eregistrations.org'
SCREENSHOT_DIR = '/Users/nelsonperez/Desktop/Manual/docs/screenshots'
AUTH_STATE_FILE = '/Users/nelsonperez/Desktop/Manual/.auth_state.json'

SCREENSHOTS = [
    {'id': 'bpa-entry-page',       'name': 'BPA Entry Page',         'url': '/'},
    {'id': 'bpa-services-list',    'name': 'Services List',          'url': '/services'},
    {'id': 'bpa-service-bar',      'name': 'Service Bar (1st svc)',  'url': '/services', 'action': 'click_first_service'},
    {'id': 'bpa-registrations',    'name': 'Registrations Tab',      'action': 'click_tab', 'tab_text': 'Registrations'},
    {'id': 'bpa-form-builder',     'name': 'Application File Tab',   'action': 'click_tab', 'tab_text': 'Application file'},
    {'id': 'bpa-roles',            'name': 'Roles Tab',              'action': 'click_tab', 'tab_text': 'Roles'},
    {'id': 'bpa-bot-builder',      'name': 'BOT Tab',                'action': 'click_tab', 'tab_text': 'BOT'},
    {'id': 'bpa-certificates',     'name': 'Certificates Tab',       'action': 'click_tab', 'tab_text': 'Certificates'},
    {'id': 'bpa-tables',           'name': 'Tables Page',            'url': '/tables'},
    {'id': 'bpa-settings',         'name': 'Settings Page',          'url': '/settings'},
]


async def wait_for_login(page):
    """Poll until the URL no longer contains login/cas indicators."""
    print("\n>>> Please log in to the BPA in the browser window <<<")
    print(">>> The script will detect your login automatically <<<\n")

    while True:
        url = page.url.lower()
        if 'login' not in url and 'cas' not in url and 'auth' not in url:
            print(f"Login detected! Current URL: {page.url}")
            return
        await asyncio.sleep(1)


async def capture(page, shot):
    """Capture one screenshot."""
    name = shot['name']
    sid = shot['id']
    path = os.path.join(SCREENSHOT_DIR, f'{sid}.png')

    print(f"  [{sid}] {name}...", end=' ', flush=True)

    try:
        # Navigate if URL provided
        if shot.get('url'):
            full_url = BPA_URL + shot['url']
            await page.goto(full_url, wait_until='networkidle', timeout=30000)
            await asyncio.sleep(1.5)

        # Actions
        action = shot.get('action')

        if action == 'click_first_service':
            # Try multiple selectors for the first service link
            for selector in ['table tbody tr:first-child a', 'a[href*="/service/"]', '.service-name a', 'tbody tr:first-child td:first-child a']:
                el = page.locator(selector).first
                if await el.count() > 0:
                    await el.click()
                    await page.wait_for_load_state('networkidle')
                    await asyncio.sleep(1.5)
                    break

        elif action == 'click_tab':
            tab_text = shot.get('tab_text', '')
            # Try clicking a tab/link with matching text
            for selector in [
                f'a:has-text("{tab_text}")',
                f'[role="tab"]:has-text("{tab_text}")',
                f'li:has-text("{tab_text}") a',
                f'nav a:has-text("{tab_text}")',
            ]:
                el = page.locator(selector).first
                if await el.count() > 0:
                    await el.click()
                    await page.wait_for_load_state('networkidle')
                    await asyncio.sleep(1.5)
                    break

        # Take screenshot
        await page.screenshot(path=path, full_page=False)
        size_kb = os.path.getsize(path) // 1024
        print(f"OK ({size_kb} KB)")
        return True

    except Exception as e:
        print(f"FAILED: {e}")
        try:
            await page.screenshot(path=path)
            print(f"    (saved current state anyway)")
        except:
            pass
        return False


async def main():
    os.makedirs(SCREENSHOT_DIR, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=False,
            args=['--window-size=1440,900'],
            slow_mo=200,  # Slow down for visibility
        )

        context = await browser.new_context(
            viewport={'width': 1440, 'height': 900},
        )
        page = await context.new_page()

        # Navigate to BPA
        print(f"Opening {BPA_URL}...")
        await page.goto(BPA_URL, wait_until='networkidle', timeout=30000)
        await asyncio.sleep(1)

        # Check if we need login
        url = page.url.lower()
        if 'login' in url or 'cas' in url or 'auth' in url:
            await wait_for_login(page)
            # After login, wait for page to fully load
            await page.wait_for_load_state('networkidle')
            await asyncio.sleep(2)

        # Save auth state
        await context.storage_state(path=AUTH_STATE_FILE)
        print(f"Auth state saved.\n")

        # Capture all screenshots
        print(f"=== Capturing {len(SCREENSHOTS)} screenshots ===\n")
        ok = 0
        fail = 0
        for shot in SCREENSHOTS:
            if await capture(page, shot):
                ok += 1
            else:
                fail += 1

        print(f"\n=== Done: {ok} captured, {fail} failed ===")
        print(f"Screenshots in: {SCREENSHOT_DIR}/")

        await browser.close()


if __name__ == '__main__':
    asyncio.run(main())
