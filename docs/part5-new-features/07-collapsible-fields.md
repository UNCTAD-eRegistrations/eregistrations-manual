---
title: "Collapsible Fields"
description: "eRegistrations Manual - Collapsible Fields"
---

# Collapsible Fields


<div class="live-screenshot" markdown>

![Collapsible Fields - Expandable/collapsible form sections](../screenshots/live-collapsible-fields.png){ loading=lazy }
*Current BPA view — Collapsible Fields*
*Collapsible fields are configured as a display option in the form builder.*


</div>

## Overview of Collapsible Fields


Enhanced collapsible functionality may extend this capability to:
- Individual fields or groups of fields within a block.
- Field sets with collapsible headers.
- Nested collapsible sections (collapsible elements inside other collapsible elements).
- Collapsible behavior controlled by determinants or effects (auto-collapse/expand based on conditions).

The basic block collapsible toggle (documented in section D.3) remains the foundation of this feature.


---

## Block Collapsible Toggle (Enhanced)


- Default state: Configuration for whether the block starts collapsed or expanded when the form loads.
- Collapsible icon position: Where the collapse/expand control appears (header left, header right, etc.).
- Collapse animation: Whether the collapse/expand transition is animated.
- Remember state: Whether the collapsed/expanded state is remembered when the user navigates away and returns.

The basic toggle (enable/disable collapsible) remains available under the General tab of the block configuration.


---

## Field-level Collapsible Behavior


Beyond block-level collapsing, the platform may support collapsible behavior for individual fields or field groups:

- Field sets with collapsible headers: The Field Set container (documented in section D.3) may now support a collapsible toggle similar to blocks.
- Collapsible panels within blocks: Sub-sections within a block that can be independently collapsed.
- Collapsible edit grids: Edit grid rows or sections that can be collapsed to show only summary data.

The exact scope of field-level collapsible behavior needs verification.

---

## Conditional Collapsible Behavior


The collapsible state of blocks or fields may be controllable through determinants or the Effects system:

- A determinant condition could automatically collapse or expand a section based on the applicant's input.
- The Effects system (if used) could include 'collapse' and 'expand' as effect types applied to blocks.
- This would allow dynamic form behavior where sections collapse or expand as the user fills in the form.

For example, a block of additional fields could start collapsed and automatically expand when the user selects 'Yes' to a relevant question.

---

## Collapsible Behavior in Custom Classes


Collapsible behavior may be achievable or modified through custom classes. The custom classes section (D.8) documents numerous appearance and spacing classes, and a 'collapsible' custom class or variant may exist.

Possible custom classes related to collapsible behavior:
- Start collapsed: A class that makes a component start in the collapsed state.
- No collapse: A class that prevents collapsing (alternative to the toggle).
- Collapse with summary: A class that shows a summary of the contained data when collapsed.

The existence and names of collapsible-related custom classes need verification.

---
