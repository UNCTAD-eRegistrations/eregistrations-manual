# B. Services — Update Analysis

**Changes detected:** 7
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## Definition of Service
**UNCHANGED**

> A service is a succession of screens allowing the applicant to obtain one or more registrations.

---

## Definition of Registration
**UNCHANGED**

> A registration is any authorization (certificate, permit, clearance, document) issued by a government agency that an applicant wants to obtain.

---

## 1. Create a service
**MODIFIED**

**Original:**
> A new service can be created by clicking on the 'add' button. Then a slider opens, where you can type the name of the service and click save.

**Updated:**
> A new service can be created by clicking on the 'Add' button. Additionally, services can be imported from another instance or copied from an existing service within the same instance using the 'Import' or 'Copy' functionality. Then a slider opens, where you can type the name of the service and click save.

**What changed:** The platform now supports importing services from other instances and copying existing services within the same instance. Import allows replication of service configurations between instances, and Copy allows duplicating a service.
**Screenshot:** Needs update — capture services list showing Add button and Import/Copy options.

---

## Service activation toggle
**UNCHANGED**

> To activate the service, click on the toggle next to the service name. Green indicates that the service is active. Inactive services will not be available on the public interface.

**Screenshot:** Verify — confirm visual appearance hasn't changed.

---

## Archive/Unarchive service
**UNCHANGED**

> An inactive service can be archived in the system by clicking on the archive button. Archived services can be restored by clicking on 'archived services' and clicking on the unarchive button.

**Screenshot:** Verify — confirm visual appearance.

---

## Remove service
**UNCHANGED**

> A service can be removed from the system by clicking on the cross.

---

## Post-creation note
**UNCHANGED**

> Once a service has been created, one or more registrations must be created and assigned to the service.

---

## 2. The Service bar
**MODIFIED**

**Original:**
> The service bar consists of: the name of the service (editable), the 'preview service' button, the 'publish service' button, the 'see service' button, and the service settings icon.

**Updated:**
> The service bar consists of: the name of the service (editable), the 'preview service' button, the 'publish service' button (now supports micro-publish for publishing only specific changes), the 'see service' button, and the service settings icon.

**What changed:** The publish flow has been enhanced with micro-publish capability, allowing analysts to publish only specific changes rather than the entire service.
**Screenshot:** Needs update — capture service bar showing all buttons including micro-publish UI.

---

## Micro-publish
**VERIFY**

> Micro-publish is a feature that allows publishing only specific parts of a service (e.g., form changes, role configuration changes) rather than republishing the entire service. This can speed up the publish process and reduce risk of unintended changes being published.

**Needs verification:** The exact UI workflow, button placement, and available options for micro-publish need to be confirmed on a live instance.
**Screenshot:** Needs new — capture micro-publish dialog or dropdown.

---

## Service Groups
**NEW**

> Services can be organized into groups for better management. When there are many services in an instance, groups help categorize and organize them. Groups appear in the services list view and can be collapsed or expanded.

**Why new:** Service groups was added to the platform after the original manual. It helps organize services by ministry, registration type, etc.
**Screenshot:** Needs new — capture services list showing groups.

---

## Import/Copy Service
**VERIFY**

> Services can be imported from other eRegistrations instances or copied within the same instance. Import allows replicating a complete service configuration (forms, roles, BOTs, certificates) from one instance to another. Copy creates a duplicate within the same instance.

**Needs verification:** The exact location of Import/Copy buttons and the workflow details need to be verified on a live instance.
**Screenshot:** Needs new — capture Import/Copy dialog or buttons.

---

## SmartLink
**VERIFY**

> SmartLink is a feature that allows creating links between services, enabling data sharing and workflow coordination across multiple services.

**Needs verification:** SmartLink's exact placement in the BPA UI and its relationship to the services section needs to be confirmed. It may belong in a different section of the manual.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Definition of Service | UNCHANGED | Same |
| Definition of Registration | UNCHANGED | Same |
| 1. Create a service | MODIFIED | Needs update |
| Service activation toggle | UNCHANGED | Verify |
| Archive/Unarchive | UNCHANGED | Verify |
| Remove service | UNCHANGED | Same |
| Post-creation note | UNCHANGED | Same |
| 2. The Service bar | MODIFIED | Needs update |
| Micro-publish | VERIFY | Needs new |
| Service Groups | NEW | Needs new |
| Import/Copy Service | VERIFY | Needs new |
| SmartLink | VERIFY | Unknown |
