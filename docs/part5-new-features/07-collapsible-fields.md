---
title: "Collapsible Fields"
description: "eRegistrations Manual - Collapsible Fields"
---

# Collapsible Fields


<!-- Live BPA Screenshot: live-collapsible-fields -->
<div class="live-screenshot" markdown>

![Collapsible Fields - Expandable/collapsible form sections](./screenshots/live-collapsible-fields.png){ loading=lazy }
*Current BPA view (2026-02-15) — [Collapsible Fields](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/forms/applicant-form){ target=_blank }*
*Collapsible fields are configured as a display option in the form builder.*


</div>
<!-- /Live BPA Screenshot: live-collapsible-fields -->

## Overview of Collapsible Fields


Enhanced collapsible functionality may extend this capability to:
- Individual fields or groups of fields within a block.
- Field sets with collapsible headers.
- Nested collapsible sections (collapsible elements inside other collapsible elements).
- Collapsible behavior controlled by determinants or effects (auto-collapse/expand based on conditions).

The basic block collapsible toggle (documented in section D.3) remains the foundation of this feature.

<!-- Screenshot needed: Screenshots showing the various collapsible behaviors: block collapsible, field-level collapsible (if available), and different collapsed/expanded states. -->

---

## Block Collapsible Toggle (Enhanced)


- Default state: Configuration for whether the block starts collapsed or expanded when the form loads.
- Collapsible icon position: Where the collapse/expand control appears (header left, header right, etc.).
- Collapse animation: Whether the collapse/expand transition is animated.
- Remember state: Whether the collapsed/expanded state is remembered when the user navigates away and returns.

The basic toggle (enable/disable collapsible) remains available under the General tab of the block configuration.

<!-- Screenshot needed: Screenshot of the block configuration showing the collapsible toggle and any additional collapsible options that may have been added. -->

---

## Field-level Collapsible Behavior


Beyond block-level collapsing, the platform may support collapsible behavior for individual fields or field groups:

- Field sets with collapsible headers: The Field Set container (documented in section D.3) may now support a collapsible toggle similar to blocks.
- Collapsible panels within blocks: Sub-sections within a block that can be independently collapsed.
- Collapsible edit grids: Edit grid rows or sections that can be collapsed to show only summary data.


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
