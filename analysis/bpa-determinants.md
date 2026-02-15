# D.2. Determinants -- Update Analysis

**Changes detected:** 6
**Status:** Ready for review
**Analyzed:** 2026-02-15
**Pages:** 28-31

---

## Determinant definition
**UNCHANGED**

> A determinant is a filter allowing to take into account the particular case of each applicant in a service. It determines/triggers: if an applicant is subject to a registration and/or what requirements the applicant must provide to register (data, documents, fees).

---

## 2.1. Determinants of the registration
**UNCHANGED**

> For each registration, rules define who/what are the subjects: 1) mandatory to all, 2) mandatory to specific subjects, 3) optional to all, 4) optional to specific subjects. Specific subjects defined through determinants combined by AND/OR operators.

**Screenshot:** Verify -- confirm registration determinant options panel.

---

## 2.2. Determinants of the requirements - role and purpose
**UNCHANGED**

> Determinants allow to show or hide specific parts of the application form to adapt the form to the particular situation of each applicant. They can be created on the basis of fields in the Guide or form and applied to any field/block.

---

## Creating a determinant - determinant types
**MODIFIED**

**Original:**
> Choose 'Determinant based on field value' under determinant type, select the relevant field, choose the relevant predicate, select value or choose comparison field, save.

**Updated:**
> The platform now supports 7 distinct typed determinants:
> 1. **Text**: EQUAL, NOT_EQUAL, CONTAINS, STARTS_WITH, ENDS_WITH
> 2. **Select**: EQUAL, NOT_EQUAL
> 3. **Numeric**: EQUAL, NOT_EQUAL, GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL
> 4. **Boolean**: True/False checkbox evaluation
> 5. **Date**: Date/time field evaluation
> 6. **Classification**: Catalog field evaluation with ALL/ANY/NONE multi-select subjects
> 7. **Grid**: Grid component value evaluation

**What changed:** The original manual described a single generic determinant type. The API now reveals 7 specialized determinant types, each with specific operators and configuration options. This is a significant expansion of the determinant system's expressiveness.
**Screenshot:** Needs update -- capture determinant type dropdown showing all 7 types, and operator options for each.

---

## Classification determinant (new type)
**NEW**

> Classification determinants evaluate catalog/classification field values with operators EQUAL/NOT_EQUAL and support multi-select evaluation via subject modes: ALL (all selected values must match), ANY (at least one must match), NONE (no selected value should match).

**Why new:** Bridges the determinant system with the classification catalog system, enabling conditional logic based on catalog selections (e.g., economic activity codes, product categories).
**Screenshot:** Needs new -- capture classification determinant creation form.

---

## Grid determinant (new type)
**NEW**

> Grid determinants allow creating conditions based on values within edit grid or data grid components, enabling conditional logic based on repeatable grid row data.

**Why new:** The griddeterminant_create API confirms this as a distinct type not documented in the original manual.
**Screenshot:** Needs new -- capture grid determinant creation form.

---

## Applying determinants via drag and drop
**UNCHANGED**

> Once created, select and drop the determinant on the right panel under selected determinants, select the behavior of the component (show/hide when determinant condition is true), General Save.

**Screenshot:** Verify -- confirm drag-and-drop panel appearance.

---

## D indicator in orange
**UNCHANGED**

> The letter 'D' in orange color indicates a determinant. A dot in the top right corner indicates multiple determinants.

**Screenshot:** Verify -- confirm D indicator appearance.

---

## Special case - Empty date field determinant
**UNCHANGED**

> Create a determinant with a selected date time field with predicate '=' or '!=' without selecting any date.

**Screenshot:** Verify -- confirm this approach still works.

---

## Effects and component behaviours system
**NEW**

> The platform now includes a component behaviours and effects system extending determinant capabilities beyond simple show/hide. Effects can control visibility, required status, disabled state, and other properties, driven by one or more determinants.

**Why new:** The componentbehaviour and effect API tools (componentbehaviour_list, componentbehaviour_get_by_component, effect_create, effect_delete) indicate a sophisticated layer that was not in the original manual. This extends the binary show/hide model to multi-property control.
**Screenshot:** Needs new -- capture component behaviour configuration UI.

---

## Determinant search and reuse
**VERIFY**

> The platform supports searching determinants by name, type, operator, and target field key, promoting reuse and consistency.

**Needs verification:** The determinant_search API exists but whether the BPA UI exposes a search/discovery interface needs confirmation on a live instance.

---

## Advanced condition expressions
**VERIFY**

> Text and select determinants support optional condition_logic and json_condition parameters for complex conditional expressions beyond simple comparisons.

**Needs verification:** Whether these advanced parameters are exposed in the BPA UI or only available via API needs confirmation.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Determinant definition | UNCHANGED | Same |
| Registration determinants (2.1) | UNCHANGED | Verify |
| Requirement determinants (2.2) | UNCHANGED | Same |
| Creating determinants - types | MODIFIED | Needs update |
| Classification determinant | NEW | Needs new |
| Grid determinant | NEW | Needs new |
| Drag and drop application | UNCHANGED | Verify |
| D indicator in orange | UNCHANGED | Verify |
| Empty date field special case | UNCHANGED | Verify |
| Effects/behaviours system | NEW | Needs new |
| Determinant search/reuse | VERIFY | Unknown |
| Advanced conditions | VERIFY | Unknown |
