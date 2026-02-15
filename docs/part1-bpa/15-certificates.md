---
title: "G. Certificates"
description: "eRegistrations Manual - G. Certificates (Original pages 117-124)"
---

# G. Certificates


<!-- PDF Screenshots -->
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


!!! info "Update Summary (6 changes detected)"
    6 items identified: The two methods for building certificates (certificate builder and through registration) remain unchanged.
    QR code component is unchanged.
    The Print Page A4 styling system is already documented in D.8 Custom classes.
    The MCP tools reveal a 'print document' system (print_document_list, print_document_create, print_document_component_add/update/remove/move, print_document_sort, print_document_templates, print_document_history, print_document_revert) which may represent a newer or additional certificate management approach.
    E-signature on certificates needs verification.


<!-- Live BPA Screenshot: live-certificates -->
<div class="live-screenshot" markdown>

![Certificates - Print document templates and certificate builder](../screenshots/live-certificates.png){ loading=lazy }
*Current BPA view (2026-02-15) — [G. Certificates](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/templates/certificates){ target=_blank }*

</div>
<!-- /Live BPA Screenshot: live-certificates -->

## 1. Build certificates - Two methods

Templates/certificates for electronic results can be built in two ways: 1) Through certificate builder on the left hand side bar of user level 2, 2) Through the registration.

---

## 1a. Creating certificate through certificate builder

Click on 'Certificate' on the side menu under user level 2. Click on 'Add' to add a new certificate template. A slider opens. Enter name, Create. Certificate appears in list. Click on certificate name to configure. Form builder page appears. Other certificates for the service appear on top menu. Click on 'cert.form' tab to build the certificate.

<!-- Verify screenshot: Certificate builder side menu, creation slider, and form builder page - verify UI has not changed. -->

---

## 1b. Creating certificate through registration

Choose the registration. Click on 'Digital result' (green button). Activate the digital result button. Scroll down and click on 'create template'. Enter name. The certificate form can be built just like the application form. Values for text fields can be copied from application file or processing role through edit text field, data, copy value from. Value of expiration date can be fixed from the 'data' tab.

<!-- Verify screenshot: Digital result button, create template slider, and certificate form builder. -->

---

## 2. Add QR Code

The QR technology merges the physical world with the digital world. Signatures and other authentications are replaced by QR codes. They manifest the legitimacy of a document. To add QR code on a template, drag and drop the 'QR code' from the Custom Component tab on the template.

---

## Print document system

!!! question "Needs Verification"
    The MCP tools expose a 'print document' system that appears to be a comprehensive document management interface with component-level editing, history tracking, sorting, and template management. This is separate from the simple certificate builder documented in the manual. It may be a newer or more advanced approach to certificate/document management. A human reviewer should verify: (1) Is the print document system a replacement for or addition to the certificate builder? (2) Is it visible in the BPA side menu? (3) What is the relationship between 'print documents' and 'certificates'?

The MCP tools reveal a comprehensive 'print document' system with operations: print_document_list, print_document_get, print_document_component_get, print_document_templates, print_document_history, print_document_create, print_document_update, print_document_delete, print_document_component_add/update/remove/move, print_document_sort, print_document_revert. This may represent an evolution of the certificate builder or an additional system for managing printable documents.

<!-- Screenshot needed: Print document system interface if it exists as a separate BPA feature. -->
*Screenshot: Print document system interface if it exists as a separate BPA feature.*

---

## E-signature on certificates

!!! question "Needs Verification"
    E-signature is mentioned as a new platform feature. It could be relevant to certificates if digital signatures can be embedded in generated documents. This needs verification on a live instance. The QR code section currently mentions that 'signatures and other authentications are replaced by QR codes' -- if e-signature is now available, this statement may need updating.

E-signature capability may have been added to certificates, allowing digital signatures to be applied to generated documents.

---

## Certificate builder UI changes

!!! question "Needs Verification"
    With ~9,600 commits since the manual, the certificate builder UI may have been enhanced. The print_document_history and print_document_revert MCP tools suggest version control features that may now exist for certificates. A reviewer should check the current certificate builder for any new features.

The certificate builder interface may have received UI improvements since the manual was written.

<!-- Verify screenshot: Current certificate builder to check for new features like version history, templates, or component management improvements. -->

---
