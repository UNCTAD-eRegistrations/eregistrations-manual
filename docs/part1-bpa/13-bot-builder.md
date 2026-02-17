---
title: "E. BOT builder"
description: "eRegistrations Manual - E. BOT builder (Original pages 77-96)"
---

# E. BOT builder


??? example "Original Manual Screenshots"
    ![pdf-bpa-bot-builder-01.png](../screenshots/pdf-bpa-bot-builder-01.png){ loading=lazy }

    ![pdf-bpa-bot-builder-02.png](../screenshots/pdf-bpa-bot-builder-02.png){ loading=lazy }

    ![pdf-bpa-bot-builder-03.png](../screenshots/pdf-bpa-bot-builder-03.png){ loading=lazy }

    ![pdf-bpa-bot-builder-04.png](../screenshots/pdf-bpa-bot-builder-04.png){ loading=lazy }

    ![pdf-bpa-bot-builder-05.png](../screenshots/pdf-bpa-bot-builder-05.png){ loading=lazy }

    ![pdf-bpa-bot-builder-06.png](../screenshots/pdf-bpa-bot-builder-06.png){ loading=lazy }

    ![pdf-bpa-bot-builder-07.png](../screenshots/pdf-bpa-bot-builder-07.png){ loading=lazy }

    ![pdf-bpa-bot-builder-08.png](../screenshots/pdf-bpa-bot-builder-08.png){ loading=lazy }

    ![pdf-bpa-bot-builder-09.png](../screenshots/pdf-bpa-bot-builder-09.png){ loading=lazy }

    ![pdf-bpa-bot-builder-10.png](../screenshots/pdf-bpa-bot-builder-10.png){ loading=lazy }

    ![pdf-bpa-bot-builder-11.png](../screenshots/pdf-bpa-bot-builder-11.png){ loading=lazy }

    ![pdf-bpa-bot-builder-12.png](../screenshots/pdf-bpa-bot-builder-12.png){ loading=lazy }

    ![pdf-bpa-bot-builder-13.png](../screenshots/pdf-bpa-bot-builder-13.png){ loading=lazy }

    ![pdf-bpa-bot-builder-14.png](../screenshots/pdf-bpa-bot-builder-14.png){ loading=lazy }

    ![pdf-bpa-bot-builder-15.png](../screenshots/pdf-bpa-bot-builder-15.png){ loading=lazy }

    ![pdf-bpa-bot-builder-16.png](../screenshots/pdf-bpa-bot-builder-16.png){ loading=lazy }

    ![pdf-bpa-bot-builder-17.png](../screenshots/pdf-bpa-bot-builder-17.png){ loading=lazy }

    ![pdf-bpa-bot-builder-18.png](../screenshots/pdf-bpa-bot-builder-18.png){ loading=lazy }

    ![pdf-bpa-bot-builder-19.png](../screenshots/pdf-bpa-bot-builder-19.png){ loading=lazy }

    ![pdf-bpa-bot-builder-20.png](../screenshots/pdf-bpa-bot-builder-20.png){ loading=lazy }

    ![pdf-bpa-bot-builder-21.png](../screenshots/pdf-bpa-bot-builder-21.png){ loading=lazy }

    ![pdf-bpa-bot-builder-22.png](../screenshots/pdf-bpa-bot-builder-22.png){ loading=lazy }

    ![pdf-bpa-bot-builder-23.png](../screenshots/pdf-bpa-bot-builder-23.png){ loading=lazy }

    ![pdf-bpa-bot-builder-24.png](../screenshots/pdf-bpa-bot-builder-24.png){ loading=lazy }

    ![pdf-bpa-bot-builder-25.png](../screenshots/pdf-bpa-bot-builder-25.png){ loading=lazy }

    ![pdf-bpa-bot-builder-26.png](../screenshots/pdf-bpa-bot-builder-26.png){ loading=lazy }

    ![pdf-bpa-bot-builder-27.png](../screenshots/pdf-bpa-bot-builder-27.png){ loading=lazy }

    ![pdf-bpa-bot-builder-28.png](../screenshots/pdf-bpa-bot-builder-28.png){ loading=lazy }

    ![pdf-bpa-bot-builder-29.png](../screenshots/pdf-bpa-bot-builder-29.png){ loading=lazy }

    ![pdf-bpa-bot-builder-30.png](../screenshots/pdf-bpa-bot-builder-30.png){ loading=lazy }

    ![pdf-bpa-bot-builder-31.png](../screenshots/pdf-bpa-bot-builder-31.png){ loading=lazy }

    ![pdf-bpa-bot-builder-32.png](../screenshots/pdf-bpa-bot-builder-32.png){ loading=lazy }

    ![pdf-bpa-bot-builder-33.png](../screenshots/pdf-bpa-bot-builder-33.png){ loading=lazy }

    ![pdf-bpa-bot-builder-34.png](../screenshots/pdf-bpa-bot-builder-34.png){ loading=lazy }


<div class="live-screenshot" markdown>

![BOT Builder - Data bots and external service integrations](../screenshots/live-bot-builder.png){ loading=lazy }
*Current BPA view — E. BOT Builder*

</div>

## BOT definition and types

A BOT is an automated action performed by the system. There are three types of BOTs:

- **Data BOT** — exchanges data between an eRegistrations service and an external system (such as a GDB database or a Mule service). Categories include create, read, update, list, and other.
- **Document BOT** — generates, displays, or uploads a document (such as a PDF certificate). Categories include generate-and-display, generate-and-upload, and generate-upload-display.
- **Internal BOT** — copies data between components within the same service or across different services, without connecting to an external system.


---

## a) Document BOT creation

Click on BOT Builder tab on the side menu. Click on 'add' button. A slider opens. Enter BOT name. Select 'Document BOT' under Type. Categories field appears. Select 'generate and display', 'generate and upload', or 'generate upload display'. Select document from dropdown. Only one document can be generated under one button.


---

## b) Data BOT creation and categories

Click on BOT Builder tab on the side menu. Click on 'add' button. A slider opens. Enter BOT name. Select 'Data BOT' under Type. Categories field appears. Select the appropriate category: Create, Read, Update, List, Exist, Log, or Other. Create.


---

## c) Internal BOT

Internal BOT enables the analyst to copy data from one component to another. It can be performed on components within the same form, between two different forms, between grid components, or even between forms in different services. Linking services with internal BOT allows pasting data from current service form to another form in a different service. The receiving service can be changed in the mapping page. Can be combined with Polling BOT for awaiting results.


---

## d) Adding actions (BOT roles) to the form

Three ways to add action (BOT role) to the form: 1. To a button, 2. To an input field, 3. To a block.

BOT applied to button: Drag block, add table, add button. Click Actions, click 'click to add BOT', drag and drop action. Data and/or Document bots can be executed either in sequence or concurrently (designated toggle). System actions cannot be executed concurrently with any Data or Document bots. It is possible to add actions after System actions. Exceptions which always need to be last: 'Validate Send page' and any Part B System actions.

BOT applied to field: Action will be executed after 1.5 seconds from last change in the field.

BOT applied to block: Action will be executed after the block is rendered. If no determinant, executes on form load. If determinant exists, executes when determinant becomes true.


---

## 2. Mapping between eRegistrations and GDB

Mapping or data mapping is the process of matching fields from one database to another. Select the database from GDB with the correct version. Create map links by clicking on data on eRegistrations database then clicking on same data in GDB. Field types should match (indicated by blue+red line if not). Eye icon to hide fields. Version updates require reselection.

Each data bot has its own mapping configuration. For example, the "PERMISO EVENTUAL Crear" bot maps eRegistrations form fields (such as applicant name, permit type, operation dates) to the corresponding GDB.GDB-PE(1.5)-create service fields. The version number (e.g., 1.5, 1.0) in the external service name indicates the GDB API version; when the GDB version is updated, the bot mapping must be reselected to match the new version.


---

## 2b. Mapping in internal BOTs

Map data between forms in the same service. Two trees display all forms available. Click expand all, then create links between matching data by clicking left tree then right tree. Field type must match.

For example, the "Interno - Certificado de NUEVO permiso eventual" bot maps fields from the Part B revision form to the certificate form. Both sides of the mapping show eRegistrations form trees (rather than one side showing a GDB schema), since the data transfer is entirely internal.

---

## 2c. Mapping transformations

Transformations are logic conditions applied to mapping. Click on white circle on existing mapping connection to add. Violet circle indicates transformation applied. List: Equals value without case-sensitive, Not equals value, Not equals value without case-sensitive, Contains value, Contains value without case-sensitive, Not contains value, Not contains value without case-sensitive, Less than value, Less or equal than value, Greater than value, Greater or equal than value, Starts with, Similarity (with ordering parameter), Fuzzy and fuzzy with precision class 1-8, Regex expression, Regex expression without case-sensitive, Nullable, Not nullable, IN.

---

## External services (Muleservices) used by bots


| External service | Type | Used by |
|-----------------|------|---------|
| GDB.GDB-PE(1.5)-create | GDB | PERMISO EVENTUAL Crear |
| GDB.GDB-PE(1.5)-read | GDB | PERMISO EVENTUAL Leer |
| GDB.GDB-PE(1.5)-update | GDB | PERMISO EVENTUAL Actualizar |
| GDB.GDB-PE(1.5)-list | GDB | PERMISO EVENTUAL Listar |
| GDB.GDB-PERMISOS(1.5)-create-entries | GDB | PERMISO EVENTUAL Crear entries |
| GDB.GDB-PERMISOS(1.5)-update-entries | GDB | PERMISO EVENTUAL Actualizar entries |
| GDB.GDB-PERMISOS(1.5)-list | GDB | PERMISO EVENTUAL Listar productos |
| GDB.GDB-FLAT UM 2(1.0)-read | GDB | UNIDAD DE MEDIDA Leer |
| mincex-actualizar-eventual | Mule | MINCEX DB Crear ejecucion |
| mincex-excel-pe | Mule | MINCEX XLS nuevos, MINCEX XLS modificaciones |
| generic-pdf-generator | Mule | All 3 document bots |
| generic-pdf-display | Mule | All 3 document bots |

---

---

## Mapping UI improvements

The mapping UI may have received visual or functional improvements since the manual was written. The platform provides bot_mapping_summary and bot_suggest_mappings capabilities, suggesting that automated mapping suggestions may now be available to help analysts create field connections more efficiently.


---

## BOT input/output visibility

The platform includes bot_input_visibility_update and bot_output_visibility_update operations, allowing analysts to control which BOT input and output fields are visible in the mapping interface. This can be used to hide irrelevant fields and simplify the mapping view when working with external services that expose many fields.

---

**See also:** [Roles](14-roles.md) · [Part B (Processing)](../part5-new-features/06-part-b.md) · [Certificates](15-certificates.md)
