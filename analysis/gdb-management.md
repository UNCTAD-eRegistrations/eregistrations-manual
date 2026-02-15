# B.4. Database management (p.164-174) -- Update Analysis

**Changes detected:** 5
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## Database management menu
**UNCHANGED**

> The 'tools on' button displays the database management menu: Version, creation date, administrator login.

---

## Filters
**UNCHANGED**

> Filters allow selective data viewing. Complex filters available for nested conditions.

---

## Columns
**UNCHANGED**

> Columns tab displays selected data.

---

## Reports
**UNCHANGED**

> Reports tab for creating/viewing reports.

---

## Import data
**VERIFY**

> Import data from external files/databases.

**Needs verification:** The import functionality is a core GDB feature. However, supported import formats and options may have expanded. The current import dialog should be verified.
**Screenshot:** Verify -- import data dialog, check supported formats and options.

---

## Export data
**VERIFY**

> Export data in JSON, XLS, CSV formats.

**Needs verification:** The documented formats (JSON, XLS, CSV) are the standard set. Additional export formats may have been added.
**Screenshot:** Verify -- export data dialog, confirm available formats.

---

## Log
**UNCHANGED**

> Log displays change history.

---

## Delete data
**UNCHANGED**

> Delete data button (irreversible).

---

## a) Views
**VERIFY**

**Original:**
> Subset of GDB displaying selected data defined by filters. Create view by clicking Views tab, '+' button, enter name, add filters, drag fields to 'view fields'. Publish for visibility. Complex views involving multiple databases possible through linked databases.

**Needs verification:** Views are a mature GDB feature. The core workflow is likely the same. However, views may have gained new features such as additional filter options, improved multi-database views, new embed options, or enhanced sharing capabilities.
**Screenshot:** Verify -- views creation and configuration, check for new features or options.

---

## b) APIs
**VERIFY**

**Original:**
> Tool for web services enabling data exchange between DS and GDB. API types: Create, Create-entries, Read, List, Update, Listen, Update-entries, Exists, Delete.

**Current assessment:**
> The manual documents 9 API types. This is a comprehensive list but additional API types may have been added since July 2025.

**Needs verification:** A review of the current API type dropdown is recommended to confirm whether new types exist beyond the 9 documented.
**Screenshot:** Verify -- API creation dialog, check list of available API types.

---

## API Dashboard
**UNCHANGED**

> Dashboard shows creation date, name, URL, usage counts. Statistics visualization available. Copy URL button and visibility toggle for BPA availability.

**Screenshot:** Verify -- API dashboard appearance and features.

---

## c) DB Structure
**UNCHANGED**

> Modify database structure. Duplicate database. Add/delete/reorder fields. Version updates on save. Publish and remap in BPA required.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Database management menu | UNCHANGED | Same |
| Filters | UNCHANGED | Same |
| Columns | UNCHANGED | Same |
| Reports | UNCHANGED | Same |
| Import data | VERIFY | Verify |
| Export data | VERIFY | Verify |
| Log | UNCHANGED | Same |
| Delete data | UNCHANGED | Same |
| Views | VERIFY | Verify |
| APIs | VERIFY | Verify |
| API Dashboard | UNCHANGED | Verify |
| DB Structure | UNCHANGED | Same |
