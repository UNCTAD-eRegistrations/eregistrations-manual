#!/usr/bin/env python3
"""Inspect and capture the determinants panel properly."""
import asyncio, os
from playwright.async_api import async_playwright

BPA_URL = 'https://bpa.cuba.eregistrations.org'
AUTH_STATE_FILE = '/Users/nelsonperez/Desktop/Manual/.auth_state.json'
SERVICE_ID = '2c918084887c7a8f01887c99ed2a6fd5'
SCREENSHOT_DIR = '/Users/nelsonperez/Desktop/Manual/docs/screenshots'

async def main():
    p = await async_playwright().start()
    browser = await p.chromium.launch(headless=True, args=['--window-size=1440,900'])
    context = await browser.new_context(
        viewport={'width': 1440, 'height': 900},
        storage_state=AUTH_STATE_FILE,
    )
    page = await context.new_page()

    # Go to applicant form
    url = f'{BPA_URL}/services/{SERVICE_ID}/forms/applicant-form'
    print(f"Loading {url}...")
    await page.goto(url, wait_until='domcontentloaded', timeout=45000)
    await asyncio.sleep(10)

    # Take initial screenshot
    await page.screenshot(path=f'{SCREENSHOT_DIR}/debug-form-initial.png')
    print("Saved initial screenshot")

    # Look for determinants-related elements
    print("\n=== Looking for determinant elements ===")
    det_elements = await page.evaluate('''() => {
        const results = [];
        const all = document.querySelectorAll('*');
        for (const el of all) {
            const cls = typeof el.className === 'string' ? el.className : '';
            const text = el.textContent?.trim()?.substring(0, 100) || '';
            if (cls.includes('determinant') || text.toLowerCase().includes('determinant') || text.toLowerCase().includes('determin')) {
                results.push({
                    tag: el.tagName,
                    classes: cls.substring(0, 120),
                    text: text.substring(0, 80),
                    visible: el.offsetParent !== null,
                    display: getComputedStyle(el).display,
                    width: el.offsetWidth,
                    height: el.offsetHeight,
                    id: el.id || '',
                });
            }
        }
        return results;
    }''')
    for el in det_elements:
        vis = 'V' if el['visible'] else 'H'
        print(f"  [{vis}] <{el['tag']} class='{el['classes'][:60]}'> {el['width']}x{el['height']} display:{el['display']} text:'{el['text'][:50]}'")

    # Look for buttons/toggles that might show determinants
    print("\n=== Buttons/toggles ===")
    buttons = await page.evaluate('''() => {
        const results = [];
        document.querySelectorAll('button, [role="button"], .toggle, .btn, [class*="toggle"], [class*="panel"], [class*="sidebar"], [class*="drawer"]').forEach(el => {
            const cls = typeof el.className === 'string' ? el.className : '';
            if (cls.includes('ck-') || cls.includes('ck ')) return;
            const text = el.textContent?.trim()?.substring(0, 60) || '';
            if (text.length > 0 && text.length < 60) {
                results.push({
                    tag: el.tagName,
                    classes: cls.substring(0, 80),
                    text,
                    visible: el.offsetParent !== null,
                    title: el.getAttribute('title') || '',
                });
            }
        });
        return results;
    }''')
    seen = set()
    for b in buttons:
        key = b['text']
        if key not in seen:
            seen.add(key)
            vis = 'V' if b['visible'] else 'H'
            print(f"  [{vis}] <{b['tag']}> '{b['text']}' title='{b['title']}' class='{b['classes'][:50]}'")

    # Look for collapsible/expandable panels
    print("\n=== Layout columns/panels ===")
    panels = await page.evaluate('''() => {
        const results = [];
        document.querySelectorAll('[class*="col"], [class*="panel"], [class*="sidebar"], [class*="drawer"], [class*="split"], [class*="right"]').forEach(el => {
            const cls = typeof el.className === 'string' ? el.className : '';
            if (cls.includes('ck-') || cls.length < 5) return;
            if (cls.includes('determinant') || cls.includes('panel') || cls.includes('drawer') || cls.includes('sidebar') || cls.includes('right') || cls.includes('split')) {
                results.push({
                    tag: el.tagName,
                    classes: cls.substring(0, 120),
                    visible: el.offsetParent !== null,
                    width: el.offsetWidth,
                    height: el.offsetHeight,
                    childCount: el.children.length,
                    text: el.textContent?.trim()?.substring(0, 60) || '',
                });
            }
        });
        return results;
    }''')
    for panel in panels[:30]:
        vis = 'V' if panel['visible'] else 'H'
        print(f"  [{vis}] <{panel['tag']} class='{panel['classes'][:70]}'> {panel['width']}x{panel['height']} children:{panel['childCount']} text:'{panel['text'][:40]}'")

    # Try clicking on a form component to select it (might trigger determinants panel)
    print("\n=== Trying to click form components ===")
    form_components = await page.evaluate('''() => {
        const results = [];
        document.querySelectorAll('.formio-component, [class*="formio"], .form-group, .component').forEach(el => {
            const cls = typeof el.className === 'string' ? el.className : '';
            if (cls.includes('ck-')) return;
            const text = el.textContent?.trim()?.substring(0, 60) || '';
            results.push({
                tag: el.tagName,
                classes: cls.substring(0, 100),
                text: text.substring(0, 60),
                visible: el.offsetParent !== null,
                rect: el.getBoundingClientRect(),
            });
        });
        return results;
    }''')
    print(f"  Found {len(form_components)} form components")
    for c in form_components[:10]:
        vis = 'V' if c['visible'] else 'H'
        print(f"  [{vis}] <{c['tag']} class='{c['classes'][:50]}'> '{c['text'][:40]}'")

    # Try clicking on a visible form component
    for c in form_components:
        if c['visible'] and c['rect']['width'] > 50 and c['rect']['height'] > 20:
            text_preview = c['text'][:30]
            if text_preview and 'Contenedor' not in text_preview and 'General' not in text_preview:
                print(f"\n  Clicking on: '{text_preview}'")
                try:
                    await page.mouse.click(c['rect']['x'] + 10, c['rect']['y'] + 10)
                    await asyncio.sleep(3)
                    break
                except:
                    pass

    # Check if determinants appeared after click
    print("\n=== After clicking component ===")
    det_after = await page.evaluate('''() => {
        const results = [];
        document.querySelectorAll('[class*="determinant"]').forEach(el => {
            const cls = typeof el.className === 'string' ? el.className : '';
            results.push({
                tag: el.tagName,
                classes: cls.substring(0, 120),
                visible: el.offsetParent !== null,
                width: el.offsetWidth,
                height: el.offsetHeight,
            });
        });
        return results;
    }''')
    for el in det_after:
        vis = 'V' if el['visible'] else 'H'
        print(f"  [{vis}] <{el['tag']} class='{el['classes'][:70]}'> {el['width']}x{el['height']}")

    await page.screenshot(path=f'{SCREENSHOT_DIR}/debug-form-after-click.png')
    print("\nSaved after-click screenshot")

    # Try the "New" button for determinants
    print("\n=== Looking for 'New' determinant button ===")
    try:
        new_btn = page.locator('button:has-text("New")').first
        if await new_btn.count() > 0:
            print("  Found 'New' button, clicking...")
            await new_btn.click()
            await asyncio.sleep(3)
            await page.screenshot(path=f'{SCREENSHOT_DIR}/debug-form-new-det.png')
            print("  Saved new-det screenshot")
    except Exception as e:
        print(f"  Error: {e}")

    # Check the drawer-position setting
    print("\n=== Checking drawer position ===")
    drawer = await page.evaluate('''() => {
        return {
            drawerPosition: localStorage.getItem('drawer-position'),
            allKeys: Object.keys(localStorage),
        };
    }''')
    print(f"  Drawer position: {drawer['drawerPosition']}")
    print(f"  localStorage keys: {drawer['allKeys']}")

    await browser.close()
    await p.stop()

if __name__ == '__main__':
    asyncio.run(main())
