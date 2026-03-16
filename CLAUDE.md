# eRegistrations Citizen Manuals

This repository contains citizen-facing user manuals for eRegistrations digital government systems, published via GitHub Pages.

**Repo:** https://github.com/UNCTAD-eRegistrations/eregistrations-manual
**Live site:** https://unctad-eregistrations.github.io/eregistrations-manual/
**Branch:** You are on `gh-pages` — this branch is the live site. Pushing here deploys automatically (~30 seconds).

## Structure

Country folders contain the manuals:

- `lesotho/` — Lesotho OBFC (One Business Facilitation Centre)
  - `index.html` — catalog page listing all manuals
  - `register-business.html`, `register-company.html`, etc. — individual service manuals

Each manual is a self-contained HTML file (inline CSS, remote images from the eRegistrations instance). Filenames use kebab-case matching the service name (e.g., `register-business.html` for "Register a Business").

**Not manuals** (do not edit): `part1-bpa/`, `part2-ds/`, `part3-gdb/`, `part4-statistics/`, `part5-new-features/`, `assets/`, `search/`, `stylesheets/`, `javascripts/` — these are MkDocs-generated documentation.

## Editing Manuals

Use the **edit-manual** skill. Just describe what you want to change in plain English:

- "What manuals do we have?"
- "Open the register-business manual"
- "Change the processing time from 5 to 3 days in annual filing"
- "Add a warning box after step 3 in verify identity"
- "Undo my last change"

The skill handles everything: finding the right file, making the edit, previewing, and deploying.
