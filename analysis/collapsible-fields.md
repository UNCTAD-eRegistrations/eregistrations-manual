# Collapsible Fields -- Update Analysis

**Changes detected:** 5
**Status:** New section -- ready for review
**Analyzed:** 2026-02-15
**Section type:** Enhanced documentation -- basic block collapsible exists in manual, this covers expanded capabilities

---

## Overview of Collapsible Fields
**NEW**

> The collapsible functionality in eRegistrations allows form sections to be collapsed and expanded by the user, reducing visual clutter and improving form navigation. The original manual documents block-level collapsing.
>
> Enhanced collapsible functionality may extend to:
> - Individual fields or groups of fields within a block.
> - Field sets with collapsible headers.
> - Nested collapsible sections.
> - Collapsible behavior controlled by determinants or effects.
>
> The basic block collapsible toggle (section D.3) remains the foundation.

**Why new:** The original manual documents only the basic block collapsible toggle. This section covers potential enhancements.
**Screenshot:** Needs new -- various collapsible behaviors in action.

---

## Block Collapsible Toggle (Enhanced)
**VERIFY**

> The block collapsible toggle may now include additional options:
> - **Default state**: Whether the block starts collapsed or expanded.
> - **Collapsible icon position**: Where the control appears in the header.
> - **Collapse animation**: Whether transitions are animated.
> - **Remember state**: Whether state persists across navigation.
>
> The basic toggle remains under the General tab of block configuration.

**Needs verification:** Enhanced options are speculative. A reviewer should check current block configuration for any additions to the basic collapsible toggle.
**Screenshot:** Needs new -- block configuration showing collapsible toggle and any new options.

---

## Field-level Collapsible Behavior
**VERIFY**

> Beyond blocks, the platform may support collapsible behavior for:
> - **Field sets** with collapsible headers (Field Set container from section D.3).
> - **Collapsible panels** within blocks (sub-sections that collapse independently).
> - **Collapsible edit grids** (rows/sections showing only summary data when collapsed).

**Needs verification:** The original manual does not mention collapsible behavior for field sets, edit grids, or other non-block containers. A reviewer should check each container type.
**Screenshot:** Unknown -- capture field-level collapsible behavior if it exists.

---

## Conditional Collapsible Behavior
**VERIFY**

> Collapsible state may be controllable through determinants or Effects:
> - A determinant could auto-collapse/expand a section based on input.
> - Effects could include 'collapse'/'expand' as effect types for blocks.
> - This enables dynamic form behavior where sections respond to user input.
>
> Example: A block of additional fields starts collapsed and auto-expands when the user selects 'Yes.'

**Needs verification:** The Effects system supports activate/deactivate/show/hide/enable/disable. Whether collapse/expand are additional behaviors or achieved through show/hide needs confirmation.
**Screenshot:** Unknown -- capture conditional collapsible configuration if it exists.

---

## Collapsible Behavior in Custom Classes
**VERIFY**

> Collapsible behavior may be achievable through custom classes:
> - **Start collapsed**: Class making a component start collapsed.
> - **No collapse**: Class preventing collapsing.
> - **Collapse with summary**: Class showing a data summary when collapsed.

**Needs verification:** The original custom classes section does not mention collapsible-related classes. A reviewer should check the custom classes dropdown.
**Screenshot:** Unknown -- capture collapsible-related custom classes if they exist.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Overview of Collapsible Fields | NEW | Needs new |
| Block Collapsible Toggle (Enhanced) | VERIFY | Needs new |
| Field-level Collapsible Behavior | VERIFY | Unknown |
| Conditional Collapsible Behavior | VERIFY | Unknown |
| Collapsible in Custom Classes | VERIFY | Unknown |
