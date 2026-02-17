---
title: "Micro-publish"
description: "eRegistrations Manual - Micro-publish"
---

# Micro-publish


<!-- Live BPA Screenshot: live-micro-publish -->
<div class="live-screenshot" markdown>

![Micro-publish - Granular publishing of individual changes](./screenshots/live-micro-publish.png){ loading=lazy }
*Current BPA view (2026-02-15) — [Micro-publish](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/settings/configuration){ target=_blank }*
*Micro-publish is enabled in service settings and accessible from the publish button.*


</div>
<!-- /Live BPA Screenshot: live-micro-publish -->

## Overview of Micro-publish


Micro-publish is an enhancement to the service publishing workflow in eRegistrations. Instead of publishing the entire service (all forms, roles, BOTs, certificates, and configuration), micro-publish allows analysts to publish only the specific parts of the service that have changed.

This provides two key benefits:
1. Reduced publish time: Publishing only changed components is faster than republishing everything.
2. Reduced risk: By publishing only specific changes, there is less risk of unintended modifications being pushed to the public interface.

Micro-publish is accessed through the 'publish service' button on the service bar, which now provides options for granular publishing in addition to the traditional full-service publish.

<!-- Screenshot needed: Screenshot of the micro-publish interface, likely a dialog or dropdown that appears when clicking the publish button, showing the options for selecting which parts to publish. -->

---

## Micro-publish Options


When using micro-publish, the analyst can likely select from the following publishable components:
- Forms (applicant form, guide form, processing role forms)
- Roles configuration
- BOT configuration and mappings
- Certificate/document templates
- Registration settings (documents, fees, institutions)
- Service settings and display options

Each component may show an indicator of whether it has unpublished changes, helping the analyst identify what needs to be published.

<!-- Screenshot needed: Screenshot showing the list of publishable components with change indicators in the micro-publish dialog. -->

---

## Micro-publish Workflow


The micro-publish workflow likely involves:
1. Click the 'Publish service' button on the service bar.
2. A dialog or expanded interface appears showing the available publish options.
3. Select which parts of the service to publish (individual components or groups).
4. The system may show a preview or summary of what changes will be published.
5. Confirm the publish action.
6. The system publishes only the selected components and updates the publish history.

Alternatively, micro-publish may be automatic -- the system may detect what has changed since the last publish and only publish those changes, without requiring manual selection.

<!-- Screenshot needed: Step-by-step screenshots of the micro-publish workflow from clicking publish to completion. -->

---

## Publish History and Micro-publish


The service settings section includes a 'Publish history' tab (documented in section I of the manual). With micro-publish, the publish history likely shows more granular entries, indicating which specific parts of the service were published in each operation rather than just recording a full-service publish.

Publish history entries for micro-publish operations may include:
- Timestamp of the publish operation
- Which components were published
- Who performed the publish
- Whether it was a full publish or a micro-publish

<!-- Screenshot needed: Screenshot of the publish history showing micro-publish entries with component-level detail. -->

---

## Full Publish vs Micro-publish


After the introduction of micro-publish, the original full-service publish capability likely still exists as an option. Analysts may be able to choose between:
- Micro-publish: Publishes only selected or changed components.

The full publish may serve as a 'safety net' when the analyst wants to ensure all changes are synchronized, while micro-publish is the preferred approach for routine updates.

---

## Micro-publish Error Handling


When a micro-publish operation encounters issues, the system likely provides feedback about:
- Dependency conflicts (e.g., publishing a role that references an unpublished BOT)
- Validation errors in the components being published
- Warnings about components that may need to be published together

The error handling and dependency checking behavior needs verification.

---
