# G. Certificates -- Update Analysis (p.117-124)

**Changes detected:** 6 (3 verify items)
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## 1. Build certificates - Two methods
**UNCHANGED**

> Templates/certificates for electronic results can be built in two ways: 1) Through certificate builder on side menu (user level 2), 2) Through the registration.

---

## 1a. Creating certificate through certificate builder
**UNCHANGED**

> Click 'Certificate' on side menu (user level 2). Click 'Add'. Enter name, Create. Click certificate name to configure. Form builder page appears. Click 'cert.form' tab to build.

**Screenshot:** Verify -- confirm certificate builder UI has not changed.

---

## 1b. Creating certificate through registration
**UNCHANGED**

> Choose registration. Click 'Digital result' (green button). Activate digital result. Click 'create template'. Enter name. Build like application form. Copy values from application file or processing role. Expiration date configurable in 'data' tab.

**Screenshot:** Verify -- confirm registration-based creation workflow.

---

## 2. Add QR Code
**UNCHANGED**

> Drag and drop 'QR code' from Custom Component tab onto the certificate template.

---

## Print document system
**VERIFY**

> MCP tools reveal a comprehensive 'print document' system: `print_document_list`, `print_document_get`, `print_document_component_get`, `print_document_templates`, `print_document_history`, `print_document_create`, `print_document_update`, `print_document_delete`, `print_document_component_add/update/remove/move`, `print_document_sort`, `print_document_revert`.

**Needs verification:** This appears to be a comprehensive document management system with component-level editing, history tracking, sorting, and template management. Questions for reviewer:
1. Is this a replacement for or addition to the certificate builder?
2. Is it visible in the BPA side menu?
3. What is the relationship between 'print documents' and 'certificates'?

**Screenshot:** Needs new -- capture print document system interface.

---

## E-signature on certificates
**VERIFY**

> E-signature may allow digital signatures to be embedded in generated documents.

**Needs verification:** E-signature is mentioned as a new platform feature. If available, the manual statement that "signatures and other authentications are replaced by QR codes" may need updating to also mention e-signature options.

---

## Certificate builder UI changes
**VERIFY**

> The certificate builder may have UI improvements. MCP tools show `print_document_history` and `print_document_revert`, suggesting version control for certificates.

**Needs verification:** A reviewer should check the current certificate builder for version history, template management, or component editing improvements.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Two methods overview | UNCHANGED | Same |
| Certificate builder method | UNCHANGED | Verify |
| Registration method | UNCHANGED | Verify |
| QR Code | UNCHANGED | Same |
| Print document system | VERIFY | Needs new |
| E-signature | VERIFY | Unknown |
| Certificate builder UI | VERIFY | Verify |
