---
title: "F. Roles"
description: "eRegistrations Manual - F. Roles (Original pages 97-116)"
---

# F. Roles

!!! info "Update Summary (8 changes detected)"
    8 items identified: Core role concepts (human/BOT, 4 statuses, description/form/status tabs, moustache templates) remain unchanged.
    Part B system actions are already referenced in the manual text.
    Role creation has additional fields confirmed via MCP (allow_to_confirm_payments, allow_access_to_financial_reports).
    Polling BOT is unchanged.
    Revision role with field-by-field verification is unchanged.
    The Effects system is a new platform feature that interacts with role form components.
    E-signature integration in roles needs verification.
    New role type options or permissions may exist.

## Role definition and types

A role is a necessary action by a public institution for a registration to be processed. There are 2 types of roles: Human role (a person reviews the file, adds information, and approves, rejects or sends back the file; various types including review role and processing role) and BOT role (automatic processing role performed by a BOT).

---

## 1. Create human roles

!!! warning "Modified"
    The MCP tool role_create confirms two additional fields for human roles: allow_to_confirm_payments and allow_access_to_financial_reports. These are permissions that can be set during role creation to control what operators in this role can do. The basic creation workflow is otherwise unchanged.

Click on Processing (Roles) tab. Click 'add'. 'Human role' is selected by default. Activate 'Is start role in process flow' if first role. Select Role Type. Activate 'Visible for applicant'. Enter name and short name. Additional options may include: 'Allow to confirm payments' and 'Allow access to financial reports'. Create.

??? note "Original manual text"
    Click on the Processing (Roles) tab on the side menu. Click on 'add' button in the search bar. A slider will open. 'Human role' is selected by default. Activate 'Is start role in process flow' if it is the first role in the registration. Select Role Type. Activate 'Visible for applicant'. Enter name of the role. Enter short name. Create.

<!-- Screenshot needed: Role creation slider showing all fields including payment confirmation and financial reports permissions. -->
*Screenshot: Role creation slider showing all fields including payment confirmation and financial reports permissions.*

---

## Human role elements: a. Description

A human role is defined by 3 elements: Description (name of the role, institution in charge, registrations linked), Form (describes the action), Status (0=pending, 1=approved, 2=send back, 3=rejected). The Description tab shows name, short name (editable), registrations linked (select from dropdown or select all), institution in charge (select or add new with name, short name, URL), and involved units.

---

## Human role elements: b. Form

The Form tab allows incorporating the action the operator should perform. Example: providing certificate number. Data from fields in this section can be copied to the certificate using 'copy value from' function.

---

## Human role elements: c. Status

4 basic statuses: 0=Pending, 1=Approved/successfully passed, 2=Sent back for correction, 3=Rejected. Statuses 2 and 3 must be specifically authorized by the Analyst. Under statuses 1 and 2, destination role must be indicated. Messages at various stages use moustache template syntax to copy values from application file. Rejection-reasons and file-rejected mustache variables available. Links can be added to messages. Receiver and delays configurable.

---

## 2. Create BOT roles

Click 'BOT role'. Activate 'Is start role' if first. Enter name and short name. Create. Select preceding role to activate. A BOT role is defined by 3 elements: Description (name, type, institution, registrations), BOT (type prefilled from Description, select BOT, mapping), Status (same as human role but BOT cannot reject). Under BOT tab, select API version from GDB. APIs generated automatically for each database version.

---

## 2.1 Polling BOT

Configure a BOT role to query the database periodically for a set amount of time. Toggle 'roles repeat until successful'. Set query interval (how often) and active duration (how long before failure). If data appears before time expires, role succeeds and file continues flow.

---

## 3. Revision role

Revision role obliges operator to verify and validate documents and data before sending to next role. Usually the start role. Documents revision tab shows uploaded documents on left, data and requirements on right. If operator chooses 'NO', rejection reason field appears (reasons managed in Tables > Instance Catalog > Document Rejection reasons). Data revision tab displays all applicant file components. Field-by-field verification enabled in service settings under 'Revision by field' toggle. Approval button activates only after all documents and data are validated.

---

## Effects system interaction with roles

!!! question "Needs Verification"
    The Effects system (confirmed via MCP tools) allows creating effects that link determinants to components with various effect types. This could be used in role forms to dynamically show/hide/enable/disable fields based on conditions. A human reviewer should determine if effects are used in role forms and if this warrants documentation in the Roles section.

The Effects system (activate/deactivate/show/hide/enable/disable) is a new platform feature that may interact with role form components, allowing determinant-driven behavior on processing forms.

---

## E-signature integration in roles

!!! question "Needs Verification"
    The MANUAL-UPDATE-PLAN.md mentions e-signature as a new platform feature. It may be relevant to the roles section if operators can apply e-signatures during processing. This needs verification on a live instance.

E-signature may be integrated into the role processing workflow, allowing operators to digitally sign documents or approvals during processing.

---

## New role permissions and options

!!! question "Needs Verification"
    The MCP tools confirm that roles have permission fields for payment confirmation and financial reports access. The original manual does not appear to document these specific permissions. A human reviewer should verify where these toggles appear in the role creation slider and document them.

The MCP tool role_create shows fields: allow_to_confirm_payments (payment permission for UserRole) and allow_access_to_financial_reports (reports permission for UserRole). These may not be documented in the original manual.

<!-- Screenshot needed: Role creation slider showing payment confirmation and financial reports permission toggles. -->
*Screenshot: Role creation slider showing payment confirmation and financial reports permission toggles.*

---

## Part B system actions in roles

!!! question "Needs Verification"
    Part B system actions are mentioned in the manual text (in the BOT builder section) but not extensively documented. The MCP tool componentaction_get_system_actions suggests that system actions are a first-class concept in the platform. A reviewer should verify what Part B system actions are available and whether they need dedicated documentation.

Part B system actions are mentioned in the BOT builder section of the original manual as exceptions that must always be last in action sequences. The full scope and configuration of Part B system actions may warrant additional documentation.

<!-- Verify screenshot: System actions list and their placement in role action sequences. -->

---
