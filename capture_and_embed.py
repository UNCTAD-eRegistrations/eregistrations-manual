#!/usr/bin/env python3
"""
Capture fresh BPA screenshots and embed them in the manual.

For each manual section:
1. Navigate to the corresponding BPA page
2. Take a screenshot
3. Update the markdown file with the screenshot and a link to the BPA page

Usage:
    python3 capture_and_embed.py          # Capture + embed all
    python3 capture_and_embed.py capture  # Only capture screenshots
    python3 capture_and_embed.py embed    # Only embed (use existing screenshots)
"""

import asyncio
import os
import re
import sys
from datetime import datetime
from playwright.async_api import async_playwright

BPA_URL = 'https://bpa.cuba.eregistrations.org'
DOCS_DIR = '/Users/nelsonperez/Desktop/Manual/docs'
SCREENSHOT_DIR = os.path.join(DOCS_DIR, 'screenshots')
AUTH_STATE_FILE = '/Users/nelsonperez/Desktop/Manual/.auth_state.json'

# A representative service for screenshots
SERVICE_ID = '2c918084887c7a8f01887c99ed2a6fd5'
SERVICE_NAME = 'Permisos eventuales'

# ═══ Section → BPA URL mapping ═══
# Each entry: screenshot_id, manual_md_path, bpa_path, description
SECTION_MAP = [
    # ──── Part 1 - BPA ────
    {
        'id': 'live-introduction',
        'md': 'part1-bpa/01-introduction.md',
        'path': '/services',
        'desc': 'BPA Overview - The Business Process Administration interface',
        'section_title': 'Introduction',
    },
    {
        'id': 'live-entry-page',
        'md': 'part1-bpa/02-entry-page.md',
        'path': '/services',
        'desc': 'BPA Entry Page - Instance bar, side menu, and workspace',
        'section_title': 'A. Entry Page',
    },
    {
        'id': 'live-services-list',
        'md': 'part1-bpa/03-services.md',
        'path': '/services',
        'desc': 'Services List - All configured services grouped by category',
        'section_title': 'B. Services',
    },
    {
        'id': 'live-registrations',
        'md': 'part1-bpa/04-registrations.md',
        'path': f'/services/{SERVICE_ID}/registrations',
        'desc': f'Registrations - Registration configuration for {SERVICE_NAME}',
        'section_title': 'C. Registrations',
    },
    {
        'id': 'live-guide',
        'md': 'part1-bpa/05-guide.md',
        'path': f'/services/{SERVICE_ID}/forms/guide-form',
        'desc': 'The Guide - Guide form configuration',
        'section_title': 'D.1. The Guide',
    },
    {
        'id': 'live-determinants',
        'md': 'part1-bpa/06-determinants.md',
        'path': f'/services/{SERVICE_ID}/forms/applicant-form',
        'desc': 'Determinants - Manage determinants drawer with condition rules',
        'section_title': 'D.2. Determinants',
        'note': 'Click the "D" icon on any form component to open the determinants panel',
        'post_action': 'open_determinants',
    },
    {
        'id': 'live-applicant-form',
        'md': 'part1-bpa/07-applicant-form.md',
        'path': f'/services/{SERVICE_ID}/forms/applicant-form',
        'desc': 'Applicant Form - Drag-and-drop form builder',
        'section_title': 'D.3. Applicant Form',
    },
    {
        'id': 'live-documents',
        'md': 'part1-bpa/08-documents.md',
        'path': f'/services/{SERVICE_ID}/forms/document-form',
        'desc': 'Documents - Document requirements configuration',
        'section_title': 'D.4. Documents',
    },
    {
        'id': 'live-payment',
        'md': 'part1-bpa/09-payment.md',
        'path': f'/services/{SERVICE_ID}/forms/payment',
        'desc': 'Payment - Payment/costs configuration',
        'section_title': 'D.5. Payment',
    },
    {
        'id': 'live-send-file',
        'md': 'part1-bpa/10-send-file.md',
        'path': f'/services/{SERVICE_ID}/forms/sendfile',
        'desc': 'Send File - File submission configuration',
        'section_title': 'D.6. Send File',
    },
    {
        'id': 'live-useful-functions',
        'md': 'part1-bpa/11-useful-functions.md',
        'path': f'/services/{SERVICE_ID}/forms/applicant-form',
        'desc': 'Useful Functions - Advanced form builder features (validations, conditions)',
        'section_title': 'D.7. Useful Functions',
        'note': 'Useful functions are accessible within the form builder component settings',
    },
    {
        'id': 'live-custom-classes',
        'md': 'part1-bpa/12-custom-classes.md',
        'path': f'/services/{SERVICE_ID}/forms/applicant-form',
        'desc': 'Custom Classes - CSS styling options in the form builder',
        'section_title': 'D.8. Custom Classes',
        'note': 'Custom classes are applied via component settings in the form builder',
    },
    {
        'id': 'live-bot-builder',
        'md': 'part1-bpa/13-bot-builder.md',
        'path': f'/services/{SERVICE_ID}/actions/bots',
        'desc': 'BOT Builder - Data bots and external service integrations',
        'section_title': 'E. BOT Builder',
    },
    {
        'id': 'live-roles',
        'md': 'part1-bpa/14-roles.md',
        'path': f'/services/{SERVICE_ID}/roles',
        'desc': 'Roles - Processing roles and workflow configuration',
        'section_title': 'F. Roles',
    },
    {
        'id': 'live-certificates',
        'md': 'part1-bpa/15-certificates.md',
        'path': f'/services/{SERVICE_ID}/templates/certificates',
        'desc': 'Certificates - Print document templates and certificate builder',
        'section_title': 'G. Certificates',
    },
    {
        'id': 'live-tables',
        'md': 'part1-bpa/16-tables.md',
        'path': '/services',
        'desc': 'Tables - Classification tables are managed at the service level',
        'section_title': 'H. Tables',
        'note': 'Tables/Classifications are accessible from within service configuration',
    },
    {
        'id': 'live-settings',
        'md': 'part1-bpa/17-settings.md',
        'path': '/settings',
        'desc': 'Settings - Instance and service settings',
        'section_title': 'I. Settings',
    },

    # ──── Part 2 - Display System (DS) ────
    {
        'id': 'live-user-dashboard',
        'md': 'part2-ds/01-user-dashboard.md',
        'path': '/services',
        'desc': 'User Dashboard - The applicant-facing interface (accessible via "Ver servicio")',
        'section_title': 'A. User Dashboard',
        'note': 'The Display System is the public-facing side. Click "Ver servicio" in the BPA to preview it.',
    },
    {
        'id': 'live-application-file',
        'md': 'part2-ds/02-application-file.md',
        'path': f'/services/{SERVICE_ID}/forms/applicant-form',
        'desc': 'Application File - How the applicant form appears to end users',
        'section_title': 'B. Application File',
        'note': 'The applicant sees this form after starting a new application in the Display System.',
    },
    {
        'id': 'live-operators-processing',
        'md': 'part2-ds/03-operators-processing.md',
        'path': f'/services/{SERVICE_ID}/roles',
        'desc': 'Operators Processing - Workflow and role processing screens',
        'section_title': 'C. Operators Processing',
        'note': 'Operators process applications through the roles/workflow defined in the BPA.',
    },

    # ──── Part 3 - Generic Database (GDB) ────
    {
        'id': 'live-gdb-public',
        'md': 'part3-gdb/01-public-part.md',
        'path': '/services',
        'desc': 'Generic Database (GDB) - Public-facing data portal',
        'section_title': 'A. Public Part',
        'note': 'The GDB is a separate system at gdb.cuba.eregistrations.org (requires separate login).',
        'link_override': 'https://gdb.cuba.eregistrations.org',
    },
    {
        'id': 'live-gdb-create',
        'md': 'part3-gdb/02-create-groups-records.md',
        'path': '/services',
        'desc': 'GDB - Creating databases, groups and records',
        'section_title': 'B.1-3. Create DB, Groups & Records',
        'note': 'Database creation is managed in the GDB system at gdb.cuba.eregistrations.org.',
        'link_override': 'https://gdb.cuba.eregistrations.org',
    },
    {
        'id': 'live-gdb-management',
        'md': 'part3-gdb/03-management.md',
        'path': '/services',
        'desc': 'GDB - Database management and administration',
        'section_title': 'B.4. Database Management',
        'note': 'Database management is handled in the GDB system.',
        'link_override': 'https://gdb.cuba.eregistrations.org',
    },
    {
        'id': 'live-gdb-special',
        'md': 'part3-gdb/04-special-features.md',
        'path': '/services',
        'desc': 'GDB - Special features (search, filters, export)',
        'section_title': 'B.5. Special Features',
        'note': 'Special features are part of the GDB system.',
        'link_override': 'https://gdb.cuba.eregistrations.org',
    },
    {
        'id': 'live-gdb-rights',
        'md': 'part3-gdb/05-user-rights.md',
        'path': '/services',
        'desc': 'GDB - User rights and permissions',
        'section_title': 'B.6. User Rights',
        'note': 'User rights for GDB are managed within that system.',
        'link_override': 'https://gdb.cuba.eregistrations.org',
    },

    # ──── Part 4 - Statistics ────
    {
        'id': 'live-statistics',
        'md': 'part4-statistics/01-statistics.md',
        'path': '/services',
        'desc': 'Statistics - Platform analytics and reporting',
        'section_title': 'Statistics',
        'note': 'Statistics are generated from service data and processing history.',
    },

    # ──── Part 5 - New Features ────
    {
        'id': 'live-effects-system',
        'md': 'part5-new-features/01-effects-system.md',
        'path': f'/services/{SERVICE_ID}/forms/applicant-form',
        'desc': 'Effects System - Extended component behaviors beyond show/hide',
        'section_title': 'Effects System',
        'note': 'The Effects system is accessible via component settings in the form builder.',
    },
    {
        'id': 'live-smartlink',
        'md': 'part5-new-features/02-smartlink.md',
        'path': f'/services/{SERVICE_ID}/registrations',
        'desc': 'SmartLink - Dynamic registration linking and data sharing',
        'section_title': 'SmartLink',
        'note': 'SmartLink connects registrations for data reuse across services.',
    },
    {
        'id': 'live-micro-publish',
        'md': 'part5-new-features/03-micro-publish.md',
        'path': f'/services/{SERVICE_ID}/settings/configuration',
        'desc': 'Micro-publish - Granular publishing of individual changes',
        'section_title': 'Micro-publish',
        'note': 'Micro-publish is enabled in service settings and accessible from the publish button.',
    },
    {
        'id': 'live-e-signature',
        'md': 'part5-new-features/04-e-signature.md',
        'path': f'/services/{SERVICE_ID}/settings/configuration',
        'desc': 'E-signature - Digital signature integration for forms',
        'section_title': 'E-signature',
        'note': 'E-signature is configured in service settings.',
    },
    {
        'id': 'live-card-radios',
        'md': 'part5-new-features/05-card-style-radios.md',
        'path': f'/services/{SERVICE_ID}/forms/applicant-form',
        'desc': 'Card-style Radios - Enhanced radio button display as selection cards',
        'section_title': 'Card-style Radios',
        'note': 'Card-style radios are a display option for radio components in the form builder.',
    },
    {
        'id': 'live-part-b',
        'md': 'part5-new-features/06-part-b.md',
        'path': f'/services/{SERVICE_ID}/roles',
        'desc': 'Part B (Processing) - Operator processing screen configuration',
        'section_title': 'Part B (Processing)',
        'note': 'Part B configuration is done within the roles/processing section.',
    },
    {
        'id': 'live-collapsible-fields',
        'md': 'part5-new-features/07-collapsible-fields.md',
        'path': f'/services/{SERVICE_ID}/forms/applicant-form',
        'desc': 'Collapsible Fields - Expandable/collapsible form sections',
        'section_title': 'Collapsible Fields',
        'note': 'Collapsible fields are configured as a display option in the form builder.',
    },
]

# ═══ Post-navigation actions ═══

async def run_post_action(page, action):
    """Run a post-navigation action to set up the page for screenshot."""
    if action == 'open_determinants':
        await open_determinants_drawer(page)
    else:
        print(f"  WARN: Unknown post_action '{action}'")


async def open_determinants_drawer(page):
    """Click a 'D' configuration button on a form component to open the determinants drawer."""
    try:
        # Find all visible "D" buttons (component-configuration-button)
        d_buttons = page.locator('span.component-configuration-button')
        count = await d_buttons.count()
        if count == 0:
            # Try broader selector
            d_buttons = page.locator('span.btn-xxs:has-text("D")')
            count = await d_buttons.count()

        if count > 0:
            # Click the first visible "D" button
            for i in range(count):
                btn = d_buttons.nth(i)
                if await btn.is_visible():
                    await btn.click()
                    print(f"(clicked D button)", end=' ', flush=True)
                    # Wait for drawer to open
                    await asyncio.sleep(3)
                    # Verify drawer opened (lost 'hidden' class)
                    drawer = page.locator('.drawer-layer-right:not(.hidden)')
                    if await drawer.count() > 0:
                        print(f"(drawer open)", end=' ', flush=True)
                    break
        else:
            print(f"(no D buttons found)", end=' ', flush=True)
    except Exception as e:
        print(f"(determinants action failed: {str(e)[:60]})", end=' ', flush=True)


# ═══ Capture phase ═══

async def capture_all():
    """Capture screenshots from all BPA pages."""
    os.makedirs(SCREENSHOT_DIR, exist_ok=True)

    p = await async_playwright().start()
    browser = await p.chromium.launch(
        headless=True,
        args=['--window-size=1440,900'],
    )
    context = await browser.new_context(
        viewport={'width': 1440, 'height': 900},
        storage_state=AUTH_STATE_FILE if os.path.exists(AUTH_STATE_FILE) else None,
    )
    page = await context.new_page()

    # Verify we're logged in
    try:
        await page.goto(f'{BPA_URL}/services', wait_until='domcontentloaded', timeout=45000)
    except Exception:
        # Retry with longer timeout
        await page.goto(f'{BPA_URL}/services', timeout=60000)
    await asyncio.sleep(4)
    if 'login' in page.url.lower() or 'cas' in page.url.lower():
        print("ERROR: Not logged in. Run 'python3 update_screenshots.py inspect' first to login.")
        await browser.close()
        await p.stop()
        return False

    print(f"Logged in. Capturing {len(SECTION_MAP)} screenshots...\n")

    # Track unique URLs to avoid re-navigating to same page
    last_url = None
    results = []
    for section in SECTION_MAP:
        sid = section['id']
        path = section['path']
        full_url = f'{BPA_URL}{path}'
        img_path = os.path.join(SCREENSHOT_DIR, f'{sid}.png')

        print(f"  [{sid}] {section['desc'][:60]}...", end=' ', flush=True)

        try:
            if full_url != last_url:
                await page.goto(full_url, wait_until='domcontentloaded', timeout=45000)
                last_url = full_url

            # Wait 10 seconds for Angular to fully render all components
            await asyncio.sleep(10)

            # Run post-navigation actions if defined
            post_action = section.get('post_action')
            if post_action:
                await run_post_action(page, post_action)
                await asyncio.sleep(5)

            # Take viewport screenshot
            await page.screenshot(path=img_path, full_page=False)
            size_kb = os.path.getsize(img_path) // 1024
            print(f"OK ({size_kb} KB)")
            results.append({'id': sid, 'success': True, 'url': page.url, 'size_kb': size_kb})

            # If a post_action was used, force re-navigation next time
            # to reset page state (close modals/drawers)
            if post_action:
                last_url = None
        except Exception as e:
            print(f"FAILED: {str(e)[:80]}")
            results.append({'id': sid, 'success': False, 'error': str(e)})

    ok = sum(1 for r in results if r['success'])
    fail = len(results) - ok
    print(f"\nCapture complete: {ok} OK, {fail} failed")

    await browser.close()
    await p.stop()
    return True


# ═══ Embed phase ═══

def embed_in_markdown():
    """Add live screenshot and BPA link to each manual section."""
    timestamp = datetime.now().strftime('%Y-%m-%d')

    for section in SECTION_MAP:
        md_path = os.path.join(DOCS_DIR, section['md'])
        sid = section['id']
        img_file = f'{sid}.png'
        img_full_path = os.path.join(SCREENSHOT_DIR, img_file)
        bpa_url = f'{BPA_URL}{section["path"]}'

        if not os.path.exists(md_path):
            print(f"  SKIP {section['md']} (file not found)")
            continue

        if not os.path.exists(img_full_path):
            print(f"  SKIP {sid} (screenshot not found)")
            continue

        with open(md_path, 'r') as f:
            content = f.read()

        # Check if we already embedded this screenshot
        marker = f'<!-- Live BPA Screenshot: {sid} -->'
        if marker in content:
            # Update the existing block
            # Find and replace the block between markers
            start_marker = marker
            end_marker = f'<!-- /Live BPA Screenshot: {sid} -->'
            if end_marker in content:
                # Replace existing block
                pattern = re.escape(start_marker) + r'.*?' + re.escape(end_marker)
                new_block = build_screenshot_block(section, sid, img_file, bpa_url, timestamp)
                content = re.sub(pattern, new_block, content, flags=re.DOTALL)
                print(f"  UPDATE {section['md']} - refreshed {sid}")
            else:
                print(f"  WARN {section['md']} - has start marker but no end marker")
                continue
        else:
            # Insert new block after the first heading
            new_block = '\n' + build_screenshot_block(section, sid, img_file, bpa_url, timestamp) + '\n'

            # Find insertion point: after first # heading and any existing info admonitions
            lines = content.split('\n')
            insert_idx = None
            in_admonition = False

            for i, line in enumerate(lines):
                if line.startswith('# ') and insert_idx is None:
                    # Found the title, now find the end of any following admonitions/metadata
                    insert_idx = i + 1
                    continue

                if insert_idx is not None and i >= insert_idx:
                    # Skip blank lines and admonitions right after the heading
                    stripped = line.strip()
                    if stripped == '':
                        insert_idx = i + 1
                        continue
                    if stripped.startswith('!!! ') or stripped.startswith('??? '):
                        in_admonition = True
                        insert_idx = i + 1
                        continue
                    if in_admonition and (line.startswith('    ') or stripped == ''):
                        insert_idx = i + 1
                        continue
                    if stripped.startswith('<!-- PDF'):
                        # Skip the PDF screenshots block
                        in_admonition = True
                        insert_idx = i + 1
                        continue
                    # Found content that's not part of front matter
                    break

            if insert_idx is not None:
                lines.insert(insert_idx, new_block)
                content = '\n'.join(lines)
                print(f"  ADD {section['md']} - inserted {sid}")
            else:
                # Append at end
                content += new_block
                print(f"  APPEND {section['md']} - added {sid} at end")

        with open(md_path, 'w') as f:
            f.write(content)


def build_screenshot_block(section, sid, img_file, bpa_url, timestamp):
    """Build the markdown block for a live screenshot."""
    desc = section['desc']
    note = section.get('note', '')
    note_line = f'\n*{note}*\n' if note else ''
    link_url = section.get('link_override', bpa_url)

    block = f"""<!-- Live BPA Screenshot: {sid} -->
<div class="live-screenshot" markdown>

![{desc}](../screenshots/{img_file}){{ loading=lazy }}
*Current BPA view ({timestamp}) — [{section['section_title']}]({link_url}){{ target=_blank }}*{note_line}

</div>
<!-- /Live BPA Screenshot: {sid} -->"""
    return block


# ═══ Main ═══

async def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else 'both'

    if mode in ('capture', 'both'):
        print("=== PHASE 1: Capturing screenshots ===\n")
        success = await capture_all()
        if not success and mode == 'both':
            print("\nCapture failed. Skipping embed phase.")
            return

    if mode in ('embed', 'both'):
        print("\n=== PHASE 2: Embedding in manual ===\n")
        embed_in_markdown()

    print("\nDone!")


if __name__ == '__main__':
    asyncio.run(main())
