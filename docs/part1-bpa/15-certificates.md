---
title: "G. Certificates"
description: "eRegistrations Manual - G. Certificates (Original pages 117-124)"
---

# G. Certificates


??? example "Original Manual Screenshots"
    ![pdf-bpa-certificates-01.png](../screenshots/pdf-bpa-certificates-01.png){ loading=lazy }

    ![pdf-bpa-certificates-02.png](../screenshots/pdf-bpa-certificates-02.png){ loading=lazy }

    ![pdf-bpa-certificates-03.png](../screenshots/pdf-bpa-certificates-03.png){ loading=lazy }

    ![pdf-bpa-certificates-04.png](../screenshots/pdf-bpa-certificates-04.png){ loading=lazy }

    ![pdf-bpa-certificates-05.png](../screenshots/pdf-bpa-certificates-05.png){ loading=lazy }

    ![pdf-bpa-certificates-06.png](../screenshots/pdf-bpa-certificates-06.png){ loading=lazy }

    ![pdf-bpa-certificates-07.png](../screenshots/pdf-bpa-certificates-07.png){ loading=lazy }

    ![pdf-bpa-certificates-08.png](../screenshots/pdf-bpa-certificates-08.png){ loading=lazy }

    ![pdf-bpa-certificates-09.png](../screenshots/pdf-bpa-certificates-09.png){ loading=lazy }

    ![pdf-bpa-certificates-10.png](../screenshots/pdf-bpa-certificates-10.png){ loading=lazy }

    ![pdf-bpa-certificates-11.png](../screenshots/pdf-bpa-certificates-11.png){ loading=lazy }

    ![pdf-bpa-certificates-12.png](../screenshots/pdf-bpa-certificates-12.png){ loading=lazy }

    ![pdf-bpa-certificates-13.png](../screenshots/pdf-bpa-certificates-13.png){ loading=lazy }

    ![pdf-bpa-certificates-14.png](../screenshots/pdf-bpa-certificates-14.png){ loading=lazy }

    ![pdf-bpa-certificates-15.png](../screenshots/pdf-bpa-certificates-15.png){ loading=lazy }

    ![pdf-bpa-certificates-16.png](../screenshots/pdf-bpa-certificates-16.png){ loading=lazy }

    ![pdf-bpa-certificates-17.png](../screenshots/pdf-bpa-certificates-17.png){ loading=lazy }

    ![pdf-bpa-certificates-18.png](../screenshots/pdf-bpa-certificates-18.png){ loading=lazy }

    ![pdf-bpa-certificates-19.png](../screenshots/pdf-bpa-certificates-19.png){ loading=lazy }

    ![pdf-bpa-certificates-20.png](../screenshots/pdf-bpa-certificates-20.png){ loading=lazy }

    ![pdf-bpa-certificates-21.png](../screenshots/pdf-bpa-certificates-21.png){ loading=lazy }

    ![pdf-bpa-certificates-22.png](../screenshots/pdf-bpa-certificates-22.png){ loading=lazy }

    ![pdf-bpa-certificates-23.png](../screenshots/pdf-bpa-certificates-23.png){ loading=lazy }

    ![pdf-bpa-certificates-24.png](../screenshots/pdf-bpa-certificates-24.png){ loading=lazy }

    ![pdf-bpa-certificates-25.png](../screenshots/pdf-bpa-certificates-25.png){ loading=lazy }


<div class="live-screenshot" markdown>

![Certificates - Print document templates and certificate builder](../screenshots/live-certificates.png){ loading=lazy }
*Current BPA view — G. Certificates*

</div>

## 1. Build certificates - Two methods

Templates/certificates for electronic results can be built in two ways: 1) Through certificate builder on the left hand side bar of user level 2, 2) Through the registration.

---

## 1a. Creating certificate through certificate builder

Click on 'Certificate' on the side menu under user level 2. Click on 'Add' to add a new certificate template. A slider opens. Enter name, Create. Certificate appears in list. Click on certificate name to configure. Form builder page appears. Other certificates for the service appear on top menu. Click on 'cert.form' tab to build the certificate.


---

## 1b. Creating certificate through registration

Choose the registration. Click on 'Digital result' (green button). Activate the digital result button. Scroll down and click on 'create template'. Enter name. The certificate form can be built just like the application form. Values for text fields can be copied from application file or processing role through edit text field, data, copy value from. Value of expiration date can be fixed from the 'data' tab.


---

## 2. Add QR Code

The QR technology merges the physical world with the digital world. Signatures and other authentications are replaced by QR codes. They manifest the legitimacy of a document. To add QR code on a template, drag and drop the 'QR code' from the Custom Component tab on the template.

---

## Print document system

Print documents are the certificate/document templates that the platform generates as PDF output for applicants. Each service can have one or more print documents, and each print document is built with the same form-builder approach used for application forms -- panels, columns, text fields, data grids, select fields, QR codes, and content blocks.

Print documents are managed through the BPA API with operations for listing, creating, updating, deleting, adding/removing/moving components, sorting, and version history with revert capability.


---

## Certificate generation workflow


### Document bots for certificates


| Bot name | Type | GDB service | Category | Purpose |
|----------|------|-------------|----------|---------|
| **Cargar el certificado** | document | `generic-pdf-generator` | generate, upload, display | Generates the permit PDF, uploads it to the file, and displays it |
| **Mostrar certificado de permiso eventual** | document | `generic-pdf-display` | generate and display | Shows the permit PDF to the applicant for download |
| **Carta ZEDmariel** | document | `generic-pdf-display` | generate and display | Generates and displays the ZED Mariel letter |

The supporting internal bot:

| Bot name | Type | Description |
|----------|------|-------------|
| **Interno - Certificado de NUEVO permiso eventual** | internal | Copies certificate data from Part B revision role to the print document template |

---

## E-signature on certificates


E-signature capability may have been added to certificates, allowing digital signatures to be applied to generated documents.

---

## Certificate builder UI changes


The certificate builder interface may have received UI improvements since the manual was written. The API exposes print_document_history and print_document_revert operations, indicating that version control is now available for print document templates.


---
