# C. Registration(s) -- Update Analysis (p.14-25)

**Changes detected:** 5 (3 verify items)
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## Registration definition
**UNCHANGED**

> Registrations are at the core of the eRegistrations system. A registration is any type of authorization (license, permit, registration number, clearance, certificate, etc.) issued by a government institution, for which an applicant will usually need to provide data, documents and fee.

---

## 1. Create a registration
**UNCHANGED**

> Click 'add'. Enter registration name, short name (auto-proposed, modifiable). Create. A registration has 6 elements: Name, Result, Data required, Documents required, Fees, Institution in charge. The 'Registrations' tab defines all except 'data required' (defined in application file). Red asterisk marks required fields.

**Screenshot:** Verify -- confirm creation slider UI.

---

## Result (Physical/Digital)
**UNCHANGED**

> Click '+ Select or add new' under Results. Click 'add'. Enter name, choose 'P' (physical) or 'D' (digital). Save. Digital results allow certificate template building. Existing results selectable from dropdown.

---

## Documents (U/S/M)
**UNCHANGED**

> Click '+ Select or add new' under Documents. Enter name, choose: 'U' (upload), 'S' (show at desk), 'M' (sign at collection). Save. Existing documents selectable from dropdown.

---

## Fees (Fixed/Formula)
**UNCHANGED**

> Fixed fees: name, 'fixed fee' type, currency, value. Formula fees: 'Formula' type, then drag-and-drop variables with arithmetic symbols.

Fee types confirmed via MCP tools: `cost_create_fixed` (amount + currency) and `cost_create_formula`.

---

## Institution and Units
**UNCHANGED**

> Click '+ Select or add new' under Institutions. Enter name, URL. Save. Add units via 'Add new' under Involved Unit. Existing institutions selectable from dropdown. Registrations shown across top menu by short names.

---

## 2. Add registration(s) to a service
**UNCHANGED**

> Click service name. Click 'Add'. Enter name, Create. Define elements. Or click 'add to service' from 'all registrations' list for existing registrations.

---

## Registration activation
**VERIFY**

> MCP tools include `registration_activate`, suggesting registrations have an independent activation state.

**Needs verification:** The original manual does not mention activating/deactivating individual registrations (only services have activation toggles). A reviewer should verify if a registration activation toggle exists in the current UI.

---

## Document requirement global management
**VERIFY**

> MCP tools show a two-level system: global `requirement_list` (document type definitions) and `documentrequirement_create/update/delete` (linking requirements to registrations).

**Needs verification:** The manual documents creating document requirements directly under registrations. A global requirement system may provide reusable document type definitions. A reviewer should check if the UI reflects this two-level structure.

**Screenshot:** Verify -- check for global requirements management in the UI.

---

## Formula fee enhancements
**VERIFY**

> The fee formula builder may have additional functions beyond basic arithmetic (similar to the form formula builder's maxValue, round, Ceil, Floor, date operations, etc.).

**Needs verification:** The manual documents basic fee formula creation. The form formula builder (Section D.7) has many advanced functions. A reviewer should verify if the fee formula builder shares these capabilities.

**Screenshot:** Verify -- capture fee formula builder showing available functions.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Registration definition | UNCHANGED | Same |
| 1. Create registration | UNCHANGED | Verify |
| Result (P/D) | UNCHANGED | Same |
| Documents (U/S/M) | UNCHANGED | Same |
| Fees (Fixed/Formula) | UNCHANGED | Same |
| Institution and Units | UNCHANGED | Same |
| 2. Add to service | UNCHANGED | Same |
| Registration activation | VERIFY | Unknown |
| Document requirement global mgmt | VERIFY | Verify |
| Formula fee enhancements | VERIFY | Verify |
