# eRegistrations Citizen Manuals

Citizen-facing user manuals for eRegistrations digital government systems, published via GitHub Pages.

**Repo:** https://github.com/UNCTAD-eRegistrations/eregistrations-manual
**Live site:** https://unctad-eregistrations.github.io/eregistrations-manual/
**Branch:** `gh-pages` — pushing here deploys automatically (~30 seconds).

## Structure

Country folders contain the manuals (e.g. `lesotho/`):
- `index.html` — catalog page listing all manuals
- `register-business.html`, `register-company.html`, etc. — individual service manuals

Each manual is a self-contained HTML file (inline CSS, remote images). Filenames use kebab-case matching the service name.

**Not manuals** (do not edit): `part1-bpa/`, `part2-ds/`, `part3-gdb/`, `part4-statistics/`, `part5-new-features/`, `assets/`, `search/`, `stylesheets/`, `javascripts/`.

## Git Rules

- **All changes go directly on `gh-pages`.** Never leave work on a feature branch.
- If a worktree or branch was created, merge it into `gh-pages`, push, and delete the branch.
- **Never open pull requests.** Never leave stale branches.

## Editing Manuals

Use the **edit-manual** skill. Describe what you want in plain English:

- "What manuals do we have?"
- "Open the register-business manual"
- "Change the processing time from 5 to 3 days in annual filing"
- "Add a warning box after step 3"
- "Undo my last change"

## Setup (one-time)

```bash
git clone -b gh-pages https://github.com/UNCTAD-eRegistrations/eregistrations-manual.git ~/Documents/eregistrations-manual
```

Open `~/Documents/eregistrations-manual` in Claude Code desktop. The skill loads automatically.
