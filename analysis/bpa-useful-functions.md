# D.7. Focus on some useful functions -- Update Analysis

**Changes detected:** 5
**Status:** Ready for review
**Analyzed:** 2026-02-15
**Pages:** 47-63

---

## a. Copy value of a field to another (prefilling a field)
**UNCHANGED**

> To copy value from another field: Edit text field/number field, Data, under 'copy value from', choose the element from the drop down, Save. Order is Name of page, Block and Field. Blue 'C' indicator shows when CVF is configured. CVF works only between fields of the same type.

**Screenshot:** Verify -- confirm copy value from dropdown and C indicator appearance.

---

## b. Copy edit grid values to another edit grid
**UNCHANGED**

> Two edit grids needed (source and destination). In destination, specify source grid. Determinants can be used in the copy value from tab.

**Screenshot:** Verify -- confirm edit grid CVF configuration.

---

## c. Field tags
**UNCHANGED**

> Field tags are bookmarks applied to fields for concatenation and cross-referencing. Listing-value tag enables company name display under 'My Applications' on user dashboard.

**Screenshot:** Verify -- confirm field tags dropdown appearance.

---

## c. Field tags - potential new tags
**VERIFY**

> Additional field tags may have been added (e.g., agencyCode, accountHeadId for payment, plus potential tags for e-signature, classification lookups, or inter-service data sharing).

**Needs verification:** Examine the field tags dropdown on a live instance to identify any new tags added since July 2025.
**Screenshot:** Verify -- capture complete field tags dropdown.

---

## d. Formula functions list
**VERIFY**

**Original list:**
> maxValue, round, Ceil, Floor, Roundup hundred/thousands/hundred thousands, Subtract days/months/years, Add days/months/years, Override year, Override date, Days difference, Weeks difference, Months difference, Years difference, Business days, Working hours, Working time, Penalty months, formatDateDD-MM-YYYY, Grid row counter, Extract Value From Grid.

**Current assessment:**
> The formula builder is a frequently enhanced component. New formula functions may have been added (e.g., string manipulation, conditional logic, new date/time functions). The complete current list needs verification.

**Needs verification:** Open formula builder on a live instance and compare the function dropdown against the documented list.
**Screenshot:** Verify -- capture complete formula function dropdown.

---

## d. Formula examples
**UNCHANGED**

> Example 1: Adding years to a date using addYears function.
> Example 2: Subtracting two dates using daysDifference function.

**Screenshot:** Verify -- confirm formula builder visual appearance.

---

## e. Input mask
**UNCHANGED**

> Under Validation tab, Basic validation. Syntax: '9' for digits, 'A'/'a' for letters, '*' for alphanumeric. Multiple masks supported.

**Screenshot:** Verify -- confirm input mask configuration appearance.

---

## f. Blacklist
**UNCHANGED**

> Under Validation tab, Blacklist option. Options: Case sensitive, Exact match, Word match.

**Screenshot:** Verify -- confirm blacklist configuration appearance.

---

## g. Extract data from documents
**VERIFY**

**Original:**
> Under a registration, select the document, open edit modal, create model document, upload an example document. The data extractor lists data available for extraction.

**Current assessment:**
> The basic workflow likely remains, but the feature may have been enhanced with AI-based extraction, improved accuracy, or support for additional document types. The industry trend toward AI document processing suggests potential improvements.

**Needs verification:** Check the document data extraction interface on a live instance for any new capabilities, AI features, or improved workflows.
**Screenshot:** Verify -- capture current document extraction interface.

---

## Potential new useful functions
**VERIFY**

> The platform may have added new functions not in this section:
> - **Component actions system**: Structured approach to button/field actions (componentaction_get_system_actions suggests predefined system actions)
> - **System actions**: Predefined system-level actions available for components
> - **Effects system**: Dynamic field property control via behaviours/effects
> - **Print document integration**: Direct integration with print document builder

**Needs verification:** These APIs exist but their exact role in the BPA UI and whether they warrant documentation in this section needs confirmation.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| a. Copy value from | UNCHANGED | Verify |
| b. Copy edit grid values | UNCHANGED | Verify |
| c. Field tags | UNCHANGED | Verify |
| c. Field tags - new tags | VERIFY | Verify |
| d. Formula functions list | VERIFY | Verify |
| d. Formula examples | UNCHANGED | Verify |
| e. Input mask | UNCHANGED | Verify |
| f. Blacklist | UNCHANGED | Verify |
| g. Extract data from documents | VERIFY | Verify |
| New useful functions | VERIFY | Unknown |
