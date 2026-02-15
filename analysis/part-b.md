# Part B (Processing) -- Update Analysis

**Changes detected:** 8
**Status:** New section -- ready for review
**Analyzed:** 2026-02-15
**Section type:** Expanded documentation -- references exist in original manual but no dedicated section

---

## Overview of Part B (Processing)
**NEW**

> Part B refers to the processing/operator side of an eRegistrations service. While Part A is the applicant-facing side (the application file), Part B is the operator-facing side where processing roles review, validate, and act on submitted applications.
>
> Part B encompasses:
> - Operator processing pages (file list, processing page, revision page)
> - System actions and buttons available to operators
> - Form components and data visible during processing
> - Configuration of what applicant data is visible or editable
> - Automated actions triggered during processing (BOT roles)
>
> Part B is configured through Roles (section F) and accessed through the DS.

**Why new:** The manual references Part B scattered across sections F, I, and II.C but lacks a consolidated overview.
**Screenshot:** Needs new -- overview of the Part B interface as seen by an operator.

---

## Part B System Actions
**NEW**

> Part B system actions are built-in actions that can be triggered during processing. These are pre-defined by the platform (not custom BOTs).
>
> System actions are assignable to buttons, fields, or blocks in processing role forms. Each action has an ID, name, and category.

**Why new:** The MCP tool componentaction_get_system_actions confirms 'built-in system button actions available for form components.' The manual's Settings section mentions enabling system buttons but does not list the available actions.
**Screenshot:** Needs new -- list of available Part B system actions with names and categories.

---

## Part B System Buttons
**VERIFY**

> System buttons are pre-defined buttons enabled via service settings ('enabling BPA system buttons in Part B'). They may include:
> - Approve/validate button
> - Reject button
> - Send back for correction button
> - Print button
> - Generate certificate button
>
> These are distinct from custom buttons and provide standardized processing functionality.

**Needs verification:** The exact list of system buttons and their behavior need confirmation. The settings toggle is documented but the buttons themselves are not listed.
**Screenshot:** Needs new -- system buttons as they appear to operators, plus the settings toggle.

---

## Component Actions in Part B
**VERIFY**

> Component actions define how BOTs and system actions link to form components. Configuration options include:
> - Single BOT or multiple BOTs per component
> - Sequential or parallel (concurrent) execution
> - System action linking
> - Sort order for multiple actions
> - Mandatory/optional actions
> - Determinant conditions controlling when actions execute
> - Multiple BOT execution with dynamic field key selector

**Needs verification:** Options confirmed by MCP tool definitions (componentaction_save supports bot_id, bot_ids, sort_order, parallel, mandatory, json_determinants, multiple_bot, multiple_field_key). Some features may be new since the original manual. The exact UI needs confirmation.
**Screenshot:** Needs new -- component action configuration interface showing all options.

---

## Part B Form Visibility Configuration
**NEW**

> Service settings allow configuring which components are visible in Part B:
> - Components can appear only in Part A (applicant form)
> - Components can appear only in Part B (operator form)
> - Components can appear in both
>
> Under 'Pages, buttons and fields' in settings: 'make blocks/fields visible in Part A and Part B based on registration linkage.'

**Why new:** This is mentioned in the Settings section briefly but warrants expanded documentation in the Part B context.
**Screenshot:** Needs new -- Part A/Part B visibility toggle in form builder and service settings.

---

## Part B Print Functionality
**VERIFY**

> Service settings include 'show print buttons on Part B.' When enabled, operators can print:
> - Complete application files
> - Specific documents or certificates
> - Processing history summaries

**Needs verification:** The exact print capabilities and button behavior need confirmation. Related to MCP print_document tools (print_document_list, print_document_get, etc.).
**Screenshot:** Needs new -- print button in Part B and resulting dialog/preview.

---

## Processing Role Form in Part B
**VERIFY**

> Each human role has a form defining the operator's view and actions. Built using the standard form builder, it can include:
> - Display components for applicant data (read-only or editable)
> - Action buttons linked to BOTs or system actions
> - Operator data entry fields
> - Document generation/display components
> - Approval/rejection/send-back controls
>
> Configured under the 'Form' tab of each role in section F.

**Needs verification:** The form builder capabilities for Part B may have expanded. A reviewer should check for new component types or features specific to Part B forms.
**Screenshot:** Needs new -- processing role form being built in the BPA.

---

## Part B Data Revision Features
**VERIFY**

> Part B includes data revision with field-by-field verification. Enhanced features may include:
> - Approve/reject per field
> - Side-by-side comparison with previous versions
> - Inline editing for operators
> - Batch approval/rejection
>
> The original manual describes revision roles (section F.3) and 'revision by field' toggle.

**Needs verification:** There may be enhancements to data revision since the original manual. Current capabilities should be verified.
**Screenshot:** Needs new -- Part B data revision interface with field-by-field verification.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Overview of Part B (Processing) | NEW | Needs new |
| Part B System Actions | NEW | Needs new |
| Part B System Buttons | VERIFY | Needs new |
| Component Actions in Part B | VERIFY | Needs new |
| Part B Form Visibility Configuration | NEW | Needs new |
| Part B Print Functionality | VERIFY | Needs new |
| Processing Role Form in Part B | VERIFY | Needs new |
| Part B Data Revision Features | VERIFY | Needs new |
