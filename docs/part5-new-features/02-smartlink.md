---
title: "SmartLink"
description: "eRegistrations Manual - SmartLink"
---

# SmartLink


<div class="live-screenshot" markdown>

![SmartLink - Dynamic registration linking and data sharing](../screenshots/live-smartlink.png){ loading=lazy }
*Current BPA view — SmartLink*
*SmartLink connects registrations for data reuse across services.*


</div>

## Overview of SmartLink


SmartLink is a feature in eRegistrations that enables linking between services, allowing data sharing and workflow coordination across multiple services within the same instance. When services are linked through SmartLink, data entered in one service can flow to another service, and workflow steps can be coordinated across service boundaries.

SmartLink may extend or complement the Internal BOT functionality that already exists for cross-service data transfer (documented in the BOT builder section). While Internal BOTs copy data between specific form fields across services, SmartLink may provide a higher-level linkage mechanism that manages the overall relationship between services.

---

## SmartLink vs Internal BOT for Cross-Service Data Transfer


SmartLink may be:
1. A separate, higher-level feature that manages service-to-service relationships, with Internal BOTs handling the actual data transfer.
2. A replacement or evolution of the Internal BOT cross-service functionality.
3. A UI layer on top of Internal BOTs that makes cross-service linking easier to configure.

The exact relationship between SmartLink and Internal BOTs needs to be verified.

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

The exact steps, UI location, and available options need verification on the live platform.

---

## SmartLink Data Sharing Capabilities


SmartLink may enable sharing of the following types of data between linked services:
- Applicant form data (personal information, company details, etc.)
- Document uploads
- Registration results and certificates
- Application status and workflow state
- Fee payment information

The exact types of data that can be shared and any restrictions on data sharing need verification.

---

## SmartLink UI Location in BPA


SmartLink may be accessible from one or more of the following locations in the BPA:
- A dedicated 'SmartLink' tab or menu item in the side menu.
- Within the service settings or service bar.
- Through the registration configuration interface.
- As part of the BOT builder interface.

The exact location and navigation path need to be verified on the live platform.

---
