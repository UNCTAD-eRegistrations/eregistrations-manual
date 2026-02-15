# H. Tables -- Update Analysis (p.125-132)

**Changes detected:** 5 (3 verify items)
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## Tables overview and three types
**UNCHANGED**

> Tables is a list of catalogs in the system. Three types: 1. Service catalogs (group all service elements), 2. Cross-tables (elements linked to each registration), 3. Instance catalogs (shared across all services in an instance).

---

## 1. Tables/Service catalogs
**UNCHANGED**

> Group by nature all elements created in services (data fields, fees, documents, institutions, units, determinants, questions, etc.). Number in brackets shows element count.

---

## 2. Cross-tables
**UNCHANGED**

> Show elements linked to each registration: data/registrations, documents/registrations, fees/registrations, roles/registration, etc.

---

## 3. Instance catalogs
**UNCHANGED**

> Catalogs for all services in an instance (countries, cities, company types, etc.). Includes:
> - **a) Create catalog:** BPA instance catalog, add values (up to 500 chars), subcatalogs, GDB-based catalogs
> - **b) Import:** Upload items modal with template download, XLS format with value/level/parent/translation columns
> - **Groups:** Segregate items into categories, usable as determinants
> - **c) Document rejection reasons:** For operators' revision role

All sub-features comprehensively documented in the original manual.

---

## Classification system
**VERIFY**

> MCP tools reveal: `classification_list`, `classification_get`, `classification_create`, `classification_update`, `classification_delete`, `classification_export_csv`, `classification_apply_country_codes`.

**Needs verification:** Questions for reviewer:
1. Is the classification system visible in the Tables section or elsewhere in BPA?
2. Is it an evolution of the catalog system or a separate concept?
3. Does `classification_apply_country_codes` indicate a country-code standardization feature?
4. Does it need its own documentation section?

**Screenshot:** Needs new -- capture classification system interface.

---

## Catalog import/export improvements
**VERIFY**

> Import/export may have improvements including CSV export and additional formats.

**Needs verification:** `classification_export_csv` confirms CSV export exists. The original XLS import may also have been enhanced. A reviewer should check current import/export options.

**Screenshot:** Verify -- capture current import/export modal.

---

## GDB-based catalog enhancements
**VERIFY**

> GDB-based catalogs (populated from GDB data) may have improved database referencing, versioning, or value display.

**Needs verification:** The original workflow (system source, database selection, column mapping) may have been enhanced. A reviewer should check the current GDB-based catalog creation workflow.

**Screenshot:** Verify -- capture GDB-based catalog creation interface.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Tables overview | UNCHANGED | Same |
| 1. Service catalogs | UNCHANGED | Same |
| 2. Cross-tables | UNCHANGED | Same |
| 3. Instance catalogs | UNCHANGED | Same |
| Classification system | VERIFY | Needs new |
| Import/export improvements | VERIFY | Verify |
| GDB-based catalog enhancements | VERIFY | Verify |
