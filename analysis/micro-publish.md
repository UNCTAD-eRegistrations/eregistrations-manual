# Micro-publish -- Update Analysis

**Changes detected:** 6
**Status:** New section -- ready for review
**Analyzed:** 2026-02-15
**Section type:** Entirely new -- not present in original manual

---

## Overview of Micro-publish
**NEW**

> Micro-publish is an enhancement to the service publishing workflow in eRegistrations. Instead of publishing the entire service (all forms, roles, BOTs, certificates, and configuration), micro-publish allows analysts to publish only the specific parts of the service that have changed.
>
> This provides two key benefits:
> 1. **Reduced publish time**: Publishing only changed components is faster than republishing everything.
> 2. **Reduced risk**: By publishing only specific changes, there is less risk of unintended modifications being pushed to the public interface.
>
> Micro-publish is accessed through the 'publish service' button on the service bar.

**Why new:** The original manual describes publishing as a single full-service action. Micro-publish adds granularity to this process.
**Screenshot:** Needs new -- capture the micro-publish interface (dialog or dropdown from the publish button).

---

## Micro-publish Options
**VERIFY**

> When using micro-publish, the analyst can likely select from the following publishable components:
> - Forms (applicant form, guide form, processing role forms)
> - Roles configuration
> - BOT configuration and mappings
> - Certificate/document templates
> - Registration settings (documents, fees, institutions)
> - Service settings and display options
>
> Each component may show an indicator of whether it has unpublished changes.

**Needs verification:** The specific component list is speculative. The MCP service_publish tool does not expose micro-publish granularity. Must be verified on live BPA.
**Screenshot:** Needs new -- capture the publishable components list with change indicators.

---

## Micro-publish Workflow
**VERIFY**

> The workflow likely involves:
> 1. Click the 'Publish service' button on the service bar.
> 2. A dialog appears showing available publish options.
> 3. Select which parts to publish.
> 4. The system may show a summary of changes.
> 5. Confirm the publish.
> 6. Only selected components are published; publish history is updated.
>
> Alternatively, micro-publish may be automatic -- the system may detect changes and only publish those.

**Needs verification:** The exact workflow (manual selection vs automatic detection) is not confirmed. Must be tested on the live BPA.
**Screenshot:** Needs new -- step-by-step screenshots of the workflow.

---

## Publish History and Micro-publish
**VERIFY**

> The service settings 'Publish history' tab likely shows more granular entries with micro-publish, indicating which specific components were published rather than just recording a full-service publish.
>
> Entries may include: timestamp, which components were published, who published, and whether it was a full or micro-publish.

**Needs verification:** The original manual mentions Publish history but does not describe its content in detail. The enhanced format needs confirmation.
**Screenshot:** Needs new -- capture publish history showing micro-publish entries.

---

## Full Publish vs Micro-publish
**VERIFY**

> After micro-publish was introduced, the original full-service publish likely still exists. Analysts may choose between:
> - **Full publish**: Republishes everything (original behavior).
> - **Micro-publish**: Publishes only selected/changed components.

**Needs verification:** Whether both options coexist or micro-publish replaced full publish entirely.
**Screenshot:** Unknown -- capture showing both options if they exist side by side.

---

## Micro-publish Error Handling
**VERIFY**

> When micro-publish encounters issues, the system likely provides feedback about:
> - Dependency conflicts (publishing a role that references an unpublished BOT)
> - Validation errors in components being published
> - Warnings about components that should be published together

**Needs verification:** Error handling and dependency checking behavior is unknown. A reviewer should test edge cases.
**Screenshot:** Unknown -- capture any error messages or dependency warnings.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Overview of Micro-publish | NEW | Needs new |
| Micro-publish Options | VERIFY | Needs new |
| Micro-publish Workflow | VERIFY | Needs new |
| Publish History and Micro-publish | VERIFY | Needs new |
| Full Publish vs Micro-publish | VERIFY | Unknown |
| Micro-publish Error Handling | VERIFY | Unknown |
