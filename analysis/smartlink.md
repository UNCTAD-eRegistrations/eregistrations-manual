# SmartLink -- Update Analysis

**Changes detected:** 6
**Status:** New section -- ready for review (mostly needs verification)
**Analyzed:** 2026-02-15
**Section type:** Entirely new -- not present in original manual

---

## Overview of SmartLink
**VERIFY**

> SmartLink is a feature in eRegistrations that enables linking between services, allowing data sharing and workflow coordination across multiple services within the same instance. When services are linked through SmartLink, data entered in one service can flow to another service, and workflow steps can be coordinated across service boundaries.
>
> SmartLink may extend or complement the Internal BOT functionality that already exists for cross-service data transfer (documented in the BOT builder section).

**Needs verification:** The exact scope and definition of SmartLink as a user-facing feature needs confirmation. It is unclear whether SmartLink is a specific named feature in the BPA UI or an umbrella term. The MCP tools include a serviceregistration_link endpoint that may be related.
**Screenshot:** Unknown -- needs capture of the SmartLink feature in the BPA.

---

## SmartLink vs Internal BOT for Cross-Service Data Transfer
**VERIFY**

> The original manual documents Internal BOTs (section E, BOT builder) as the mechanism for copying data between services. SmartLink may be:
> 1. A separate, higher-level feature managing service-to-service relationships, with Internal BOTs handling actual data transfer.
> 2. A replacement or evolution of the Internal BOT cross-service functionality.
> 3. A UI layer on top of Internal BOTs that makes cross-service linking easier to configure.

**Needs verification:** A reviewer should determine whether SmartLink replaces, extends, or is unrelated to Internal BOTs for cross-service operations.
**Screenshot:** Unknown -- comparison of SmartLink and Internal BOT cross-service configuration.

---

## Service-Registration Linking
**VERIFY**

> The platform supports linking services to registrations through a dedicated mechanism. This allows a registration created under one service to be associated with or accessible from another service.

**Needs verification:** The MCP tools include a serviceregistration_link endpoint (service_id + registration_id), but it is unclear whether this is part of SmartLink or a general platform capability distinct from the standard 'add registration to service' workflow.
**Screenshot:** Unknown -- capture of the service-registration linking interface.

---

## SmartLink Configuration Workflow
**VERIFY**

> The SmartLink configuration workflow likely involves:
> 1. Navigating to the SmartLink configuration area (location TBD).
> 2. Selecting the source and target services to link.
> 3. Defining what data or workflow elements are shared.
> 4. Configuring the direction of data flow.
> 5. Optionally defining activation conditions.
> 6. Saving and publishing the configuration.

**Needs verification:** This workflow is speculative. No MCP tool or existing documentation provides the specific UI steps. Must be documented from the live BPA.
**Screenshot:** Unknown -- step-by-step screenshots of the SmartLink configuration process.

---

## SmartLink Data Sharing Capabilities
**VERIFY**

> SmartLink may enable sharing of:
> - Applicant form data
> - Document uploads
> - Registration results and certificates
> - Application status and workflow state
> - Fee payment information

**Needs verification:** The actual data types shareable through SmartLink may be more limited or more extensive than listed. Must be verified on the platform.
**Screenshot:** Unknown -- capture of data sharing configuration options.

---

## SmartLink UI Location in BPA
**VERIFY**

> SmartLink may be accessible from:
> - A dedicated 'SmartLink' tab or menu item in the side menu
> - Within service settings or the service bar
> - Through the registration configuration interface
> - As part of the BOT builder interface

**Needs verification:** The exact location must be identified on the live BPA.
**Screenshot:** Unknown -- capture of SmartLink in BPA navigation.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Overview of SmartLink | VERIFY | Unknown |
| SmartLink vs Internal BOT | VERIFY | Unknown |
| Service-Registration Linking | VERIFY | Unknown |
| SmartLink Configuration Workflow | VERIFY | Unknown |
| SmartLink Data Sharing Capabilities | VERIFY | Unknown |
| SmartLink UI Location in BPA | VERIFY | Unknown |
