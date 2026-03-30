---
name: edit-manual
description: Edit eRegistrations citizen manuals. Use when the user wants to view, edit, update, fix, or change any manual content, list available manuals, open a manual in the browser, or undo a recent change. Also triggers on "what manuals exist", "show me the manual", "fix the typo", "add a warning", "reorder steps", "rollback", or "undo".
---

# Edit Manual

Help non-technical project managers edit eRegistrations citizen manuals through natural language.

## Git Strategy

**CRITICAL — all changes must land on `gh-pages` directly. The PM never sees branches or PRs.**

If working in a worktree or branch (e.g. Claude Code desktop creates one automatically):
1. Make the edit and get PM confirmation on the working branch
2. Then: `git checkout gh-pages && git merge <branch> --no-edit && git push origin gh-pages`
3. Clean up: `git branch -d <branch> && git push origin --delete <branch> 2>/dev/null`

If working directly on gh-pages (e.g. GitHub Actions, CLI):
1. Edit, confirm, commit, push. Done.

**Never open a pull request. Never leave stale branches.**

Before any edit:
```bash
git checkout gh-pages 2>/dev/null  # if not already there
git pull origin gh-pages
```

## Capabilities

| Action | Examples | What to do |
|--------|----------|------------|
| **Discover** | "what manuals exist?" | List country folders and their manuals |
| **View** | "open register-business" | Open HTML file in browser |
| **Edit** | "change X to Y", "add a warning after step 3" | Edit workflow below |
| **Rollback** | "undo my last change" | Revert last commit |

## File Discovery

**Country folders** contain standalone `.html` manual files. Ignore: `assets/`, `docs/`, `search/`, `javascripts/`, `stylesheets/`, `screenshots/`, `part1-bpa/`, `part2-ds/`, `part3-gdb/`, `part4-statistics/`, `part5-new-features/`. Ignore: `TEMPLATE.html`, `404.html`, root `index.html`, subdirectory `index.html` files.

**Resolving the target:**
1. One country? Use it. Multiple? Match from context or ask.
2. Fuzzy-match description to filenames ("annual filing" → `annual-filing.html`)
3. **Multi-part manuals** — some services are split across files like `renew-close-license-part-a.html` and `renew-close-license-part-b.html`. If the user references a service without specifying a part, list the parts and ask which one(s) to edit. If they say "both", apply the change to each file separately.
4. If ambiguous, list options and ask.

## Edit Workflow

1. **Pull latest** — `git pull origin gh-pages`
2. **Resolve file** — use File Discovery above
3. **Read** — focus on content sections, skip the `<style>` block (~500 lines)
4. **Edit** — apply the change following Editing Rules below
5. **Diff** — show `git diff`, explain in plain language
6. **Preview** — open in browser (`open` / `xdg-open` / `start`)
7. **Confirm** — "Does this look right? I'll push to make it live."
   - No → revise, repeat from 5
   - Yes → continue
8. **Deploy** — commit and push to `gh-pages` (see Git Strategy above)
9. **Done** — tell PM the live URL, changes live in ~30 seconds

If a manual's `<title>` or `<h1>` changes, also update the catalog (`<country>/index.html`).

## Editing Rules

**Safe to change:** text, headings, steps, callout boxes (`info-box`, `note-box`, `warning-box`), links, contact info, typos, numbers.

**Do NOT touch (normally):** HTML class names/IDs/data attributes, branding layout, image `src` URLs, Google Fonts imports, `<meta>` tags.

**CSS exceptions:** CSS values inside `<style>` blocks may be edited when the user explicitly asks to align the visual style of a file with another (e.g., font size, spacing, colors, layout). Read the reference file first, identify the exact differences, and apply only the differing values.

**Structural edits:** read the file first to learn its actual CSS classes. Reuse them exactly — never invent new classes or inline styles.

**Fallback for complex edits:** If the `Edit` tool fails to find a string in large HTML files (indentation or whitespace mismatch), use a Python one-liner via Bash:
```bash
python3 -c "
with open('path/to/file.html', 'r') as f: content = f.read()
old = '''...exact string...'''
if old in content:
    with open('path/to/file.html', 'w') as f: f.write(content.replace(old, '''...new string...''', 1))
    print('REPLACED')
else: print('NOT FOUND')
"
```

## Rollback

1. Show recent commits: `git log --oneline -5`
2. Show what changed: `git diff HEAD~1 HEAD`
3. Ask PM to confirm
4. `git revert HEAD --no-edit && git push origin gh-pages`
5. Tell PM: undone, live in ~30 seconds
