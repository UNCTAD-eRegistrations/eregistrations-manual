#!/usr/bin/env python3
"""Map extracted PDF images to manual sections and embed them in MkDocs markdown files."""

import os
import re
import shutil
import json

PDF_IMAGES_DIR = '/Users/nelsonperez/Desktop/Manual/pdf_images'
DOCS_DIR = '/Users/nelsonperez/Desktop/Manual/docs'
SCREENSHOTS_DIR = os.path.join(DOCS_DIR, 'screenshots')

MIN_SIZE_KB = 3  # Skip images smaller than this (icons, bullets, arrows)

# Section ID -> (page_start, page_end, markdown_file)
SECTION_PAGES = {
    'introduction':           (5, 5,    'part1-bpa/01-introduction.md'),
    'bpa-entry-page':         (6, 9,    'part1-bpa/02-entry-page.md'),
    'bpa-services':           (10, 13,  'part1-bpa/03-services.md'),
    'bpa-registrations':      (14, 25,  'part1-bpa/04-registrations.md'),
    'bpa-guide':              (27, 28,  'part1-bpa/05-guide.md'),
    'bpa-determinants':       (28, 31,  'part1-bpa/06-determinants.md'),
    'bpa-applicant-form':     (32, 42,  'part1-bpa/07-applicant-form.md'),
    'bpa-documents':          (43, 43,  'part1-bpa/08-documents.md'),
    'bpa-payment':            (44, 45,  'part1-bpa/09-payment.md'),
    'bpa-send-file':          (46, 46,  'part1-bpa/10-send-file.md'),
    'bpa-useful-functions':   (47, 63,  'part1-bpa/11-useful-functions.md'),
    'bpa-custom-classes':     (64, 77,  'part1-bpa/12-custom-classes.md'),
    'bpa-bot-builder':        (77, 96,  'part1-bpa/13-bot-builder.md'),
    'bpa-roles':              (97, 116, 'part1-bpa/14-roles.md'),
    'bpa-certificates':       (117, 124,'part1-bpa/15-certificates.md'),
    'bpa-tables':             (125, 132,'part1-bpa/16-tables.md'),
    'bpa-settings':           (133, 137,'part1-bpa/17-settings.md'),
    'ds-user-dashboard':      (137, 142,'part2-ds/01-user-dashboard.md'),
    'ds-application-file':    (143, 144,'part2-ds/02-application-file.md'),
    'ds-operators-processing':(145, 151,'part2-ds/03-operators-processing.md'),
    'gdb-public-part':        (153, 154,'part3-gdb/01-public-part.md'),
    'gdb-create-groups-records':(155,165,'part3-gdb/02-create-groups-records.md'),
    'gdb-management':         (164, 174,'part3-gdb/03-management.md'),
    'gdb-special-features':   (175, 182,'part3-gdb/04-special-features.md'),
    'gdb-user-rights':        (183, 188,'part3-gdb/05-user-rights.md'),
    'statistics':             (189, 193,'part4-statistics/01-statistics.md'),
}


def get_image_page(filename):
    """Extract page number from filename like img-006-000.png"""
    m = re.match(r'img-(\d+)-(\d+)\.png', filename)
    if m:
        return int(m.group(1)), int(m.group(2))
    return None, None


def find_section_for_page(page):
    """Find which section a page belongs to."""
    matches = []
    for sid, (start, end, _) in SECTION_PAGES.items():
        if start <= page <= end:
            matches.append(sid)
    return matches


def main():
    # Collect all PDF images with their page numbers and sizes
    images = []
    for f in sorted(os.listdir(PDF_IMAGES_DIR)):
        if not f.endswith('.png'):
            continue
        path = os.path.join(PDF_IMAGES_DIR, f)
        size_kb = os.path.getsize(path) / 1024
        page, idx = get_image_page(f)
        if page is None:
            continue
        if size_kb < MIN_SIZE_KB:
            continue  # Skip tiny icons
        images.append({
            'filename': f,
            'path': path,
            'page': page,
            'index': idx,
            'size_kb': size_kb,
        })

    print(f"Found {len(images)} images >= {MIN_SIZE_KB}KB\n")

    # Group images by section
    section_images = {}
    for img in images:
        sections = find_section_for_page(img['page'])
        for sid in sections:
            if sid not in section_images:
                section_images[sid] = []
            section_images[sid].append(img)

    # Copy images and build insertion map
    total_copied = 0
    for sid, imgs in sorted(section_images.items()):
        _, _, md_file = SECTION_PAGES[sid]
        print(f"\n{sid} ({len(imgs)} images):")

        # Copy images to screenshots dir with section prefix
        copied_names = []
        for i, img in enumerate(imgs):
            new_name = f"pdf-{sid}-{i+1:02d}.png"
            dest = os.path.join(SCREENSHOTS_DIR, new_name)
            shutil.copy2(img['path'], dest)
            copied_names.append(new_name)
            print(f"  p.{img['page']} {img['filename']} ({img['size_kb']:.0f}KB) -> {new_name}")
            total_copied += 1

        # Insert image gallery into the markdown file
        md_path = os.path.join(DOCS_DIR, md_file)
        if os.path.exists(md_path):
            with open(md_path, 'r') as f:
                content = f.read()

            # Check if we already added images
            if '<!-- PDF Screenshots -->' in content:
                print(f"  (already has images, skipping)")
                continue

            # Build image gallery block
            gallery = '\n<!-- PDF Screenshots -->\n'
            gallery += '??? example "Original Manual Screenshots"\n'
            for name in copied_names:
                gallery += f'    ![{name}](../screenshots/{name}){{ loading=lazy }}\n\n'

            # Insert after the first heading (after # Title line)
            lines = content.split('\n')
            insert_idx = None
            for i, line in enumerate(lines):
                if line.startswith('# ') and i > 0:
                    # Find the end of the info admonition if present
                    for j in range(i+1, min(i+20, len(lines))):
                        if lines[j].strip() == '' and (j+1 >= len(lines) or not lines[j+1].startswith('    ')):
                            insert_idx = j + 1
                            break
                    if insert_idx is None:
                        insert_idx = i + 2
                    break

            if insert_idx:
                lines.insert(insert_idx, gallery)
                with open(md_path, 'w') as f:
                    f.write('\n'.join(lines))
                print(f"  -> Inserted gallery into {md_file}")

    print(f"\n=== Total: {total_copied} images copied to {SCREENSHOTS_DIR} ===")


if __name__ == '__main__':
    main()
