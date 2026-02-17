---
title: "Part B (Processing)"
description: "eRegistrations Manual - Part B (Processing)"
---

# Part B (Processing)


<div class="live-screenshot" markdown>

![Part B (Processing) - Operator processing screen configuration](../screenshots/live-part-b.png){ loading=lazy }
*Current BPA view — Part B (Processing)*
*Part B configuration is done within the roles/processing section.*


</div>

## Overview of Part B (Processing)


Part B refers to the processing/operator side of an eRegistrations service. While Part A is the applicant-facing side (the application file with its guide, form, documents, payment, and send pages), Part B is the operator-facing side where processing roles review, validate, and act on submitted applications.

Part B encompasses:
- The operator processing pages (file list, processing page, revision page).
- System actions and buttons available to operators.
- Form components and data visible to operators during processing.
- Configuration of what applicant data is visible or editable in Part B.
- Automated actions triggered during processing (BOT roles).

Part B is configured through the Roles section (section F) of the BPA and is accessed by operators through the Display System (DS).


---

## Part B System Actions


Part B system actions are built-in actions that can be triggered during the processing workflow. These are pre-defined actions provided by the platform (as opposed to custom BOT actions created by the analyst).

System actions are available for form components and can be assigned to buttons, fields, or blocks within processing role forms. They provide standard processing functionality without requiring custom BOT configuration.

The list of available system actions can be viewed through the system actions interface. Each action has an ID, name, and category.


---

## Part B System Buttons


Part B system buttons are pre-defined buttons that can be enabled for operator processing forms. The service settings (section I) mention 'enabling BPA system buttons in Part B' as a toggle option.

System buttons may include:
- Approve/validate button
- Reject button
- Send back for correction button
- Print button
- Generate certificate button
- Other standard processing workflow buttons

These buttons are distinct from custom buttons created by the analyst in the form builder. They provide standardized processing functionality with built-in workflow logic.


---

## Component Actions in Part B


Component actions define how BOTs and system actions are linked to form components in Part B. Each form component (button, field, or block) can have actions attached to it that execute when the component is interacted with or rendered.

Component actions support:
- Linking a single BOT to a component.
- Linking multiple BOTs to execute in sequence or concurrently (parallel execution).
- Linking system actions to buttons.
- Configuring sort order for multiple actions on the same component.
- Making actions mandatory or optional.
- Applying determinant conditions to control when actions execute.
- Multiple BOT execution with a field key selector for dynamic BOT selection.

Actions are configured per component and are specific to the service.


---

## Part B Form Visibility Configuration


The service settings allow configuration of which form components are visible in Part B. Under 'Pages, buttons and fields' in service settings, there is an option to 'make blocks/fields visible in Part A and Part B based on registration linkage.'

This means:
- Some form components can be configured to appear only in the applicant form (Part A).
- Some components can be configured to appear only in the operator processing form (Part B).
- Some components can appear in both Part A and Part B.

The visibility is typically controlled through the block or field configuration, where the analyst can specify which part the component belongs to.


---

## Part B Print Functionality


The service settings mention 'show print buttons on Part B' as a configuration option. When enabled, operators can print application data, documents, or certificates directly from the processing page.

Print functionality in Part B may include:
- Printing the complete application file.
- Printing specific documents or certificates.
- Printing a summary of the processing history.

The print button appearance and behavior need verification.


---

## Processing Role Form in Part B


Each processing role (human role) has a form that defines what the operator sees and can do. This form is built in the BPA using the same form builder as the applicant form, but it serves a different purpose.

The processing role form in Part B can include:
- Display components showing applicant data (read-only or editable).
- Action buttons linked to BOTs or system actions.
- Data entry fields for operator-added information.
- Document generation and display components.
- Approval/rejection/send-back controls.

The form is configured under the 'Form' tab of each role in the Roles section (section F).


---

## Part B Data Revision Features


Enhanced data revision features in Part B may include:
- Field-by-field verification with approve/reject per field.
- Side-by-side comparison of submitted data with previous versions.
- Inline editing capabilities for operators to correct data.
- Batch approval or rejection of multiple fields.


---

**See also:** [Roles](../part1-bpa/14-roles.md) · [BOT Builder](../part1-bpa/13-bot-builder.md) · [Operators Processing](../part2-ds/03-operators-processing.md)
