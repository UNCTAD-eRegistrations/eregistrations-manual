---
name: edit-manual
description: Edit eRegistrations citizen manuals. Use when the user wants to view, edit, update, fix, or change any manual content, list available manuals, open a manual in the browser, or undo a recent change. Also triggers on "what manuals exist", "show me the manual", "fix the typo", "add a warning", "reorder steps", "rollback", or "undo".
---

# Edit Manual

Help non-technical project managers edit eRegistrations citizen manuals through natural language. Handle the full cycle: discover, view, edit, preview, and deploy.

## Capabilities

| Action | Trigger examples | What to do |
|--------|-----------------|------------|
| **Discover** | "what manuals exist?", "list manuals" | List country folders and their manuals |
| **View** | "open register-business", "show me annual filing" | Open the HTML file in the browser |
| **Edit** | "change X to Y in...", "add a warning after step 3" | Full edit workflow (below) |
| **Rollback** | "undo my last change", "revert" | Revert the last commit |

## File Discovery

**Finding country folders:**
- Country folders are top-level directories containing standalone `.html` manual files
- Exclude these non-manual directories: `assets/`, `docs/`, `search/`, `javascripts/`, `stylesheets/`, `screenshots/`, `part1-bpa/`, `part2-ds/`, `part3-gdb/`, `part4-statistics/`, `part5-new-features/`
- Exclude these files: `TEMPLATE.html`, `404.html`, the root `index.html`
- Ignore subdirectory `index.html` files (e.g., `my-dashboard/index.html` is an MkDocs artifact — prefer the standalone `my-dashboard.html`)

**Resolving the target file:**
1. Scan for country folders using the rules above
2. One country? Use it automatically. Multiple? Check if the user mentioned one; if not, ask.
3. Fuzzy-match the user's description against filenames (e.g., "annual filing" matches `annual-filing.html`, "business registration" matches `register-business.html`)
4. If ambiguous, list the options and ask the user to pick

**Listing manuals (discover):**
- List all `.html` files in the country folder (excluding `index.html` and `TEMPLATE.html`)
- Convert filenames to human-readable names: `register-business.html` becomes "Register a Business"
- Also mention the catalog page: `<country>/index.html`

## Edit Workflow

Follow these steps for every edit:

### 1. Prepare
```
git checkout gh-pages   # if not already on gh-pages
git pull origin gh-pages
```
If the user has uncommitted changes on another branch, warn them and ask to stash or commit before switching.

### 2. Resolve the target file
Use the File Discovery logic above. If ambiguous, ask the user to clarify.

### 3. Read the file
Read the target HTML file. Focus on the content sections (elements with classes like `manual-content`, `section`, `steps`, `container`). Skip the `<style>` block — it's large (~500 lines) and should never be modified.

### 4. Make the edit
Apply the user's requested change following the Editing Rules below.

### 5. Show the diff
Run `git diff` and present the changes to the user. Explain what changed in plain language.

### 6. Local preview
Open the file in the user's browser so they can see the rendered result:
- macOS: `open <path>`
- Linux: `xdg-open <path>`
- Windows: `start <path>`

Images load from remote URLs (`<country>.eregistrations.dev`) so the page looks identical to the live version.

### 7. Confirm
Ask: **"Does this look right? I'll commit and push to make it live."**
- If no → ask what to fix, revise, and repeat from step 5
- If yes → proceed

### 8. Deploy
```bash
git add <changed-files>
git commit -m "docs: <description of change>"
git push origin gh-pages
```

If push fails due to remote changes:
1. `git pull --rebase origin gh-pages`
2. Re-show the diff to the user
3. Re-confirm before pushing

If a merge conflict occurs, show the user the conflicting file and ask how to proceed.

### 9. Confirm deployment
Tell the user:
- The live URL: `https://unctad-eregistrations.github.io/eregistrations-manual/<country>/<file>`
- Changes will be live in ~30 seconds

### Auto-sync catalog
If a manual's `<title>` or `<h1>` changes, also update the country's catalog page (`<country>/index.html`) to match the new title. Show this in the diff.

## Editing Rules

### Safe to change
- Text content: paragraphs, headings, list items, labels
- Steps: add, remove, reorder steps within an `<ol class="steps">` section
- Callout boxes: add/edit using existing classes — `info-box`, `note-box`, `warning-box`
- Links and URLs
- Contact info, department names, phone numbers in header/footer
- Fixing typos, updating numbers, rewording instructions

### Protected — do NOT modify
- Everything inside `<style>` tags — all CSS stays intact
- HTML class names, IDs, and data attributes on existing elements
- Branding layout structure (header logos, footer partner sections)
- Image `src` URLs (absolute URLs to the eRegistrations instance)
- Google Fonts `<link>` imports
- `<meta>` tags

### Structural edits
When adding new elements (callout boxes, steps, sections):
- Read the file first to learn its actual HTML patterns
- Reuse the exact CSS classes found in the file. Key classes:
  - Sections: `section`
  - Steps: `steps` container with `step` items (`step-number` + `step-content`)
  - Callouts: `info-box`, `note-box`, `warning-box`
  - Tables: `field-table`, `cost-table`
  - Timeline: `timeline` with `timeline-item`
- Never invent new CSS classes or inline styles

## View

To open a manual for viewing (no edit):
1. Resolve the file using File Discovery
2. Open it in the browser (platform-aware command)
3. Done — no git operations needed

## Rollback

When the user wants to undo a recent change:

1. Find the user's recent commits:
   ```bash
   git log --oneline --author="$(git config user.email)" -5
   ```
2. Show the last commit and what it changed:
   ```bash
   git log -1 --oneline
   git diff HEAD~1 HEAD
   ```
3. Ask the user to confirm the revert
4. If confirmed:
   ```bash
   git revert HEAD --no-edit
   git push origin gh-pages
   ```
5. Tell the user the change has been undone and will be live in ~30 seconds
