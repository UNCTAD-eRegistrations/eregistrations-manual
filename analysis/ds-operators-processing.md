# C. Operators processing pages (p.145-151) -- Update Analysis

**Changes detected:** 6
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## Processing pages overview
**UNCHANGED**

> Processing pages are what operators of the institutions which offer registrations in a service see. As a super administrator, you can access the operators' processing pages from the display system (through Part B).

---

## 1. The file list page - Status filters
**VERIFY**

> The list of files filtered by status (pending, approved, rejected, sent back for corrections) is displayed. The drop down list displays all services. Select the service, then select the role from the first dropdown. Calendar icon allows viewing applications submitted at a certain day/time range. The first screen displays all pending files by default.

**Needs verification:** The file list page with status filters, service/role dropdowns, and calendar filter is core processing functionality. The underlying functionality is likely the same but visual presentation may have changed with UI theme updates.
**Screenshot:** Verify -- file list page layout and appearance.

---

## File list sub menu
**UNCHANGED**

> Sub menu: Status of file, Business name, Date of receipt, status of registrations, operator in charge. Status filter on bottom corner with different colors. Other filters: all files, validated, sent back, rejected.

**Screenshot:** Verify -- file list sub menu columns and status filter colors.

---

## 2. The processing page - Application details and history
**UNCHANGED**

> This is the 2nd screen of the operator's role. The top part displays application details (zip folder of documents) and application history.

**Screenshot:** Verify -- processing page top section.

---

## a) Revision role
**UNCHANGED**

> Revision role: Requires operator to verify documents and data. If operator chooses 'NO' under documents revision, field appears for rejection reason. Documents revision tab shows uploaded documents on left, data and requirements on right. Data revision tab displays all components.

**Screenshot:** Verify -- revision role with documents and data tabs.

---

## b) Processing role
**UNCHANGED**

> Processing role: Form/action developed by analyst. Operator can generate action (display/upload certificate). Validate, reject, or send back the application. Documents tab shows uploaded documents and certificates. Data tab shows all BPA application file components.

**Screenshot:** Verify -- processing role form, action buttons, and tabs.

---

## Part B system actions
**VERIFY**

> Part B may now include system action buttons that can be enabled via BPA service settings. These buttons allow operators to perform additional system-level actions during processing.

**Needs verification:** The BPA service settings mention 'enabling BPA system buttons in Part B' under the Buttons options. This suggests Part B can display system action buttons that were previously only available in the BPA. The exact nature, appearance, and functionality of these Part B system actions needs verification on the current platform.
**Screenshot:** Needs new -- capture any system action buttons visible in the processing page.

---

## E-signature verification in processing
**VERIFY**

> Operators may now be able to verify e-signatures on submitted applications during the processing stage.

**Needs verification:** E-signature is a known new platform feature. If applicants can e-sign on the Send page, operators should be able to see and verify signature status during processing. The exact implementation (dedicated panel, status indicator, or integration with documents revision) is not confirmed.
**Screenshot:** Unknown -- verify if and how signature verification appears in the processing page.

---

## Effects system in processing
**VERIFY**

> The effects system may influence operator processing by automatically triggering actions based on operator decisions (approval, rejection, send-back).

**Needs verification:** The effects system is mentioned as a new platform feature. In the context of operator processing, effects could be triggered by status changes. Whether effects are visible to operators or purely backend automation is unknown.
**Screenshot:** Unknown -- verify if any effects-related UI elements appear on the processing page.

---

## 3. Clearing old files from the service
**UNCHANGED**

> The section on clearing old files from the service describes the process for removing outdated application files.

**Screenshot:** Verify -- confirm the feature is still present and accessible.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Processing pages overview | UNCHANGED | Same |
| File list page - status filters | VERIFY | Verify |
| File list sub menu | UNCHANGED | Verify |
| Processing page - details/history | UNCHANGED | Verify |
| Revision role | UNCHANGED | Verify |
| Processing role | UNCHANGED | Verify |
| Part B system actions | VERIFY | Needs new |
| E-signature verification | VERIFY | Unknown |
| Effects system | VERIFY | Unknown |
| Clearing old files | UNCHANGED | Verify |
