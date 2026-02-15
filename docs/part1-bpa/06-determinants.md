---
title: "D.2. Determinants"
description: "eRegistrations Manual - D.2. Determinants (Original pages p.28-31)"
---

# D.2. Determinants


<!-- PDF Screenshots -->
??? example "Original Manual Screenshots"
    ![pdf-bpa-determinants-01.png](../screenshots/pdf-bpa-determinants-01.png){ loading=lazy }

    ![pdf-bpa-determinants-02.png](../screenshots/pdf-bpa-determinants-02.png){ loading=lazy }

    ![pdf-bpa-determinants-03.png](../screenshots/pdf-bpa-determinants-03.png){ loading=lazy }

    ![pdf-bpa-determinants-04.png](../screenshots/pdf-bpa-determinants-04.png){ loading=lazy }

    ![pdf-bpa-determinants-05.png](../screenshots/pdf-bpa-determinants-05.png){ loading=lazy }

    ![pdf-bpa-determinants-06.png](../screenshots/pdf-bpa-determinants-06.png){ loading=lazy }


!!! info "Update Summary (6 changes detected) — [Verify in BPA](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/forms/applicant-form){ target=_blank }"
    The determinant type system has been significantly expanded from the original manual:

    1. **7 typed determinants** (was 1 generic type): text, select/radio, numeric, boolean, date, classification, grid
    2. **Classification determinants** — new type with ALL/ANY/NONE multi-select evaluation
    3. **Grid determinants** — new type for conditions based on data grid content
    4. **Expanded operators** — text: CONTAINS, STARTS_WITH, ENDS_WITH; numeric: GREATER_THAN, LESS_THAN comparisons
    5. **Effects system** — component behaviours beyond simple show/hide (see [Effects System](../part5-new-features/01-effects-system.md))
    6. **40 determinants** currently configured in *Permisos eventuales* service


<!-- Live BPA Screenshot: live-determinants -->
<div class="live-screenshot" markdown>

![Determinants - Manage determinants drawer with condition rules](../screenshots/live-determinants.png){ loading=lazy }
*Current BPA view (2026-02-15) — [D.2. Determinants](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/forms/applicant-form){ target=_blank }*
*Click the "D" icon on any form component to open the determinants panel*


</div>
<!-- /Live BPA Screenshot: live-determinants -->

## Determinant definition

A determinant is a filter allowing to take into account the particular case of each applicant in a service. It determines/triggers: if an applicant is subject to a registration and/or what requirements the applicant must provide to register (data, documents, fees).

---

## 2.1. Determinants of the registration

For each registration, an analyst must be able to report/input in the rule engine, in clear language, rules defining who/what are the subjects of the registration. Options: 1) The registration is mandatory to all, 2) The registration is mandatory to specific subjects, 3) The registration is optional to all, 4) The registration is optional to specific subjects. Specific subjects can be defined through determinants or a combination of determinants combined by 'AND' and 'OR' operators.

---

## 2.2. Determinants of the requirements - role and purpose

Determinants play a very important role in the application file. They allow to show or hide specific parts of the application form to adapt the form to the particular situation of each applicant. Determinants can be created on the basis of fields/questions in the Guide or in the form and can be applied to any field/block.

---

## Creating a determinant - determinant types

To create a determinant on a block, click on the edit button (gear icon). A slider will open. Click on the Determinant tab, Add. Insert name of determinant, choose the determinant type. The platform supports the following determinant types:

### 1. Text determinant

Evaluates text field values. Operators: `EQUAL`, `NOT_EQUAL`, `CONTAINS`, `STARTS_WITH`, `ENDS_WITH`. Can be used with an empty value to check if a field is empty/not empty.

!!! example "Real examples from *Permisos eventuales*"
    - **"Fundamentación != empty"** — field `applicantFundamentacion`, operator `NOT_EQUAL`, value `""` (empty). Shows a section only when the applicant has provided a justification text.
    - **"cliente extranjero != empty"** — field `applicantClienteExtranjero`, operator `NOT_EQUAL`, value `""`. Shows foreign client fields only when data is present.
    - **"Funciono la descarga = true"** — field `aprobarStatusDeLaDescarga`, operator `EQUAL`, value `"true"`. Controls workflow based on download status.

### 2. Select / Radio determinant

Evaluates select, dropdown, or radio button field values. Operators: `EQUAL`, `NOT_EQUAL`.

!!! example "Real examples from *Permisos eventuales*"
    - **"Que necesita = nuevo permiso"** — field `applicantQueQuiereHacer`, value `"registrarNuevo"`. Shows the "new permit" workflow when the applicant selects they need a new permit.
    - **"Que necesita = modificar permiso existente"** — same field, value `"modificarExistente"`. Shows the "modify existing permit" workflow instead.
    - **"EMPRESA pertenece Zona Mariel"** — field `applicantPermisoEventual2`, value `"true"`. Shows additional fields for companies in the Mariel Special Zone.
    - **"Quiere = Cancelar Operación"** vs **"Quiere = Realizar Operación"** — field `datosComplementariosRadio`, with different values. Controls which processing path to follow.

### 3. Numeric determinant

Evaluates number field values. Operators: `EQUAL`, `NOT_EQUAL`, `GREATER_THAN`, `LESS_THAN`, `GREATER_THAN_OR_EQUAL`, `LESS_THAN_OR_EQUAL`.

!!! example "Real examples from *Permisos eventuales*"
    - **"Cantidad de productos modificados > 0"** — field `revisionCantidadProductosModificadosAprobados`, operator `GREATER_THAN`, value `0`. Shows the modified products section only when there are products to review.
    - **"Contador productos nuevos > 0"** — field `applicantContadorProductosNuevos`, operator `GREATER_THAN`, value `0`. Shows the new products section only when new products exist.

### 4. Boolean determinant

Evaluates checkbox/toggle values. Checks if a boolean field is `True` or `False`.

!!! example "Real examples from *Permisos eventuales*"
    - **"Confirmo la exactitud = SI (formulario parte A)"** — field `applicantCheckbox2`, value `true`. Enables the submit button only after the applicant confirms data accuracy.
    - **"Form is valid"** — field `isFormValid`, value `true`. Controls whether submission-related actions are available.
    - **"User is logged in"** — field `is_submit_allowed`, value `true`. Gates functionality that requires authentication.

### 5. Date determinant

Evaluates date/time field values. Can check for specific dates or empty dates.

**Special case — Empty date field**: Create a determinant with a selected date time field with predicate `=` or `!=` without selecting any date. This allows checking whether a date has been filled in or left empty.

### 6. Classification determinant

Evaluates catalog/classification field values. Operators: `EQUAL`, `NOT_EQUAL`. Supports multi-select evaluation with subject modes: `ALL`, `ANY`, `NONE`.

!!! example "Real examples from *Permisos eventuales*"
    This service uses **12 classification determinants** to control form layout based on the type of trade operation:

    - **"Operación = exportar (nuevos - parte A)"** — field `applicantTipoDeOperacion2`, operator `EQUAL`. Shows export-specific fields for new product entries.
    - **"Operación = importar (nuevos - parte A)"** — same field, different classification value. Shows import-specific fields instead.
    - The pattern repeats for different form sections: *nuevos parte A*, *nuevos parte B*, *modificados parte A*, *modificados parte B*, *a modificar parte A*, *nuevos aprobados parte B*, etc.

    This demonstrates how classification determinants adapt a single form to handle both import and export workflows, across multiple form sections (Part A for applicant, Part B for reviewer).

### 7. Grid determinant

Evaluates grid component values. Used with edit grids or data grids to create conditions based on repeatable row data.

!!! example "Real examples from *Permisos eventuales*"
    - **"Aprobado nuevo"** — field `revisionDataGridNuevosParteB`. Controls visibility of sections based on whether the reviewer's grid of approved new items has data.
    - **"Selecionar = SI (Parte A - existentes)"** — field `applicantDataGridNuevonuevo3`. Controls visibility based on grid selections.

??? note "Original manual text"
    To create a determinant on a block, click on the edit button (gear icon). A slider will open. Click on the Determinant tab, Add. Insert name of determinant, choose 'Determinant based on field value' under determinant type, select the relevant field, choose the relevant predicate, select value or choose comparison field, save.

---

## Applying determinants via drag and drop

Once created, select and drop the determinant on the right panel under selected determinants, select the behavior of the component (show/hide when determinant condition is true), General Save.

---

## D indicator in orange

If the field configuration has a determinant, it will be indicated by the letter **D** in orange color. If there is more than one determinant, the icon will have a dot in the top right corner. Click the D icon to view and edit the determinant conditions for that component.

---

## Effects and component behaviours system

The platform includes a component behaviours and effects system that extends determinant capabilities beyond simple show/hide. Component behaviours allow configuring multiple effects on a component, each driven by one or more determinants. Effects can control properties such as visibility, required status, disabled state, and other component attributes. This provides more granular control than the original show/hide mechanism.

See [Effects System](../part5-new-features/01-effects-system.md) for detailed documentation.

---

## Determinant summary for *Permisos eventuales*

This service currently has **40 determinants** across all types:

| Type | Count | Example |
|------|-------|---------|
| Radio/Select | 14 | "Que necesita = nuevo permiso" |
| Classification | 12 | "Operación = exportar (nuevos - parte A)" |
| Text | 5 | "Fundamentación != empty" |
| Boolean | 5 | "Confirmo la exactitud = SI" |
| Numeric | 2 | "Cantidad de productos modificados > 0" |
| Grid | 2 | "Aprobado nuevo" |

This demonstrates a realistic distribution: radio/select and classification determinants are the most common, used to branch the form into different workflows. Boolean and text determinants handle validation gates and field presence checks. Numeric and grid determinants handle count-based and table-based conditions.

---
