# eRegistrations User Manual Update — Master Plan for Claude Code

## Context

You are helping update the official **eRegistrations platform user manual**. This manual documents how the platform works — not any specific country deployment. It is approximately 209 pages, contains ~619 screenshots, and is organized into 4 parts covering the Administrative Site (BPA), Display System (DS), Generic Database (GDB), and Statistics. The manual is approximately 2 years outdated. The platform has had ~9,600 commits since, introducing new features (SmartLink, micro-publish, Effects system, e-signature, card-style radios, Part B, collapsible fields) and changing existing UI patterns.

**Important:** This is a platform manual. It applies to ALL eRegistrations deployments (Jamaica, Cuba, El Salvador, Colombia, etc.). There is ONE manual, ONE source of truth. Country instances are only used as visual reference to verify current UI — they are not the subject of the manual.

---

## What You Have

1. **The PDF manual** — attached to this conversation. This is your baseline. Everything in it was accurate ~2 years ago.
2. **Your knowledge** — You (Claude) have knowledge about eRegistrations from training data, including its architecture, BPA configuration patterns, and common platform features.
3. **MCP BPA tools** (if available) — You may have access to MCP tools that can query a live eRegistrations BPA instance to verify current behavior. If available, use `bpa.dev.els.eregistrations.org` as the reference instance (this is the development instance with the latest platform version).

---

## Overall Goal

Produce an updated version of the manual with clear change markers showing what's unchanged, what's modified, what's new, and what's obsolete — so a human reviewer can efficiently validate each section without reading 209 pages from scratch.

---

## How We Work: Iteration by Iteration

### ITERATION 1 — Extract & Chunk (do this first)

**Goal:** Extract all text from the PDF and organize it into sections matching the manual's own structure.

**Steps:**

1. Read the PDF manual.
2. Identify the manual's structure. It follows this hierarchy:
   - **Part I: The Administrative Site (BPA)** — sections A through I
   - **Part II: The Display System (DS)** — sections A through C
   - **Part III: The Generic Database (GDB)** — sections A through B.6
   - **Part IV: Statistics**
3. For each section, extract the text content. Create a structured representation:

```json
{
  "manual_version": "original",
  "extracted_at": "ISO timestamp",
  "sections": [
    {
      "id": "bpa-services",
      "title": "B. Services",
      "part": "I. BPA",
      "page_range": "10-13",
      "content": "Full extracted text of this section...",
      "subsections": ["1. Create a service", "2. The Service bar", "3. The Work space"],
      "screenshot_count": 5,
      "screenshot_descriptions": ["services list page", "add service slider", ...]
    }
  ]
}
```

4. Save this as `manual_sections.json` in the working directory.
5. Report: how many sections, total word count, which sections are longest (those will need the most review effort).

**Acceptance criteria:** I should be able to see a clean list of all sections with their page ranges and word counts.

---

### ITERATION 2 — Pilot: Analyze ONE Section

**Goal:** Prove the analysis workflow works on a single section before scaling. Use **"B. Services"** (pages 10–13) because it's short and has known changes.

**Steps:**

1. Take the extracted text for "B. Services" from Iteration 1.
2. Analyze it against what you know about the current eRegistrations platform:
   - What text is still accurate? → mark as `unchanged`
   - What has been modified? → mark as `modified`, provide both old and new text
   - What new features exist that aren't in the manual? → mark as `added`
   - What described features or UI elements no longer exist? → mark as `removed`
   - What are you unsure about? → mark as `verify` with an explanation
3. If MCP tools are available, use them to verify specific claims:
   - Does the services page have an Import button?
   - Are service groups a feature?
   - Does micro-publish exist?
   - What does the service bar look like now?
4. Generate the output in this EXACT format:

```json
{
  "section_id": "bpa-services",
  "title": "B. Services",
  "analyzed_at": "ISO timestamp",
  "change_summary": "5 changes detected: Import button added, service groups feature is new, micro-publish added to publish flow, workspace navigation reorganized, guide moved to sub-section.",
  "change_count": 5,
  "blocks": [
    {
      "type": "unchanged",
      "title": "Definition",
      "content": "A service is a succession of screens allowing the applicant to obtain one or more registrations.",
      "original_content": "A service is a succession of screens allowing the applicant to obtain one or more registrations.",
      "explanation": null,
      "screenshot_status": "same",
      "screenshot_description": null
    },
    {
      "type": "modified",
      "title": "1. Create a service",
      "content": "A new service can be created by clicking on the 'Add' button, or by clicking 'Import' to import an existing service configuration from another instance.",
      "original_content": "A new service can be created by clicking on the 'Add' button.",
      "explanation": "Import functionality was added, allowing services to be replicated between instances.",
      "screenshot_status": "needs_update",
      "screenshot_description": "Services list showing Add and Import buttons"
    },
    {
      "type": "added",
      "title": "Service Groups",
      "content": "Services can now be organized into groups for better management...",
      "original_content": null,
      "explanation": "Entirely new feature not present in the current manual.",
      "screenshot_status": "needs_new",
      "screenshot_description": "Service groups collapsed/expanded view"
    },
    {
      "type": "verify",
      "title": "Import/Export location",
      "content": "Import/Export may appear in the services list toolbar or in the service bar.",
      "original_content": null,
      "explanation": "I'm not certain where this button appears in the current UI. Human reviewer should verify on the live system.",
      "screenshot_status": "unknown",
      "screenshot_description": null
    }
  ]
}
```

5. ALSO generate a human-readable Markdown version of the same analysis:

```markdown
# B. Services — Update Analysis

**Changes detected:** 5
**Status:** Ready for review

## Definition
**UNCHANGED** ✓
> A service is a succession of screens allowing the applicant to obtain one or more registrations.

---

## 1. Create a service
**MODIFIED** ⚠️

**Original:**
> A new service can be created by clicking on the 'Add' button.

**Updated:**
> A new service can be created by clicking on the 'Add' button, or by clicking 'Import' to import an existing service configuration from another instance.

**What changed:** Import functionality was added.
**Screenshot:** Needs update — capture services list with Add and Import buttons.

---

## Service Groups
**NEW** 🆕

> Services can now be organized into groups for better management...

**Screenshot:** Needs new — capture service groups view.

---

## Import/Export location
**VERIFY** ❓

> I'm not certain where this button appears. Please check the live system.
```

6. Save both files:
   - `analysis/bpa-services.json`
   - `analysis/bpa-services.md`

7. Present the Markdown version for my review.

**Acceptance criteria:**
- I can read the Markdown and immediately understand what changed
- Each block clearly shows: type (unchanged/modified/added/removed/verify), the original text, the new text, and why it changed
- The JSON is valid and could be consumed by a review tool
- Conservative approach: when in doubt, use "verify" rather than guessing

**After my review:** I will tell you what's right and what needs correction. This validates your accuracy before we scale.

---

### ITERATION 3 — Scale to All Sections

**Goal:** Apply the same analysis to all remaining sections.

**Steps:**

1. Process each section from `manual_sections.json` using the same approach as Iteration 2.
2. Work in order of complexity:
   - **Wave 1 (short, easy):** Introduction, Services, Documents/Payment/Send, Settings
   - **Wave 2 (medium):** Entry Page, Registrations, Guide/Determinants, Copy Value, Field Tags, Tables/Catalogs, Statistics
   - **Wave 3 (heavy):** Applicant Form, Formulas, Custom Classes, Mapping, Roles, Certificates, BOT Builder
   - **Wave 4 (DS + GDB):** All DS sections, all GDB sections
   - **Wave 5 (new):** Effects System, SmartLink, Micro-publish (these don't exist in the current manual — generate from scratch based on platform knowledge)
3. For each section, generate both `analysis/{section-id}.json` and `analysis/{section-id}.md`.
4. After each wave, generate a summary:
   - How many changes per section
   - Which sections have the most changes
   - Which sections have the most "verify" items (need human attention)
5. Generate a master index file `analysis/_index.md`:

```markdown
# Manual Update Analysis — Master Index

Generated: 2026-02-15
Total sections: 30
Total changes detected: ~87
Sections needing most review: Applicant Form (12), BOT Builder (8), Roles (7)

| # | Section | Changes | Verify | Status |
|---|---------|---------|--------|--------|
| 1 | Introduction | 1 | 0 | ✅ analyzed |
| 2 | A. Entry Page | 3 | 1 | ✅ analyzed |
| 3 | B. Services | 5 | 1 | ✅ analyzed |
| ... | ... | ... | ... | ... |
```

**Acceptance criteria:** All sections analyzed, master index complete, ready for human review.

**Important rules for this iteration:**
- Do NOT rush. Process each section carefully.
- Better to mark something as "verify" than to invent a change.
- If a section is very long, process it in sub-sections (e.g., Applicant Form has sub-sections for fields, blocks, tabs, etc.).
- Keep the JSON structure identical across all sections so they can be loaded into a tool.

---

### ITERATION 4 — Review Layer (HTML)

**Goal:** Build an HTML review interface that loads all the JSON analysis files and presents them in a navigable, side-by-side format.

**The tool should be a single HTML file** that:

1. **Loads data** from a `sections.json` file (you'll combine all individual analysis JSONs into one master file).

2. **Sidebar** shows all 30 sections organized by Part (I–IV + New), each with:
   - Status dot (gray=pending, blue=in-review, green=approved, orange=flagged)
   - Change count badge
   - Last updated timestamp

3. **Main area** shows the selected section with:
   - Each block rendered as a card with a change tag (UNCHANGED gray, MODIFIED yellow, ADDED green, REMOVED red, VERIFY purple)
   - Original text vs. updated text visible
   - Screenshot status indicators (same / needs update / needs new)
   - Explanation of what changed

4. **Three view modes:**
   - **Changes view** — shows all blocks with change highlights inline
   - **Side by side** — for MODIFIED blocks, shows old text on left, new text on right
   - **Clean** — shows only the final updated text without markers

5. **Review controls:**
   - Approve button (marks section as approved, creates version snapshot)
   - Flag button (marks section as needs-changes)
   - Notes textarea (reviewer can add corrections or observations)
   - Next/Previous navigation buttons

6. **Progress tracking:**
   - Stats bar: Pending / In Review / Approved counts
   - Progress bar (% approved)

7. **Export:**
   - Export section as Markdown (.md) with Obsidian-compatible callout syntax
   - Export section as clean HTML (no change markers — final manual text)
   - Include version and timestamp in export metadata

8. **Version history:**
   - Each approve/flag creates a snapshot
   - History panel shows all versions with timestamps
   - Restore button to revert to a previous version
   - All state persisted in localStorage

9. **Translation** (via Claude API from browser):
   - Language chips in topbar (EN, ES, FR, PT, AR)
   - Click a language → calls Claude API directly from the browser → returns translated blocks
   - View the section in any translated language
   - Export translated versions

10. **Keyboard shortcuts:**
    - ← → navigate sections
    - A approve, F flag
    - G generate (re-call Claude API for current section)
    - E export, H history, T translate

**Design direction:**
- Clean, utilitarian, professional — like a code review tool
- Use DM Sans font from Google Fonts
- Blue (#0057b8) for primary actions, gray tones for chrome
- Change markers: yellow for modified, green for added, red for removed, purple for verify
- Responsive layout: fixed sidebar + scrollable main content

**Data loading approach:**
The HTML file should include the section data inline in a `<script>` tag as a JavaScript object. When we have the real analysis data from Iteration 3, I will paste it into this file. Alternatively, the file can load `sections.json` from the same directory via fetch (with a fallback to inline data for portability).

**Acceptance criteria:**
- Single HTML file, works by opening in a browser (no server needed)
- All 30 sections navigable
- Side-by-side comparison works for modified blocks
- Approve/flag/notes workflow is functional
- State persists across browser sessions
- Export produces valid Markdown
- Translation calls Claude API and renders results

---

### ITERATION 5 — Assembly & Final Export

**Goal:** After all sections are approved, assemble the final manual.

**Steps:**

1. Combine all approved sections into a single document
2. Generate table of contents
3. Add cross-references between sections
4. Mark where screenshots need to be captured or updated
5. Export in multiple formats:
   - `eRegistrations-Manual-v5-EN.md` — full manual in Markdown
   - `eRegistrations-Manual-v5-EN.html` — full manual as navigable HTML with sidebar
   - Screenshot manifest: list of all screenshots needed with descriptions

---

## Technical Notes

### MCP BPA Tools

If you have access to MCP tools for the eRegistrations BPA, use them to verify:
- Current menu structure and navigation
- Available buttons and UI elements on each page
- Field types and configuration options
- BOT builder interface and mapping options
- Role and certificate configuration

The reference instance is `bpa.dev.els.eregistrations.org`. Use it for visual verification only — the manual documents the PLATFORM, not this specific instance.

### What You Know vs. What You Need to Verify

**Trust your knowledge for:**
- General platform architecture (BPA/DS/GDB structure)
- Common features that have been part of eRegistrations for years
- Terminology and concepts (service, registration, determinant, BOT, etc.)

**Always mark as "verify" when:**
- You're describing a specific UI element's exact location or appearance
- You're stating a feature exists but aren't certain of the details
- You're describing a workflow that might have changed in subtle ways
- You know a feature exists from training data but can't confirm current behavior

### Output Quality Standards

- **Be conservative.** Under-claiming changes is better than inventing them.
- **Be specific.** "The button moved" is useless. "The Import button was added next to the Add button in the services list toolbar" is useful.
- **Preserve the manual's tone.** The current manual is clear, instructional, step-by-step. Match that tone in new or modified content.
- **Keep structure.** Don't reorganize sections or change heading numbering unless something was genuinely restructured in the platform.

---

## Let's Start

Begin with **Iteration 1: Extract & Chunk**. Read the attached PDF manual, identify all sections, extract their text content, and produce the `manual_sections.json` structure. Then report what you found.

After I confirm the extraction looks good, move to **Iteration 2: Pilot** with the "B. Services" section.
