# E-signature -- Update Analysis

**Changes detected:** 7
**Status:** New section -- ready for review (all items need verification)
**Analyzed:** 2026-02-15
**Section type:** Entirely new -- not present in original manual

---

## Overview of E-signature
**VERIFY**

> E-signature functionality allows applicants to digitally sign documents or the application itself within the eRegistrations platform. This provides legal validity to the submission and may replace or supplement the traditional 'I Swear' declaration component.
>
> E-signature may be implemented as:
> - A new custom component in the form builder placed on the Send page or other pages.
> - An enhancement to the existing Send file page workflow.
> - An integration with external e-signature providers.

**Needs verification:** The original Send file section (D.6) mentions 'I Swear' for declarations but not digital signatures. No MCP tool endpoints specific to e-signature were found. The implementation approach needs confirmation.
**Screenshot:** Unknown -- needs capture of the e-signature feature in the BPA and DS.

---

## E-signature Configuration in BPA
**VERIFY**

> To configure e-signature, the analyst likely needs to:
> 1. Enable e-signature at the service level (possibly in service settings).
> 2. Add an e-signature component to the appropriate form page (likely the Send page).
> 3. Configure which documents or forms require a signature.
> 4. Set up provider integration (if external).
> 5. Configure validation rules and appearance.

**Needs verification:** Configuration workflow is speculative. Must be documented from the live BPA.
**Screenshot:** Unknown -- step-by-step configuration screenshots needed.

---

## E-signature Component in Form Builder
**VERIFY**

> E-signature may be a new custom component in the form builder, similar to 'I Swear' and 'QR code' in the Custom Components tab.
>
> The component would likely allow:
> - Capturing a digital signature (drawn, typed, or uploaded).
> - Linking the signature to form data or documents.
> - Displaying a verification indicator.

**Needs verification:** No e-signature component is documented in the original manual. Must be confirmed in the form builder's Custom Components tab.
**Screenshot:** Unknown -- capture the e-signature component in the form builder.

---

## E-signature Provider Integration
**VERIFY**

> E-signature may integrate with external providers:
> - Government PKI systems for legally binding signatures.
> - Third-party services (DocuSign, Adobe Sign, etc.).
> - OTP-based signature verification.
> - Certificate-based digital signatures.
>
> Integration may be at instance or service level.

**Needs verification:** Provider integration details are entirely speculative. Different deployments may use different providers.
**Screenshot:** Unknown -- capture any provider configuration settings.

---

## E-signature on Send Page
**VERIFY**

> The Send file page (section D.6) is the 'declaration and signature page.' E-signature likely appears here, including:
> - A digital signature pad or upload area.
> - A summary of what is being signed.
> - Terms and conditions with signature requirement.
> - Signature verification status.

**Needs verification:** The Send page is the most logical location, but exact integration needs confirmation.
**Screenshot:** Needs new -- capture the Send page with e-signature enabled.

---

## E-signature in Service Settings
**VERIFY**

> Possible settings include:
> - Enable/disable e-signature for the service.
> - Provider selection.
> - Signature requirements per page/document.
> - Appearance customization.
> - Legal text configuration.

**Needs verification:** Cross-references with the bpa-settings analysis which flagged potential e-signature settings.
**Screenshot:** Unknown -- capture e-signature settings in service or instance settings.

---

## E-signature Applicant Experience (DS)
**VERIFY**

> From the applicant's perspective on the Display System:
> - A signature step or area on the Send page before submission.
> - Instructions for completing the digital signature.
> - Visual confirmation that the document/application has been signed.
> - A record of the signature in application history.

**Needs verification:** The applicant-side experience needs to be verified on the DS. May also require documentation in Part II of the manual.
**Screenshot:** Unknown -- capture the applicant-facing signing interface.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Overview of E-signature | VERIFY | Unknown |
| E-signature Configuration in BPA | VERIFY | Unknown |
| E-signature Component in Form Builder | VERIFY | Unknown |
| E-signature Provider Integration | VERIFY | Unknown |
| E-signature on Send Page | VERIFY | Needs new |
| E-signature in Service Settings | VERIFY | Unknown |
| E-signature Applicant Experience (DS) | VERIFY | Unknown |
