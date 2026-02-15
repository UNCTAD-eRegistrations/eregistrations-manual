#!/usr/bin/env python3
"""
Update manual screenshots from live BPA using Playwright.

Phase 1: Inspect DOM to discover navigation structure
Phase 2: Capture screenshots for all manual sections

Usage:
    python3 update_screenshots.py inspect   # Discover BPA DOM structure
    python3 update_screenshots.py capture   # Capture all screenshots
    python3 update_screenshots.py           # Both (inspect then capture)
"""

import asyncio
import json
import os
import sys
from playwright.async_api import async_playwright

BPA_URL = 'https://bpa.cuba.eregistrations.org'
SCREENSHOT_DIR = '/Users/nelsonperez/Desktop/Manual/docs/screenshots'
AUTH_STATE_FILE = '/Users/nelsonperez/Desktop/Manual/.auth_state.json'
DOM_REPORT_FILE = '/Users/nelsonperez/Desktop/Manual/bpa_dom_report.json'

# First service ID from BPA (Permisos eventuales)
SAMPLE_SERVICE_ID = '2c918084887c7a8f01887c99ed2a6fd5'

# ═══ Screenshots to capture ═══
# Each entry maps to a manual section
SCREENSHOTS = [
    # Part 1 - BPA
    {
        'id': 'bpa-entry-page',
        'section': '02-entry-page',
        'name': 'BPA Entry Page (Instance Bar + Side Menu)',
        'url': '/',
        'wait': 2,
    },
    {
        'id': 'bpa-services-list',
        'section': '03-services',
        'name': 'Services List',
        'url': '/services',
        'wait': 2,
    },
    {
        'id': 'bpa-service-detail',
        'section': '03-services',
        'name': 'Service Detail (after clicking service)',
        'url': '/services',
        'action': 'click_first_service',
        'wait': 2,
    },
    {
        'id': 'bpa-registrations',
        'section': '04-registrations',
        'name': 'Registrations Tab',
        'action': 'find_and_click_tab',
        'tab_keywords': ['registration', 'registr'],
        'wait': 2,
    },
    {
        'id': 'bpa-guide',
        'section': '05-guide',
        'name': 'Guide Tab',
        'action': 'find_and_click_tab',
        'tab_keywords': ['guide', 'guía'],
        'wait': 2,
    },
    {
        'id': 'bpa-determinants',
        'section': '06-determinants',
        'name': 'Determinants Panel',
        'action': 'find_and_click_tab',
        'tab_keywords': ['determinant', 'determin'],
        'wait': 2,
    },
    {
        'id': 'bpa-applicant-form',
        'section': '07-applicant-form',
        'name': 'Applicant Form Builder',
        'action': 'find_and_click_tab',
        'tab_keywords': ['application file', 'applicant', 'formulario', 'form'],
        'wait': 2,
    },
    {
        'id': 'bpa-documents',
        'section': '08-documents',
        'name': 'Documents Tab',
        'action': 'find_and_click_tab',
        'tab_keywords': ['document', 'documento'],
        'wait': 2,
    },
    {
        'id': 'bpa-payment',
        'section': '09-payment',
        'name': 'Payment Tab',
        'action': 'find_and_click_tab',
        'tab_keywords': ['payment', 'pago', 'cost'],
        'wait': 2,
    },
    {
        'id': 'bpa-send-file',
        'section': '10-send-file',
        'name': 'Send File Tab',
        'action': 'find_and_click_tab',
        'tab_keywords': ['send file', 'enviar', 'send'],
        'wait': 2,
    },
    {
        'id': 'bpa-bot-builder',
        'section': '13-bot-builder',
        'name': 'BOT Builder',
        'action': 'find_and_click_tab',
        'tab_keywords': ['bot', 'BOT'],
        'wait': 2,
    },
    {
        'id': 'bpa-roles',
        'section': '14-roles',
        'name': 'Roles Tab',
        'action': 'find_and_click_tab',
        'tab_keywords': ['role', 'rol'],
        'wait': 2,
    },
    {
        'id': 'bpa-certificates',
        'section': '15-certificates',
        'name': 'Certificates Tab',
        'action': 'find_and_click_tab',
        'tab_keywords': ['certificate', 'certificado'],
        'wait': 2,
    },
    {
        'id': 'bpa-tables',
        'section': '16-tables',
        'name': 'Tables Page',
        'url': '/tables',
        'wait': 2,
    },
    {
        'id': 'bpa-settings',
        'section': '17-settings',
        'name': 'Settings Page',
        'url': '/settings',
        'wait': 2,
    },
]


async def wait_for_login(page):
    """Poll until the URL no longer contains login indicators."""
    print("\n>>> Please log in to the BPA in the browser window <<<")
    print(">>> The script will detect your login automatically <<<\n")
    while True:
        url = page.url.lower()
        if 'login' not in url and 'cas' not in url and 'auth' not in url:
            print(f"Login detected! Current URL: {page.url}")
            return
        await asyncio.sleep(1)


async def setup_browser(headless=False):
    """Launch browser with or without saved auth state."""
    p = await async_playwright().start()
    browser = await p.chromium.launch(
        headless=headless,
        args=['--window-size=1440,900'],
        slow_mo=100,
    )

    # Try to reuse auth state
    if os.path.exists(AUTH_STATE_FILE):
        try:
            context = await browser.new_context(
                viewport={'width': 1440, 'height': 900},
                storage_state=AUTH_STATE_FILE,
            )
            print("Loaded saved auth state.")
        except Exception:
            context = await browser.new_context(
                viewport={'width': 1440, 'height': 900},
            )
            print("Auth state invalid, starting fresh.")
    else:
        context = await browser.new_context(
            viewport={'width': 1440, 'height': 900},
        )

    page = await context.new_page()
    return p, browser, context, page


async def ensure_logged_in(page, context):
    """Navigate to BPA and ensure we're logged in."""
    await page.goto(BPA_URL, wait_until='networkidle', timeout=30000)
    await asyncio.sleep(2)

    url = page.url.lower()
    if 'login' in url or 'cas' in url or 'auth' in url:
        await wait_for_login(page)
        await page.wait_for_load_state('networkidle')
        await asyncio.sleep(2)

    # Save fresh auth state
    await context.storage_state(path=AUTH_STATE_FILE)
    print("Auth state saved.\n")


# ═══════════════════════════════════════════
# PHASE 1: DOM INSPECTION
# ═══════════════════════════════════════════

async def inspect_dom(page):
    """Inspect the BPA DOM to discover navigation elements."""
    report = {
        'pages': {},
        'tab_selectors': [],
        'service_link_selectors': [],
    }

    # 1. Inspect services page
    print("=== Inspecting /services ===")
    await page.goto(f'{BPA_URL}/services', wait_until='networkidle', timeout=30000)
    await asyncio.sleep(2)

    # Find all clickable elements that might be service links
    service_links = await page.evaluate('''() => {
        const results = [];
        // Look for links and clickable elements in the main content area
        const all = document.querySelectorAll('a, [role="button"], button, [onclick], tr[style*="cursor"], td[style*="cursor"], .clickable, [ng-click], [click]');
        for (const el of all) {
            const text = el.textContent?.trim().substring(0, 100);
            const href = el.getAttribute('href') || '';
            const tag = el.tagName;
            const classes = el.className;
            const role = el.getAttribute('role') || '';
            if (text && text.length > 2) {
                results.push({ tag, text, href, classes: typeof classes === 'string' ? classes : '', role });
            }
        }
        return results;
    }''')
    report['pages']['services'] = {
        'url': page.url,
        'clickable_elements': service_links[:50],
    }
    print(f"  Found {len(service_links)} clickable elements")
    for el in service_links[:15]:
        print(f"    <{el['tag']}> '{el['text'][:60]}' href='{el['href'][:80]}' class='{el['classes'][:60]}'")

    # 2. Try to click on the first service
    print("\n=== Trying to navigate to a service ===")

    # Try clicking any link that contains a service-like URL or text
    clicked = False
    for selector in [
        'a[href*="service"]',
        'table tbody tr td a',
        'tbody tr:first-child a',
        '.service-name',
        'tr.clickable',
        'td a',
    ]:
        count = await page.locator(selector).count()
        if count > 0:
            first = page.locator(selector).first
            text = await first.text_content()
            print(f"  Found '{selector}' -> '{text.strip()[:60] if text else 'N/A'}'")
            try:
                await first.click()
                await page.wait_for_load_state('networkidle', timeout=10000)
                await asyncio.sleep(2)
                print(f"  Navigated to: {page.url}")
                clicked = True
                break
            except Exception as e:
                print(f"  Click failed: {e}")

    if not clicked:
        # Try clicking any text that looks like a service name
        print("  Trying to click by known service name...")
        for svc_name in ['Permisos eventuales', 'Acreditaciones', 'Permiso fitosanitario']:
            try:
                el = page.get_by_text(svc_name, exact=False).first
                if await el.count() > 0:
                    await el.click()
                    await page.wait_for_load_state('networkidle', timeout=10000)
                    await asyncio.sleep(2)
                    print(f"  Clicked '{svc_name}', now at: {page.url}")
                    clicked = True
                    break
            except Exception:
                pass

    if not clicked:
        print("  Could not navigate to a service. Inspecting what we see...")

    # 3. Inspect service detail page - find tabs/navigation
    print("\n=== Inspecting service detail page ===")
    print(f"  Current URL: {page.url}")

    # Get all navigation elements
    nav_elements = await page.evaluate('''() => {
        const results = [];

        // Look for tab-like elements
        const selectors = [
            'nav a', 'nav li', '[role="tab"]', '.tab', '.nav-item',
            '.nav-link', '.sidebar a', '.menu a', '.menu-item',
            'aside a', 'aside li', '.side-menu a', '.side-nav a',
            'ul.nav li', '.tabs a', '.tab-list a',
            // Angular/Material specific
            'mat-tab', 'md-tab', '.mat-tab-label', '.md-tab',
            // Generic
            'a[routerlink]', 'a[ui-sref]',
        ];

        for (const sel of selectors) {
            try {
                const els = document.querySelectorAll(sel);
                for (const el of els) {
                    const text = el.textContent?.trim().substring(0, 100);
                    const href = el.getAttribute('href') || '';
                    const tag = el.tagName;
                    const classes = el.className;
                    if (text && text.length > 1) {
                        results.push({
                            selector: sel,
                            tag,
                            text,
                            href,
                            classes: typeof classes === 'string' ? classes : '',
                        });
                    }
                }
            } catch(e) {}
        }
        return results;
    }''')

    report['pages']['service_detail'] = {
        'url': page.url,
        'nav_elements': nav_elements[:80],
    }
    print(f"  Found {len(nav_elements)} navigation elements")
    for el in nav_elements[:30]:
        print(f"    [{el['selector']}] <{el['tag']}> '{el['text'][:60]}' href='{el['href'][:60]}'")

    # Also get ALL visible text to understand the page structure
    page_structure = await page.evaluate('''() => {
        const results = [];
        // Get major structural elements
        const structural = document.querySelectorAll('h1, h2, h3, h4, h5, h6, nav, aside, header, footer, [role="navigation"], [role="tablist"]');
        for (const el of structural) {
            results.push({
                tag: el.tagName,
                role: el.getAttribute('role') || '',
                text: el.textContent?.trim().substring(0, 200),
                children: el.children.length,
                classes: (typeof el.className === 'string') ? el.className.substring(0, 100) : '',
                id: el.id || '',
            });
        }
        return results;
    }''')

    report['pages']['service_detail']['structural_elements'] = page_structure[:40]
    print(f"\n  Structural elements ({len(page_structure)}):")
    for el in page_structure[:20]:
        print(f"    <{el['tag']} id='{el['id']}' class='{el['classes'][:50]}'> {el['text'][:80]}")

    # 4. Look for the side menu structure
    print("\n=== Inspecting side menu ===")
    side_menu = await page.evaluate('''() => {
        const results = [];
        // Common side menu containers
        const containers = document.querySelectorAll(
            'aside, .sidebar, .side-menu, .side-nav, nav.left, ' +
            '.drawer, .navigation, [class*="sidebar"], [class*="sidenav"], ' +
            '[class*="menu-left"], [class*="nav-left"], [class*="drawer"]'
        );
        for (const container of containers) {
            const items = container.querySelectorAll('a, li, [role="menuitem"], [role="treeitem"]');
            const itemTexts = [];
            for (const item of items) {
                const text = item.textContent?.trim().substring(0, 100);
                const href = item.getAttribute('href') || '';
                if (text && text.length > 1) {
                    itemTexts.push({ text, href, tag: item.tagName });
                }
            }
            results.push({
                containerTag: container.tagName,
                containerClass: (typeof container.className === 'string') ? container.className.substring(0, 100) : '',
                itemCount: itemTexts.length,
                items: itemTexts.slice(0, 30),
            });
        }
        return results;
    }''')

    report['pages']['side_menu'] = side_menu
    for menu in side_menu:
        print(f"  Container: <{menu['containerTag']} class='{menu['containerClass'][:60]}'> ({menu['itemCount']} items)")
        for item in menu['items'][:15]:
            print(f"    <{item['tag']}> '{item['text'][:60]}' -> {item['href'][:60]}")

    # 5. Full HTML snapshot for debugging
    print("\n=== Capturing full page HTML structure ===")
    html_outline = await page.evaluate('''() => {
        function outline(el, depth) {
            if (depth > 4) return '';
            const tag = el.tagName?.toLowerCase();
            if (!tag || ['script','style','svg','path','g'].includes(tag)) return '';
            const id = el.id ? ` id="${el.id}"` : '';
            const cls = el.className && typeof el.className === 'string'
                ? ` class="${el.className.substring(0,60)}"` : '';
            const text = el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
                ? ` "${el.textContent.trim().substring(0,40)}"` : '';
            let result = '  '.repeat(depth) + `<${tag}${id}${cls}>${text}\\n`;
            for (const child of el.children) {
                result += outline(child, depth + 1);
            }
            return result;
        }
        return outline(document.body, 0).substring(0, 10000);
    }''')
    report['html_outline'] = html_outline

    # Save report
    with open(DOM_REPORT_FILE, 'w') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    print(f"\nDOM report saved to {DOM_REPORT_FILE}")

    # Also save the outline for easy reading
    outline_file = DOM_REPORT_FILE.replace('.json', '_outline.txt')
    with open(outline_file, 'w') as f:
        f.write(html_outline)
    print(f"HTML outline saved to {outline_file}")

    return report


# ═══════════════════════════════════════════
# PHASE 2: CAPTURE SCREENSHOTS
# ═══════════════════════════════════════════

async def find_and_click_tab(page, keywords):
    """Try multiple strategies to find and click a tab matching keywords."""
    for keyword in keywords:
        # Strategy 1: Text-based search (case insensitive)
        try:
            el = page.get_by_text(keyword, exact=False).first
            if await el.count() > 0:
                # Make sure it's a clickable element (a, button, li, etc)
                tag = await el.evaluate('el => el.tagName')
                if tag in ['A', 'BUTTON', 'LI', 'SPAN', 'DIV']:
                    await el.click()
                    await page.wait_for_load_state('networkidle', timeout=10000)
                    print(f"clicked '{keyword}' ({tag})", end=' ')
                    return True
        except Exception:
            pass

        # Strategy 2: Various CSS selectors
        for selector in [
            f'a:has-text("{keyword}")',
            f'[role="tab"]:has-text("{keyword}")',
            f'li:has-text("{keyword}") a',
            f'nav a:has-text("{keyword}")',
            f'.nav-item:has-text("{keyword}")',
            f'aside a:has-text("{keyword}")',
            f'.sidebar a:has-text("{keyword}")',
            f'[class*="menu"] a:has-text("{keyword}")',
        ]:
            try:
                el = page.locator(selector).first
                if await el.count() > 0:
                    await el.click()
                    await page.wait_for_load_state('networkidle', timeout=10000)
                    print(f"clicked [{selector}]", end=' ')
                    return True
            except Exception:
                pass

    return False


async def capture_screenshot(page, shot, service_clicked=False):
    """Capture a single screenshot."""
    name = shot['name']
    sid = shot['id']
    path = os.path.join(SCREENSHOT_DIR, f'{sid}.png')
    wait = shot.get('wait', 2)

    print(f"  [{sid}] {name}...", end=' ', flush=True)

    try:
        # Navigate if URL provided
        if shot.get('url'):
            full_url = BPA_URL + shot['url']
            await page.goto(full_url, wait_until='networkidle', timeout=30000)
            await asyncio.sleep(wait)

        # Handle actions
        action = shot.get('action')

        if action == 'click_first_service':
            # Try multiple approaches
            for attempt in [
                lambda: page.get_by_text('Permisos eventuales', exact=False).first.click(),
                lambda: page.locator('a[href*="service"]').first.click(),
                lambda: page.locator('table tbody tr:first-child a').first.click(),
                lambda: page.locator('tbody tr:first-child td a').first.click(),
                lambda: page.locator('td a').first.click(),
            ]:
                try:
                    await attempt()
                    await page.wait_for_load_state('networkidle', timeout=10000)
                    await asyncio.sleep(wait)
                    print("(service clicked)", end=' ')
                    break
                except Exception:
                    continue

        elif action == 'find_and_click_tab':
            keywords = shot.get('tab_keywords', [])
            if not await find_and_click_tab(page, keywords):
                print(f"SKIP (tab not found for {keywords})")
                return False, False
            await asyncio.sleep(wait)

        # Take screenshot
        await page.screenshot(path=path, full_page=False)
        size_kb = os.path.getsize(path) // 1024
        print(f"OK ({size_kb} KB)")

        # Also take full-page version
        full_path = path.replace('.png', '-full.png')
        await page.screenshot(path=full_path, full_page=True)

        url_after = page.url
        return True, 'service' in url_after.lower()

    except Exception as e:
        print(f"FAILED: {e}")
        try:
            await page.screenshot(path=path)
            print(f"    (saved current state)")
        except Exception:
            pass
        return False, False


async def capture_all(page):
    """Capture all screenshots in sequence."""
    print(f"\n=== Capturing {len(SCREENSHOTS)} screenshots ===\n")
    ok = 0
    fail = 0
    service_active = False

    for shot in SCREENSHOTS:
        # If this shot needs to be inside a service and we're not, navigate first
        if shot.get('action') in ['find_and_click_tab'] and not service_active:
            print("  [navigating to service first]")
            await page.goto(f'{BPA_URL}/services', wait_until='networkidle', timeout=30000)
            await asyncio.sleep(1)
            # Click first service
            for attempt in [
                lambda: page.get_by_text('Permisos eventuales', exact=False).first.click(),
                lambda: page.locator('td a').first.click(),
            ]:
                try:
                    await attempt()
                    await page.wait_for_load_state('networkidle', timeout=10000)
                    await asyncio.sleep(2)
                    service_active = True
                    break
                except Exception:
                    continue

        success, in_service = await capture_screenshot(page, shot, service_active)
        if success:
            ok += 1
            if in_service:
                service_active = True
        else:
            fail += 1

    print(f"\n=== Done: {ok} captured, {fail} failed ===")
    print(f"Screenshots in: {SCREENSHOT_DIR}/")
    return ok, fail


# ═══════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════

async def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else 'both'
    os.makedirs(SCREENSHOT_DIR, exist_ok=True)

    p, browser, context, page = await setup_browser(headless=False)

    try:
        await ensure_logged_in(page, context)

        if mode in ('inspect', 'both'):
            report = await inspect_dom(page)
            print("\n" + "=" * 60)

        if mode in ('capture', 'both'):
            await capture_all(page)

    finally:
        await browser.close()
        await p.stop()


if __name__ == '__main__':
    asyncio.run(main())
