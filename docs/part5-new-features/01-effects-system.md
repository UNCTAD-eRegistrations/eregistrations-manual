---
title: "Effects System"
description: "eRegistrations Manual - Effects System"
---

# Effects System

!!! info "Update Summary (8 changes detected)"
    Entirely new section.
    The Effects system is a newer addition to eRegistrations that extends the Determinants functionality.
    It allows analysts to define conditional behaviors on form components such as show/hide, enable/disable, activate/deactivate, and set values.
    Effects link one or more determinants to a component using AND/OR logic.
    The system is managed through component behaviours, where each behaviour can contain multiple effects.
    MCP tool signatures confirm the existence of effect_create, effect_delete, componentbehaviour_list, componentbehaviour_get, and componentbehaviour_get_by_component endpoints.
    8 blocks identified, all new or needing verification.

## Overview of the Effects System

!!! success "New Feature"
    This is an entirely new feature not present in the original manual. The original manual documents determinants (section D.2) and their basic show/hide functionality, but does not cover the Effects system which provides a more structured and powerful approach to conditional component behavior. The MCP tool definitions confirm the existence of componentbehaviour_list, componentbehaviour_get, componentbehaviour_get_by_component, effect_create, and effect_delete operations.

The Effects system is an extension of the Determinants functionality in eRegistrations. While determinants define conditions based on field values (e.g., 'if field X equals Y'), Effects define what happens to a component when those conditions are met. Effects provide more granular control over component behavior than the basic determinant show/hide mechanism described in the Determinants section.

Effects work through a layered structure:
- A form component can have a 'component behaviour' attached to it.
- Each component behaviour can contain one or more 'effects'.
- Each effect links one or more determinants to the component and specifies what should happen when the determinant conditions are met.

<!-- Screenshot needed: Overview screenshot showing where the Effects system is accessed in the BPA interface, likely within the component edit modal or a dedicated section. -->
*Screenshot: Overview screenshot showing where the Effects system is accessed in the BPA interface, likely within the component edit modal or a dedicated section.*

---

## Effect Types

!!! success "New Feature"
    The effect types are confirmed by the MCP tool definition for effect_create, which lists the valid effect_type values as: activate, deactivate, show, hide, enable, disable. The default effect_type is 'activate' and the default effect_value is True. This provides significantly more options than the basic show/hide behavior documented for determinants in the current manual.

The following effect types are available when creating an effect:
- activate: Activates a component when the determinant conditions are met.
- deactivate: Deactivates a component when the determinant conditions are met.
- show: Makes a component visible when the determinant conditions are met.
- hide: Hides a component when the determinant conditions are met.
- enable: Enables a component (makes it editable) when the determinant conditions are met.
- disable: Disables a component (makes it read-only) when the determinant conditions are met.

Each effect also has an effect_value (a boolean) that determines the polarity of the effect.

<!-- Screenshot needed: Screenshot of the effect type selection dropdown or interface showing all available effect types (activate, deactivate, show, hide, enable, disable). -->
*Screenshot: Screenshot of the effect type selection dropdown or interface showing all available effect types (activate, deactivate, show, hide, enable, disable).*

---

## Creating an Effect

!!! success "New Feature"
    The creation workflow is derived from the MCP tool definition for effect_create, which requires: service_id, component_key, determinant_ids (at least one), and optionally logic (AND/OR), effect_type, and effect_value. The response includes behaviour_id, effect_id, component_key, determinant_count, effect_type, effect_value, logic, service_id, and audit_id. The exact BPA UI for this workflow needs verification.

To create an effect on a form component:
1. Identify the service and the target form component (by its component key).
2. Select one or more determinants that will serve as the conditions for the effect.
3. Choose the logic for combining multiple determinants: 'AND' (all determinants must match) or 'OR' (any determinant must match). The default is 'AND'.
4. Select the effect type (activate, deactivate, show, hide, enable, or disable). The default is 'activate'.
5. Set the effect value (true or false). The default is true.
6. Save the effect.

When an effect is created, the system generates a behaviour record for the component (if one does not already exist) and attaches the effect to it. The system returns a behaviour_id, effect_id, and an audit_id for tracking the change.

<!-- Screenshot needed: Step-by-step screenshots of creating an effect: selecting the component, choosing determinants, selecting logic (AND/OR), choosing effect type, and saving. -->
*Screenshot: Step-by-step screenshots of creating an effect: selecting the component, choosing determinants, selecting logic (AND/OR), choosing effect type, and saving.*

---

## Determinant Logic: AND vs OR

!!! success "New Feature"
    The AND/OR logic is confirmed by the MCP tool definition for effect_create which includes a 'logic' parameter with values 'AND' or 'OR', defaulting to 'AND'. The current manual's Determinants section mentions combining determinants with AND/OR operators for registration determinants, but the Effects system formalizes this with a dedicated parameter.

When an effect references multiple determinants, the logic parameter determines how they are combined:
- AND logic: All referenced determinants must have their conditions met for the effect to trigger. This is the default.
- OR logic: The effect triggers if any one of the referenced determinants has its condition met.

This allows for complex conditional behaviors. For example, you could create an effect that shows a field only when both the applicant type is 'company' AND the registration type is 'new registration' (AND logic), or create an effect that disables a field when either the application is in 'draft' status OR the user has selected 'not applicable' (OR logic).

<!-- Screenshot needed: Screenshot showing the logic selector (AND/OR) when creating an effect with multiple determinants. -->
*Screenshot: Screenshot showing the logic selector (AND/OR) when creating an effect with multiple determinants.*

---

## Component Behaviours

!!! success "New Feature"
    Component behaviours are confirmed by the MCP tool definitions for componentbehaviour_list (returns behaviours with id, component_key, effect_count, total, service_id), componentbehaviour_get (returns id, component_key, service_id, effects with determinants and property_effects), and componentbehaviour_get_by_component (returns the same structure for a specific component). The exact BPA UI for browsing behaviours needs verification.

Component behaviours are the containers that hold effects for a specific form component. Each form component can have at most one behaviour record, but that behaviour can contain multiple effects.

A component behaviour includes:
- A unique behaviour ID.
- The component key identifying which form component it applies to.
- The service ID.
- A list of effects, each containing its own determinants and property effects.

You can list all component behaviours for a service to see which components have effects configured, along with the effect count for each. You can also retrieve the behaviour for a specific component by its key.

<!-- Screenshot needed: Screenshot showing the component behaviours list for a service, displaying which components have behaviours and their effect counts. -->
*Screenshot: Screenshot showing the component behaviours list for a service, displaying which components have behaviours and their effect counts.*

---

## Deleting an Effect

!!! success "New Feature"
    The delete operation is confirmed by the MCP tool definition for effect_delete, which takes a behaviour_id and returns deleted (bool), behaviour_id, deleted_behaviour, and audit_id. Note that the deletion appears to operate at the behaviour level rather than individual effect level. The exact UI workflow for deletion needs verification.

To delete an effect, you need the behaviour_id of the behaviour containing the effect. Deleting a behaviour removes it and all its associated effects from the component.

The delete operation is audited and returns confirmation of the deletion along with details of the deleted behaviour and an audit_id.

<!-- Screenshot needed: Screenshot showing the delete action for an effect or behaviour, including any confirmation dialog. -->
*Screenshot: Screenshot showing the delete action for an effect or behaviour, including any confirmation dialog.*

---

## Relationship between Effects and Determinants

!!! question "Needs Verification"
    The componentbehaviour_get tool returns effects with 'parsed JSONLogic determinants', confirming that Effects use JSONLogic internally. The relationship between the basic determinant show/hide in section D.2 and the Effects system needs clarification. It is possible that the Effects system is the underlying mechanism for determinants, or that they are parallel systems. A human reviewer should verify this on the live platform.

The Effects system works in conjunction with the existing Determinants system (documented in section D.2 of the manual). Determinants define conditions based on field values, while Effects define what happens when those conditions are met. The Effects system uses JSONLogic internally for determinant evaluation.

It is likely that the existing determinant show/hide behavior described in section D.2 coexists with the newer Effects system. The original determinant-based show/hide may still work for simple cases, while the Effects system provides more advanced options. The exact relationship and whether the Effects system supersedes or complements the older approach needs to be verified.

---

## Effects System UI Location in BPA

!!! question "Needs Verification"
    The MCP tools provide API-level access to effects but do not describe the BPA user interface. The UI could be integrated into the existing component edit workflow or could be a separate section. A human reviewer should document the exact navigation path to access the Effects configuration.

The Effects system is likely accessible through one or more of the following locations in the BPA:
- Within the component edit modal (slider), possibly as a new tab alongside or replacing the existing 'Determinant' tab.
- As a dedicated section in the side menu for managing all effects across the service.
- Through the component's gear/edit icon, similar to how determinants are currently configured.

The exact UI location, navigation path, and visual appearance of the Effects configuration interface need to be verified on the live platform.

---
