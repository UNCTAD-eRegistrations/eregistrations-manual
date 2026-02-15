# E. BOT builder -- Update Analysis (p.77-96)

**Changes detected:** 6 (1 modified, 3 verify items)
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## BOT definition and types
**UNCHANGED**

> A BOT is an automated action performed by the system. There are two types of BOTs: data BOT (to exchange data between an eRegistration service and an external system like a GDB database) and document BOT (to display a document on the screen or upload it to the user file).

The fundamental definition and the two main types remain unchanged. Internal BOT is documented as a third type.

---

## a) Document BOT creation
**UNCHANGED**

> Click on BOT Builder tab. Click 'add'. Enter BOT name. Select 'Document BOT'. Categories: 'generate and display', 'generate and upload', or 'generate upload display'. Select document. Only one document per button.

Document BOT categories confirmed via MCP tools (document_upload, document_generate_and_upload, document_generate_and_display).

**Screenshot:** Verify -- confirm slider UI appearance.

---

## b) Data BOT creation and categories
**MODIFIED**

**Original:**
> Select 'Data BOT' under Type. Categories field will appear. Select 'Create' under Categories. Create.

**Updated:**
> Select 'Data BOT' under Type. Categories field appears. Select the appropriate category: **Create, Read, Update, List, Exist, Log, or Other**. Create.

**What changed:** The original manual only mentions 'Create' as a data BOT category. The MCP tool `muleservice_discover` confirms that data BOT categories now include: **read, create, update, list, exist, log, and other**. This is a significant expansion enabling data BOTs to perform various CRUD operations and other actions.

**Screenshot:** Needs update -- capture the expanded categories dropdown.

---

## c) Internal BOT
**UNCHANGED**

> Internal BOT enables copying data between components: within the same form, between forms, between grids, or between services. Linking services allows data transfer across services. Can be combined with Polling BOT.

Note: The manual calls it "a new type of BOT" which was correct at time of writing but is no longer new. This is a cosmetic text issue only.

---

## d) Adding actions (BOT roles) to the form
**UNCHANGED**

> Three ways: 1. To a button, 2. To an input field, 3. To a block.
>
> - Button: Concurrent toggle available. System actions cannot run concurrently with Data/Document bots. "Validate Send page" and Part B system actions must be last.
> - Field: Executes after 1.5 seconds from last change.
> - Block: Executes on render. With determinant, executes when determinant becomes true.

The concurrent execution feature, system action restrictions, and Part B system actions are all already documented in the original manual.

**Screenshot:** Verify -- confirm action drag-and-drop UI.

---

## 2. Mapping between eRegistrations and GDB
**UNCHANGED**

> Select database with correct version. Create links by clicking fields in sequence. Field types must match (blue+red line for mismatch). Eye icon hides fields. Version reselection needed after GDB updates.

**Screenshot:** Verify -- confirm mapping UI has not changed significantly.

---

## 2b. Mapping in internal BOTs
**UNCHANGED**

> Two form trees displayed. Expand all, create links by clicking left tree then right tree. Field types must match.

---

## 2c. Mapping transformations
**UNCHANGED**

> Full transformation list: Equals value without case-sensitive, Not equals value (+ without case-sensitive), Contains value (+ without case-sensitive), Not contains value (+ without case-sensitive), Less than value, Less or equal than value, Greater than value, Greater or equal than value, Starts with, Similarity (with ordering), Fuzzy with precision class 1-8, Regex expression (+ without case-sensitive), Nullable, Not nullable, IN.

The transformations list is comprehensive and documented with examples.

---

## New BOT categories or types
**VERIFY**

> The data BOT categories have expanded from just 'Create' to include read, create, update, list, exist, log, and other.

**Needs verification:** A human reviewer should verify the complete list of categories on a live instance and confirm descriptions for each. There may also be additional specialized BOT types beyond Document, Data, and Internal.

**Screenshot:** Needs update -- capture current data BOT categories dropdown.

---

## Mapping UI improvements
**VERIFY**

> The mapping UI may have visual or functional improvements. MCP tools show `bot_mapping_summary` and `bot_suggest_mappings`, suggesting automated mapping suggestions may now be available.

**Needs verification:** A reviewer should check the current mapping UI for new features like auto-suggest, field search, or improved visualization.

---

## BOT input/output visibility
**VERIFY**

> MCP tools include `bot_input_visibility_update` and `bot_output_visibility_update`, suggesting configurable BOT field visibility. Also `bot_suggest_mappings` suggests an automated mapping suggestion feature.

**Needs verification:** These features may warrant new documentation if they are visible in the BPA UI.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| BOT definition and types | UNCHANGED | Same |
| a) Document BOT creation | UNCHANGED | Verify |
| b) Data BOT categories | MODIFIED | Needs update |
| c) Internal BOT | UNCHANGED | Same |
| d) Adding actions to form | UNCHANGED | Verify |
| 2. Mapping eReg-GDB | UNCHANGED | Verify |
| 2b. Internal BOT mapping | UNCHANGED | Same |
| 2c. Mapping transformations | UNCHANGED | Same |
| New BOT categories | VERIFY | Needs update |
| Mapping UI improvements | VERIFY | Verify |
| BOT input/output visibility | VERIFY | Unknown |
