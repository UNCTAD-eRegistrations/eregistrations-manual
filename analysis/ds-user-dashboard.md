# A. The user dashboard (p.137-142) -- Update Analysis

**Changes detected:** 5
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## DS definition
**UNCHANGED**

> The user site or the Display System is the user dashboard.

---

## 1. For new users - Header and menu bar
**VERIFY**

> The header and menu bar consists of: The home button (national logo), home button, login button, register button. Choice of language. The home page displays all available online services.

**Needs verification:** The header layout with logo, home, login, register buttons, and language selector is a standard DS pattern. However, the DS has undergone UI theme changes since July 2025. The exact visual appearance, button styling, and layout of the header may have changed. The core elements (logo, login, register, language) are likely still present but their visual presentation needs verification.
**Screenshot:** Verify -- DS header bar for new (non-logged-in) users.

---

## Registration / Create account flow
**UNCHANGED**

> When the user clicks register, the create account page will be displayed. User provides information and clicks RegisterForAccount. Verification email will be sent.

**Screenshot:** Verify -- create account page visual appearance.

---

## Home page services list
**UNCHANGED**

> The home page displays all available online services.

**Screenshot:** Verify -- home page services list, check if card layout or list format has changed.

---

## 2. For logged in users - Menu bar
**VERIFY**

> Menu bar consists of: home button and My Account page, name of user, choice of language.

**Needs verification:** The logged-in user menu bar elements are core DS functionality. However, UI theme changes may have altered the layout or added new elements.
**Screenshot:** Verify -- logged-in user menu bar layout and buttons.

---

## My Applications tab
**UNCHANGED**

> The Home button/My Account page displays: My Applications tab (list of applications saved/submitted). Under My Applications: service name, business name, date started, date submitted, status, certificates (can be printed from dashboard).

**Screenshot:** Verify -- My Applications table, check for additional columns or layout changes.

---

## My Documents tab
**UNCHANGED**

> My Documents tab displays documents submitted by the user.

**Screenshot:** Verify -- My Documents tab visual appearance.

---

## My Messages tab
**UNCHANGED**

> My Messages tab displays messages from administrations/processing roles.

**Screenshot:** Verify -- My Messages tab visual appearance.

---

## Filter function
**UNCHANGED**

> Filter: search for specific application by service or business name.

**Screenshot:** Verify -- filter function, check for additional filter options.

---

## Application history
**UNCHANGED**

> Application history: click on a service to see stages.

**Screenshot:** Verify -- application history visual presentation.

---

## Application status colors
**VERIFY**

> Application status shown by different colors. Status filters available at bottom.

**Needs verification:** The status color system is a core DS feature. However, the specific colors used and the status filter UI at the bottom of the page may have been updated as part of UI theme changes. The exact color mapping and filter button layout need verification.
**Screenshot:** Verify -- status colors and status filter buttons.

---

## Shopping cart integration on dashboard
**VERIFY**

> The shopping cart feature, as an alternative to the Guide, may be visible or accessible from the user dashboard when starting a new application.

**Needs verification:** The shopping cart is mentioned in the original manual as an alternative to the Guide. Its visibility on the main dashboard or services list -- as opposed to only within an active application -- needs verification. The manual's settings section mentions a 'Shopping cart' toggle under service settings, suggesting it is a per-service option.
**Screenshot:** Unknown -- verify if shopping cart is visible on the dashboard or only within an active application file.

---

## Overall DS UI theme changes
**VERIFY**

> The DS (Display System) may have undergone visual theme updates since July 2025. The BPA service settings include a 'UI theme' option that controls the DS appearance.

**Needs verification:** Since the platform has had approximately 9,600 commits since the manual was written, the DS visual theme may have been refreshed. All DS screenshots likely need to be recaptured to reflect the current visual appearance.
**Screenshot:** Needs update -- all DS screenshots in this section should be compared against the current platform.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| DS definition | UNCHANGED | Same |
| Header and menu bar (new users) | VERIFY | Verify |
| Registration / Create account | UNCHANGED | Verify |
| Home page services list | UNCHANGED | Verify |
| Menu bar (logged in) | VERIFY | Verify |
| My Applications tab | UNCHANGED | Verify |
| My Documents tab | UNCHANGED | Verify |
| My Messages tab | UNCHANGED | Verify |
| Filter function | UNCHANGED | Verify |
| Application history | UNCHANGED | Verify |
| Status colors | VERIFY | Verify |
| Shopping cart on dashboard | VERIFY | Unknown |
| DS UI theme changes | VERIFY | Needs update |
