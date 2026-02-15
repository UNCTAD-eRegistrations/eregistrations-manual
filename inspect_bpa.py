#!/usr/bin/env python3
"""Focused BPA DOM inspection to find service list and tab structure."""

import asyncio
import os
from playwright.async_api import async_playwright

BPA_URL = 'https://bpa.cuba.eregistrations.org'
AUTH_STATE_FILE = '/Users/nelsonperez/Desktop/Manual/.auth_state.json'


async def main():
    p = await async_playwright().start()
    browser = await p.chromium.launch(headless=False, args=['--window-size=1440,900'])

    context = await browser.new_context(
        viewport={'width': 1440, 'height': 900},
        storage_state=AUTH_STATE_FILE if os.path.exists(AUTH_STATE_FILE) else None,
    )
    page = await context.new_page()

    # Go to services
    print("Navigating to /services...")
    await page.goto(f'{BPA_URL}/services', wait_until='networkidle', timeout=30000)
    await asyncio.sleep(3)

    # Save auth
    await context.storage_state(path=AUTH_STATE_FILE)

    # ═══ 1. Find the service list items ═══
    print("\n=== SERVICE LIST STRUCTURE ===")
    service_items = await page.evaluate('''() => {
        // Look inside Angular components
        const panel = document.querySelector('service-select-panel') || document.querySelector('.container-fluid');
        if (!panel) return { error: 'No service panel found' };

        // Get ALL elements with text content
        const all = panel.querySelectorAll('*');
        const items = [];
        for (const el of all) {
            // Only direct text (not inherited from children)
            const directText = Array.from(el.childNodes)
                .filter(n => n.nodeType === 3)
                .map(n => n.textContent.trim())
                .join(' ').trim();

            const tag = el.tagName;
            const cls = (typeof el.className === 'string') ? el.className : '';
            const href = el.getAttribute('href') || '';
            const click = el.getAttribute('(click)') || el.getAttribute('ng-click') || '';
            const routerLink = el.getAttribute('routerlink') || el.getAttribute('routerLink') || '';

            if ((directText && directText.length > 1) || href || click || routerLink) {
                items.push({
                    tag,
                    text: directText.substring(0, 80),
                    fullText: el.textContent.trim().substring(0, 120),
                    classes: cls.substring(0, 100),
                    href,
                    click: click.substring(0, 80),
                    routerLink,
                    depth: getDepth(el, panel),
                });
            }
        }

        function getDepth(el, root) {
            let d = 0;
            let cur = el;
            while (cur && cur !== root) { d++; cur = cur.parentElement; }
            return d;
        }

        return items;
    }''')

    if isinstance(service_items, dict) and 'error' in service_items:
        print(f"  Error: {service_items['error']}")
    else:
        # Filter out CKEditor noise
        filtered = [i for i in service_items if 'ck-' not in i.get('classes', '') and 'ck ' not in i.get('classes', '')]
        print(f"  Found {len(filtered)} elements (filtered from {len(service_items)})")
        for item in filtered[:60]:
            indent = '  ' * min(item.get('depth', 0), 6)
            extra = ''
            if item['href']: extra += f' href="{item["href"]}"'
            if item['routerLink']: extra += f' routerLink="{item["routerLink"]}"'
            if item['click']: extra += f' (click)="{item["click"]}"'
            text = item['text'] or item['fullText'][:60]
            print(f"  {indent}<{item['tag']} class=\"{item['classes'][:40]}\">{text}{extra}")

    # ═══ 2. Find service names specifically ═══
    print("\n=== LOOKING FOR SERVICE NAMES ===")
    known_services = ['Permisos eventuales', 'Acreditaciones', 'Permiso fitosanitario', 'Registro']
    for svc in known_services:
        elements = await page.evaluate(f'''() => {{
            const els = [];
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {{
                if (walker.currentNode.textContent.includes("{svc}")) {{
                    const parent = walker.currentNode.parentElement;
                    els.push({{
                        tag: parent.tagName,
                        classes: (typeof parent.className === 'string') ? parent.className.substring(0, 100) : '',
                        parentTag: parent.parentElement?.tagName || '',
                        parentClasses: (typeof parent.parentElement?.className === 'string') ? parent.parentElement.className.substring(0, 100) : '',
                        grandParentTag: parent.parentElement?.parentElement?.tagName || '',
                        grandParentClasses: (typeof parent.parentElement?.parentElement?.className === 'string') ? parent.parentElement.parentElement.className.substring(0, 100) : '',
                        text: parent.textContent.trim().substring(0, 100),
                        href: parent.getAttribute('href') || parent.parentElement?.getAttribute('href') || '',
                    }});
                }}
            }}
            return els;
        }}''')
        if elements:
            for el in elements[:3]:
                print(f"  '{svc}' found in:")
                print(f"    <{el['tag']} class=\"{el['classes'][:50]}\"> text: \"{el['text'][:60]}\"")
                print(f"    parent: <{el['parentTag']} class=\"{el['parentClasses'][:50]}\">")
                print(f"    grandparent: <{el['grandParentTag']} class=\"{el['grandParentClasses'][:50]}\">")
                if el['href']:
                    print(f"    href: {el['href']}")
        else:
            print(f"  '{svc}' NOT FOUND in page")

    # ═══ 3. Try clicking on a service ═══
    print("\n=== CLICKING ON FIRST SERVICE ===")
    # Try locator with known service name
    clicked = False
    for svc_name in ['Permisos eventuales', 'Acreditaciones']:
        try:
            loc = page.get_by_text(svc_name, exact=False)
            count = await loc.count()
            if count > 0:
                # Find the clickable version
                for i in range(min(count, 3)):
                    el = loc.nth(i)
                    tag = await el.evaluate('el => el.tagName')
                    parent_tag = await el.evaluate('el => el.parentElement?.tagName || ""')
                    cls = await el.evaluate('el => typeof el.className === "string" ? el.className : ""')
                    print(f"  Found '{svc_name}' match #{i}: <{tag} class='{cls[:40]}'> parent: <{parent_tag}>")

                # Click the first one
                await loc.first.click()
                await asyncio.sleep(3)
                new_url = page.url
                print(f"  After click: {new_url}")
                if new_url != f'{BPA_URL}/services':
                    clicked = True
                    break
                else:
                    print("  URL didn't change, trying double-click...")
                    await loc.first.dblclick()
                    await asyncio.sleep(2)
                    print(f"  After dblclick: {page.url}")
                    if page.url != f'{BPA_URL}/services':
                        clicked = True
                        break
        except Exception as e:
            print(f"  Error with '{svc_name}': {e}")

    if not clicked:
        # Try looking for router links
        print("\n  Trying routerLink elements...")
        router_links = await page.evaluate('''() => {
            const els = document.querySelectorAll('[routerlink], [routerLink], [ng-reflect-router-link]');
            return Array.from(els).map(el => ({
                tag: el.tagName,
                text: el.textContent.trim().substring(0, 80),
                routerLink: el.getAttribute('routerlink') || el.getAttribute('routerLink') || el.getAttribute('ng-reflect-router-link') || '',
                classes: (typeof el.className === 'string') ? el.className.substring(0, 80) : '',
            }));
        }''')
        for rl in router_links[:20]:
            print(f"    <{rl['tag']}> '{rl['text'][:50]}' routerLink='{rl['routerLink']}'")

    # ═══ 4. Check current URL and inspect service detail if we got there ═══
    print(f"\n=== CURRENT STATE ===")
    print(f"  URL: {page.url}")

    # Inspect what tabs/navigation exist on the current page
    print("\n=== ALL NAVIGATION-LIKE ELEMENTS ===")
    nav_items = await page.evaluate('''() => {
        const results = [];
        // Get everything that could be a tab or nav item
        const candidates = document.querySelectorAll(
            'a, button, [role="tab"], .tab, .nav-link, .nav-item, ' +
            'mat-tab, .mat-tab-label, li.active, li a, ' +
            '[class*="tab"], [class*="nav-item"], [class*="step"]'
        );
        for (const el of candidates) {
            const text = el.textContent?.trim();
            const cls = (typeof el.className === 'string') ? el.className : '';
            // Skip CKEditor stuff
            if (cls.includes('ck-') || cls.includes('ck ')) continue;
            // Skip very long text
            if (text && text.length > 2 && text.length < 100) {
                results.push({
                    tag: el.tagName,
                    text: text.substring(0, 60),
                    classes: cls.substring(0, 80),
                    href: el.getAttribute('href') || '',
                    visible: el.offsetParent !== null,
                });
            }
        }
        return results;
    }''')

    seen = set()
    for item in nav_items:
        key = f"{item['tag']}:{item['text']}"
        if key not in seen:
            seen.add(key)
            vis = '✓' if item['visible'] else '✗'
            print(f"  {vis} <{item['tag']} class=\"{item['classes'][:40]}\"> '{item['text'][:50]}' href='{item['href'][:40]}'")

    # ═══ 5. Take a screenshot for reference ═══
    await page.screenshot(path='/Users/nelsonperez/Desktop/Manual/bpa_inspect.png', full_page=False)
    print("\nScreenshot saved to bpa_inspect.png")

    await browser.close()
    await p.stop()


if __name__ == '__main__':
    asyncio.run(main())
