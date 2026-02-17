---
title: "B. Services"
description: "eRegistrations Manual - B. Services"
---

# B. Services


<!-- PDF Screenshots -->
??? example "Original Manual Screenshots"
 ![pdf-bpa-services-01.png](./screenshots/pdf-bpa-services-01.png){ loading=lazy }

 ![pdf-bpa-services-02.png](./screenshots/pdf-bpa-services-02.png){ loading=lazy }

 ![pdf-bpa-services-03.png](./screenshots/pdf-bpa-services-03.png){ loading=lazy }

 ![pdf-bpa-services-04.png](./screenshots/pdf-bpa-services-04.png){ loading=lazy }

 ![pdf-bpa-services-05.png](./screenshots/pdf-bpa-services-05.png){ loading=lazy }

 ![pdf-bpa-services-06.png](./screenshots/pdf-bpa-services-06.png){ loading=lazy }

 ![pdf-bpa-services-07.png](./screenshots/pdf-bpa-services-07.png){ loading=lazy }

 ![pdf-bpa-services-08.png](./screenshots/pdf-bpa-services-08.png){ loading=lazy }

 ![pdf-bpa-services-09.png](./screenshots/pdf-bpa-services-09.png){ loading=lazy }


<!-- Live BPA Screenshot: live-services-list -->
<div class="live-screenshot" markdown>

![Services List - All configured services grouped by category](./screenshots/live-services-list.png){ loading=lazy }
*Current BPA view (2026-02-15) — [B. Services](https://bpa.cuba.eregistrations.org/services){ target=_blank }*

</div>
<!-- /Live BPA Screenshot: live-services-list -->

![Services List](./screenshots/bpa-services-list.png)
*The Services page showing grouped services with Import and Add buttons, version numbers, and publish dates.*

## Definition of Service

A service is a succession of screens allowing the applicant to obtain one or more registrations.

---

## Definition of Registration

A registration is any authorization (certificate, permit, clearance, document) issued by a government agency that an applicant wants to obtain.

---

## 1. Create a service

!!! warning "Modified — [Verify in BPA](https://bpa.cuba.eregistrations.org/services){ target=_blank }"

A new service can be created by clicking on the 'Add' button. Additionally, services can be imported from another instance or copied from an existing service within the same instance using the 'Import' or 'Copy' functionality. Then a slider opens, where you can type the name of the service and click save.

??? note "Original manual text"
 A new service can be created by clicking on the 'add' button. Then a slider opens, where you can type the name of the service and click save.

<!-- Screenshot needed: Services list showing Add button, and Import/Copy options if available in toolbar -->

!!! example "Services in the Cuba VUCE platform"
 The Cuba platform has **36 services** organized into categories:

 **Trade permits and registrations** (core public-facing services):

 | # | Service name | Description |
 |---|-------------|-------------|
 | 1 | **Permisos eventuales** | Temporary import/export permits |
 | 2 | **Registro de clientes y proveedores** | Registration of clients and suppliers |
 | 3 | **Acreditaciones** | Accreditations for trade operators |
 | 4 | **Certificado de aprobacion del Modelo Instrumentos de medicion** | Type-approval certificate for measuring instruments |
 | 5 | **Permiso fitosanitario** | Phytosanitary (plant health) permit |
 | 6 | **Registro de importadores y exportadores de servicios** | Registry of service importers and exporters |
 | 7 | **Autorizaciones para importar-exportar** | Import/export authorizations |
 | 8 | **Homologacion de equipos de uso final de energia electrica** | Homologation of end-use electrical energy equipment |
 | 9 | **Permiso Zoosanitario de importacion** | Zoosanitary (animal health) import permit |
 | 10 | **Registro de Sustancias sometidas a Fiscalizacion** | Registry of controlled/regulated substances |
 | 11 | **Permisos de equipos de uso final de energia electrica** | Permits for end-use electrical energy equipment |
 | 12 | **Registro Sanitario INHEM** | INHEM sanitary registration |
 | 13 | **Registros Zoosanitarios del CENASA** | CENASA zoosanitary registrations |
 | 14 | **Registro de Sucursales** | Branch office registration |
 | 15 | **Certificado de aprobacion de modelo para instrumentos de medicion** | Model-approval certificate for measuring instruments |
 | 16 | **Certificado sanitario de exportacion** | Sanitary export certificate |
 | 17 | **Licencia Sanitaria del CECMED** | CECMED sanitary license (medicines/medical devices) |
 | 18 | **Licencia de Seguridad ambiental y nuclear** | Environmental and nuclear safety license |
 | 19 | **Permiso de Sustancias sometidas a Fiscalizacion** | Permit for controlled/regulated substances |
 | 20 | **Bitacora** | Logbook / activity journal |
 | 21 | **Consulta de Certificados emitidos** | Query issued certificates |
 | 22 | **Certificado de importacion para donativos medicos** | Import certificate for medical donations |
 | 23 | **Certificado de origen** | Certificate of origin |

 **Administrative services** (operator-facing):

 | # | Service name | Description |
 |---|-------------|-------------|
 | 24 | **Administracion clientes y proveedores** | Client and supplier administration |
 | 25 | **Administracion VUCE** | VUCE platform administration |
 | 26 | **Consultar Registros INHEM** | Query INHEM registrations |
 | 27 | **Administrar Permisos Fitosanitarios** | Manage phytosanitary permits |
 | 28 | **Administrar Registro INHEM** | Manage INHEM registrations |

 **Test/development services**:

 | # | Service name | Description |
 |---|-------------|-------------|
 | 29 | Servicio Template de Prueba | Test template service |
 | 30 | Servicio test | Generic test service |
 | 31 | TestNP2025 | Developer test service |
 | 32 | My Dashboard - copy | Dashboard copy (testing) |
 | 33 | Permiso Fitosanitario - copy | Phytosanitary permit copy (testing) |
 | 34 | new service to merge - copy | Merge test copy |
 | 35 | Permisos eventuales - GDB SACLAP | Eventual permits with GDB SACLAP integration |
 | 36 | Documentacion: Listar datos desde GDB.. | Documentation: List data from GDB |

 This real-world example illustrates how a single eRegistrations instance can host dozens of services spanning multiple government agencies and regulatory domains -- from phytosanitary permits (agriculture) to sanitary licenses (health) to certificates of origin (trade).

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
 The publish flow has been enhanced with micro-publish capability. Micro-publish allows analysts to publish only specific changes (e.g., just form changes, just role changes) rather than republishing the entire service. This is a significant workflow improvement.
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

---

## Micro-publish details


Micro-publish is a feature that allows publishing only specific parts of a service (e.g., form changes, role configuration changes) rather than republishing the entire service. This can speed up the publish process and reduce risk of unintended changes being published.

<!-- Screenshot needed: Micro-publish dialog or dropdown showing publish options -->

---

## Service Groups


Services can be organized into groups for better management. When there are many services in an instance, groups help categorize and organize them. Groups appear in the services list view and can be collapsed or expanded.

<!-- Screenshot needed: Services list showing service groups collapsed and expanded -->

---

## Import/Copy Service


Services can be imported from other eRegistrations instances or copied within the same instance. Import allows replicating a complete service configuration (forms, roles, BOTs, certificates) from one instance to another. Copy creates a duplicate of an existing service within the same instance.

<!-- Screenshot needed: Import/Copy service dialog or buttons in the services list -->

---

## SmartLink


SmartLink is a feature that allows creating links between services, enabling data sharing and workflow coordination across multiple services.

---
