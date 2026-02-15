# D.3. Applicant form -- Update Analysis

**Changes detected:** 8
**Status:** Ready for review
**Analyzed:** 2026-02-15
**Pages:** 32-42

---

## Form builder overview
**UNCHANGED**

> The form can be developed and customized in any format. To create a form, drag and drop any type of required field component from the menu bar into the space below it.

The form_component_add API confirms the same structural approach: parent_key for nesting, position for ordering, column_index/row_index/cell_index for table/column placement.

**Screenshot:** Verify -- confirm drag and drop interface appearance.

---

## Containers - Block
**UNCHANGED**

> Blocks separate/segregate information. Blocks are collapsible. Disable the 'collapsible' toggle under the general tab to prevent collapse.

**Screenshot:** Verify -- confirm block with collapsible toggle.

---

## Containers - Block collapsible enhancements
**VERIFY**

> Block collapsible behavior may have been enhanced with features such as default collapsed state, animation, or conditional collapse. The update plan mentions 'collapsible fields' as a new feature.

**Needs verification:** Check if collapsible behavior has been extended beyond blocks to other component types, or if blocks have new collapsible configuration options.
**Screenshot:** Verify -- check for new options in block collapsible configuration.

---

## Containers - Table
**UNCHANGED**

> Drag and drop the table component inside the block. Indicate the number of rows and columns.

**Screenshot:** Verify -- confirm table configuration.

---

## Containers - Columns
**UNCHANGED**

> Align fields using columns. Only up to 12 units per row (e.g., 6+6, 4+4+4, 3+3+3+3).

**Screenshot:** Verify -- confirm 12-unit grid appearance.

---

## Containers - Field set
**UNCHANGED**

> Groups fields of the same category together.

**Screenshot:** Verify -- confirm visual appearance.

---

## Containers - Edit grid
**UNCHANGED**

> Enables replication of the same set of fields and addition of multiple data. Hide Label toggle available.

**Screenshot:** Verify -- confirm visual appearance.

---

## Containers - Data grid
**UNCHANGED**

> Similar to edit grid.

**Screenshot:** Verify -- confirm visual appearance.

---

## Containers - Tabs
**UNCHANGED**

> Makes form more organized. Can be displayed as side menu (vertical layout). Structure can be nested.

**Screenshot:** Verify -- confirm visual appearance.

---

## Containers - Tabs new features
**VERIFY**

> Tabs may have gained conditional visibility (determinant-driven), validation indicators, or dynamic tab creation via the effects/behaviours system.

**Needs verification:** Check tabs configuration on a live instance for any new options.
**Screenshot:** Unknown -- capture any new tab features.

---

## Fields - Catalog (dropdown)
**UNCHANGED**

> Catalog field provides a drop-down menu.

**Screenshot:** Verify -- confirm appearance.

---

## Fields - Sub Catalog
**UNCHANGED**

> Sub catalog for dependent/cascading dropdowns.

**Screenshot:** Verify -- confirm appearance.

---

## Fields - Button with actions
**MODIFIED**

**Original:**
> Button (various actions: event, custom, open link, open service and data in new tab).

**Updated:**
> Button actions now include the original types (event, custom, open link, open service) plus a structured component actions system with BOT actions and system-predefined actions available through the component actions framework.

**What changed:** The componentaction API tools (componentaction_get_by_component, componentaction_save, componentaction_get_system_actions) indicate buttons now have a more formal action management framework, including system-level predefined actions. The original action types likely still exist, but the system has expanded.
**Screenshot:** Needs update -- capture button action configuration showing all available types.

---

## Fields - Card-style radios
**NEW**

> Card-style radios display radio options as visual cards rather than traditional radio buttons, improving usability for selection-based questions.

**Why new:** Explicitly mentioned in the update plan as a new feature. The exact configuration method (custom class, separate component, or radio property) needs verification.
**Screenshot:** Needs new -- capture card-style radio buttons and their configuration.

---

## Fields - E-signature field
**VERIFY**

> An e-signature field may exist as a new field type for electronic signatures, potentially used in Send File/declaration pages.

**Needs verification:** The update plan mentions e-signature as a new feature. Whether it is a field type, custom component, or separate system needs confirmation on a live instance.
**Screenshot:** Unknown -- capture e-signature component if it exists.

---

## Common properties - Help toggle
**UNCHANGED**

> Help toggle provides tooltips.

---

## Common properties - Advanced toggle
**UNCHANGED**

> Advanced toggle reveals additional features.

---

## Common properties - standard toggles and options
**UNCHANGED**

> Hide Label, Placeholder, Tooltip, Prefix/Suffix, Disabled, Hidden, Reusable, Listing value, Allow Spellcheck, Searchable.

**Screenshot:** Verify -- confirm all properties are still present.

---

## Common properties - potential new properties
**VERIFY**

> New properties may include determinant-aware properties (effects system), print document properties, inter-service data sharing properties, or field-level permissions.

**Needs verification:** Examine field configuration panels on a live instance for any new properties not in the original list.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Form builder overview | UNCHANGED | Verify |
| Block container | UNCHANGED | Verify |
| Block collapsible enhancements | VERIFY | Verify |
| Table container | UNCHANGED | Verify |
| Columns container | UNCHANGED | Verify |
| Field set container | UNCHANGED | Verify |
| Edit grid container | UNCHANGED | Verify |
| Data grid container | UNCHANGED | Verify |
| Tabs container | UNCHANGED | Verify |
| Tabs new features | VERIFY | Unknown |
| Catalog field | UNCHANGED | Verify |
| Sub catalog field | UNCHANGED | Verify |
| Button with actions | MODIFIED | Needs update |
| Card-style radios | NEW | Needs new |
| E-signature field | VERIFY | Unknown |
| Help toggle | UNCHANGED | Same |
| Advanced toggle | UNCHANGED | Same |
| Standard common properties | UNCHANGED | Verify |
| New common properties | VERIFY | Unknown |
