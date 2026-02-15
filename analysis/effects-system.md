# Effects System -- Update Analysis

**Changes detected:** 8
**Status:** New section -- ready for review
**Analyzed:** 2026-02-15
**Section type:** Entirely new -- not present in original manual

---

## Overview of the Effects System
**NEW**

> The Effects system is an extension of the Determinants functionality in eRegistrations. While determinants define conditions based on field values (e.g., 'if field X equals Y'), Effects define what happens to a component when those conditions are met. Effects provide more granular control over component behavior than the basic determinant show/hide mechanism described in the Determinants section.
>
> Effects work through a layered structure:
> - A form component can have a 'component behaviour' attached to it.
> - Each component behaviour can contain one or more 'effects'.
> - Each effect links one or more determinants to the component and specifies what should happen when the determinant conditions are met.

**Why new:** This feature extends the Determinants system (manual section D.2) with a more structured approach. The MCP API confirms the existence of componentbehaviour and effect endpoints.
**Screenshot:** Needs new -- capture where the Effects system is accessed in the BPA interface.

---

## Effect Types
**NEW**

> The following effect types are available when creating an effect:
> - **activate**: Activates a component when the determinant conditions are met.
> - **deactivate**: Deactivates a component when the determinant conditions are met.
> - **show**: Makes a component visible when the determinant conditions are met.
> - **hide**: Hides a component when the determinant conditions are met.
> - **enable**: Enables a component (makes it editable) when the determinant conditions are met.
> - **disable**: Disables a component (makes it read-only) when the determinant conditions are met.
>
> Each effect also has an effect_value (a boolean) that determines the polarity of the effect.

**Why new:** Confirmed by MCP tool definition for effect_create which lists all six valid effect_type values. The default is 'activate' with effect_value True.
**Screenshot:** Needs new -- capture the effect type selection interface.

---

## Creating an Effect
**NEW**

> To create an effect on a form component:
> 1. Identify the service and the target form component (by its component key).
> 2. Select one or more determinants that will serve as the conditions for the effect.
> 3. Choose the logic for combining multiple determinants: 'AND' (all must match) or 'OR' (any must match). Default is 'AND'.
> 4. Select the effect type (activate, deactivate, show, hide, enable, or disable). Default is 'activate'.
> 5. Set the effect value (true or false). Default is true.
> 6. Save the effect.
>
> When an effect is created, the system generates a behaviour record for the component (if one does not already exist) and attaches the effect to it. The system returns a behaviour_id, effect_id, and an audit_id for tracking.

**Why new:** Workflow derived from MCP tool definition for effect_create. The exact BPA UI steps need verification.
**Screenshot:** Needs new -- step-by-step screenshots of the creation workflow.

---

## Determinant Logic: AND vs OR
**NEW**

> When an effect references multiple determinants, the logic parameter determines how they are combined:
> - **AND logic**: All referenced determinants must have their conditions met for the effect to trigger. This is the default.
> - **OR logic**: The effect triggers if any one of the referenced determinants has its condition met.

**Why new:** AND/OR logic confirmed by MCP tool definition. The original manual mentions AND/OR for registration determinants but Effects formalizes this with a dedicated parameter.
**Screenshot:** Needs new -- capture the logic selector when creating an effect with multiple determinants.

---

## Component Behaviours
**NEW**

> Component behaviours are the containers that hold effects for a specific form component. Each form component can have at most one behaviour record, but that behaviour can contain multiple effects.
>
> A component behaviour includes:
> - A unique behaviour ID
> - The component key identifying which form component it applies to
> - The service ID
> - A list of effects, each containing its own determinants and property effects
>
> You can list all component behaviours for a service to see which components have effects configured, along with the effect count for each.

**Why new:** Confirmed by MCP tool definitions for componentbehaviour_list, componentbehaviour_get, and componentbehaviour_get_by_component.
**Screenshot:** Needs new -- capture the component behaviours list view.

---

## Deleting an Effect
**NEW**

> To delete an effect, you need the behaviour_id of the behaviour containing the effect. Deleting a behaviour removes it and all its associated effects from the component. The operation is audited.

**Why new:** Confirmed by MCP tool definition for effect_delete which takes a behaviour_id parameter.
**Screenshot:** Needs new -- capture the delete action and any confirmation dialog.

---

## Relationship between Effects and Determinants
**VERIFY**

> The Effects system works in conjunction with the existing Determinants system (section D.2). Determinants define conditions; Effects define what happens. The Effects system uses JSONLogic internally for determinant evaluation.
>
> It is likely that the existing determinant show/hide behavior coexists with the newer Effects system. The exact relationship needs verification.

**Needs verification:** Whether Effects supersede or complement the older determinant show/hide approach documented in section D.2. The componentbehaviour_get tool references 'parsed JSONLogic determinants'.
**Screenshot:** Unknown -- comparison screenshots of old vs new approach would be helpful.

---

## Effects System UI Location in BPA
**VERIFY**

> The Effects system is likely accessible through one or more of these locations:
> - Within the component edit modal, possibly as a tab alongside the existing 'Determinant' tab
> - As a dedicated section in the side menu
> - Through the component's gear/edit icon
>
> The exact navigation path needs verification.

**Needs verification:** The MCP tools provide API access but do not describe the BPA UI layout. A reviewer should document the exact navigation path.
**Screenshot:** Unknown -- screenshots of the BPA navigation to access Effects are needed.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Overview of the Effects System | NEW | Needs new |
| Effect Types | NEW | Needs new |
| Creating an Effect | NEW | Needs new |
| Determinant Logic: AND vs OR | NEW | Needs new |
| Component Behaviours | NEW | Needs new |
| Deleting an Effect | NEW | Needs new |
| Relationship between Effects and Determinants | VERIFY | Unknown |
| Effects System UI Location in BPA | VERIFY | Unknown |
