---
title: "Collapsible Fields"
description: "eRegistrations Manual - Collapsible Fields"
---

# Collapsible Fields

!!! info "Update Summary (5 changes detected)"
    Enhanced documentation for collapsible functionality.
    The original manual documents block collapsible toggle in section D.3 (Applicant form): 'Blocks are collapsible.
    If you do not want your blocks to collapse, disable the collapsible toggle under the general tab.' This new section documents enhanced collapsible behaviors that may extend beyond basic block collapsing to include individual fields, groups of fields, field sets, and more granular collapsible controls.
    This may include new collapsible modes, default collapsed/expanded states, and collapsible behavior triggered by determinants or effects.
    5 blocks identified, mostly needing verification.


<!-- Live BPA Screenshot: live-collapsible-fields -->
<div class="live-screenshot" markdown>

![Collapsible Fields - Expandable/collapsible form sections](../screenshots/live-collapsible-fields.png){ loading=lazy }
*Current BPA view (2026-02-15) — [Collapsible Fields](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/forms/applicant-form){ target=_blank }*
*Collapsible fields are configured as a display option in the form builder.*


</div>
<!-- /Live BPA Screenshot: live-collapsible-fields -->

## Overview of Collapsible Fields

!!! success "New Feature"
    The original manual explicitly documents block collapsible: 'Blocks are collapsible. If you do not want your blocks to collapse, disable the collapsible toggle under the general tab.' This new section expands on that foundation with enhanced collapsible capabilities that may have been added to the platform. The exact enhancements need verification.

The collapsible functionality in eRegistrations allows form sections to be collapsed and expanded by the user, reducing visual clutter and improving form navigation. The original manual documents block-level collapsing, where entire blocks can be toggled between collapsed and expanded states.

Enhanced collapsible functionality may extend this capability to:
- Individual fields or groups of fields within a block.
- Field sets with collapsible headers.
- Nested collapsible sections (collapsible elements inside other collapsible elements).
- Collapsible behavior controlled by determinants or effects (auto-collapse/expand based on conditions).

The basic block collapsible toggle (documented in section D.3) remains the foundation of this feature.

<!-- Screenshot needed: Screenshots showing the various collapsible behaviors: block collapsible, field-level collapsible (if available), and different collapsed/expanded states. -->
*Screenshot: Screenshots showing the various collapsible behaviors: block collapsible, field-level collapsible (if available), and different collapsed/expanded states.*

---

## Block Collapsible Toggle (Enhanced)

!!! question "Needs Verification"
    The original manual documents the basic collapsible toggle for blocks. Enhanced options like default state, icon position, and state persistence are common in form builders and may have been added. A reviewer should check the current block configuration options for any enhancements.

The block collapsible toggle, documented in the original manual, may have been enhanced with additional options:

- Default state: Configuration for whether the block starts collapsed or expanded when the form loads.
- Collapsible icon position: Where the collapse/expand control appears (header left, header right, etc.).
- Collapse animation: Whether the collapse/expand transition is animated.
- Remember state: Whether the collapsed/expanded state is remembered when the user navigates away and returns.

The basic toggle (enable/disable collapsible) remains available under the General tab of the block configuration.

<!-- Screenshot needed: Screenshot of the block configuration showing the collapsible toggle and any additional collapsible options that may have been added. -->
*Screenshot: Screenshot of the block configuration showing the collapsible toggle and any additional collapsible options that may have been added.*

---

## Field-level Collapsible Behavior

!!! question "Needs Verification"
    The original manual documents Field Set as a container that 'groups the fields of the same category of data together' but does not mention collapsible behavior for field sets. Edit Grids and Data Grids are documented as repeating containers. Whether these now support collapsible behavior is unknown. A reviewer should check each container type for collapsible options.

Beyond block-level collapsing, the platform may support collapsible behavior for individual fields or field groups:

- Field sets with collapsible headers: The Field Set container (documented in section D.3) may now support a collapsible toggle similar to blocks.
- Collapsible panels within blocks: Sub-sections within a block that can be independently collapsed.
- Collapsible edit grids: Edit grid rows or sections that can be collapsed to show only summary data.

The exact scope of field-level collapsible behavior needs verification.

---

## Conditional Collapsible Behavior

!!! question "Needs Verification"
    The Effects system supports activate/deactivate/show/hide/enable/disable effect types. Collapse/expand may be an additional behavior type or may be achieved through the existing show/hide mechanism. The integration between collapsible behavior and determinants/effects needs verification.

The collapsible state of blocks or fields may be controllable through determinants or the Effects system:

- A determinant condition could automatically collapse or expand a section based on the applicant's input.
- The Effects system (if used) could include 'collapse' and 'expand' as effect types applied to blocks.
- This would allow dynamic form behavior where sections collapse or expand as the user fills in the form.

For example, a block of additional fields could start collapsed and automatically expand when the user selects 'Yes' to a relevant question.

---

## Collapsible Behavior in Custom Classes

!!! question "Needs Verification"
    The original manual's custom classes section does not mention collapsible-related classes, but the platform may have added them. Custom classes are the standard mechanism for adding visual behaviors in eRegistrations. A reviewer should check the custom classes dropdown for any collapsible-related options.

Collapsible behavior may be achievable or modified through custom classes. The custom classes section (D.8) documents numerous appearance and spacing classes, and a 'collapsible' custom class or variant may exist.

Possible custom classes related to collapsible behavior:
- Start collapsed: A class that makes a component start in the collapsed state.
- No collapse: A class that prevents collapsing (alternative to the toggle).
- Collapse with summary: A class that shows a summary of the contained data when collapsed.

The existence and names of collapsible-related custom classes need verification.

---
