# D.1. The Guide -- Update Analysis

**Changes detected:** 2
**Status:** Ready for review
**Analyzed:** 2026-02-15
**Pages:** 27-28

---

## Guide purpose
**UNCHANGED**

> Questions can be created in the guide to help determine, for each specific user, which documents, fees and data are required.

The form_get API explicitly supports form_type='guide', confirming the Guide remains a distinct form type in the platform.

---

## Guide three elements
**UNCHANGED**

> The guide is defined by three elements: Description (name of the guide question), Form (where guide questions are developed and linked to the requirements and/or application form using determinants), Status.

**Screenshot:** Verify -- confirm tabs still show Description, Form, Status.

---

## Guide toggle activation
**UNCHANGED**

> If your service has a Guide, activate the guide toggle.

**Screenshot:** Verify -- confirm toggle visual appearance.

---

## Creating guide questions
**UNCHANGED**

> To create a question in the Guide, click on the 'Guide' tab in the Application File. Under the 'Form' tab, create questions using the form components that will filter the data, requirements and fees for specific users' case.

**Screenshot:** Verify -- confirm form builder appearance within the Guide tab.

---

## Shopping cart alternative
**VERIFY**

**Original:**
> Alternative to the guide: the shopping cart.

**Current assessment:**
> The shopping cart allows applicants to select registrations directly rather than answering filtering questions. It may have been enhanced with additional features such as registration previews, cost summaries, or document requirement displays.

**Needs verification:** The shopping cart is mentioned in service settings as a configurable option. Its current feature set and UI need to be inspected on a live instance to determine if it has evolved beyond its original description.
**Screenshot:** Verify -- capture current shopping cart interface.

---

## Potential new guide features
**VERIFY**

> The guide may have gained new capabilities such as conditional branching improvements, integration with the effects/behaviours system for dynamic form behavior, or enhanced determinant support.

**Needs verification:** The componentbehaviour API tools suggest a more sophisticated system for controlling component behavior. Whether this extends to guide-specific enhancements needs confirmation on a live instance.
**Screenshot:** Unknown -- capture any new guide-specific features if they exist.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Guide purpose | UNCHANGED | Same |
| Guide three elements | UNCHANGED | Verify |
| Guide toggle | UNCHANGED | Verify |
| Creating guide questions | UNCHANGED | Verify |
| Shopping cart alternative | VERIFY | Verify |
| New guide features | VERIFY | Unknown |
