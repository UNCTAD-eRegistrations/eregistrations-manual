---
title: "SmartLink"
description: "eRegistrations Manual - SmartLink"
---

# SmartLink

!!! info "Update Summary (6 changes detected)"
    Entirely new section.
    SmartLink is a feature for linking between services in eRegistrations, enabling data sharing and workflow coordination across multiple services within the same instance.
    The original manual documents Internal BOTs for cross-service data transfer (section E, BOT builder), but SmartLink appears to be a higher-level or complementary mechanism.
    The exact relationship to Internal BOTs, the UI configuration workflow, and the available linking options all need verification.
    The MCP tools include a serviceregistration_link endpoint suggesting service-registration linkage is part of the infrastructure.
    6 blocks identified, mostly needing verification due to limited concrete information.


<!-- Live BPA Screenshot: live-smartlink -->
<div class="live-screenshot" markdown>

![SmartLink - Dynamic registration linking and data sharing](../screenshots/live-smartlink.png){ loading=lazy }
*Current BPA view (2026-02-15) — [SmartLink](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/registrations){ target=_blank }*
*SmartLink connects registrations for data reuse across services.*


</div>
<!-- /Live BPA Screenshot: live-smartlink -->

## Overview of SmartLink

!!! question "Needs Verification"
    SmartLink is identified as a new feature in the manual update plan. The MCP tools include a 'serviceregistration_link' endpoint that links services to registrations, which may be part of the SmartLink infrastructure. However, the exact scope and definition of 'SmartLink' as a user-facing feature needs verification. It is unclear whether SmartLink is a specific named feature in the BPA UI or an umbrella term for service-linking capabilities.

SmartLink is a feature in eRegistrations that enables linking between services, allowing data sharing and workflow coordination across multiple services within the same instance. When services are linked through SmartLink, data entered in one service can flow to another service, and workflow steps can be coordinated across service boundaries.

SmartLink may extend or complement the Internal BOT functionality that already exists for cross-service data transfer (documented in the BOT builder section). While Internal BOTs copy data between specific form fields across services, SmartLink may provide a higher-level linkage mechanism that manages the overall relationship between services.

---

## SmartLink vs Internal BOT for Cross-Service Data Transfer

!!! question "Needs Verification"
    The original manual clearly documents Internal BOTs for cross-service data transfer. SmartLink is a newer feature whose relationship to Internal BOTs is not clear from the available information. A human reviewer should determine whether SmartLink replaces, extends, or is unrelated to Internal BOTs.

The original manual documents Internal BOTs (section E, BOT builder) as the mechanism for copying data between services. An Internal BOT can be configured to 'paste data from current service form to another form in a different service' by changing the receiving service in the mapping page.

SmartLink may be:
1. A separate, higher-level feature that manages service-to-service relationships, with Internal BOTs handling the actual data transfer.
2. A replacement or evolution of the Internal BOT cross-service functionality.
3. A UI layer on top of Internal BOTs that makes cross-service linking easier to configure.

The exact relationship between SmartLink and Internal BOTs needs to be verified.

---

## Service-Registration Linking

!!! question "Needs Verification"
    The MCP tools include a 'serviceregistration_link' endpoint that takes a service_id and registration_id, suggesting that service-registration linking is a supported operation. However, it is not clear whether this is part of SmartLink or a general platform capability. The current manual documents adding registrations to services (section C) but does not mention linking registrations across services.

The platform supports linking services to registrations through a dedicated mechanism. This allows a registration created under one service to be associated with or accessible from another service. This may be a component of the SmartLink feature or a separate capability.

The linking operation connects a service with a registration, enabling the registration's data, documents, and fees to be shared across service boundaries.

---

## SmartLink Configuration Workflow

!!! question "Needs Verification"
    The configuration workflow is speculative based on the general concept of service linking. No MCP tool or existing documentation provides the specific UI steps. A human reviewer must document the actual workflow by accessing the BPA.

The SmartLink configuration workflow likely involves:
1. Navigating to the SmartLink configuration area (location in BPA to be verified).
2. Selecting the source service and the target service to link.
3. Defining what data or workflow elements are shared between the services.
4. Configuring the direction of data flow (unidirectional or bidirectional).
5. Optionally defining conditions under which the link is active.
6. Saving and publishing the link configuration.

The exact steps, UI location, and available options need verification on the live platform.

---

## SmartLink Data Sharing Capabilities

!!! question "Needs Verification"
    The data sharing capabilities are speculative based on what would be useful in a multi-service context. The actual capabilities may be more limited or more extensive. A human reviewer should verify what data types can be shared through SmartLink.

SmartLink may enable sharing of the following types of data between linked services:
- Applicant form data (personal information, company details, etc.)
- Document uploads
- Registration results and certificates
- Application status and workflow state
- Fee payment information

The exact types of data that can be shared and any restrictions on data sharing need verification.

---

## SmartLink UI Location in BPA

!!! question "Needs Verification"
    Without access to the live BPA UI, the exact location of SmartLink cannot be determined. The MCP tools do not describe UI navigation. A human reviewer should identify where SmartLink is accessed in the BPA.

SmartLink may be accessible from one or more of the following locations in the BPA:
- A dedicated 'SmartLink' tab or menu item in the side menu.
- Within the service settings or service bar.
- Through the registration configuration interface.
- As part of the BOT builder interface.

The exact location and navigation path need to be verified on the live platform.

---
