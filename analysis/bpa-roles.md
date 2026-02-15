# F. Roles -- Update Analysis (p.97-116)

**Changes detected:** 8 (1 modified, 4 verify items)
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## Role definition and types
**UNCHANGED**

> A role is a necessary action by a public institution for a registration to be processed. Two types: Human role (person reviews, adds info, approves/rejects/sends back) and BOT role (automatic processing by a BOT).

---

## 1. Create human roles
**MODIFIED**

**Original:**
> Click Processing (Roles) tab. Click 'add'. 'Human role' selected by default. Activate 'Is start role'. Select Role Type. Activate 'Visible for applicant'. Enter name and short name. Create.

**Updated:**
> Same workflow, but additional options available: **'Allow to confirm payments'** and **'Allow access to financial reports'** permission toggles.

**What changed:** The MCP tool `role_create` confirms two additional permission fields for human roles: `allow_to_confirm_payments` and `allow_access_to_financial_reports`. These control what operators in this role can do. The basic creation workflow is otherwise unchanged.

**Screenshot:** Needs update -- capture role creation slider showing all fields including new permissions.

---

## Human role elements: a. Description
**UNCHANGED**

> Description tab: name, short name (editable), registrations linked (select or select all), institution in charge (select or add new), involved units under institution.

---

## Human role elements: b. Form
**UNCHANGED**

> Form tab: incorporate operator actions (drag blocks and fields). Data can be copied to certificate via 'copy value from'.

---

## Human role elements: c. Status
**UNCHANGED**

> 4 statuses: 0=Pending, 1=Approved, 2=Sent back, 3=Rejected. Statuses 2 and 3 must be authorized by Analyst. Destination role required for statuses 1 and 2. Messages with moustache templates. Rejection-reasons and file-rejected variables. Links in messages. Receiver and delays configurable.

---

## 2. Create BOT roles
**UNCHANGED**

> Click 'BOT role'. Activate start role if first. Name, short name, create. Select preceding role. Three elements: Description (name, type, institution, registrations), BOT (type prefilled, select BOT, mapping with API version), Status (same as human but no reject).

---

## 2.1 Polling BOT
**UNCHANGED**

> Toggle 'roles repeat until successful'. Set query interval and active duration. Confirmed via MCP: `repeat_until_successful`, `repeat_in_minutes/hours/days`, `duration_in_minutes/hours/days`.

---

## 3. Revision role
**UNCHANGED**

> Documents revision: uploaded docs on left, data/requirements on right. 'NO' triggers rejection reason field. Data revision: all applicant file components displayed. Field-by-field verification via service settings toggle. Approval button requires full validation.

---

## Effects system interaction with roles
**VERIFY**

> The Effects system (activate/deactivate/show/hide/enable/disable) may interact with role form components for determinant-driven behavior.

**Needs verification:** Effects could be used in role forms to dynamically show/hide/enable/disable fields. A reviewer should determine if this is documented elsewhere or needs mention here.

---

## E-signature integration in roles
**VERIFY**

> E-signature may be integrated into role processing workflow for digitally signing documents or approvals.

**Needs verification:** E-signature is mentioned as a new platform feature. Its specific integration with the roles system needs to be confirmed on a live instance.

---

## New role permissions
**VERIFY**

> MCP confirms: `allow_to_confirm_payments` and `allow_access_to_financial_reports` role permissions.

**Needs verification:** These permissions are confirmed in the API but may not be documented in the original manual. A reviewer should verify where they appear in the UI and document them.

**Screenshot:** Needs new -- capture permission toggles in role creation/edit.

---

## Part B system actions
**VERIFY**

> Part B system actions are mentioned in the manual (BOT builder section) as exceptions that must be last in action sequences. MCP tool `componentaction_get_system_actions` confirms system actions are a platform concept.

**Needs verification:** The full scope of Part B system actions and their configuration may need dedicated documentation beyond the brief mention in the BOT builder section.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Role definition and types | UNCHANGED | Same |
| 1. Create human roles | MODIFIED | Needs update |
| a. Description | UNCHANGED | Same |
| b. Form | UNCHANGED | Same |
| c. Status | UNCHANGED | Same |
| 2. Create BOT roles | UNCHANGED | Same |
| 2.1 Polling BOT | UNCHANGED | Same |
| 3. Revision role | UNCHANGED | Same |
| Effects system interaction | VERIFY | Unknown |
| E-signature in roles | VERIFY | Unknown |
| New role permissions | VERIFY | Needs new |
| Part B system actions | VERIFY | Verify |
