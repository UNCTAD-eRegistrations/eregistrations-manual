#!/usr/bin/env python3
"""Quick script to get all navigation URLs from the BPA service detail page."""
import asyncio, os, json
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

    # Go to service detail
    url = f'{BPA_URL}/services/{SERVICE_ID}/forms/applicant-form'
    print(f"Loading {url}...")
    await page.goto(url, wait_until='networkidle', timeout=30000)
    await asyncio.sleep(3)

    # Get ALL links with their full hrefs
    links = await page.evaluate('''() => {
        const results = [];
        const allLinks = document.querySelectorAll('a[href]');
        for (const a of allLinks) {
            const text = a.textContent.trim();
            const cls = typeof a.className === 'string' ? a.className : '';
            if (cls.includes('ck-') || cls.includes('ck ')) continue;
            if (text.length > 0) {
                results.push({
                    text: text.substring(0, 80),
                    href: a.getAttribute('href'),
                    fullHref: a.href,
                    classes: cls.substring(0, 100),
                    visible: a.offsetParent !== null,
                });
            }
        }
        return results;
    }''')

    print(f"\nFound {len(links)} links:\n")
    for l in links:
        vis = 'V' if l['visible'] else 'H'
        print(f"  [{vis}] '{l['text'][:50]}' -> {l['href']}")

    # Also get page tab links specifically
    print("\n=== PAGE TABS ===")
    tabs = await page.evaluate('''() => {
        const results = [];
        const tabItems = document.querySelectorAll('.pages-tabs li, .pages-tabs a, .page-tab-link, .page-item');
        for (const el of tabItems) {
            results.push({
                tag: el.tagName,
                text: el.textContent.trim(),
                href: el.getAttribute('href') || '',
                classes: (typeof el.className === 'string') ? el.className : '',
            });
        }
        return results;
    }''')
    for t in tabs:
        print(f"  <{t['tag']}> '{t['text']}' href='{t['href']}' class='{t['classes'][:60]}'")

    # Navigate to each sidenav item and record the URL pattern
    print("\n=== SIDENAV ITEMS (clicking each) ===")
    sidenav_links = await page.evaluate('''() => {
        const items = document.querySelectorAll('.sidenav-item');
        return Array.from(items).map(a => ({
            text: a.textContent.trim(),
            href: a.getAttribute('href') || '',
        }));
    }''')
    for item in sidenav_links:
        print(f"  '{item['text']}' -> {item['href']}")

    # Navigate to Registros
    print("\n=== NAVIGATING TO EACH SECTION ===")
    for item_text, expected_path in [
        ('Registros', 'registrations'),
        ('Solicitud', 'forms'),
        ('Procesamiento', 'roles'),
    ]:
        try:
            await page.goto(f'{BPA_URL}/services/{SERVICE_ID}/forms/applicant-form', wait_until='networkidle', timeout=15000)
            await asyncio.sleep(1)
            el = page.get_by_text(item_text, exact=False).first
            if await el.count() > 0:
                await el.click()
                await asyncio.sleep(2)
                print(f"  '{item_text}' -> {page.url}")
        except Exception as e:
            print(f"  '{item_text}' -> ERROR: {e}")

    # Navigate to each page tab
    print("\n=== NAVIGATING TO EACH PAGE TAB ===")
    for tab_text in ['Guía', 'Formulario', 'Documentos', 'PAGOS', 'ENVIAR']:
        try:
            await page.goto(f'{BPA_URL}/services/{SERVICE_ID}/forms/applicant-form', wait_until='networkidle', timeout=15000)
            await asyncio.sleep(1)
            el = page.locator(f'.pages-tabs :text("{tab_text}")').first
            if await el.count() > 0:
                await el.click()
                await asyncio.sleep(2)
                print(f"  '{tab_text}' -> {page.url}")
            else:
                # Try broader selector
                el = page.get_by_text(tab_text, exact=True).first
                if await el.count() > 0:
                    await el.click()
                    await asyncio.sleep(2)
                    print(f"  '{tab_text}' (broad) -> {page.url}")
                else:
                    print(f"  '{tab_text}' -> NOT FOUND")
        except Exception as e:
            print(f"  '{tab_text}' -> ERROR: {e}")

    # Also check /tables and /settings
    print("\n=== TOP-LEVEL PAGES ===")
    for path in ['/services', '/tables', '/settings']:
        await page.goto(f'{BPA_URL}{path}', wait_until='networkidle', timeout=15000)
        await asyncio.sleep(1)
        print(f"  {path} -> {page.url}")

    await browser.close()
    await p.stop()

if __name__ == '__main__':
    asyncio.run(main())
