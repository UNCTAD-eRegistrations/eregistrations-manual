---
title: "SmartLink"
description: "eRegistrations Manual - SmartLink"
---

# SmartLink


<!-- Live BPA Screenshot: live-smartlink -->
<div class="live-screenshot" markdown>

![SmartLink - Dynamic registration linking and data sharing](./screenshots/live-smartlink.png){ loading=lazy }
*Current BPA view (2026-02-15) — [SmartLink](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/registrations){ target=_blank }*
*SmartLink connects registrations for data reuse across services.*


</div>
<!-- /Live BPA Screenshot: live-smartlink -->

## Overview of SmartLink


SmartLink is a feature in eRegistrations that enables linking between services, allowing data sharing and workflow coordination across multiple services within the same instance. When services are linked through SmartLink, data entered in one service can flow to another service, and workflow steps can be coordinated across service boundaries.

SmartLink may extend or complement the Internal BOT functionality that already exists for cross-service data transfer (documented in the BOT builder section). While Internal BOTs copy data between specific form fields across services, SmartLink may provide a higher-level linkage mechanism that manages the overall relationship between services.

---

## SmartLink vs Internal BOT for Cross-Service Data Transfer


SmartLink may be:
1. A separate, higher-level feature that manages service-to-service relationships, with Internal BOTs handling the actual data transfer.
2. A replacement or evolution of the Internal BOT cross-service functionality.
3. A UI layer on top of Internal BOTs that makes cross-service linking easier to configure.


---

## Service-Registration Linking


The platform supports linking services to registrations through a dedicated mechanism. This allows a registration created under one service to be associated with or accessible from another service. This may be a component of the SmartLink feature or a separate capability.

The linking operation connects a service with a registration, enabling the registration's data, documents, and fees to be shared across service boundaries.

---

## SmartLink Configuration Workflow


The SmartLink configuration workflow likely involves:
1. Navigating to the SmartLink configuration area (location in BPA to be verified).
2. Selecting the source service and the target service to link.
3. Defining what data or workflow elements are shared between the services.
4. Configuring the direction of data flow (unidirectional or bidirectional).
5. Optionally defining conditions under which the link is active.
6. Saving and publishing the link configuration.


---

## SmartLink Data Sharing Capabilities


SmartLink may enable sharing of the following types of data between linked services:
- Applicant form data (personal information, company details, etc.)
- Document uploads
- Registration results and certificates
- Application status and workflow state
- Fee payment information


---

## SmartLink UI Location in BPA


SmartLink may be accessible from one or more of the following locations in the BPA:
- A dedicated 'SmartLink' tab or menu item in the side menu.
- Within the service settings or service bar.
- Through the registration configuration interface.
- As part of the BOT builder interface.


---
