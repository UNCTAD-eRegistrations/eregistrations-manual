---
title: "E-signature"
description: "eRegistrations Manual - E-signature"
---

# E-signature


<div class="live-screenshot" markdown>

![E-signature - Digital signature integration for forms](../screenshots/live-e-signature.png){ loading=lazy }
*Current BPA view — E-signature*
*E-signature is configured in service settings.*


</div>

## Overview of E-signature


E-signature functionality allows applicants to digitally sign documents or the application itself within the eRegistrations platform. This provides legal validity to the submission and may replace or supplement the traditional 'I Swear' declaration component.

E-signature may be implemented as:
- A new custom component in the form builder that can be placed on the Send page or other pages.
- An enhancement to the existing Send file page workflow.
- An integration with external e-signature providers (e.g., DocuSign, Adobe Sign, or government-provided e-signature infrastructure).

The specific implementation approach needs verification.

---

## E-signature Configuration in BPA


To configure e-signature for a service, the analyst likely needs to:
1. Enable e-signature at the service level (possibly through service settings).
2. Add an e-signature component to the appropriate form page (likely the Send page).
3. Configure which documents or forms require a signature.
4. Set up the e-signature provider integration (if using an external provider).
5. Configure the signature validation rules and appearance.

The exact configuration steps and UI location need verification.

---

## E-signature Component in Form Builder


E-signature may be available as a new custom component in the form builder, similar to the existing 'I Swear' component and 'QR code' component found in the Custom Components tab.

The e-signature component would likely allow:
- Capturing a digital signature (drawn, typed, or uploaded).
- Linking the signature to specific form data or documents.
- Displaying a signature verification indicator.

The component may have its own configuration options for signature type, appearance, and validation.

---

## E-signature Provider Integration


E-signature may integrate with external providers for digital signature validation. Common integration patterns include:
- Government PKI (Public Key Infrastructure) systems for legally binding signatures.
- Third-party e-signature services (DocuSign, Adobe Sign, etc.).
- OTP (One-Time Password) based signature verification.
- Certificate-based digital signatures.

The integration may be configured at the instance level (affecting all services) or at the service level.

---

## E-signature on Send Page


The Send file page (section D.6 of the manual) is described as the 'declaration and signature page.' E-signature functionality likely appears on or is closely associated with this page.

With e-signature enabled, the Send page may include:
- A digital signature pad or upload area.
- A summary of what the applicant is signing.
- Terms and conditions with the signature requirement.
- Signature verification status indicators.

The existing 'I Swear' component may work alongside or be replaced by the e-signature component.


---

## E-signature in Service Settings


E-signature may require configuration in the service settings area. Possible settings include:
- Enable/disable e-signature for the service.
- E-signature provider selection.
- Signature requirements (which pages or documents require signatures).
- Signature appearance customization.
- Legal text and terms associated with the signature.

The bpa-settings analysis has already flagged that new settings related to e-signature may exist.

---

## E-signature Applicant Experience (DS)


From the applicant's perspective on the Display System (DS), e-signature likely appears as:
- A signature step or area on the Send page before final submission.
- Instructions for how to complete the digital signature.
- A visual confirmation that the document/application has been signed.
- A record of the signature in the application history.

The signed document or application may be available for download with an embedded signature.

---
