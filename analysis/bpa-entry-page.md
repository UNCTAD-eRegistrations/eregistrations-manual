# A. Description of the entry page -- Update Analysis

**Changes detected:** 4
**Status:** Ready for review
**Analyzed:** 2026-02-15
**Pages:** 6-9

---

## BPA entry page structure - 3 sections
**UNCHANGED**

> The BPA entry page has 3 main sections:
> - 'Header' also called 'instance bar' (the blue bar at the top)
> - Side menu (on the left)
> - Work space (in grey)

**Screenshot:** Verify -- confirm the three-section layout is visually the same.

---

## Instance bar - UNCTAD logo and FE/BE/DS buttons
**UNCHANGED**

> It consists sequentially of:
> - UNCTAD and eRegistrations logo
> - 3 buttons FE (front end), BE (back end) and DS (display system). When they are red, it means the corresponding component is getting updated. We can work on the system only when all buttons are green. When you put the cursor over the components name you will see the version number currently running. Versioning is made according to semantic versioning rules.

**Screenshot:** Verify -- confirm FE/BE/DS buttons and tooltip behavior are unchanged.

---

## Instance bar - Logged users and auto-update toggle
**UNCHANGED**

> 'Logged users' show the number of administrators logged into BPA at that moment.
> When the toggle is switched on, new feature/bug fixes are allowed to come automatically to the applications in the system.

**Screenshot:** Verify -- confirm visual appearance.

---

## Instance bar - User level toggle
**UNCHANGED**

> User level 1 and 2 is a toggle button that minimizes and expands display of elements on the side menu bar.

**Screenshot:** Verify -- confirm it still functions as a 1/2 toggle.

---

## Instance bar - User ID, language, settings
**UNCHANGED**

> - User ID of the administrator logged in
> - Choice of language
> - Instance settings icon: 1. Settings that will apply to all services, 2. Translations icon, 3. Log-out icon

**Screenshot:** Verify -- confirm layout and options.

---

## Instance bar - potential additional elements
**VERIFY**

> The instance bar may contain additional elements not present in the July 2025 manual, such as notification indicators, environment labels (dev/staging/production), or audit/history shortcuts.

**Needs verification:** The platform has had ~9,600 commits since the manual was written. The audit system and notification tools exist in the API, suggesting possible UI additions to the header. Visual inspection of a live instance is required.
**Screenshot:** Needs new -- capture full instance bar and compare with original.

---

## Side menu - User level 2 items
**MODIFIED**

**Original:**
> User level 2: Displays more elements, including Tables and Certificate builder.

**Updated:**
> User level 2: Displays more elements, including Tables, Certificate builder, Print Documents, Notifications, and Messages. Print Documents allows creating and managing document templates. Notifications enables configuration of system notifications. Messages allows managing message templates.

**What changed:** The API reveals dedicated management tools for Print Documents, Notifications, and Messages, indicating these are now first-class concepts likely visible in the User Level 2 side menu. The original manual only mentioned Tables and Certificate builder.
**Screenshot:** Needs update -- capture side menu at User Level 2 showing all available items.

---

## Side menu - User level 1
**UNCHANGED**

> User level 1: Displays only a limited number of elements on the left side menu.

**Screenshot:** Verify -- confirm which items are shown at Level 1.

---

## Work space
**UNCHANGED**

> This is the gray area which displays the contents of the elements on the side bar, and where services are built.

**Screenshot:** Verify -- confirm general appearance.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| BPA entry page structure | UNCHANGED | Verify |
| Instance bar - logo and FE/BE/DS | UNCHANGED | Verify |
| Instance bar - Logged users / auto-update | UNCHANGED | Verify |
| Instance bar - User level toggle | UNCHANGED | Verify |
| Instance bar - User ID, language, settings | UNCHANGED | Verify |
| Instance bar - additional elements | VERIFY | Needs new |
| Side menu - User level 2 | MODIFIED | Needs update |
| Side menu - User level 1 | UNCHANGED | Verify |
| Work space | UNCHANGED | Verify |
