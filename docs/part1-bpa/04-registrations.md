---
title: "C. Registration(s)"
description: "eRegistrations Manual - C. Registration(s) (Original pages 14-25)"
---

# C. Registration(s)

!!! info "Update Summary (5 changes detected)"
    5 items identified: Registration structure is core and stable.
    The creation workflow (name, short name, result P/D, documents U/S/M, fees fixed/formula, institution, units) remains unchanged.
    Cost types confirmed via MCP tools to include fixed and formula (cost_create_fixed, cost_create_formula).
    The document requirement system has a global requirements list (requirement_list) that may represent a newer management approach.
    Registration activation is a confirmed feature.
    Adding registrations to services is unchanged.

## Registration definition

Registrations are at the core of the eRegistrations system. A registration is any type of authorization (license, permit, registration number, clearance, certificate, etc.) issued by a government institution, for which an applicant will usually need to provide data, documents and fee.

---

## 1. Create a registration

Click on 'add' button. A slider opens. Enter registration name, enter short name (proposed automatically, modifiable). Create. A registration is defined by: a. Name, b. Result, c. Data required, d. Documents required, e. Fees, f. Institution in charge. The 'Registrations' menu tab defines all elements except 'data required' (defined in application file tab). Fields marked with red asterisk are required.

<!-- Verify screenshot: Registration creation slider - verify UI appearance has not changed. -->

---

## Result (Physical/Digital)

Click on '+ Select or add new' under Results. Click 'add'. A slider opens. Enter result name (required), choose physical ('P') or digital ('D'). Save. Digital result allows building a certificate template. Existing results can be selected from dropdown.

---

## Documents (U/S/M)

Click on '+ Select or add new' under Documents. Click 'add'. A slider opens. Enter document name, choose expectation: 'U' (must be uploaded), 'S' (must be shown at front desk), 'M' (must be signed at collection). Save. Existing documents can be selected from dropdown.

---

## Fees (Fixed/Formula)

Click on '+ Add new' under Fees. Fixed fees: enter name, select 'fixed fee' under Fee Type, select currency, enter value, save. Formula fees: select 'Formula' in fee type, save, click on fee to open, click 'click to add formula', drag and drop variables from left side, select arithmetic symbol, add.

---

## Institution and Units

Click on '+ Select or add new' under Institutions. Click 'add'. A slider opens. Enter institution name, enter URL, save. Add units by clicking 'Add new' under Involved Unit. Existing institutions can be selected from dropdown. Registrations displayed across top menu by short names.

---

## 2. Add registration(s) to a service

Click on service name. Click 'Add'. A slider opens. Enter registration name, click 'Create'. Define result, documents, fees, institution. To add existing registration, click 'add to service' from 'all registrations' list.

---

## Registration activation

!!! question "Needs Verification"
    The MCP tool registration_activate exists, which suggests registrations have an activation state similar to services. The original manual does not mention activating/deactivating individual registrations. A human reviewer should verify if this toggle exists in the UI and document it if so.

The MCP tools include a registration_activate operation, suggesting that registrations can be activated or deactivated independently.

---

## Document requirement global management

!!! question "Needs Verification"
    The MCP tools show a two-level system: global requirements (requirement_list) and document requirements linked to registrations (documentrequirement_create/update/delete). The manual documents the creation of document requirements directly under registrations. The global requirement system may provide reusable document type definitions across services. A reviewer should verify if the UI reflects this two-level system.

The MCP tools include requirement_list (global document type definitions), documentrequirement_list/create/update/delete (linking requirements to registrations). This may represent a more structured approach to managing document requirements.

<!-- Verify screenshot: Document requirements management - check if global requirements are visible in the UI. -->

---

## Formula fee enhancements

!!! question "Needs Verification"
    The manual documents basic formula creation with drag-and-drop variables and arithmetic symbols. The formula builder documented in section D.7 has many functions (maxValue, round, Ceil, Floor, date operations, etc.) that can also apply to fee formulas. A reviewer should verify if the fee formula builder has the same full set of functions as the form formula builder.

The formula fee builder may have been enhanced with additional functions or a more capable formula editor.

<!-- Verify screenshot: Fee formula builder showing available functions and operations. -->

---
