# D.6. Send File (p.46)

**Change Summary:** The Send File section has the most significant gap of the sections analyzed. The original content correctly describes the declaration and signature page as a customizable form page using the 'I Swear' custom component. This base functionality is unchanged. However, the e-signature feature is a major addition to the Send page that is entirely absent from the July 2025 manual. A new subsection documenting e-signature configuration and behavior on the Send page is needed.

**Changes Found:** 2 (1 added, 1 verify)

---

## [UNCHANGED] Declaration and signature page description

> This is the declaration and signature page. It can be developed the same way you develop the form.

The Send File page still functions as a declaration and signature page, and it can still be built using the same form development approach (adding components, configuring layout, etc.).

- **Screenshot status:** Same

---

## [UNCHANGED] I Swear custom component

> The declaration can be created using the 'I Swear' component under Custom Components tab.

The 'I Swear' custom component is still available and functions as described for creating declaration checkboxes on the send page.

- **Screenshot status:** Same

---

## [NEW] E-signature feature on Send page

The Send page now supports e-signature functionality, allowing applicants to digitally sign their application before submission. This feature must be enabled and configured at the service level. When enabled, a signature component appears on the Send page where applicants can apply their electronic signature to the declaration.

**Note:** The exact configuration steps, supported signature types, and any prerequisites for enabling e-signature should be documented based on the current platform implementation.

**Why this is new:** E-signature is a significant new feature added to the eRegistrations platform after the July 2025 manual was written. It directly impacts the Send File page by adding a digital signature step to the declaration and submission process. This is entirely new content that needs to be added to the manual.

- **Screenshot status:** Needs new -- screenshots needed for:
  1. The e-signature component on the Send page as seen in the BPA form builder
  2. The e-signature interface as seen by the applicant on the public site
  3. Any e-signature configuration options in the component properties or service settings

---

## [VERIFY] E-signature configuration details

The specific configuration steps for e-signature on the Send page need to be documented. This includes:
- How to enable e-signature for a service
- What component or toggle activates it
- What signature providers are supported
- What the applicant experience looks like

**Needs human verification:** While it is confirmed that e-signature is a new feature affecting the Send page, the exact configuration workflow and available options need to be verified against the live platform by a subject matter expert. This verification is critical to ensure accurate documentation.

- **Screenshot status:** Unknown -- detailed screenshots of the e-signature setup process will be needed once the configuration workflow is verified.
