---
title: "B. Services"
description: "eRegistrations Manual - B. Services"
---

# B. Services


<!-- PDF Screenshots -->
??? example "Original Manual Screenshots"
    ![pdf-bpa-services-01.png](../screenshots/pdf-bpa-services-01.png){ loading=lazy }

    ![pdf-bpa-services-02.png](../screenshots/pdf-bpa-services-02.png){ loading=lazy }

    ![pdf-bpa-services-03.png](../screenshots/pdf-bpa-services-03.png){ loading=lazy }

    ![pdf-bpa-services-04.png](../screenshots/pdf-bpa-services-04.png){ loading=lazy }

    ![pdf-bpa-services-05.png](../screenshots/pdf-bpa-services-05.png){ loading=lazy }

    ![pdf-bpa-services-06.png](../screenshots/pdf-bpa-services-06.png){ loading=lazy }

    ![pdf-bpa-services-07.png](../screenshots/pdf-bpa-services-07.png){ loading=lazy }

    ![pdf-bpa-services-08.png](../screenshots/pdf-bpa-services-08.png){ loading=lazy }

    ![pdf-bpa-services-09.png](../screenshots/pdf-bpa-services-09.png){ loading=lazy }


!!! info "Update Summary (7 changes detected)"
    7 changes detected: Import/copy service functionality added, service groups feature is new, micro-publish added to publish flow, service bar has additional buttons, archive workflow may have UI changes, service activation toggle unchanged, SmartLink feature is new.


<!-- Live BPA Screenshot: live-services-list -->
<div class="live-screenshot" markdown>

![Services List - All configured services grouped by category](../screenshots/live-services-list.png){ loading=lazy }
*Current BPA view (2026-02-15) — [B. Services](https://bpa.cuba.eregistrations.org/services){ target=_blank }*

</div>
<!-- /Live BPA Screenshot: live-services-list -->

![Services List](../screenshots/bpa-services-list.png)
*The Services page showing grouped services with Import and Add buttons, version numbers, and publish dates.*

## Definition of Service

A service is a succession of screens allowing the applicant to obtain one or more registrations.

---

## Definition of Registration

A registration is any authorization (certificate, permit, clearance, document) issued by a government agency that an applicant wants to obtain.

---

## 1. Create a service

!!! warning "Modified — [Verify in BPA](https://bpa.cuba.eregistrations.org/services){ target=_blank }"
    The platform now supports importing services from other instances and copying existing services. This is a significant addition that was not in the original manual. The Import functionality allows replication of service configurations between instances, and Copy allows duplicating a service within the same instance.

A new service can be created by clicking on the 'Add' button. Additionally, services can be imported from another instance or copied from an existing service within the same instance using the 'Import' or 'Copy' functionality. Then a slider opens, where you can type the name of the service and click save.

??? note "Original manual text"
    A new service can be created by clicking on the 'add' button. Then a slider opens, where you can type the name of the service and click save.

<!-- Screenshot needed: Services list showing Add button, and Import/Copy options if available in toolbar -->
*Screenshot: Services list showing Add button, and Import/Copy options if available in toolbar*

---

## Service activation toggle

To activate the service, click on the toggle next to the service name. Green indicates that the service is active. Inactive services will not be available on the public interface.

<!-- Verify screenshot: Service toggle - verify visual appearance hasn't changed -->

---

## Archive/Unarchive service

An inactive service can be archived in the system by clicking on the archive button. Archived services can be restored by clicking on 'archived services' and clicking on the unarchive button.

<!-- Verify screenshot: Archive/unarchive buttons - verify visual appearance -->

---

## Remove service

A service can be removed from the system by clicking on the cross.

---

## Post-creation note

Once a service has been created, one or more registrations must be created and assigned to the service.

---

## 2. The Service bar

!!! warning "Modified — [Verify in BPA](https://bpa.cuba.eregistrations.org/services){ target=_blank }"
    The publish flow has been enhanced with micro-publish capability. Micro-publish allows analysts to publish only specific changes (e.g., just form changes, just role changes) rather than republishing the entire service. This is a significant workflow improvement. The exact UI for this needs verification.

This is the service bar, just below the instance (blue) bar. This appears when you click on a service from the list of services in the work space.

The service bar consists of:
- The name of the service, that can be edited by clicking on the edit button next to it
- The 'preview service' button: this displays the application file as seen from the user interface
- The 'publish service' button: when a service is published, it becomes available on the public interface. Every time a change is made in the BPA that needs to be reflected on the public interface (DS), the service has to be (re)published. The publish flow now supports micro-publish, which allows publishing only specific changes rather than the entire service.
- The 'see service' button: This opens the service in the public interface (DS), in a new tab
- Service settings icon

??? note "Original manual text"
    This is the service bar, just below the instance (blue) bar. This appears when you click on a service from the list of services in the work space.
    
    The service bar consists of:
    - The name of the service, that can be edited by clicking on the edit button next to it
    - The 'preview service' button: this displays the application file as seen from the user interface
    - The 'publish service' button: when a service is published, it becomes available on the public interface. Every time a change is made in the BPA that needs to be reflected on the public interface (DS), the service has to be (re)published.
    - The 'see service' button. This opens the service in the public interface (DS), in a new tab
    - Service settings icon

<!-- Screenshot needed: Service bar showing all buttons including any new micro-publish UI elements -->
*Screenshot: Service bar showing all buttons including any new micro-publish UI elements*

---

## Micro-publish details

!!! question "Needs Verification — [Verify in BPA](https://bpa.cuba.eregistrations.org/services){ target=_blank }"
    Micro-publish is known to exist in the platform but the exact UI workflow, button placement, and options need to be verified on a live instance. The manual should document how to access micro-publish and what options are available.

Micro-publish is a feature that allows publishing only specific parts of a service (e.g., form changes, role configuration changes) rather than republishing the entire service. This can speed up the publish process and reduce risk of unintended changes being published.

<!-- Screenshot needed: Micro-publish dialog or dropdown showing publish options -->
*Screenshot: Micro-publish dialog or dropdown showing publish options*

---

## Service Groups

!!! success "New Feature"
    Service groups is a feature that was added to the platform after the original manual was written. It allows organizing services into logical groups (e.g., by ministry, by type of registration). This needs verification on the current platform to confirm the exact UI and workflow.

Services can be organized into groups for better management. When there are many services in an instance, groups help categorize and organize them. Groups appear in the services list view and can be collapsed or expanded.

<!-- Screenshot needed: Services list showing service groups collapsed and expanded -->
*Screenshot: Services list showing service groups collapsed and expanded*

---

## Import/Copy Service

!!! question "Needs Verification — [Verify in BPA](https://bpa.cuba.eregistrations.org/services){ target=_blank }"
    The Import and Copy service features are known to exist in the platform. Import is particularly useful when setting up new country instances based on existing configurations. The exact location of these buttons (toolbar, context menu, or service settings) and the workflow details need to be verified on a live instance.

Services can be imported from other eRegistrations instances or copied within the same instance. Import allows replicating a complete service configuration (forms, roles, BOTs, certificates) from one instance to another. Copy creates a duplicate of an existing service within the same instance.

<!-- Screenshot needed: Import/Copy service dialog or buttons in the services list -->
*Screenshot: Import/Copy service dialog or buttons in the services list*

---

## SmartLink

!!! question "Needs Verification — [Verify in BPA](https://bpa.cuba.eregistrations.org/services){ target=_blank }"
    SmartLink is mentioned in the plan as a new feature. It may or may not be directly visible in the Services section. Its exact placement in the BPA UI and relationship to the services list needs to be verified. It may belong in a different section of the manual.

SmartLink is a feature that allows creating links between services, enabling data sharing and workflow coordination across multiple services.

---
