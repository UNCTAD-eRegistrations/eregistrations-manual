const SECTIONS = [
  {
    "id": "introduction",
    "group": "I. Administrative Site (BPA)",
    "title": "Introduction",
    "path": "I. Administrative Site → Introduction",
    "pages": "5",
    "status": "pending",
    "changes": 1,
    "changeSummary": "The introduction remains largely accurate. The core description of eRegistrations as a no-code platform and the basic applicant-operator-certificate flow are unchanged. The terminology (public site, DS, BPA) is still current. Minor additions could mention newer capabilities (e-signature, advanced workflows) but the introduction is intentionally high-level and does not require significant revision.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Manual purpose statement",
        "oldText": "The purpose of this user manual is to provide an overview of the main functions and features of the eRegistrations system and to explain how to create online services.",
        "newText": null,
        "explanation": "The stated purpose of the manual remains accurate and does not require any changes."
      },
      {
        "type": "unchanged",
        "title": "No-code platform description",
        "oldText": "eRegistrations is a no-code development platform allowing to create online services without programming.",
        "newText": null,
        "explanation": "The core identity of eRegistrations as a no-code platform has not changed."
      },
      {
        "type": "unchanged",
        "title": "Online service flow description",
        "oldText": "An online service is a succession of online screens and actions through which:\n- an applicant can fill a form, upload documents, pay and send his request (application file)\n- one or more operators can review the file and approve or reject an application (processing)\n- The applicant data is sent to an online registry\n- A registration certificate is issued",
        "newText": null,
        "explanation": "The high-level flow description (form, documents, payment, send, processing, certificate) is still accurate. While newer features like e-signature have been added to certain steps, this summary-level description remains correct as-is."
      },
      {
        "type": "unchanged",
        "title": "Public site and administrative site terminology",
        "oldText": "Online services are visible on the 'public site', also called 'user site' or 'DS' (Display System). They are created through an 'administrative site', also called 'BPA' (Business Process Analyzer).",
        "newText": null,
        "explanation": "The terminology for the public-facing site (DS/Display System) and the administrative backend (BPA/Business Process Analyzer) is still in active use across all deployments."
      },
      {
        "type": "verify",
        "title": "Potential mention of newer platform capabilities",
        "oldText": null,
        "newText": "The introduction may benefit from a brief mention of newer platform capabilities such as e-signature support, advanced workflow features, or other significant additions made after July 2025. However, since the introduction is intentionally high-level, this should be verified with stakeholders before adding.",
        "explanation": "The introduction does not mention e-signature, advanced workflow capabilities, or other features added since July 2025. Since the introduction is meant to be a high-level overview, it may be acceptable as-is, but a subject matter expert should confirm whether any new top-level capabilities warrant mention here.",
        "screenshot": {
          "type": "unknown",
          "desc": "If any new high-level platform diagram or overview screenshot exists, it may need to be evaluated for inclusion."
        }
      }
    ]
  },
  {
    "id": "bpa-entry-page",
    "group": "I. Administrative Site (BPA)",
    "title": "A. Description of the entry page",
    "path": "I. Administrative Site → A. Description of the entry page",
    "pages": "6-9",
    "status": "pending",
    "changes": 4,
    "changeSummary": "4 changes detected: Instance bar may have additional elements beyond what was documented. Side menu has gained new items at user level 2 (e.g., Print Documents/Notifications). The Effects system and component behaviours are new concepts that may surface in the side menu. Auto-update toggle and FE/BE/DS buttons are core infrastructure elements likely unchanged.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "BPA entry page structure - 3 sections",
        "oldText": "The BPA entry page has 3 main sections:\n- 'Header' also called 'instance bar' (the blue bar at the top)\n- Side menu (on the left)\n- Work space (in grey)",
        "newText": null,
        "explanation": "The fundamental three-section layout of the BPA entry page is a core architectural element that has not changed. The header/instance bar, side menu, and workspace pattern remains the primary UI structure.",
        "screenshot": {
          "type": "verify",
          "desc": "BPA entry page overview - verify the layout is visually the same, though individual elements within each section may have changed."
        }
      },
      {
        "type": "unchanged",
        "title": "Instance bar - UNCTAD logo and FE/BE/DS buttons",
        "oldText": "It consists sequentially of:\n- UNCTAD and eRegistrations logo\n- 3 buttons FE (front end), BE (back end) and DS (display system). When they are red, it means the corresponding component is getting updated. We can work on the system only when all buttons are green. When you put the cursor over the components name you will see the version number currently running. Versioning is made according to semantic versioning rules.",
        "newText": null,
        "explanation": "The FE/BE/DS component status buttons are fundamental infrastructure indicators. The color-coding (green = ready, red = updating) and semantic versioning on hover are core platform features that remain unchanged.",
        "screenshot": {
          "type": "verify",
          "desc": "FE/BE/DS status buttons - verify visual appearance and tooltip content are unchanged."
        }
      },
      {
        "type": "unchanged",
        "title": "Instance bar - Logged users and auto-update toggle",
        "oldText": "'Logged users' show the number of administrators logged into BPA at that moment.\nWhen the toggle is switched on, new feature/bug fixes are allowed to come automatically to the applications in the system.",
        "newText": null,
        "explanation": "The logged users counter and auto-update toggle are administrative infrastructure features that remain part of the instance bar.",
        "screenshot": {
          "type": "verify",
          "desc": "Logged users counter and auto-update toggle - verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Instance bar - User level toggle",
        "oldText": "User level 1 and 2 is a toggle button that minimizes and expands display of elements on the side menu bar.",
        "newText": null,
        "explanation": "The user level 1/2 toggle is a fundamental BPA navigation concept. Level 1 shows a simplified menu; Level 2 shows advanced options. This concept is still central to the platform.",
        "screenshot": {
          "type": "verify",
          "desc": "User level toggle - verify it still functions as a 1/2 toggle."
        }
      },
      {
        "type": "unchanged",
        "title": "Instance bar - User ID, language, settings",
        "oldText": "- User ID of the administrator logged in\n- Choice of language\n- Instance settings icon: 1. Settings that will apply to all services, 2. Translations icon, 3. Log-out icon",
        "newText": null,
        "explanation": "The user ID display, language selector, and instance settings icon (with settings, translations, and logout) are standard BPA infrastructure elements that remain part of the instance bar.",
        "screenshot": {
          "type": "verify",
          "desc": "User ID, language, and instance settings - verify layout and options."
        }
      },
      {
        "type": "verify",
        "title": "Instance bar - potential additional elements",
        "oldText": null,
        "newText": "The instance bar may contain additional elements not present in the July 2025 manual, such as notification indicators, environment labels (dev/staging/production), or audit/history shortcuts.",
        "explanation": "Given significant platform development (~9,600 commits since the manual was written), the instance bar may have acquired new elements. The audit system and notification system tools are present in the API, suggesting these features might have UI presence in the header. However, this cannot be confirmed without visual inspection of a live instance.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Full instance bar screenshot showing all current elements - compare with original to identify any additions."
        }
      },
      {
        "type": "modified",
        "title": "Side menu - User level 2 items",
        "oldText": "User level 2: Displays more elements, including Tables and Certificate builder.",
        "newText": "User level 2: Displays more elements, including Tables, Certificate builder, Print Documents, Notifications, and Messages. Print Documents allows creating and managing document templates for certificates and other outputs. Notifications enables configuration of system notifications. Messages allows managing message templates.",
        "explanation": "The API reveals tools for print_document, notification, and message management, indicating these are first-class platform concepts with their own management interfaces. These would logically appear in the side menu at User Level 2. The original manual only mentioned Tables and Certificate builder as User Level 2 items.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Side menu at User Level 2 showing all available menu items, including any new entries beyond Tables and Certificate builder.",
          "newPath": ""
        }
      },
      {
        "type": "unchanged",
        "title": "Side menu - User level 1",
        "oldText": "User level 1: Displays only a limited number of elements on the left side menu.",
        "newText": null,
        "explanation": "The concept of User Level 1 showing a simplified menu remains. The specific items shown at Level 1 should be verified, but the principle is unchanged.",
        "screenshot": {
          "type": "verify",
          "desc": "Side menu at User Level 1 - verify which items are displayed."
        }
      },
      {
        "type": "unchanged",
        "title": "Work space",
        "oldText": "This is the gray area which displays the contents of the elements on the side bar, and where services are built.",
        "newText": null,
        "explanation": "The workspace concept as the main content area has not changed. It remains the gray area where service building takes place.",
        "screenshot": {
          "type": "verify",
          "desc": "Work space area - verify general appearance."
        }
      }
    ]
  },
  {
    "id": "bpa-services",
    "group": "I. Administrative Site (BPA)",
    "title": "B. Services",
    "path": "I. Administrative Site → B. Services",
    "pages": "new",
    "status": "pending",
    "changes": 7,
    "changeSummary": "7 changes detected: Import/copy service functionality added, service groups feature is new, micro-publish added to publish flow, service bar has additional buttons, archive workflow may have UI changes, service activation toggle unchanged, SmartLink feature is new.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Definition of Service",
        "oldText": "A service is a succession of screens allowing the applicant to obtain one or more registrations.",
        "newText": null
      },
      {
        "type": "unchanged",
        "title": "Definition of Registration",
        "oldText": "A registration is any authorization (certificate, permit, clearance, document) issued by a government agency that an applicant wants to obtain.",
        "newText": null
      },
      {
        "type": "modified",
        "title": "1. Create a service",
        "oldText": "A new service can be created by clicking on the 'add' button. Then a slider opens, where you can type the name of the service and click save.",
        "newText": "A new service can be created by clicking on the 'Add' button. Additionally, services can be imported from another instance or copied from an existing service within the same instance using the 'Import' or 'Copy' functionality. Then a slider opens, where you can type the name of the service and click save.",
        "explanation": "The platform now supports importing services from other instances and copying existing services. This is a significant addition that was not in the original manual. The Import functionality allows replication of service configurations between instances, and Copy allows duplicating a service within the same instance.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Services list showing Add button, and Import/Copy options if available in toolbar",
          "newPath": ""
        }
      },
      {
        "type": "unchanged",
        "title": "Service activation toggle",
        "oldText": "To activate the service, click on the toggle next to the service name. Green indicates that the service is active. Inactive services will not be available on the public interface.",
        "newText": null,
        "screenshot": {
          "type": "verify",
          "desc": "Service toggle - verify visual appearance hasn't changed"
        }
      },
      {
        "type": "unchanged",
        "title": "Archive/Unarchive service",
        "oldText": "An inactive service can be archived in the system by clicking on the archive button. Archived services can be restored by clicking on 'archived services' and clicking on the unarchive button.",
        "newText": null,
        "screenshot": {
          "type": "verify",
          "desc": "Archive/unarchive buttons - verify visual appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "Remove service",
        "oldText": "A service can be removed from the system by clicking on the cross.",
        "newText": null
      },
      {
        "type": "unchanged",
        "title": "Post-creation note",
        "oldText": "Once a service has been created, one or more registrations must be created and assigned to the service.",
        "newText": null
      },
      {
        "type": "modified",
        "title": "2. The Service bar",
        "oldText": "This is the service bar, just below the instance (blue) bar. This appears when you click on a service from the list of services in the work space.\n\nThe service bar consists of:\n- The name of the service, that can be edited by clicking on the edit button next to it\n- The 'preview service' button: this displays the application file as seen from the user interface\n- The 'publish service' button: when a service is published, it becomes available on the public interface. Every time a change is made in the BPA that needs to be reflected on the public interface (DS), the service has to be (re)published.\n- The 'see service' button. This opens the service in the public interface (DS), in a new tab\n- Service settings icon",
        "newText": "This is the service bar, just below the instance (blue) bar. This appears when you click on a service from the list of services in the work space.\n\nThe service bar consists of:\n- The name of the service, that can be edited by clicking on the edit button next to it\n- The 'preview service' button: this displays the application file as seen from the user interface\n- The 'publish service' button: when a service is published, it becomes available on the public interface. Every time a change is made in the BPA that needs to be reflected on the public interface (DS), the service has to be (re)published. The publish flow now supports micro-publish, which allows publishing only specific changes rather than the entire service.\n- The 'see service' button: This opens the service in the public interface (DS), in a new tab\n- Service settings icon",
        "explanation": "The publish flow has been enhanced with micro-publish capability. Micro-publish allows analysts to publish only specific changes (e.g., just form changes, just role changes) rather than republishing the entire service. This is a significant workflow improvement. The exact UI for this needs verification.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Service bar showing all buttons including any new micro-publish UI elements",
          "newPath": ""
        }
      },
      {
        "type": "verify",
        "title": "Micro-publish details",
        "oldText": null,
        "newText": "Micro-publish is a feature that allows publishing only specific parts of a service (e.g., form changes, role configuration changes) rather than republishing the entire service. This can speed up the publish process and reduce risk of unintended changes being published.",
        "explanation": "Micro-publish is known to exist in the platform but the exact UI workflow, button placement, and options need to be verified on a live instance. The manual should document how to access micro-publish and what options are available.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Micro-publish dialog or dropdown showing publish options"
        }
      },
      {
        "type": "added",
        "title": "Service Groups",
        "oldText": null,
        "newText": "<span class=\"hl-added\">Services can be organized into groups for better management. When there are many services in an instance, groups help categorize and organize them. Groups appear in the services list view and can be collapsed or expanded.</span>",
        "explanation": "Service groups is a feature that was added to the platform after the original manual was written. It allows organizing services into logical groups (e.g., by ministry, by type of registration). This needs verification on the current platform to confirm the exact UI and workflow.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Services list showing service groups collapsed and expanded"
        }
      },
      {
        "type": "verify",
        "title": "Import/Copy Service",
        "oldText": null,
        "newText": "Services can be imported from other eRegistrations instances or copied within the same instance. Import allows replicating a complete service configuration (forms, roles, BOTs, certificates) from one instance to another. Copy creates a duplicate of an existing service within the same instance.",
        "explanation": "The Import and Copy service features are known to exist in the platform. Import is particularly useful when setting up new country instances based on existing configurations. The exact location of these buttons (toolbar, context menu, or service settings) and the workflow details need to be verified on a live instance.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Import/Copy service dialog or buttons in the services list"
        }
      },
      {
        "type": "verify",
        "title": "SmartLink",
        "oldText": null,
        "newText": "SmartLink is a feature that allows creating links between services, enabling data sharing and workflow coordination across multiple services.",
        "explanation": "SmartLink is mentioned in the plan as a new feature. It may or may not be directly visible in the Services section. Its exact placement in the BPA UI and relationship to the services list needs to be verified. It may belong in a different section of the manual.",
        "screenshot": {
          "type": "unknown",
          "desc": null
        }
      }
    ]
  },
  {
    "id": "bpa-registrations",
    "group": "I. Administrative Site (BPA)",
    "title": "C. Registration(s)",
    "path": "I. Administrative Site → C. Registration(s)",
    "pages": "14-25",
    "status": "pending",
    "changes": 5,
    "changeSummary": "5 items identified: Registration structure is core and stable. The creation workflow (name, short name, result P/D, documents U/S/M, fees fixed/formula, institution, units) remains unchanged. Cost types confirmed via MCP tools to include fixed and formula (cost_create_fixed, cost_create_formula). The document requirement system has a global requirements list (requirement_list) that may represent a newer management approach. Registration activation is a confirmed feature. Adding registrations to services is unchanged.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Registration definition",
        "oldText": "Registrations are at the core of the eRegistrations system. A registration is any type of authorization (license, permit, registration number, clearance, certificate, etc.) issued by a government institution, for which an applicant will usually need to provide data, documents and fee.",
        "newText": null,
        "explanation": "The definition of a registration is unchanged."
      },
      {
        "type": "unchanged",
        "title": "1. Create a registration",
        "oldText": "Click on 'add' button. A slider opens. Enter registration name, enter short name (proposed automatically, modifiable). Create. A registration is defined by: a. Name, b. Result, c. Data required, d. Documents required, e. Fees, f. Institution in charge. The 'Registrations' menu tab defines all elements except 'data required' (defined in application file tab). Fields marked with red asterisk are required.",
        "newText": null,
        "explanation": "The registration creation workflow and the six defining elements remain unchanged.",
        "screenshot": {
          "type": "verify",
          "desc": "Registration creation slider - verify UI appearance has not changed."
        }
      },
      {
        "type": "unchanged",
        "title": "Result (Physical/Digital)",
        "oldText": "Click on '+ Select or add new' under Results. Click 'add'. A slider opens. Enter result name (required), choose physical ('P') or digital ('D'). Save. Digital result allows building a certificate template. Existing results can be selected from dropdown.",
        "newText": null,
        "explanation": "The result management workflow (physical/digital, template building for digital) is unchanged."
      },
      {
        "type": "unchanged",
        "title": "Documents (U/S/M)",
        "oldText": "Click on '+ Select or add new' under Documents. Click 'add'. A slider opens. Enter document name, choose expectation: 'U' (must be uploaded), 'S' (must be shown at front desk), 'M' (must be signed at collection). Save. Existing documents can be selected from dropdown.",
        "newText": null,
        "explanation": "Document requirement types (U/S/M) remain the same. The MCP tool requirement_list suggests a global requirements list exists, which may help manage document types across services."
      },
      {
        "type": "unchanged",
        "title": "Fees (Fixed/Formula)",
        "oldText": "Click on '+ Add new' under Fees. Fixed fees: enter name, select 'fixed fee' under Fee Type, select currency, enter value, save. Formula fees: select 'Formula' in fee type, save, click on fee to open, click 'click to add formula', drag and drop variables from left side, select arithmetic symbol, add.",
        "newText": null,
        "explanation": "Fee types (fixed and formula) and their creation workflows remain unchanged. The MCP tools confirm cost_create_fixed (with amount and currency) and cost_create_formula as the two cost types."
      },
      {
        "type": "unchanged",
        "title": "Institution and Units",
        "oldText": "Click on '+ Select or add new' under Institutions. Click 'add'. A slider opens. Enter institution name, enter URL, save. Add units by clicking 'Add new' under Involved Unit. Existing institutions can be selected from dropdown. Registrations displayed across top menu by short names.",
        "newText": null,
        "explanation": "Institution and unit management is unchanged."
      },
      {
        "type": "unchanged",
        "title": "2. Add registration(s) to a service",
        "oldText": "Click on service name. Click 'Add'. A slider opens. Enter registration name, click 'Create'. Define result, documents, fees, institution. To add existing registration, click 'add to service' from 'all registrations' list.",
        "newText": null,
        "explanation": "Adding registrations to services is unchanged."
      },
      {
        "type": "verify",
        "title": "Registration activation",
        "oldText": null,
        "newText": "The MCP tools include a registration_activate operation, suggesting that registrations can be activated or deactivated independently.",
        "explanation": "The MCP tool registration_activate exists, which suggests registrations have an activation state similar to services. The original manual does not mention activating/deactivating individual registrations. A human reviewer should verify if this toggle exists in the UI and document it if so.",
        "screenshot": {
          "type": "unknown",
          "desc": null
        }
      },
      {
        "type": "verify",
        "title": "Document requirement global management",
        "oldText": null,
        "newText": "The MCP tools include requirement_list (global document type definitions), documentrequirement_list/create/update/delete (linking requirements to registrations). This may represent a more structured approach to managing document requirements.",
        "explanation": "The MCP tools show a two-level system: global requirements (requirement_list) and document requirements linked to registrations (documentrequirement_create/update/delete). The manual documents the creation of document requirements directly under registrations. The global requirement system may provide reusable document type definitions across services. A reviewer should verify if the UI reflects this two-level system.",
        "screenshot": {
          "type": "verify",
          "desc": "Document requirements management - check if global requirements are visible in the UI."
        }
      },
      {
        "type": "verify",
        "title": "Formula fee enhancements",
        "oldText": null,
        "newText": "The formula fee builder may have been enhanced with additional functions or a more capable formula editor.",
        "explanation": "The manual documents basic formula creation with drag-and-drop variables and arithmetic symbols. The formula builder documented in section D.7 has many functions (maxValue, round, Ceil, Floor, date operations, etc.) that can also apply to fee formulas. A reviewer should verify if the fee formula builder has the same full set of functions as the form formula builder.",
        "screenshot": {
          "type": "verify",
          "desc": "Fee formula builder showing available functions and operations."
        }
      }
    ]
  },
  {
    "id": "bpa-guide",
    "group": "I. Administrative Site (BPA)",
    "title": "D.1. The Guide",
    "path": "I. Administrative Site → D.1. The Guide",
    "pages": "27-28",
    "status": "pending",
    "changes": 2,
    "changeSummary": "2 changes detected: Guide core functionality (Description, Form, Status, toggle) is unchanged. Shopping cart alternative may have evolved. The form_get API confirms guide as a distinct form_type, validating its continued existence as a separate entity.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Guide purpose",
        "oldText": "Questions can be created in the guide to help determine, for each specific user, which documents, fees and data are required.",
        "newText": null,
        "explanation": "The guide's fundamental purpose -- determining user-specific requirements through questions -- is unchanged. The form_get API explicitly supports form_type='guide', confirming the Guide remains a distinct form type in the platform."
      },
      {
        "type": "unchanged",
        "title": "Guide three elements",
        "oldText": "The guide is defined by three elements: Description (name of the guide question), Form (where guide questions are developed and linked to the requirements and/or application form using determinants), Status.",
        "newText": null,
        "explanation": "The three-element structure (Description, Form, Status) is a standard pattern used across the platform for defining application file pages. This structure is consistent and unchanged.",
        "screenshot": {
          "type": "verify",
          "desc": "Guide tabs showing Description, Form, Status -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Guide toggle activation",
        "oldText": "If your service has a Guide, activate the guide toggle.",
        "newText": null,
        "explanation": "The guide toggle is the standard mechanism for enabling/disabling application file pages. This pattern is used consistently throughout the platform and remains unchanged.",
        "screenshot": {
          "type": "verify",
          "desc": "Guide toggle -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Creating guide questions",
        "oldText": "To create a question in the Guide, click on the 'Guide' tab in the Application File. Under the 'Form' tab, create questions using the form components that will filter the data, requirements and fees for specific users' case.",
        "newText": null,
        "explanation": "The workflow for creating guide questions remains the same: navigate to Guide tab, use Form tab, and build using form components. The form builder is the same shared component used across all form types.",
        "screenshot": {
          "type": "verify",
          "desc": "Guide Form tab with form builder -- verify visual appearance."
        }
      },
      {
        "type": "verify",
        "title": "Shopping cart alternative",
        "oldText": "Alternative to the guide: the shopping cart.",
        "newText": "Alternative to the guide: the shopping cart. The shopping cart allows applicants to select registrations directly rather than answering filtering questions. It may have been enhanced with additional features such as registration previews, cost summaries, or document requirement displays.",
        "explanation": "The shopping cart is mentioned briefly in the original manual as an alternative to the guide. Given the platform's evolution, the shopping cart may have gained additional capabilities. The service settings reference 'Shopping cart' as a configurable option. However, the exact current state of shopping cart features cannot be confirmed without live system inspection.",
        "screenshot": {
          "type": "verify",
          "desc": "Shopping cart interface -- verify current appearance and any new features."
        }
      },
      {
        "type": "verify",
        "title": "Potential new guide features",
        "oldText": null,
        "newText": "The guide may have gained new capabilities such as conditional branching improvements, integration with the effects/behaviours system for dynamic form behavior, or enhanced determinant support. The component behaviours system (visible in the API) may apply to guide components.",
        "explanation": "The componentbehaviour tools in the API suggest a more sophisticated system for controlling component behavior based on determinants. This effects system may apply to guide components, potentially offering more advanced conditional logic than what was documented in the original manual. This needs verification.",
        "screenshot": {
          "type": "unknown",
          "desc": "Any new guide-specific features or enhanced conditional logic UI."
        }
      }
    ]
  },
  {
    "id": "bpa-determinants",
    "group": "I. Administrative Site (BPA)",
    "title": "D.2. Determinants",
    "path": "I. Administrative Site → D.2. Determinants",
    "pages": "28-31",
    "status": "pending",
    "changes": 6,
    "changeSummary": "6 changes detected: The determinant type system has been significantly expanded. The original manual describes determinants generically ('Determinant based on field value'). The API now reveals 7 distinct typed determinants: text, select, numeric, boolean, date, classification, and grid. Classification determinants are entirely new (support ALL/ANY/NONE subjects for multi-select evaluation). Grid determinants are new. The effects/behaviours system adds a new layer of component-determinant interaction beyond simple show/hide. Operators have been expanded (CONTAINS, STARTS_WITH, ENDS_WITH for text; GREATER_THAN, LESS_THAN comparisons for numeric).",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Determinant definition",
        "oldText": "A determinant is a filter allowing to take into account the particular case of each applicant in a service. It determines/triggers: if an applicant is subject to a registration and/or what requirements the applicant must provide to register (data, documents, fees).",
        "newText": null,
        "explanation": "The core definition and purpose of determinants remains unchanged. They are still filters that adapt the application file to each applicant's specific case."
      },
      {
        "type": "unchanged",
        "title": "2.1. Determinants of the registration",
        "oldText": "For each registration, an analyst must be able to report/input in the rule engine, in clear language, rules defining who/what are the subjects of the registration. Options: 1) The registration is mandatory to all, 2) The registration is mandatory to specific subjects, 3) The registration is optional to all, 4) The registration is optional to specific subjects. Specific subjects can be defined through determinants or a combination of determinants combined by 'AND' and 'OR' operators.",
        "newText": null,
        "explanation": "The four options for registration determinants (mandatory/optional to all/specific) and the AND/OR combination logic are fundamental to the registration system and remain unchanged.",
        "screenshot": {
          "type": "verify",
          "desc": "Registration determinant options panel -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "2.2. Determinants of the requirements - role and purpose",
        "oldText": "Determinants play a very important role in the application file. They allow to show or hide specific parts of the application form to adapt the form to the particular situation of each applicant. Determinants can be created on the basis of fields/questions in the Guide or in the form and can be applied to any field/block.",
        "newText": null,
        "explanation": "The role of requirement determinants in showing/hiding form parts remains the same. The show/hide behavior is still the primary mechanism."
      },
      {
        "type": "modified",
        "title": "Creating a determinant - determinant types",
        "oldText": "To create a determinant on a block, click on the edit button (gear icon). A slider will open. Click on the Determinant tab, Add. Insert name of determinant, choose 'Determinant based on field value' under determinant type, select the relevant field, choose the relevant predicate, select value or choose comparison field, save.",
        "newText": "To create a determinant on a block, click on the edit button (gear icon). A slider will open. Click on the Determinant tab, Add. Insert name of determinant, choose the determinant type. The platform supports the following determinant types:\n\n1. **Text determinant**: Evaluates text field values. Operators: EQUAL, NOT_EQUAL, CONTAINS, STARTS_WITH, ENDS_WITH. Can be used with an empty value to check if a field is empty/not empty.\n2. **Select determinant**: Evaluates select/dropdown field values. Operators: EQUAL, NOT_EQUAL.\n3. **Numeric determinant**: Evaluates number field values. Operators: EQUAL, NOT_EQUAL, GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL.\n4. **Boolean determinant**: Evaluates checkbox/toggle values. Checks if a boolean field is True or False.\n5. **Date determinant**: Evaluates date/time field values.\n6. **Classification determinant**: Evaluates catalog/classification field values. Operators: EQUAL, NOT_EQUAL. Supports multi-select evaluation with subject modes: ALL, ANY, NONE.\n7. **Grid determinant**: Evaluates grid component values.\n\nSelect the relevant field, choose the relevant predicate/operator, select value or choose comparison field, save.",
        "explanation": "The original manual described a single generic determinant type ('Determinant based on field value'). The current API reveals 7 distinct typed determinants, each with specific operators and configuration options. This is a significant expansion. The API tools explicitly show: textdeterminant_create (with EQUAL, NOT_EQUAL, CONTAINS, STARTS_WITH, ENDS_WITH operators), selectdeterminant_create (EQUAL, NOT_EQUAL), numericdeterminant_create (EQUAL, NOT_EQUAL, GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL), booleandeterminant_create (True/False), datedeterminant_create, classificationdeterminant_create (EQUAL, NOT_EQUAL with ALL/ANY/NONE subjects), and griddeterminant_create. The creation workflow (gear icon, Determinant tab, Add) is likely the same, but the type selection now shows these specific options.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Determinant creation form showing the expanded type dropdown with all 7 determinant types. Also show the operator options for each type.",
          "newPath": ""
        }
      },
      {
        "type": "added",
        "title": "Classification determinant (new type)",
        "oldText": null,
        "newText": "<span class=\"hl-added\">Classification determinants are a new determinant type that evaluates catalog/classification field values. They support:\n- A classification_field parameter (catalog field UUID) to specify which catalog to evaluate against\n- Operators: EQUAL, NOT_EQUAL\n- Subject modes for multi-select evaluation: ALL (all selected values must match), ANY (at least one selected value must match), NONE (no selected value should match)\n\nThis is particularly useful for services where applicants select from classification catalogs (e.g., economic activity codes, product categories) and the form needs to adapt based on the classification chosen.</span>",
        "explanation": "Classification determinants are entirely new. The classificationdeterminant_create API tool shows parameters: service_id, name, target_form_field_key, classification_field (UUID), operator (EQUAL/NOT_EQUAL), and subject (ALL/ANY/NONE). This type bridges the determinant system with the classification catalog system, enabling powerful multi-select conditional logic that was not possible with the original generic determinant approach.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Classification determinant creation form showing the classification field selection, operator choice, and ALL/ANY/NONE subject selector."
        }
      },
      {
        "type": "added",
        "title": "Grid determinant (new type)",
        "oldText": null,
        "newText": "<span class=\"hl-added\">Grid determinants allow creating conditions based on values within grid components (edit grids or data grids). This enables conditional logic based on data entered in repeatable grid rows.</span>",
        "explanation": "The griddeterminant_create API tool confirms grid determinants as a distinct type. The original manual did not mention the ability to create determinants based on grid component values. The exact parameters and configuration options for grid determinants need verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Grid determinant creation form showing configuration options."
        }
      },
      {
        "type": "unchanged",
        "title": "Applying determinants via drag and drop",
        "oldText": "Once created, select and drop the determinant on the right panel under selected determinants, select the behavior of the component (show/hide when determinant condition is true), General Save.",
        "newText": null,
        "explanation": "The drag-and-drop workflow for applying determinants to components remains the same. Select from available determinants, drop onto the component's selected determinants panel, and configure show/hide behavior.",
        "screenshot": {
          "type": "verify",
          "desc": "Drag and drop determinant application panel -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "D indicator in orange",
        "oldText": "If the field configuration has a determinant, it will be indicated by the letter 'D' in orange color. If there is more than one determinant, the icon will have a dot in the top right corner.",
        "newText": null,
        "explanation": "The visual indicators for determinants (orange D, dot for multiple) are UI conventions that remain consistent across the platform.",
        "screenshot": {
          "type": "verify",
          "desc": "D indicator on a component -- verify orange color and dot indicator for multiples."
        }
      },
      {
        "type": "unchanged",
        "title": "Special case - Empty date field determinant",
        "oldText": "Special cases of Determinants: Empty date field determinant - create a determinant with a selected date time field with predicate '=' or '!=' without selecting any date.",
        "newText": null,
        "explanation": "The empty date field determinant pattern remains valid. The text determinant also supports empty value checks (text_value defaults to empty string for isEmpty checks), extending this pattern to text fields as well.",
        "screenshot": {
          "type": "verify",
          "desc": "Empty date determinant configuration -- verify same approach works."
        }
      },
      {
        "type": "added",
        "title": "Effects and component behaviours system",
        "oldText": null,
        "newText": "<span class=\"hl-added\">The platform now includes a component behaviours and effects system that extends determinant capabilities beyond simple show/hide. Component behaviours allow configuring multiple effects on a component, each driven by one or more determinants. Effects can control properties such as visibility, required status, disabled state, and other component attributes. This provides more granular control than the original show/hide mechanism.</span>",
        "explanation": "The componentbehaviour and effect API tools (componentbehaviour_list, componentbehaviour_get, componentbehaviour_get_by_component, effect_create, effect_delete) indicate a sophisticated effects system that extends determinant functionality. This system allows multiple effects per component, each driven by determinant conditions, going beyond the original binary show/hide behavior documented in the manual. The exact UI representation and configuration workflow need verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Component behaviour configuration showing effects, determinant associations, and property controls beyond show/hide."
        }
      },
      {
        "type": "verify",
        "title": "Determinant search and reuse capabilities",
        "oldText": null,
        "newText": "The platform now supports searching and discovering existing determinants within a service, promoting reuse and consistency. Determinants can be searched by name pattern, type, operator, and target field key.",
        "explanation": "The determinant_search API tool shows search capabilities (name_pattern, determinant_type, operator, target_field_key filters). This suggests the BPA UI may have a determinant search/discovery interface that helps analysts find and reuse existing determinants rather than creating duplicates. The exact UI for this needs verification.",
        "screenshot": {
          "type": "unknown",
          "desc": "Determinant search or discovery interface if it exists in the BPA UI."
        }
      },
      {
        "type": "verify",
        "title": "Text determinant condition_logic and json_condition",
        "oldText": null,
        "newText": "Text and select determinants support optional condition_logic and json_condition parameters, enabling more complex conditional expressions beyond simple field-value comparisons.",
        "explanation": "The textdeterminant_create and selectdeterminant_create API tools include optional condition_logic and json_condition parameters. These suggest support for advanced conditional expressions (possibly JSONLogic-based). Whether this is exposed in the BPA UI needs verification.",
        "screenshot": {
          "type": "unknown",
          "desc": "Advanced condition configuration for determinants if available in BPA UI."
        }
      }
    ]
  },
  {
    "id": "bpa-applicant-form",
    "group": "I. Administrative Site (BPA)",
    "title": "D.3. Applicant form",
    "path": "I. Administrative Site → D.3. Applicant form",
    "pages": "32-42",
    "status": "pending",
    "changes": 8,
    "changeSummary": "8 changes detected: Container types (Block, Table, Columns, Field set, Edit grid, Data grid, Tabs) are stable. The form builder's drag-and-drop architecture is unchanged. New field types may exist (e-signature, card-style radios). Collapsible blocks may have enhanced behavior. Button actions have a more structured system via component actions API. Common properties are largely stable. The form_component_add API confirms the same structural paradigm (parent_key, column_index, row_index, cell_index). Tabs may have new features. The form supports 4 form types (applicant, guide, send_file, payment) confirming the original architecture.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Form builder overview",
        "oldText": "This is the section in the application file where the applicant will provide the required data. The form can be developed and customized in any format based on an analysis of the data.\n\nTo create a form, drag and drop any type of required field component from the menu bar into the space below it.",
        "newText": null,
        "explanation": "The fundamental form builder paradigm -- drag and drop components from a menu into the workspace -- is unchanged. The form_component_add API confirms the same structural approach with parent_key for nesting, position for ordering, and column_index/row_index/cell_index for table/column placement.",
        "screenshot": {
          "type": "verify",
          "desc": "Form builder overview -- verify drag and drop interface appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Containers - Block",
        "oldText": "Blocks separate/segregate the different types of information. Blocks are collapsible. If you do not want your blocks to collapse, disable the 'collapsible' toggle under the general tab.",
        "newText": null,
        "explanation": "Blocks remain the primary container type for organizing form sections. The collapsible toggle is a standard block property.",
        "screenshot": {
          "type": "verify",
          "desc": "Block container with collapsible toggle -- verify visual appearance."
        }
      },
      {
        "type": "verify",
        "title": "Containers - Block collapsible enhancements",
        "oldText": null,
        "newText": "Block collapsible behavior may have been enhanced with features such as default collapsed state, animation options, or conditional collapse based on determinants. The MANUAL-UPDATE-PLAN mentions 'collapsible fields' as a new feature.",
        "explanation": "The update plan document mentions 'collapsible fields' as a new feature added to the platform. This suggests the collapsible behavior may have been extended beyond blocks to other component types, or blocks may have gained additional collapsible configuration options. This needs verification on a live instance.",
        "screenshot": {
          "type": "verify",
          "desc": "Block collapsible configuration -- check for any new options beyond the simple toggle."
        }
      },
      {
        "type": "unchanged",
        "title": "Containers - Table",
        "oldText": "Table: drag and drop the table component inside the block. Indicate the number of rows and columns.",
        "newText": null,
        "explanation": "Tables remain a standard container type. The form_component_add API confirms row_index and cell_index parameters for table placement, consistent with the documented behavior.",
        "screenshot": {
          "type": "verify",
          "desc": "Table component configuration -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Containers - Columns",
        "oldText": "Columns: will help align the fields. Only up to 12 units are fitted in one row (e.g., 6+6, 4+4+4, 3+3+3+3).",
        "newText": null,
        "explanation": "The 12-unit column grid system is a standard form.io layout pattern based on Bootstrap's grid. This is unchanged. The form_component_add API confirms column_index parameter for column placement.",
        "screenshot": {
          "type": "verify",
          "desc": "Columns component with 12-unit grid -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Containers - Field set",
        "oldText": "Field set: groups the fields of the same category of data together.",
        "newText": null,
        "explanation": "Field sets remain a standard grouping container.",
        "screenshot": {
          "type": "verify",
          "desc": "Field set component -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Containers - Edit grid",
        "oldText": "Edit grid: enables replication of the same set of fields within it, and addition of multiple data for the same set of fields. The label can be hidden by activating 'Hide Label' toggle.",
        "newText": null,
        "explanation": "Edit grids remain a core container for repeatable data entry. The Hide Label toggle is a standard property.",
        "screenshot": {
          "type": "verify",
          "desc": "Edit grid component -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Containers - Data grid",
        "oldText": "Data grid: very much like an edit grid.",
        "newText": null,
        "explanation": "Data grids remain similar to edit grids. Both support repeatable data entry.",
        "screenshot": {
          "type": "verify",
          "desc": "Data grid component -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Containers - Tabs",
        "oldText": "Tabs: can make the form more organized. Can be displayed as a side menu (vertical layout). Structure can be nested.",
        "newText": null,
        "explanation": "Tabs with vertical layout and nesting capabilities remain a standard container type.",
        "screenshot": {
          "type": "verify",
          "desc": "Tabs component with vertical layout option -- verify visual appearance."
        }
      },
      {
        "type": "verify",
        "title": "Containers - Tabs new features",
        "oldText": null,
        "newText": "Tabs may have gained new features such as conditional tab visibility (driven by determinants), tab validation indicators, or dynamic tab creation. The effects/behaviours system may allow determinant-driven tab control.",
        "explanation": "The update plan mentions 'Tabs may have new features'. The effects/behaviours system (componentbehaviour_get_by_component) could enable determinant-driven tab visibility. However, the specific enhancements need verification on a live instance.",
        "screenshot": {
          "type": "unknown",
          "desc": "Tabs configuration showing any new options beyond vertical layout and nesting."
        }
      },
      {
        "type": "unchanged",
        "title": "Fields - Catalog (dropdown)",
        "oldText": "Catalog (drop-down menu).",
        "newText": null,
        "explanation": "Catalog fields (dropdowns) remain a core field type. The classification system tools in the API extend catalog functionality, but the basic catalog field type is unchanged.",
        "screenshot": {
          "type": "verify",
          "desc": "Catalog field -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Fields - Sub Catalog",
        "oldText": "Sub Catalog.",
        "newText": null,
        "explanation": "Sub catalogs remain a standard field type for dependent/cascading dropdowns.",
        "screenshot": {
          "type": "verify",
          "desc": "Sub catalog field -- verify visual appearance."
        }
      },
      {
        "type": "modified",
        "title": "Fields - Button with actions",
        "oldText": "Button (various actions: event, custom, open link, open service and data in new tab).",
        "newText": "Button (various actions: event, custom, open link, open service and data in new tab). The platform now has a structured component actions system. Buttons can have BOT actions assigned through the component actions framework, and system-predefined actions are available. Actions can be viewed and managed per-component.",
        "explanation": "The button action types (event, custom, open link, open service) remain, but the platform has added a structured component actions system. The componentaction_get_by_component, componentaction_save, componentaction_get_system_actions API tools indicate that button actions are now managed through a more formal framework, including system-level predefined actions. The original four action types likely still exist, but the system for assigning and managing actions has been expanded.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Button action configuration showing available action types, including any new system actions and the component actions framework.",
          "newPath": ""
        }
      },
      {
        "type": "added",
        "title": "Fields - Card-style radios",
        "oldText": null,
        "newText": "<span class=\"hl-added\">Card-style radios are a new radio button presentation style that displays radio options as visual cards rather than traditional radio buttons. This provides a more user-friendly interface for selection-based questions, particularly useful in guides and forms where visual distinction between options improves usability.</span>",
        "explanation": "The MANUAL-UPDATE-PLAN explicitly mentions 'card-style radios' as a new feature added to the platform. This is a visual enhancement to the radio button field type. The exact configuration (custom class, separate component type, or radio property) needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Card-style radio buttons showing the card presentation of radio options, and how to configure them."
        }
      },
      {
        "type": "verify",
        "title": "Fields - E-signature field",
        "oldText": null,
        "newText": "An e-signature field may have been added as a new field type, allowing applicants to provide electronic signatures within the form. This could be used in the Send File page or other declaration sections.",
        "explanation": "The MANUAL-UPDATE-PLAN mentions 'e-signature' as a new feature. Whether it manifests as a new field type in the form builder, a custom component, or a separate system needs verification. E-signature is listed alongside other new features like SmartLink and micro-publish.",
        "screenshot": {
          "type": "unknown",
          "desc": "E-signature field or component if it exists in the form builder."
        }
      },
      {
        "type": "unchanged",
        "title": "Common properties - Help toggle",
        "oldText": "Help toggle (tooltips).",
        "newText": null,
        "explanation": "Help tooltips remain a standard field property.",
        "screenshot": {
          "type": "verify",
          "desc": "Help toggle -- verify appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Common properties - Advanced toggle",
        "oldText": "Advanced toggle (additional features).",
        "newText": null,
        "explanation": "The Advanced toggle for accessing additional field configuration options remains.",
        "screenshot": {
          "type": "verify",
          "desc": "Advanced toggle -- verify appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "Common properties - standard toggles and options",
        "oldText": "Hide Label toggle, Placeholder, Tooltip, Prefix and Suffix, Disabled toggle, Hidden toggle, Reusable toggle, Listing value toggle, Allow Spellcheck, Searchable.",
        "newText": null,
        "explanation": "The standard common properties (Hide Label, Placeholder, Tooltip, Prefix/Suffix, Disabled, Hidden, Reusable, Listing value, Allow Spellcheck, Searchable) are stable form.io-based field properties that remain available.",
        "screenshot": {
          "type": "verify",
          "desc": "Common properties panel -- verify all listed options are still present and check for any new additions."
        }
      },
      {
        "type": "verify",
        "title": "Common properties - potential new properties",
        "oldText": null,
        "newText": "New common properties may have been added, such as:\n- Determinant-aware properties driven by the effects/behaviours system\n- Properties related to the print document builder (print visibility, print formatting)\n- Properties for inter-service data sharing\n- Properties for field-level permissions or restrictions",
        "explanation": "Given the platform's evolution, new field properties may have been added. The effects system and print document builder suggest properties that may be visible in the field configuration UI. However, without live system inspection, the exact current property list cannot be confirmed.",
        "screenshot": {
          "type": "unknown",
          "desc": "Field configuration panels showing any new properties not in the original list."
        }
      }
    ]
  },
  {
    "id": "bpa-documents",
    "group": "I. Administrative Site (BPA)",
    "title": "D.4. Documents",
    "path": "I. Administrative Site → D.4. Documents",
    "pages": "43",
    "status": "pending",
    "changes": 0,
    "changeSummary": "The Documents section remains largely unchanged. The core workflow of enabling the documents tab and linking file upload components to required documents via the Data tab Requirement dropdown is still accurate. No significant new functionality has been identified for this section.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Documents tab toggle",
        "oldText": "The Documents tab can be enabled or disabled for a service. When enabled, it provides a dedicated tab where applicants can see required documents and upload them.",
        "newText": null,
        "explanation": "The documents tab toggle functionality has not changed. It still operates the same way to show or hide the documents section."
      },
      {
        "type": "unchanged",
        "title": "Linking file upload components to required documents",
        "oldText": "File upload components are linked to required documents through the Data tab. In the Data tab of a file upload component, the Requirement dropdown allows selecting which required document the upload is associated with.",
        "newText": null,
        "explanation": "The workflow for linking upload components to document requirements using the Data tab Requirement dropdown remains the same."
      }
    ]
  },
  {
    "id": "bpa-payment",
    "group": "I. Administrative Site (BPA)",
    "title": "D.5. Payment",
    "path": "I. Administrative Site → D.5. Payment",
    "pages": "44-45",
    "status": "pending",
    "changes": 1,
    "changeSummary": "The Payment section core workflow remains accurate. The payments tab, Agency Code and Account Head ID field tags, Payment Providers custom component, online/manual payment radio options, and show decimals toggle are all still present and function as documented. There may be additional payment provider integrations or configuration options added since July 2025, but the basic setup process is unchanged.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Payments tab",
        "oldText": "The Payments tab is available in the service configuration and provides the interface for setting up payment functionality for a service.",
        "newText": null,
        "explanation": "The Payments tab is still present and serves the same purpose."
      },
      {
        "type": "unchanged",
        "title": "Agency Code and Account Head ID field tags",
        "oldText": "The Agency Code and Account Head ID are configured as field tags on payment-related fields. These tags identify the payment destination for processing.",
        "newText": null,
        "explanation": "The field tag mechanism for Agency Code and Account Head ID has not changed."
      },
      {
        "type": "unchanged",
        "title": "Payment Providers custom component",
        "oldText": "The Payment Providers custom component is available under the Custom Components tab and can be added to the payment page to enable payment provider selection.",
        "newText": null,
        "explanation": "The Payment Providers custom component is still available and functions the same way."
      },
      {
        "type": "unchanged",
        "title": "Online/manual payment radio options",
        "oldText": "Radio buttons allow the applicant to choose between online payment and manual payment options when both are available.",
        "newText": null,
        "explanation": "The online/manual payment radio options are still present and function as described."
      },
      {
        "type": "unchanged",
        "title": "Show decimals toggle",
        "oldText": "The show decimals toggle controls whether decimal places are displayed in payment amounts.",
        "newText": null,
        "explanation": "The show decimals toggle is still present and functions as documented."
      },
      {
        "type": "verify",
        "title": "Additional payment providers or integration options",
        "oldText": null,
        "newText": "New payment provider integrations or additional configuration options may have been added since July 2025.",
        "explanation": "The payment ecosystem evolves and new payment provider integrations or configuration options may have been added to the platform. The current list of supported providers and any new configuration options should be verified against the live platform.",
        "screenshot": {
          "type": "unknown",
          "desc": "If new payment providers have been added, screenshots of the updated payment provider selection and any new configuration panels would be needed."
        }
      }
    ]
  },
  {
    "id": "bpa-send-file",
    "group": "I. Administrative Site (BPA)",
    "title": "D.6. Send File",
    "path": "I. Administrative Site → D.6. Send File",
    "pages": "46",
    "status": "pending",
    "changes": 2,
    "changeSummary": "The Send File section has the most significant gap of the sections analyzed. The original content correctly describes the declaration and signature page as a customizable form page using the 'I Swear' custom component. This base functionality is unchanged. However, the e-signature feature is a major addition to the Send page that is entirely absent from the July 2025 manual. A new subsection documenting e-signature configuration and behavior on the Send page is needed.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Declaration and signature page description",
        "oldText": "This is the declaration and signature page. It can be developed the same way you develop the form.",
        "newText": null,
        "explanation": "The Send File page still functions as a declaration and signature page, and it can still be built using the same form development approach (adding components, configuring layout, etc.)."
      },
      {
        "type": "unchanged",
        "title": "I Swear custom component",
        "oldText": "The declaration can be created using the 'I Swear' component under Custom Components tab.",
        "newText": null,
        "explanation": "The 'I Swear' custom component is still available and functions as described for creating declaration checkboxes on the send page."
      },
      {
        "type": "added",
        "title": "E-signature feature on Send page",
        "oldText": null,
        "newText": "<span class=\"hl-added\">The Send page now supports e-signature functionality, allowing applicants to digitally sign their application before submission. This feature must be enabled and configured at the service level. When enabled, a signature component appears on the Send page where applicants can apply their electronic signature to the declaration.\n\nNote: The exact configuration steps, supported signature types, and any prerequisites for enabling e-signature should be documented based on the current platform implementation.</span>",
        "explanation": "E-signature is a significant new feature added to the eRegistrations platform after the July 2025 manual was written. It directly impacts the Send File page by adding a digital signature step to the declaration and submission process. This is entirely new content that needs to be added to the manual.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "New screenshots needed: (1) The e-signature component on the Send page as seen in the BPA form builder, (2) The e-signature interface as seen by the applicant on the public site, (3) Any e-signature configuration options in the component properties or service settings."
        }
      },
      {
        "type": "verify",
        "title": "E-signature configuration details",
        "oldText": null,
        "newText": "The specific configuration steps for e-signature on the Send page need to be documented. This includes: how to enable e-signature for a service, what component or toggle activates it, what signature providers are supported, and what the applicant experience looks like.",
        "explanation": "While it is confirmed that e-signature is a new feature affecting the Send page, the exact configuration workflow and available options need to be verified against the live platform by a subject matter expert. This verification is critical to ensure accurate documentation.",
        "screenshot": {
          "type": "unknown",
          "desc": "Detailed screenshots of the e-signature setup process will be needed once the configuration workflow is verified."
        }
      }
    ]
  },
  {
    "id": "bpa-useful-functions",
    "group": "I. Administrative Site (BPA)",
    "title": "D.7. Focus on some useful functions",
    "path": "I. Administrative Site → D.7. Focus on some useful functions",
    "pages": "47-63",
    "status": "pending",
    "changes": 5,
    "changeSummary": "5 changes detected: Copy value (CVF) functionality is stable and unchanged. Field tags are stable. Formula functions may have expanded beyond the documented list. Input mask and blacklist are stable validation features. Extract data from documents may have AI-based improvements. The component actions system (visible in the API) suggests button actions may have new BOT-related options beyond what was documented. The effects system may offer new ways to control field behavior that could be documented as useful functions.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "a. Copy value of a field to another (prefilling a field)",
        "oldText": "This tool is useful because the applicant does not have to provide the same details repeatedly. To copy value from another field: Edit text field/number field, Data, under 'copy value from', choose the element from the drop down, Save. The order of elements is Name of the page, Block and Field. If the field configuration has the copy value setting, it will be indicated by the letter 'C' in blue color. CVF works only between fields of the same type.",
        "newText": null,
        "explanation": "Copy Value From (CVF) is a core data-sharing mechanism in eRegistrations. The workflow (edit field, Data tab, select source) and the blue C indicator are stable platform conventions. The same-type restriction is a fundamental constraint.",
        "screenshot": {
          "type": "verify",
          "desc": "Copy value from dropdown and C indicator -- verify visual appearance is unchanged."
        }
      },
      {
        "type": "unchanged",
        "title": "b. Copy edit grid values to another edit grid using copy value from",
        "oldText": "To set it up we need two edit grids - source and destination. In the destination edit grid, specify from which edit grid the data will be copied. You can also use a determinant in the destination edit grid copy value from tab.",
        "newText": null,
        "explanation": "Edit grid CVF is a specialized case of the copy value mechanism. The source/destination grid pattern and determinant integration are stable features.",
        "screenshot": {
          "type": "verify",
          "desc": "Edit grid copy value from configuration -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "c. Field tags",
        "oldText": "Field tags are like bookmarks. We can put the same tag to various fields. It is used for concatenation of different fields. Listing-value: enables the name of the company under 'My Applications' on the user dashboard visible.",
        "newText": null,
        "explanation": "Field tags remain a core mechanism for field identification and cross-referencing. The listing-value tag for dashboard display is a well-established feature. Additional field tags may exist (e.g., agencyCode, accountHeadId mentioned in the Payment section), but the concept and workflow are unchanged.",
        "screenshot": {
          "type": "verify",
          "desc": "Field tags dropdown -- verify visual appearance and available tags."
        }
      },
      {
        "type": "verify",
        "title": "c. Field tags - potential new tags",
        "oldText": null,
        "newText": "Additional field tags may have been added since the manual was written. The Payment section references agencyCode and accountHeadId tags. Other system-level tags may exist for integration with new features such as e-signature, classification lookups, or inter-service data sharing.",
        "explanation": "The field tags list may have grown as new features were added to the platform. The exact current list of available field tags needs to be verified on a live instance by examining the field tags dropdown.",
        "screenshot": {
          "type": "verify",
          "desc": "Complete field tags dropdown showing all currently available tags."
        }
      },
      {
        "type": "verify",
        "title": "d. Use formula with examples - function list",
        "oldText": "Types of functions available in the formula builder: maxValue, round, Ceil, Floor, Roundup hundred/thousands/hundred thousands, Subtract days/months/years, Add days/months/years, Override year, Override date, Days difference, Weeks difference, Months difference, Years difference, Business days, Working hours, Working time, Penalty months, formatDateDD-MM-YYYY, Grid row counter, Extract Value From Grid.",
        "newText": "Types of functions available in the formula builder: maxValue, round, Ceil, Floor, Roundup hundred/thousands/hundred thousands, Subtract days/months/years, Add days/months/years, Override year, Override date, Days difference, Weeks difference, Months difference, Years difference, Business days, Working hours, Working time, Penalty months, formatDateDD-MM-YYYY, Grid row counter, Extract Value From Grid.\n\nAdditional formula functions may have been added since the manual was written. The formula builder is a frequently enhanced component and may include new mathematical, date, or string manipulation functions.",
        "explanation": "The formula builder's function list was comprehensive at the time of writing. However, given the platform's evolution (~9,600 commits), new formula functions may have been added. The exact current list needs to be verified by examining the formula builder's function dropdown on a live instance. Common additions might include string functions, conditional logic functions, or new date/time functions.",
        "screenshot": {
          "type": "verify",
          "desc": "Formula builder function dropdown -- capture complete current list and compare with documented list."
        }
      },
      {
        "type": "unchanged",
        "title": "d. Formula examples - adding years and date difference",
        "oldText": "Examples: 1) Adding years to a date using addYears function. 2) Subtracting two dates using daysDifference function.",
        "newText": null,
        "explanation": "The specific examples (addYears, daysDifference) demonstrate stable formula functions that remain valid.",
        "screenshot": {
          "type": "verify",
          "desc": "Formula examples -- verify visual appearance of formula builder."
        }
      },
      {
        "type": "unchanged",
        "title": "e. Input mask",
        "oldText": "Used in text field component to auto validate characters. Input mask is under 'Validation' tab under 'Basic validation'. Use '9' for digits, 'A'/'a' for letters, '*' for alphanumeric. Multiple masks can be enabled.",
        "newText": null,
        "explanation": "Input masks are a standard form.io validation feature. The mask syntax (9/A/a/*) and the location under Validation tab are stable.",
        "screenshot": {
          "type": "verify",
          "desc": "Input mask configuration -- verify visual appearance."
        }
      },
      {
        "type": "unchanged",
        "title": "f. Blacklist",
        "oldText": "Used for restricting certain words in a text field. Click on Validation tab, click on Blacklist option. Options: Case sensitive, Exact match, Word match.",
        "newText": null,
        "explanation": "The blacklist validation feature with its three matching options (case sensitive, exact match, word match) is a stable validation feature.",
        "screenshot": {
          "type": "verify",
          "desc": "Blacklist configuration -- verify visual appearance and options."
        }
      },
      {
        "type": "verify",
        "title": "g. Extract data from documents",
        "oldText": "Used to extract data from documents and putting them automatically onto the form. Under a registration, select the document, open edit modal, create model document, upload an example document. The data extractor lists data available for extraction.",
        "newText": "Used to extract data from documents and putting them automatically onto the form. Under a registration, select the document, open edit modal, create model document, upload an example document. The data extractor lists data available for extraction.\n\nThis feature may have been enhanced with AI-based extraction capabilities, improved accuracy, or support for additional document types. OCR and machine learning improvements in the platform may have expanded what can be automatically extracted.",
        "explanation": "The document data extraction feature is described at a high level in the manual. Given the platform's evolution and the industry trend toward AI-based document processing, this feature may have been significantly enhanced. However, without live system verification, the exact current state cannot be confirmed. The basic workflow (select document, create model, upload example) likely remains the foundation, but the extraction capabilities may be more advanced.",
        "screenshot": {
          "type": "verify",
          "desc": "Document data extraction interface -- verify current workflow and any new AI-based features."
        }
      },
      {
        "type": "verify",
        "title": "Potential new useful functions",
        "oldText": null,
        "newText": "The platform may have added new useful functions that are not documented in this section. Potential additions include:\n- Component actions system: The API shows component actions (componentaction_get, componentaction_save, componentaction_get_system_actions) suggesting a more structured approach to button and field actions.\n- System actions: The componentaction_get_system_actions tool suggests predefined system-level actions available for components.\n- Effects system: The effects/behaviours system may offer new ways to dynamically control field properties.\n- Print document integration: Direct integration with the print document builder may be a new useful function.",
        "explanation": "The API reveals several systems (component actions, system actions, effects) that may represent new useful functions worth documenting. However, their exact role and whether they belong in this section (vs. other sections) needs verification. Some may be documented elsewhere in the manual or may be platform-internal features not exposed to end users.",
        "screenshot": {
          "type": "unknown",
          "desc": "Any new useful functions not covered in the original section."
        }
      }
    ]
  },
  {
    "id": "bpa-custom-classes",
    "group": "I. Administrative Site (BPA)",
    "title": "D.8. Custom classes",
    "path": "I. Administrative Site → D.8. Custom classes",
    "pages": "64-77",
    "status": "pending",
    "changes": 5,
    "changeSummary": "5 items identified: The core custom class system and its categories (Appearance, Spacing, Datagrid, Button, Certificate, Other) remain structurally unchanged from the manual. The 'List bullet check' class is documented in the raw text but was not listed in the original bullet-point summary. Card-style radio class may be new and needs verification. The certificate Print Page A4 system documented in the manual is already comprehensive. Some new custom classes may have been added since the manual was written. The Effects system (activate/deactivate/show/hide/enable/disable) is a new platform feature that may interact with or partially replace certain custom class behaviors.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Custom class introduction",
        "oldText": "Custom class is a feature that can be applied to the fields in the forms. It is used for customizing fields (in terms of spacing, alignment, color, size, etc.) or to deploy a function to a particular field. Depending on the type of fields, different options to customize will be available for selection.",
        "newText": null,
        "explanation": "The fundamental description of custom classes and how to add them (open edit modal, toggle advanced, select custom class) remains accurate.",
        "screenshot": {
          "type": "verify",
          "desc": "Custom class dropdown in the edit modal - verify that the dropdown UI appearance has not changed."
        }
      },
      {
        "type": "unchanged",
        "title": "1. Appearance changing classes",
        "oldText": "List of classes: Value like label, Field + Button, Hide, Text right, Align value to right, Highlight block, Background (Blue, Gray, Green, Orange, Red), Fill background, Default notice, Radio Switch, Search results list. Also includes List bullet check (replaces bullets in an unordered list with a check icon).",
        "newText": null,
        "explanation": "The appearance classes list in the manual body text includes all the classes mentioned in the original summary. The raw text also documents 'List bullet check' which replaces bullets with check icons. The description of each class (Value like label showing field value as label, Field+Button for adjacent button/field layout, background color inheritance warning, etc.) remains accurate. The compatibility matrix tables are also documented.",
        "screenshot": {
          "type": "verify",
          "desc": "Screenshots showing each appearance class effect - verify that visual appearance has not changed in current platform version."
        }
      },
      {
        "type": "unchanged",
        "title": "2. Spacing and alignment classes",
        "oldText": "List of classes: Remove top space, Space top (label space), Top space / Top space (2X) / Top space (3X), Remove top inner space, Vertical align top/center/bottom, Full height.",
        "newText": null,
        "explanation": "All spacing and alignment classes documented in the manual remain the same. Descriptions of each class (Remove top space removes default component top space, Space top creates label-equivalent space, Vertical align works in columns and datagrids, Full height sets 100% available height) are still accurate. The compatibility matrix shows which component types support each class."
      },
      {
        "type": "unchanged",
        "title": "3. Datagrid related classes",
        "oldText": "List of classes: Datagrid footer, Add/Remove disabled, Datagrid Condensed, Has footer, Width (width5 through width100 in steps of 5), Datagrid Hide Column Label.",
        "newText": null,
        "explanation": "All datagrid-related classes remain documented and accurate. The relationship between classes (e.g., Datagrid footer requires Has footer on the datagrid above, Add/Remove disabled also requires Has footer) is correctly documented. Width accepts values from width5 to width100 in steps of 5."
      },
      {
        "type": "unchanged",
        "title": "4. Custom classes for Button",
        "oldText": "List of classes: Field + Button, Orange/Blue/Green/Red, Disable on success, Show cog during form submit, Light color, Outline button.",
        "newText": null,
        "explanation": "All button custom classes remain as documented. The descriptions (Field+Button for adjacent button/field layout with columns, color classes for button coloring, Disable on success preventing re-click after success, Show cog showing loading icon, Light color for lighter shade with black font, Outline button for border-only style) are still accurate. The note about combining Light color with Outline for a more subtle appearance is also documented."
      },
      {
        "type": "unchanged",
        "title": "5. Certificate layout classes - New styles (Print Page A4 system)",
        "oldText": "New certificate styles: Print Page A4, Print text center/right/left, Print center vertical, Print Page top/bottom/horizontal margin small/medium/large (12mm/24mm/36mm), Print corner top/bottom left/right, Print watermark, Print footer distance small/medium/large, Print non latin text, Print color light/dark/brand, Print space xsmall(2mm)/small(4mm)/medium(8mm)/large(12mm)/xlarge(16mm), Print value small(10pt)/large(14pt), Print label small(8pt)/large(10pt).",
        "newText": null,
        "explanation": "The new Print Page A4 certificate styling system is comprehensively documented in the original manual with exact pixel/mm/pt values. This is a complete styling framework already present in the July 2025 manual. The system uses blocks with Print Page A4 class as page containers, with margin, corner, watermark, footer, spacing, color, and text size utility classes.",
        "screenshot": {
          "type": "verify",
          "desc": "Certificate style examples - verify that no new Print classes have been added since the manual was written."
        }
      },
      {
        "type": "unchanged",
        "title": "5. Certificate layout classes - Old styles",
        "oldText": "Old certificate styles: print-big-field, print-small-field, (Print) Highlight Value, (Print) Certificate, (Print) Document Section, (Print) Documents last section, (Print) Terms and conditions, (Print) Certificate header, (Print) Certificate document title, (Print) Certificate footer.",
        "newText": null,
        "explanation": "The old certificate styles are documented in the manual and still exist for backward compatibility. The new Print Page A4 system is the recommended approach for new certificates, but old styles continue to work for existing certificates."
      },
      {
        "type": "unchanged",
        "title": "6. Other custom classes",
        "oldText": "Payment form component and I-swear component.",
        "newText": null,
        "explanation": "The Payment form component (added by default to payment page blocks) and I-swear component (for the I Swear declaration component in Send page) remain as documented."
      },
      {
        "type": "verify",
        "title": "Card-style radio class (potentially new)",
        "oldText": null,
        "newText": "A card-style radio class may have been added to the platform, allowing radio button groups to display as selectable cards rather than traditional radio buttons. This would be an appearance-changing custom class.",
        "explanation": "The MANUAL-UPDATE-PLAN.md mentions 'card-style radios' as a new platform feature. This could be a new custom class (similar to Radio Switch) that transforms radio groups into card-style selectable elements. This needs verification on a live instance to confirm whether it exists as a custom class and what it is called.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Card-style radio custom class example showing radio buttons displayed as selectable cards."
        }
      },
      {
        "type": "verify",
        "title": "New custom classes added since July 2025",
        "oldText": null,
        "newText": "Additional custom classes may have been added to the platform in the approximately 9,600 commits since the manual was written. Categories that may have new entries include appearance classes, spacing classes, and certificate layout classes.",
        "explanation": "With ~9,600 commits since the manual was written, there is a reasonable probability that new custom classes have been added. However, without access to a live BPA instance to verify the current dropdown options, these cannot be specifically identified. A human reviewer should check the custom class dropdown on a current instance to confirm the complete list.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Full custom class dropdown list from current BPA to identify any new classes not in the manual.",
          "newPath": ""
        }
      },
      {
        "type": "verify",
        "title": "Effects system relationship to custom classes",
        "oldText": null,
        "newText": "The Effects system (confirmed via MCP tools to support activate/deactivate/show/hide/enable/disable effect types) is a new platform feature that may partially overlap with or complement custom class functionality for showing/hiding components.",
        "explanation": "The Effects system is confirmed to exist in the platform (MCP tool effect_create supports effect_type: activate/deactivate/show/hide/enable/disable). While effects operate differently from custom classes (effects are determinant-driven behaviors vs. custom classes being static styling), there may be documentation needed to explain when to use effects vs. custom classes like 'Hide'. A human reviewer should determine if this relationship warrants mention in the custom classes section or should be documented separately.",
        "screenshot": {
          "type": "unknown",
          "desc": null
        }
      }
    ]
  },
  {
    "id": "bpa-bot-builder",
    "group": "I. Administrative Site (BPA)",
    "title": "E. BOT builder",
    "path": "I. Administrative Site → E. BOT builder",
    "pages": "77-96",
    "status": "pending",
    "changes": 6,
    "changeSummary": "6 items identified: BOT type definitions and creation workflows are largely unchanged. Data BOT categories have expanded beyond just 'Create' to include read, update, list, exist, log, and other (confirmed via MCP tool muleservice_discover). The concurrent BOT execution toggle and system action restrictions are already documented in the manual. Mapping transformations list is comprehensive and likely unchanged. The Part B system actions concept is mentioned in the manual text. New BOT categories and potential mapping UI improvements need verification.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "BOT definition and types",
        "oldText": "A BOT is an automated action performed by the system. There are two types of BOTs: data BOT (to exchange data between an eRegistration service and an external system like a GDB database) and document BOT (to display a document on the screen or upload it to the user file).",
        "newText": null,
        "explanation": "The fundamental definition of BOTs and the two main types (data BOT and document BOT) remains unchanged. The Internal BOT is documented separately as a third type."
      },
      {
        "type": "unchanged",
        "title": "a) Document BOT creation",
        "oldText": "Click on BOT Builder tab on the side menu. Click on 'add' button. A slider opens. Enter BOT name. Select 'Document BOT' under Type. Categories field appears. Select 'generate and display', 'generate and upload', or 'generate upload display'. Select document from dropdown. Only one document can be generated under one button.",
        "newText": null,
        "explanation": "Document BOT creation workflow is unchanged. The three categories (generate and display, generate and upload, generate upload display) are confirmed via MCP tool muleservice_discover which accepts document_upload, document_generate_and_upload, document_generate_and_display as bot_category values.",
        "screenshot": {
          "type": "verify",
          "desc": "Document BOT creation slider showing type selection and categories dropdown."
        }
      },
      {
        "type": "modified",
        "title": "b) Data BOT creation and categories",
        "oldText": "Click on BOT Builder tab on the side menu. Click on 'add' button in the search bar. A slider will open. Enter BOT name. Select 'Data BOT' under Type of BOT. Categories field will appear. Select 'Create' under Categories. Create.",
        "newText": "Click on BOT Builder tab on the side menu. Click on 'add' button. A slider opens. Enter BOT name. Select 'Data BOT' under Type. Categories field appears. Select the appropriate category: Create, Read, Update, List, Exist, Log, or Other. Create.",
        "explanation": "The original manual only mentions 'Create' as a data BOT category. The MCP tool muleservice_discover confirms that data BOT categories now include: read, create, update, list, exist, log, and other. This is a significant expansion that allows data BOTs to perform various CRUD operations and other actions against external databases. The manual should be updated to list all available categories with brief descriptions.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Data BOT creation slider showing the expanded categories dropdown with all available options (Create, Read, Update, List, Exist, Log, Other).",
          "newPath": ""
        }
      },
      {
        "type": "unchanged",
        "title": "c) Internal BOT",
        "oldText": "Internal BOT enables the analyst to copy data from one component to another. It can be performed on components within the same form, between two different forms, between grid components, or even between forms in different services. Linking services with internal BOT allows pasting data from current service form to another form in a different service. The receiving service can be changed in the mapping page. Can be combined with Polling BOT for awaiting results.",
        "newText": null,
        "explanation": "Internal BOT functionality and the linking services feature are documented accurately. The only minor note is that the manual calls it 'a new type of BOT' which was correct at the time of writing but is no longer new. This is a cosmetic text issue, not a functional change."
      },
      {
        "type": "unchanged",
        "title": "d) Adding actions (BOT roles) to the form",
        "oldText": "Three ways to add action (BOT role) to the form: 1. To a button, 2. To an input field, 3. To a block.\n\nBOT applied to button: Drag block, add table, add button. Click Actions, click 'click to add BOT', drag and drop action. Data and/or Document bots can be executed either in sequence or concurrently (designated toggle). System actions cannot be executed concurrently with any Data or Document bots. It is possible to add actions after System actions. Exceptions which always need to be last: 'Validate Send page' and any Part B System actions.\n\nBOT applied to field: Action will be executed after 1.5 seconds from last change in the field.\n\nBOT applied to block: Action will be executed after the block is rendered. If no determinant, executes on form load. If determinant exists, executes when determinant becomes true.",
        "newText": null,
        "explanation": "The adding actions workflow is accurately and comprehensively documented in the original manual, including the concurrent execution toggle, system action restrictions, and Part B system actions. The field 1.5-second delay and block render-time execution with determinant awareness are all correctly documented.",
        "screenshot": {
          "type": "verify",
          "desc": "BOT action drag-and-drop interface, concurrent toggle, and system action placement."
        }
      },
      {
        "type": "unchanged",
        "title": "2. Mapping between eRegistrations and GDB",
        "oldText": "Mapping or data mapping is the process of matching fields from one database to another. Select the database from GDB with the correct version. Create map links by clicking on data on eRegistrations database then clicking on same data in GDB. Field types should match (indicated by blue+red line if not). Eye icon to hide fields. Version updates require reselection.",
        "newText": null,
        "explanation": "The mapping workflow between eRegistrations and GDB is accurately documented. The write/receive directions, field matching via blue arrows, type mismatch indication, eye icon for hiding fields, and version management are all correct.",
        "screenshot": {
          "type": "verify",
          "desc": "Mapping page showing field connections, type indicators, and version dropdown - verify UI has not changed significantly."
        }
      },
      {
        "type": "unchanged",
        "title": "2b. Mapping in internal BOTs",
        "oldText": "Map data between forms in the same service. Two trees display all forms available. Click expand all, then create links between matching data by clicking left tree then right tree. Field type must match.",
        "newText": null,
        "explanation": "Internal BOT mapping is accurately documented."
      },
      {
        "type": "unchanged",
        "title": "2c. Mapping transformations",
        "oldText": "Transformations are logic conditions applied to mapping. Click on white circle on existing mapping connection to add. Violet circle indicates transformation applied. List: Equals value without case-sensitive, Not equals value, Not equals value without case-sensitive, Contains value, Contains value without case-sensitive, Not contains value, Not contains value without case-sensitive, Less than value, Less or equal than value, Greater than value, Greater or equal than value, Starts with, Similarity (with ordering parameter), Fuzzy and fuzzy with precision class 1-8, Regex expression, Regex expression without case-sensitive, Nullable, Not nullable, IN.",
        "newText": null,
        "explanation": "The mapping transformations list is comprehensive in the original manual. The full list includes case-sensitive and non-case-sensitive variants for most transformations, plus the Similarity and Fuzzy transformations with ordering parameters. The manual's documentation is thorough."
      },
      {
        "type": "verify",
        "title": "New BOT categories or types",
        "oldText": null,
        "newText": "The platform may have additional BOT types or categories beyond what is documented. The MCP tools confirm data BOT categories include read, create, update, list, exist, log, and other. There may be additional specialized BOT types.",
        "explanation": "While the basic BOT types (Document, Data, Internal) are confirmed, the data BOT categories have expanded significantly. The manual should list all current data BOT categories. A human reviewer should verify the complete list of categories and any new BOT types on a live instance.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Data BOT categories dropdown showing all current options.",
          "newPath": ""
        }
      },
      {
        "type": "verify",
        "title": "Mapping UI improvements",
        "oldText": null,
        "newText": "The mapping UI may have received visual or functional improvements since the manual was written, including better field search, improved connection visualization, or new mapping options.",
        "explanation": "With ~9,600 commits since the manual, the mapping UI may have been enhanced. The MCP tools show bot_mapping_summary and bot_suggest_mappings tools, suggesting that automated mapping suggestions may now be available. A human reviewer should check the current mapping UI for any new features.",
        "screenshot": {
          "type": "verify",
          "desc": "Current mapping UI to check for any new features like auto-suggest, search, or improved visualization."
        }
      },
      {
        "type": "verify",
        "title": "BOT input/output visibility",
        "oldText": null,
        "newText": "The MCP tools include bot_input_visibility_update and bot_output_visibility_update operations, suggesting that BOT field visibility can now be configured. This may be a new feature not documented in the original manual.",
        "explanation": "The MCP tools expose bot_input_visibility_update and bot_output_visibility_update, which suggest a feature to control which BOT input/output fields are visible. Additionally, bot_suggest_mappings suggests an automated mapping suggestion feature. These may warrant documentation.",
        "screenshot": {
          "type": "unknown",
          "desc": null
        }
      }
    ]
  },
  {
    "id": "bpa-roles",
    "group": "I. Administrative Site (BPA)",
    "title": "F. Roles",
    "path": "I. Administrative Site → F. Roles",
    "pages": "97-116",
    "status": "pending",
    "changes": 8,
    "changeSummary": "8 items identified: Core role concepts (human/BOT, 4 statuses, description/form/status tabs, moustache templates) remain unchanged. Part B system actions are already referenced in the manual text. Role creation has additional fields confirmed via MCP (allow_to_confirm_payments, allow_access_to_financial_reports). Polling BOT is unchanged. Revision role with field-by-field verification is unchanged. The Effects system is a new platform feature that interacts with role form components. E-signature integration in roles needs verification. New role type options or permissions may exist.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Role definition and types",
        "oldText": "A role is a necessary action by a public institution for a registration to be processed. There are 2 types of roles: Human role (a person reviews the file, adds information, and approves, rejects or sends back the file; various types including review role and processing role) and BOT role (automatic processing role performed by a BOT).",
        "newText": null,
        "explanation": "The fundamental definition of roles and the two main types remain unchanged."
      },
      {
        "type": "modified",
        "title": "1. Create human roles",
        "oldText": "Click on the Processing (Roles) tab on the side menu. Click on 'add' button in the search bar. A slider will open. 'Human role' is selected by default. Activate 'Is start role in process flow' if it is the first role in the registration. Select Role Type. Activate 'Visible for applicant'. Enter name of the role. Enter short name. Create.",
        "newText": "Click on Processing (Roles) tab. Click 'add'. 'Human role' is selected by default. Activate 'Is start role in process flow' if first role. Select Role Type. Activate 'Visible for applicant'. Enter name and short name. Additional options may include: 'Allow to confirm payments' and 'Allow access to financial reports'. Create.",
        "explanation": "The MCP tool role_create confirms two additional fields for human roles: allow_to_confirm_payments and allow_access_to_financial_reports. These are permissions that can be set during role creation to control what operators in this role can do. The basic creation workflow is otherwise unchanged.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Role creation slider showing all fields including payment confirmation and financial reports permissions.",
          "newPath": ""
        }
      },
      {
        "type": "unchanged",
        "title": "Human role elements: a. Description",
        "oldText": "A human role is defined by 3 elements: Description (name of the role, institution in charge, registrations linked), Form (describes the action), Status (0=pending, 1=approved, 2=send back, 3=rejected). The Description tab shows name, short name (editable), registrations linked (select from dropdown or select all), institution in charge (select or add new with name, short name, URL), and involved units.",
        "newText": null,
        "explanation": "The description tab workflow is accurately documented. The institution and unit management is unchanged."
      },
      {
        "type": "unchanged",
        "title": "Human role elements: b. Form",
        "oldText": "The Form tab allows incorporating the action the operator should perform. Example: providing certificate number. Data from fields in this section can be copied to the certificate using 'copy value from' function.",
        "newText": null,
        "explanation": "The form tab functionality remains unchanged. It uses the same form builder as the applicant form."
      },
      {
        "type": "unchanged",
        "title": "Human role elements: c. Status",
        "oldText": "4 basic statuses: 0=Pending, 1=Approved/successfully passed, 2=Sent back for correction, 3=Rejected. Statuses 2 and 3 must be specifically authorized by the Analyst. Under statuses 1 and 2, destination role must be indicated. Messages at various stages use moustache template syntax to copy values from application file. Rejection-reasons and file-rejected mustache variables available. Links can be added to messages. Receiver and delays configurable.",
        "newText": null,
        "explanation": "The status system, moustache templates, and message configuration are all accurately documented in the original manual."
      },
      {
        "type": "unchanged",
        "title": "2. Create BOT roles",
        "oldText": "Click 'BOT role'. Activate 'Is start role' if first. Enter name and short name. Create. Select preceding role to activate. A BOT role is defined by 3 elements: Description (name, type, institution, registrations), BOT (type prefilled from Description, select BOT, mapping), Status (same as human role but BOT cannot reject). Under BOT tab, select API version from GDB. APIs generated automatically for each database version.",
        "newText": null,
        "explanation": "BOT role creation and configuration is accurately documented. The workflow and the three-element structure (Description, BOT, Status) remain the same."
      },
      {
        "type": "unchanged",
        "title": "2.1 Polling BOT",
        "oldText": "Configure a BOT role to query the database periodically for a set amount of time. Toggle 'roles repeat until successful'. Set query interval (how often) and active duration (how long before failure). If data appears before time expires, role succeeds and file continues flow.",
        "newText": null,
        "explanation": "Polling BOT configuration is accurately documented. The MCP tool role_create confirms repeat_until_successful, repeat_in_minutes/hours/days, and duration_in_minutes/hours/days fields."
      },
      {
        "type": "unchanged",
        "title": "3. Revision role",
        "oldText": "Revision role obliges operator to verify and validate documents and data before sending to next role. Usually the start role. Documents revision tab shows uploaded documents on left, data and requirements on right. If operator chooses 'NO', rejection reason field appears (reasons managed in Tables &gt; Instance Catalog &gt; Document Rejection reasons). Data revision tab displays all applicant file components. Field-by-field verification enabled in service settings under 'Revision by field' toggle. Approval button activates only after all documents and data are validated.",
        "newText": null,
        "explanation": "The revision role functionality is comprehensively documented in the original manual, including the document revision workflow, data revision, rejection reasons, and field-by-field verification."
      },
      {
        "type": "verify",
        "title": "Effects system interaction with roles",
        "oldText": null,
        "newText": "The Effects system (activate/deactivate/show/hide/enable/disable) is a new platform feature that may interact with role form components, allowing determinant-driven behavior on processing forms.",
        "explanation": "The Effects system (confirmed via MCP tools) allows creating effects that link determinants to components with various effect types. This could be used in role forms to dynamically show/hide/enable/disable fields based on conditions. A human reviewer should determine if effects are used in role forms and if this warrants documentation in the Roles section.",
        "screenshot": {
          "type": "unknown",
          "desc": null
        }
      },
      {
        "type": "verify",
        "title": "E-signature integration in roles",
        "oldText": null,
        "newText": "E-signature may be integrated into the role processing workflow, allowing operators to digitally sign documents or approvals during processing.",
        "explanation": "The MANUAL-UPDATE-PLAN.md mentions e-signature as a new platform feature. It may be relevant to the roles section if operators can apply e-signatures during processing. This needs verification on a live instance.",
        "screenshot": {
          "type": "unknown",
          "desc": null
        }
      },
      {
        "type": "verify",
        "title": "New role permissions and options",
        "oldText": null,
        "newText": "The MCP tool role_create shows fields: allow_to_confirm_payments (payment permission for UserRole) and allow_access_to_financial_reports (reports permission for UserRole). These may not be documented in the original manual.",
        "explanation": "The MCP tools confirm that roles have permission fields for payment confirmation and financial reports access. The original manual does not appear to document these specific permissions. A human reviewer should verify where these toggles appear in the role creation slider and document them.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Role creation slider showing payment confirmation and financial reports permission toggles."
        }
      },
      {
        "type": "verify",
        "title": "Part B system actions in roles",
        "oldText": "Exceptions which always need to be last are: 'Validate Send page' and any of the Part B System actions.",
        "newText": "Part B system actions are mentioned in the BOT builder section of the original manual as exceptions that must always be last in action sequences. The full scope and configuration of Part B system actions may warrant additional documentation.",
        "explanation": "Part B system actions are mentioned in the manual text (in the BOT builder section) but not extensively documented. The MCP tool componentaction_get_system_actions suggests that system actions are a first-class concept in the platform. A reviewer should verify what Part B system actions are available and whether they need dedicated documentation.",
        "screenshot": {
          "type": "verify",
          "desc": "System actions list and their placement in role action sequences."
        }
      }
    ]
  },
  {
    "id": "bpa-certificates",
    "group": "I. Administrative Site (BPA)",
    "title": "G. Certificates",
    "path": "I. Administrative Site → G. Certificates",
    "pages": "117-124",
    "status": "pending",
    "changes": 6,
    "changeSummary": "6 items identified: The two methods for building certificates (certificate builder and through registration) remain unchanged. QR code component is unchanged. The Print Page A4 styling system is already documented in D.8 Custom classes. The MCP tools reveal a 'print document' system (print_document_list, print_document_create, print_document_component_add/update/remove/move, print_document_sort, print_document_templates, print_document_history, print_document_revert) which may represent a newer or additional certificate management approach. E-signature on certificates needs verification.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "1. Build certificates - Two methods",
        "oldText": "Templates/certificates for electronic results can be built in two ways: 1) Through certificate builder on the left hand side bar of user level 2, 2) Through the registration.",
        "newText": null,
        "explanation": "The two methods for building certificates remain the primary approaches documented in the manual."
      },
      {
        "type": "unchanged",
        "title": "1a. Creating certificate through certificate builder",
        "oldText": "Click on 'Certificate' on the side menu under user level 2. Click on 'Add' to add a new certificate template. A slider opens. Enter name, Create. Certificate appears in list. Click on certificate name to configure. Form builder page appears. Other certificates for the service appear on top menu. Click on 'cert.form' tab to build the certificate.",
        "newText": null,
        "explanation": "The certificate builder workflow is accurately documented.",
        "screenshot": {
          "type": "verify",
          "desc": "Certificate builder side menu, creation slider, and form builder page - verify UI has not changed."
        }
      },
      {
        "type": "unchanged",
        "title": "1b. Creating certificate through registration",
        "oldText": "Choose the registration. Click on 'Digital result' (green button). Activate the digital result button. Scroll down and click on 'create template'. Enter name. The certificate form can be built just like the application form. Values for text fields can be copied from application file or processing role through edit text field, data, copy value from. Value of expiration date can be fixed from the 'data' tab.",
        "newText": null,
        "explanation": "The registration-based certificate creation workflow is accurately documented.",
        "screenshot": {
          "type": "verify",
          "desc": "Digital result button, create template slider, and certificate form builder."
        }
      },
      {
        "type": "unchanged",
        "title": "2. Add QR Code",
        "oldText": "The QR technology merges the physical world with the digital world. Signatures and other authentications are replaced by QR codes. They manifest the legitimacy of a document. To add QR code on a template, drag and drop the 'QR code' from the Custom Component tab on the template.",
        "newText": null,
        "explanation": "QR code functionality is accurately documented. The drag-and-drop from Custom Component tab remains the same."
      },
      {
        "type": "verify",
        "title": "Print document system",
        "oldText": null,
        "newText": "The MCP tools reveal a comprehensive 'print document' system with operations: print_document_list, print_document_get, print_document_component_get, print_document_templates, print_document_history, print_document_create, print_document_update, print_document_delete, print_document_component_add/update/remove/move, print_document_sort, print_document_revert. This may represent an evolution of the certificate builder or an additional system for managing printable documents.",
        "explanation": "The MCP tools expose a 'print document' system that appears to be a comprehensive document management interface with component-level editing, history tracking, sorting, and template management. This is separate from the simple certificate builder documented in the manual. It may be a newer or more advanced approach to certificate/document management. A human reviewer should verify: (1) Is the print document system a replacement for or addition to the certificate builder? (2) Is it visible in the BPA side menu? (3) What is the relationship between 'print documents' and 'certificates'?",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Print document system interface if it exists as a separate BPA feature."
        }
      },
      {
        "type": "verify",
        "title": "E-signature on certificates",
        "oldText": null,
        "newText": "E-signature capability may have been added to certificates, allowing digital signatures to be applied to generated documents.",
        "explanation": "E-signature is mentioned as a new platform feature. It could be relevant to certificates if digital signatures can be embedded in generated documents. This needs verification on a live instance. The QR code section currently mentions that 'signatures and other authentications are replaced by QR codes' -- if e-signature is now available, this statement may need updating.",
        "screenshot": {
          "type": "unknown",
          "desc": null
        }
      },
      {
        "type": "verify",
        "title": "Certificate builder UI changes",
        "oldText": null,
        "newText": "The certificate builder interface may have received UI improvements since the manual was written.",
        "explanation": "With ~9,600 commits since the manual, the certificate builder UI may have been enhanced. The print_document_history and print_document_revert MCP tools suggest version control features that may now exist for certificates. A reviewer should check the current certificate builder for any new features.",
        "screenshot": {
          "type": "verify",
          "desc": "Current certificate builder to check for new features like version history, templates, or component management improvements."
        }
      }
    ]
  },
  {
    "id": "bpa-tables",
    "group": "I. Administrative Site (BPA)",
    "title": "H. Tables",
    "path": "I. Administrative Site → H. Tables",
    "pages": "125-132",
    "status": "pending",
    "changes": 5,
    "changeSummary": "5 items identified: The three types of catalogs (service, cross-tables, instance) remain unchanged. Catalog creation, subcatalogs, GDB-based catalogs, import/export with templates, groups, and document rejection reasons are all accurately documented. The MCP tools reveal a 'classification' system (classification_list, classification_create, classification_update, classification_delete, classification_export_csv, classification_apply_country_codes) that may relate to or extend the catalog system. Import/export may have improvements.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Tables overview and three types",
        "oldText": "Tables is a list of catalogs in the system. Three types: 1. Service catalogs (or simply tables) - group all elements created in services, 2. Cross-tables - see elements linked to each registration, 3. Instance catalogs - catalogs used by all services in one instance.",
        "newText": null,
        "explanation": "The three-type catalog structure and its organization remains unchanged."
      },
      {
        "type": "unchanged",
        "title": "1. Tables/Service catalogs",
        "oldText": "Service catalogs group by nature all elements created in services (data fields, fees, documents, institutions, units, determinants, questions, etc.). The number within brackets indicates the number of elements available.",
        "newText": null,
        "explanation": "Service catalogs functionality is accurately documented."
      },
      {
        "type": "unchanged",
        "title": "2. Cross-tables",
        "oldText": "Cross-tables show elements linked to each registration (data/registrations, documents/registrations, fees/registrations, roles/registration, etc.).",
        "newText": null,
        "explanation": "Cross-tables functionality is accurately documented."
      },
      {
        "type": "unchanged",
        "title": "3. Instance catalogs",
        "oldText": "Catalogs used by all services in one instance (list of countries, cities, company types, economic activities, etc.). Includes: a) How to create a catalog (BPA instance catalog with add/create, add values up to 500 characters, subcatalogs, GDB-based catalogs), b) How to import a catalog with subcatalogs and/or multiple translations (upload items modal with template download, XLS format with level, parent, and language columns), Groups (segregate catalog items into categories, usable as determinants), c) Document rejection reasons (for revision role).",
        "newText": null,
        "explanation": "Instance catalogs, catalog creation, import/export with templates, groups, and document rejection reasons are all comprehensively documented in the original manual."
      },
      {
        "type": "verify",
        "title": "Classification system",
        "oldText": null,
        "newText": "The MCP tools reveal a 'classification' system with operations: classification_list, classification_get, classification_create, classification_update, classification_delete, classification_export_csv, classification_apply_country_codes. This may relate to or extend the catalog/tables system.",
        "explanation": "The MCP tools expose a classification system that appears to be a data source or catalog management feature. classification_export_csv suggests the ability to export classification data. classification_apply_country_codes suggests a country-code standardization feature. A human reviewer should determine: (1) Is the classification system visible in the Tables section or elsewhere in the BPA? (2) Is it an evolution of the catalog system or a separate concept? (3) Does it need its own documentation section?",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Classification system interface if visible in BPA."
        }
      },
      {
        "type": "verify",
        "title": "Catalog import/export improvements",
        "oldText": null,
        "newText": "The catalog import/export functionality may have received improvements since the manual was written, including CSV export capability and additional import formats.",
        "explanation": "The classification_export_csv tool suggests that CSV export is available for catalog data. The import template system (XLS format with levels, parents, and translations) documented in the manual may have been enhanced. A reviewer should verify the current import/export options.",
        "screenshot": {
          "type": "verify",
          "desc": "Current import/export modal showing all available formats and options."
        }
      },
      {
        "type": "verify",
        "title": "GDB-based catalog enhancements",
        "oldText": null,
        "newText": "GDB-based catalogs (catalogs populated from GDB data) may have received improvements in how they reference databases, handle versioning, or display values.",
        "explanation": "The original manual documents GDB-based catalogs with system source selection, database selection, and column mapping. With platform evolution, this functionality may have been enhanced. A reviewer should check the current GDB-based catalog creation workflow.",
        "screenshot": {
          "type": "verify",
          "desc": "GDB-based catalog creation showing system source, database, and column selection."
        }
      }
    ]
  },
  {
    "id": "bpa-settings",
    "group": "I. Administrative Site (BPA)",
    "title": "I. Settings",
    "path": "I. Administrative Site → I. Settings",
    "pages": "133-137",
    "status": "pending",
    "changes": 7,
    "changeSummary": "The Settings section structure (Instance Settings and Service Settings) remains valid. Core items like logo, language, currencies, footer messages, translations, and logout are still present. However, the settings area has likely expanded with new toggles and configuration options added since July 2025 (e.g., e-signature settings, micro-publish options, form version controls, new display system toggles). Individual setting items need verification against the current platform state.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Instance Settings - Logo",
        "oldText": "The instance logo can be configured in the Settings area. This allows administrators to upload or change the logo displayed on the public site.",
        "newText": null,
        "explanation": "Logo configuration in instance settings has not changed."
      },
      {
        "type": "unchanged",
        "title": "Instance Settings - Language and Currencies",
        "oldText": "Language and currency settings allow administrators to configure the default language and available currencies for the instance.",
        "newText": null,
        "explanation": "Language and currency configuration options remain in the same location and function the same way."
      },
      {
        "type": "unchanged",
        "title": "Instance Settings - Footer Messages",
        "oldText": "Footer messages can be configured to display custom text at the bottom of the public site pages.",
        "newText": null,
        "explanation": "Footer message configuration has not changed."
      },
      {
        "type": "verify",
        "title": "Instance Settings - Display System Options",
        "oldText": "Display system options are configurable within instance settings.",
        "newText": "Display system options control various aspects of how the public site behaves and appears. The original manual documents the toggles available as of July 2025.",
        "explanation": "New display system toggles may have been added since July 2025. The exact list of current toggles should be verified against the live platform to determine if new options need to be documented.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Screenshot of the display system options panel -- needs to be recaptured if new toggles have been added.",
          "newPath": ""
        }
      },
      {
        "type": "unchanged",
        "title": "Translations",
        "oldText": "The Translations section allows administrators to manage text translations for the platform interface and service content.",
        "newText": null,
        "explanation": "The translation management feature remains in the same location and operates the same way."
      },
      {
        "type": "unchanged",
        "title": "Log out",
        "oldText": "The Log out option is available in the Settings area to end the current administrator session.",
        "newText": null,
        "explanation": "Logout functionality has not changed."
      },
      {
        "type": "unchanged",
        "title": "Service Settings - Pages/buttons/fields",
        "oldText": "Service-level settings include configuration of pages, buttons, and fields that control the service behavior and appearance.",
        "newText": null,
        "explanation": "The pages/buttons/fields configuration section within service settings remains present and functionally the same."
      },
      {
        "type": "verify",
        "title": "Service Settings - Service Options toggles",
        "oldText": "Service Options is a section within service settings containing various toggles.",
        "newText": "Service Options provides toggles that control service-level behavior. The original manual documents the toggles available as of July 2025.",
        "explanation": "New service option toggles may have been added since July 2025 (e.g., e-signature enable/disable, micro-publish settings, form version options). The current list of available toggles should be verified against the live platform.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Screenshot of the Service Options panel -- needs to be recaptured to show any new toggles.",
          "newPath": ""
        }
      },
      {
        "type": "unchanged",
        "title": "Service Settings - Publish History",
        "oldText": "Publish history shows a log of when the service was published and by whom.",
        "newText": null,
        "explanation": "Publish history functionality has not changed."
      },
      {
        "type": "unchanged",
        "title": "Service Settings - Export Service",
        "oldText": "The Export service feature allows administrators to export the service configuration.",
        "newText": null,
        "explanation": "Service export functionality remains available and operates the same way."
      },
      {
        "type": "unchanged",
        "title": "Service Settings - Databases",
        "oldText": "The Databases section in service settings provides access to database-related configuration.",
        "newText": null,
        "explanation": "Database settings section remains present and functionally the same."
      },
      {
        "type": "verify",
        "title": "Potential new settings sections or categories",
        "oldText": null,
        "newText": "New settings sections or categories may have been added to either Instance Settings or Service Settings since July 2025.",
        "explanation": "The settings area may contain entirely new sections or categories not documented in the July 2025 manual. A comprehensive review of the current settings interface is recommended to identify any new top-level items.",
        "screenshot": {
          "type": "unknown",
          "desc": "Full screenshots of both Instance Settings and Service Settings navigation should be compared against the manual."
        }
      },
      {
        "type": "verify",
        "title": "E-signature related settings",
        "oldText": null,
        "newText": "E-signature functionality may require new settings at either the instance or service level for configuration of signature providers, certificate authorities, or signature appearance options.",
        "explanation": "Since e-signature is a significant new feature, there are likely associated settings that need to be documented. The exact location and nature of these settings should be verified against the platform.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of any e-signature configuration panels in settings would be needed."
        }
      },
      {
        "type": "verify",
        "title": "Micro-publish related settings",
        "oldText": null,
        "newText": "Micro-publish functionality may have introduced new settings or modified existing publish-related settings.",
        "explanation": "If micro-publish is a newer capability, it may have added settings or toggles in the service settings area. This should be verified against the platform.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of any micro-publish settings would be needed if they exist."
        }
      }
    ]
  },
  {
    "id": "ds-user-dashboard",
    "group": "II. Display System (DS)",
    "title": "A. The user dashboard",
    "path": "II. Display System → A. The user dashboard",
    "pages": "137-142",
    "status": "pending",
    "changes": 5,
    "changeSummary": "5 changes detected: Header/menu bar may have UI theme updates, shopping cart integration on dashboard, status display colors and filters may have changed, My Applications table may show additional columns or layout changes, overall DS UI theme may have been refreshed.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "DS definition",
        "oldText": "The user site or the Display System is the user dashboard.",
        "newText": null,
        "explanation": "The core definition of DS as the user-facing dashboard remains accurate."
      },
      {
        "type": "verify",
        "title": "1. For new users - Header and menu bar",
        "oldText": "The header and menu bar consists of: The home button (national logo), home button, login button, register button. Choice of language. The home page displays all available online services.",
        "newText": "The header and menu bar consists of: The home button (national logo), home button, login button, register button. Choice of language. The home page displays all available online services.",
        "explanation": "The header layout with logo, home, login, register buttons, and language selector is a standard DS pattern. However, the DS has undergone UI theme changes since July 2025. The exact visual appearance, button styling, and layout of the header may have changed. The core elements (logo, login, register, language) are likely still present but their visual presentation needs verification.",
        "screenshot": {
          "type": "verify",
          "desc": "DS header bar for new (non-logged-in) users showing logo, home, login, register buttons, and language selector -- verify current visual appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "Registration / Create account flow",
        "oldText": "When the user clicks register, the create account page will be displayed. User provides information and clicks RegisterForAccount. Verification email will be sent.",
        "newText": null,
        "explanation": "The account creation flow (register, fill form, verification email) is a core authentication workflow that remains the same. The backend uses CAS/Keycloak which has not changed this flow.",
        "screenshot": {
          "type": "verify",
          "desc": "Create account page -- verify visual appearance has not changed significantly"
        }
      },
      {
        "type": "unchanged",
        "title": "Home page services list",
        "oldText": "The home page displays all available online services.",
        "newText": null,
        "explanation": "The home page still displays available services. The list format and how services are presented is a core DS function.",
        "screenshot": {
          "type": "verify",
          "desc": "Home page services list -- verify if card layout or list format has changed"
        }
      },
      {
        "type": "verify",
        "title": "2. For logged in users - Menu bar",
        "oldText": "Menu bar consists of: home button and My Account page, name of user, choice of language.",
        "newText": "Menu bar consists of: home button and My Account page, name of user, choice of language.",
        "explanation": "The logged-in user menu bar elements are core DS functionality. However, UI theme changes may have altered the layout or added new elements. The exact arrangement and visual styling needs verification on the current platform.",
        "screenshot": {
          "type": "verify",
          "desc": "Logged-in user menu bar -- verify current layout, buttons, and visual styling"
        }
      },
      {
        "type": "unchanged",
        "title": "My Applications tab",
        "oldText": "The Home button/My Account page displays: My Applications tab (list of applications saved/submitted). Under My Applications: service name, business name, date started, date submitted, status, certificates (can be printed from dashboard).",
        "newText": null,
        "explanation": "The My Applications tab with its core columns (service name, business name, dates, status, certificates) is fundamental DS functionality. The data presented and the ability to print certificates from the dashboard remain the same.",
        "screenshot": {
          "type": "verify",
          "desc": "My Applications tab showing applications table with columns -- verify if additional columns or layout changes exist"
        }
      },
      {
        "type": "unchanged",
        "title": "My Documents tab",
        "oldText": "My Documents tab displays documents submitted by the user.",
        "newText": null,
        "explanation": "The My Documents tab is a standard DS feature that remains available.",
        "screenshot": {
          "type": "verify",
          "desc": "My Documents tab -- verify visual appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "My Messages tab",
        "oldText": "My Messages tab displays messages from administrations/processing roles.",
        "newText": null,
        "explanation": "The My Messages tab is a standard DS feature that remains available for displaying messages from operators to applicants.",
        "screenshot": {
          "type": "verify",
          "desc": "My Messages tab -- verify visual appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "Filter function",
        "oldText": "Filter: search for specific application by service or business name.",
        "newText": null,
        "explanation": "The filter function for searching applications remains a standard DS feature.",
        "screenshot": {
          "type": "verify",
          "desc": "Filter function on My Applications -- verify if additional filter options have been added"
        }
      },
      {
        "type": "unchanged",
        "title": "Application history",
        "oldText": "Application history: click on a service to see stages.",
        "newText": null,
        "explanation": "The ability to view application history and processing stages is a core DS feature.",
        "screenshot": {
          "type": "verify",
          "desc": "Application history view -- verify current visual presentation"
        }
      },
      {
        "type": "verify",
        "title": "Application status colors",
        "oldText": "Application status shown by different colors. Status filters available at bottom.",
        "newText": "Application status shown by different colors. Status filters available at bottom.",
        "explanation": "The status color system is a core DS feature. However, the specific colors used and the status filter UI at the bottom of the page may have been updated as part of UI theme changes. The exact color mapping (which color means which status) and the filter button layout need verification on the current platform.",
        "screenshot": {
          "type": "verify",
          "desc": "Status colors and status filter buttons -- verify current color scheme and filter button layout"
        }
      },
      {
        "type": "verify",
        "title": "Shopping cart integration on dashboard",
        "oldText": null,
        "newText": "The shopping cart feature, as an alternative to the Guide, may be visible or accessible from the user dashboard when starting a new application. The shopping cart shows a summary of registrations, fees, and required documents.",
        "explanation": "The shopping cart is mentioned in the original manual as an alternative to the Guide (in the BPA settings and DS application file sections). Its visibility on the main dashboard or services list -- as opposed to only within an active application -- needs verification. The manual's settings section mentions a 'Shopping cart' toggle under service settings, suggesting it is a per-service option. Whether and how it appears on the user dashboard itself (before entering a service) needs to be confirmed.",
        "screenshot": {
          "type": "unknown",
          "desc": "Verify if shopping cart is visible on the dashboard or only within an active application file"
        }
      },
      {
        "type": "verify",
        "title": "Overall DS UI theme changes",
        "oldText": null,
        "newText": "The DS (Display System) may have undergone visual theme updates since July 2025, including changes to fonts, colors, button styles, spacing, and overall layout. The BPA service settings include a 'UI theme' option that controls the DS appearance.",
        "explanation": "The BPA service settings mention a 'UI theme' option. Since the platform has had approximately 9,600 commits since the manual was written, the DS visual theme may have been refreshed. All DS screenshots likely need to be recaptured to reflect the current visual appearance, even if the underlying functionality has not changed. A human reviewer should compare the current DS appearance against the manual screenshots to determine which need updating.",
        "screenshot": {
          "type": "both",
          "oldDesc": "All DS screenshots in this section should be compared against the current platform to check for UI theme changes",
          "newPath": ""
        }
      }
    ]
  },
  {
    "id": "ds-application-file",
    "group": "II. Display System (DS)",
    "title": "B. Application file (DS)",
    "path": "II. Display System → B. Application file (DS)",
    "pages": "143-144",
    "status": "pending",
    "changes": 4,
    "changeSummary": "4 changes detected: Shopping cart is now explicitly an alternative to the Guide with expanded functionality, e-signature may appear on the Send page, UI theme changes affect all DS pages, overall application file flow structure remains the same.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "1. Guide",
        "oldText": "Answers provided in the Guide will help determine, for each specific user, which documents, fees and data are required.",
        "newText": null,
        "explanation": "The Guide page's purpose and function remain the same. It is still used to ask questions that determine which registrations, documents, fees, and data are required.",
        "screenshot": {
          "type": "verify",
          "desc": "Guide page in DS -- verify current visual appearance"
        }
      },
      {
        "type": "verify",
        "title": "Shopping cart as alternative to Guide",
        "oldText": "Shopping cart: Alternative to the Guide, improved version. Shows summary of registrations, how much to pay and what documents to upload. Accessible on all pages.",
        "newText": "Shopping cart: Alternative to the Guide, improved version. Shows summary of registrations, how much to pay and what documents to upload. Accessible on all pages. The shopping cart is enabled via a toggle in service settings and replaces the Guide page for services that use it.",
        "explanation": "The shopping cart was already mentioned in the July 2025 manual as an alternative to the Guide. However, its exact current state, visual appearance, and behavior may have evolved. The shopping cart toggle exists in BPA service settings. Whether the shopping cart has gained new functionality (such as better registration selection, improved summary display, or integration with new payment features) needs verification. The existing description may be accurate but the visual presentation likely changed with UI theme updates.",
        "screenshot": {
          "type": "verify",
          "desc": "Shopping cart view in DS -- verify current appearance and features, especially if it has been enhanced since July 2025"
        }
      },
      {
        "type": "unchanged",
        "title": "2. Applicant form",
        "oldText": "This is where the applicant provides all the relevant data that pertains to his objective.",
        "newText": null,
        "explanation": "The applicant form page's purpose and description remain accurate.",
        "screenshot": {
          "type": "verify",
          "desc": "Applicant form page in DS -- verify current visual appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "3. Documents",
        "oldText": "This is the documents upload page. This tab will appear only if documents need to be uploaded.",
        "newText": null,
        "explanation": "The Documents upload page behavior (appearing only when documents are required) remains the same.",
        "screenshot": {
          "type": "verify",
          "desc": "Documents upload page in DS -- verify current visual appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "4. Payment",
        "oldText": "Payment tab will appear only if there is a payment in the process.",
        "newText": null,
        "explanation": "The Payment page behavior (appearing only when payment is required) remains the same.",
        "screenshot": {
          "type": "verify",
          "desc": "Payment page in DS -- verify current visual appearance"
        }
      },
      {
        "type": "verify",
        "title": "5. Send page - E-signature",
        "oldText": "The confirmation page usually consists of a set of terms and conditions that the applicant needs to abide by.",
        "newText": "The confirmation page usually consists of a set of terms and conditions that the applicant needs to abide by. The Send page may now include e-signature functionality, allowing applicants to digitally sign their application before submission.",
        "explanation": "E-signature is a known new platform feature. The Send page (declaration and signature page) is the natural location for e-signature functionality in the applicant workflow. The BPA side has an 'I Swear' component for the Send page, and e-signature may extend or complement this. However, the exact implementation -- whether e-signature is an additional step, replaces the 'I Swear' checkbox, or is optional -- needs verification on the current platform. This is a significant potential addition to the Send page.",
        "screenshot": {
          "type": "both",
          "oldDesc": "Send page in DS -- verify if e-signature functionality is present and capture its appearance",
          "newPath": ""
        }
      },
      {
        "type": "verify",
        "title": "UI theme changes across application file pages",
        "oldText": null,
        "newText": "All application file pages (Guide, Form, Documents, Payment, Send) may have received visual updates as part of DS UI theme changes.",
        "explanation": "The DS has likely undergone visual theme updates since July 2025. The BPA service settings include a 'UI theme' option. All screenshots of application file pages should be verified against the current platform to determine if visual updates are needed. The functional behavior is likely the same, but the visual presentation may differ.",
        "screenshot": {
          "type": "both",
          "oldDesc": "All application file page screenshots should be compared against current platform appearance",
          "newPath": ""
        }
      }
    ]
  },
  {
    "id": "ds-operators-processing",
    "group": "II. Display System (DS)",
    "title": "C. Operators processing pages",
    "path": "II. Display System → C. Operators processing pages",
    "pages": "145-151",
    "status": "pending",
    "changes": 6,
    "changeSummary": "6 changes detected: Part B system actions integration in processing, e-signature verification capability for operators, effects system may alter processing behavior, file list page may have UI updates, processing page may show new tabs or features, clearing old files functionality needs verification.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Processing pages overview",
        "oldText": "Processing pages are what operators of the institutions which offer registrations in a service see. As a super administrator, you can access the operators' processing pages from the display system (through Part B).",
        "newText": null,
        "explanation": "The fundamental description of processing pages and their accessibility remains accurate."
      },
      {
        "type": "verify",
        "title": "1. The file list page - Status filters",
        "oldText": "The list of files filtered by status (pending, approved, rejected, sent back for corrections) is displayed. The drop down list displays all services. Select the service, then select the role from the first dropdown. Calendar icon allows viewing applications submitted at a certain day/time range. The first screen displays all pending files by default.",
        "newText": "The list of files filtered by status (pending, approved, rejected, sent back for corrections) is displayed. The drop down list displays all services. Select the service, then select the role from the first dropdown. Calendar icon allows viewing applications submitted at a certain day/time range. The first screen displays all pending files by default.",
        "explanation": "The file list page with status filters, service/role dropdowns, and calendar filter is a core processing feature. The underlying functionality is likely the same but the visual presentation may have changed with UI theme updates. The exact layout of filters and status buttons should be verified.",
        "screenshot": {
          "type": "verify",
          "desc": "File list page showing status filters, service dropdown, role dropdown, calendar filter -- verify current layout and appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "File list sub menu",
        "oldText": "Sub menu: Status of file, Business name, Date of receipt, status of registrations, operator in charge. Status filter on bottom corner with different colors. Other filters: all files, validated, sent back, rejected.",
        "newText": null,
        "explanation": "The file list sub menu columns and filter options are core processing functionality.",
        "screenshot": {
          "type": "verify",
          "desc": "File list sub menu columns and status filter colors -- verify current appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "2. The processing page - Application details and history",
        "oldText": "This is the 2nd screen of the operator's role. The top part displays application details (zip folder of documents) and application history.",
        "newText": null,
        "explanation": "The processing page layout with application details at the top and history section remains a core feature.",
        "screenshot": {
          "type": "verify",
          "desc": "Processing page top section with application details and history -- verify current layout"
        }
      },
      {
        "type": "unchanged",
        "title": "a) Revision role",
        "oldText": "Revision role: Requires operator to verify documents and data. If operator chooses 'NO' under documents revision, field appears for rejection reason. Documents revision tab shows uploaded documents on left, data and requirements on right. Data revision tab displays all components.",
        "newText": null,
        "explanation": "The revision role with its documents revision and data revision tabs remains the same in concept. The two-tab structure (documents/data) is core processing functionality.",
        "screenshot": {
          "type": "verify",
          "desc": "Revision role with documents revision and data revision tabs -- verify current appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "b) Processing role",
        "oldText": "Processing role: Form/action developed by analyst. Operator can generate action (display/upload certificate). Validate, reject, or send back the application. Documents tab shows uploaded documents and certificates. Data tab shows all BPA application file components.",
        "newText": null,
        "explanation": "The processing role with its form, action buttons (validate/reject/send back), and documents/data tabs remains core functionality.",
        "screenshot": {
          "type": "verify",
          "desc": "Processing role showing form, action buttons, documents tab, data tab -- verify current appearance"
        }
      },
      {
        "type": "verify",
        "title": "Part B system actions",
        "oldText": null,
        "newText": "Part B may now include system action buttons that can be enabled via BPA service settings. These buttons allow operators to perform additional system-level actions during processing, such as triggering BOTs, generating documents, or executing automated workflows directly from the processing page.",
        "explanation": "The BPA service settings mention 'enabling BPA system buttons in Part B' under the Buttons options in Pages/buttons/fields settings. This suggests that Part B (the operator's processing interface) can now display system action buttons that were previously only available in the BPA. The exact nature, appearance, and functionality of these Part B system actions needs verification on the current platform. This could be a significant addition to the operator's processing workflow.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Part B system actions -- capture any system action buttons visible in the processing page if they exist"
        }
      },
      {
        "type": "verify",
        "title": "E-signature verification in processing",
        "oldText": null,
        "newText": "Operators may now be able to verify e-signatures on submitted applications during the processing stage. If applicants use e-signature on the Send page, operators should be able to see and verify the signature status.",
        "explanation": "E-signature is a known new platform feature. If applicants can e-sign their applications on the Send page, it follows that operators would need to see and verify this signature during processing. However, the exact implementation -- whether there is a dedicated signature verification panel, a status indicator, or integration with the documents revision tab -- is not confirmed and needs verification on the current platform.",
        "screenshot": {
          "type": "unknown",
          "desc": "E-signature verification in operator processing -- verify if and how signature verification appears in the processing page"
        }
      },
      {
        "type": "verify",
        "title": "Effects system in processing",
        "oldText": null,
        "newText": "The effects system may influence operator processing by automatically triggering actions based on operator decisions. For example, when an operator approves or rejects a file, effects may automatically trigger BOTs, send notifications, or update database records.",
        "explanation": "The effects system is mentioned as a new platform feature (in the MANUAL-UPDATE-PLAN.md). Effects allow creating automated reactions to events in the system. In the context of operator processing, effects could be triggered by status changes (approval, rejection, send-back). However, whether effects are visible to operators during processing or are purely backend automation is unknown. The exact relationship between effects and the processing page UI needs verification.",
        "screenshot": {
          "type": "unknown",
          "desc": "Verify if any effects-related UI elements appear on the operator processing page"
        }
      },
      {
        "type": "unchanged",
        "title": "3. Clearing old files from the service",
        "oldText": "The section on clearing old files from the service describes the process for removing outdated application files.",
        "newText": null,
        "explanation": "The ability to clear old files from a service is a maintenance feature that is likely still present.",
        "screenshot": {
          "type": "verify",
          "desc": "Clearing old files -- verify the feature is still present and accessible in the same location"
        }
      }
    ]
  },
  {
    "id": "gdb-public-part",
    "group": "III. Generic Database (GDB)",
    "title": "A. Public part",
    "path": "III. Generic Database → A. Public part",
    "pages": "153-154",
    "status": "pending",
    "changes": 1,
    "changeSummary": "1 change detected: GDB public interface may have minor UI updates but the core structure (header bar, hamburger menu, database list, status button, add record button) is largely stable.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "GDB description",
        "oldText": "GDB is a system to create and administer a professional database easily, without programming. Databases created with GDB can exchange data electronically with eRegistrations and any other external system through Web services.",
        "newText": null,
        "explanation": "The core description of GDB as a no-code database system with web service capabilities has not changed."
      },
      {
        "type": "unchanged",
        "title": "Public and admin parts",
        "oldText": "GDB is composed of a public part (where we see the databases created and their content) and an admin part.",
        "newText": null,
        "explanation": "The division of GDB into public and admin parts remains the same."
      },
      {
        "type": "unchanged",
        "title": "Header bar components",
        "oldText": "The header bar consists of: Hamburger button (displays list of databases, 'create new database' and 'create new group' buttons), Name of database currently displayed, Status button (version and last updated date), Language, Logged in user.",
        "newText": null,
        "explanation": "The header bar components are core GDB navigation elements that have not changed in structure.",
        "screenshot": {
          "type": "verify",
          "desc": "GDB header bar -- verify visual appearance is still the same"
        }
      },
      {
        "type": "unchanged",
        "title": "Sub menu and record controls",
        "oldText": "The sub menu displays the name of the database. The 'add record' button and edit/delete icons are visible only to authorized users.",
        "newText": null,
        "explanation": "The sub menu with database name and record control buttons (add/edit/delete) visible based on user permissions is core GDB functionality.",
        "screenshot": {
          "type": "verify",
          "desc": "GDB sub menu with add record button -- verify current appearance"
        }
      },
      {
        "type": "verify",
        "title": "Minor UI changes",
        "oldText": null,
        "newText": "The GDB public interface may have minor visual updates (styling, spacing, icons) but the overall structure and functionality remain the same.",
        "explanation": "GDB is a mature and stable system. While the platform has had many updates, the GDB public interface tends to receive fewer visual changes compared to the DS. However, given the time elapsed since the manual was written, minor visual differences in styling or icons are possible. A visual comparison of the current GDB interface against the manual screenshots is recommended.",
        "screenshot": {
          "type": "verify",
          "desc": "Compare current GDB public interface against all screenshots in this section"
        }
      }
    ]
  },
  {
    "id": "gdb-create-groups-records",
    "group": "III. Generic Database (GDB)",
    "title": "B.1-3. Create database, Groups, Add record",
    "path": "III. Generic Database → B.1-3. Create database, Groups, Add record",
    "pages": "155-165",
    "status": "pending",
    "changes": 3,
    "changeSummary": "3 changes detected: Core GDB creation and record management functionality is stable. Field type dropdown may include new types. Database diagram visualization may have improvements. Link between databases feature is unchanged.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "B.1. Create a database",
        "oldText": "To create a database, click on the hamburger button, then click 'create new database'. Enter institution name under Title, enter short name (without spaces). Version starts at 1.0.",
        "newText": null,
        "explanation": "The database creation workflow (hamburger menu, create new database, title, short name, version) has not changed."
      },
      {
        "type": "unchanged",
        "title": "DB structure creation",
        "oldText": "Create the DB structure adding fields and blocks by clicking on the '+' symbol. 'ID' appears by default as the first field. Click on the dropdown to select field type (text, number, block, date, catalog, etc.). Note: field type should be same as in BPA.",
        "newText": null,
        "explanation": "The core DB structure creation process (adding fields via '+', default ID field, field type dropdown) remains the same."
      },
      {
        "type": "verify",
        "title": "Field type dropdown - possible new types",
        "oldText": "Click on the dropdown to select field type (text, number, block, date, catalog, etc.).",
        "newText": "The field type dropdown includes standard types: text, number, block, date, catalog, etc. Additional field types may have been added to the platform since July 2025.",
        "explanation": "The field type dropdown is a core GDB feature. While the standard types (text, number, block, date, catalog) are certainly still present, the platform may have introduced new field types. A review of the current field type dropdown is recommended to ensure all available types are documented.",
        "screenshot": {
          "type": "verify",
          "desc": "Field type dropdown -- verify if new field types have been added beyond the documented ones"
        }
      },
      {
        "type": "unchanged",
        "title": "Simple view and reordering",
        "oldText": "Use blocks to group records/fields together. Click 'simple view' to view basic components. Use the symbol in front to change order by dragging. Publish to save and see changes in public part.",
        "newText": null,
        "explanation": "The simple view toggle, drag-to-reorder, and publish workflow are core GDB features."
      },
      {
        "type": "unchanged",
        "title": "B.2. Create database groups",
        "oldText": "To create a database group, click hamburger button, then 'create new group'. Enter name, optionally upload a logo. Databases can be created within groups or dragged into groups.",
        "newText": null,
        "explanation": "Database group creation workflow has not changed."
      },
      {
        "type": "unchanged",
        "title": "Edit Group",
        "oldText": "Groups can be edited after creation.",
        "newText": null,
        "explanation": "Group editing remains available."
      },
      {
        "type": "verify",
        "title": "Database diagram",
        "oldText": "Visualization of how different databases within the same group relate to each other. Click on group name then diagram icon. All databases shown as blocks with relationship lines. Zoom with mouse scroll, rearrange with drag and drop. Navigation icons for layout.",
        "newText": "Visualization of how different databases within the same group relate to each other. Click on group name then diagram icon. All databases shown as blocks with relationship lines. Zoom with mouse scroll, rearrange with drag and drop. Navigation icons for layout.",
        "explanation": "The database diagram visualization is a GDB feature that may have received improvements over time. The core functionality (showing database relationships, zoom, drag and drop) is likely the same, but visual improvements or additional navigation/layout features may have been added. The exact current appearance should be verified.",
        "screenshot": {
          "type": "verify",
          "desc": "Database diagram -- verify current visual appearance and any new navigation or layout features"
        }
      },
      {
        "type": "unchanged",
        "title": "Creating links between databases",
        "oldText": "Click DB structure, click Settings for a field, switch toggle 'Link to other DBs' on, select database and field to link. 'L' icon indicates linked field.",
        "newText": null,
        "explanation": "The database linking feature (Link to other DBs toggle, L icon indicator) is core GDB functionality that has not changed."
      },
      {
        "type": "unchanged",
        "title": "B.3. Add record",
        "oldText": "To add a record, click 'Add record' button on sub menu. A slider opens. Enter all data, Save. The slider can be expanded or minimized by dragging the border. Records can be edited or deleted.",
        "newText": null,
        "explanation": "The record creation workflow (add button, slider, expand/minimize, edit/delete) has not changed."
      },
      {
        "type": "unchanged",
        "title": "Field history",
        "oldText": "Click on a record to see details. History icon appears next to every field. Shows date of change, user who made change, type of action, initial value, new value. Block container history shows times table for tracing value changes by date.",
        "newText": null,
        "explanation": "The field history feature with its audit trail (date, user, action, values) is a mature GDB feature."
      }
    ]
  },
  {
    "id": "gdb-management",
    "group": "III. Generic Database (GDB)",
    "title": "B.4. Database management",
    "path": "III. Generic Database → B.4. Database management",
    "pages": "164-174",
    "status": "pending",
    "changes": 5,
    "changeSummary": "5 changes detected: API types list may have expanded beyond the 9 documented types. Views feature may have new options. Import/export formats may have changed. Filters and columns functionality is stable. DB Structure management is stable.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "Database management menu",
        "oldText": "The 'tools on' button displays the database management menu: Version, creation date, administrator login.",
        "newText": null,
        "explanation": "The tools on button and management menu header information remain the same."
      },
      {
        "type": "unchanged",
        "title": "Filters",
        "oldText": "Filters allow selective data viewing. Complex filters available for nested conditions.",
        "newText": null,
        "explanation": "The filter system (simple and complex/nested) is core GDB functionality that has not changed."
      },
      {
        "type": "unchanged",
        "title": "Columns",
        "oldText": "Columns tab displays selected data.",
        "newText": null,
        "explanation": "The columns tab for selecting displayed data remains the same."
      },
      {
        "type": "unchanged",
        "title": "Reports",
        "oldText": "Reports tab for creating/viewing reports.",
        "newText": null,
        "explanation": "The reports feature remains available."
      },
      {
        "type": "verify",
        "title": "Import data",
        "oldText": "Import data from external files/databases.",
        "newText": "Import data from external files/databases.",
        "explanation": "The import functionality is core GDB feature. However, the supported import formats and options may have expanded. The current import dialog should be verified to ensure all available formats and options are documented.",
        "screenshot": {
          "type": "verify",
          "desc": "Import data dialog -- verify current supported formats and import options"
        }
      },
      {
        "type": "verify",
        "title": "Export data",
        "oldText": "Export data in JSON, XLS, CSV formats.",
        "newText": "Export data in JSON, XLS, CSV formats.",
        "explanation": "The export formats documented (JSON, XLS, CSV) are the standard set. Additional export formats may have been added. The current export dialog should be verified to confirm available formats.",
        "screenshot": {
          "type": "verify",
          "desc": "Export data dialog -- verify current supported formats"
        }
      },
      {
        "type": "unchanged",
        "title": "Log",
        "oldText": "Log displays change history.",
        "newText": null,
        "explanation": "The log feature for viewing change history is core GDB functionality."
      },
      {
        "type": "unchanged",
        "title": "Delete data",
        "oldText": "Delete data button (irreversible).",
        "newText": null,
        "explanation": "The delete data functionality remains the same with its irreversible nature."
      },
      {
        "type": "verify",
        "title": "a) Views",
        "oldText": "Subset of GDB displaying selected data defined by filters. Create view by clicking Views tab, '+' button, enter name, add filters, drag fields to 'view fields'. Publish for visibility. Complex views involving multiple databases possible through linked databases.",
        "newText": "Subset of GDB displaying selected data defined by filters. Create view by clicking Views tab, '+' button, enter name, add filters, drag fields to 'view fields'. Publish for visibility. Complex views involving multiple databases possible through linked databases.",
        "explanation": "Views are a mature GDB feature. The core workflow (create, filter, select fields, publish) is likely the same. However, views may have gained new features such as additional filter options, improved multi-database views, new embed options, or enhanced URL/sharing capabilities. The current views interface should be verified for any additions.",
        "screenshot": {
          "type": "verify",
          "desc": "Views creation and configuration -- verify if new features or options have been added"
        }
      },
      {
        "type": "verify",
        "title": "b) APIs",
        "oldText": "Tool for web services enabling data exchange between DS and GDB. API types: Create, Create-entries, Read, List, Update, Listen, Update-entries, Exists, Delete. Dashboard shows creation date, name, URL, usage counts. APIs versioned per database version. Visibility toggle controls BPA availability.",
        "newText": "Tool for web services enabling data exchange between DS and GDB. API types: Create, Create-entries, Read, List, Update, Listen, Update-entries, Exists, Delete. Dashboard shows creation date, name, URL, usage counts. APIs versioned per database version. Visibility toggle controls BPA availability.",
        "explanation": "The manual documents 9 API types: Create, Create-entries, Read, List, Update, Listen, Update-entries, Exists, Delete. This is a comprehensive list but additional API types may have been added to the platform since July 2025. The API dashboard with its statistics, versioning, and visibility toggle are mature features. A review of the current API type dropdown is recommended to confirm whether new types exist.",
        "screenshot": {
          "type": "verify",
          "desc": "API creation -- verify the current list of available API types and whether new ones have been added beyond the 9 documented"
        }
      },
      {
        "type": "unchanged",
        "title": "API Dashboard",
        "oldText": "Dashboard shows creation date, name, URL, usage counts. Statistics visualization available. Copy URL button and visibility toggle for BPA availability. Delete API button available.",
        "newText": null,
        "explanation": "The API dashboard with its information display, statistics, and controls is mature GDB functionality.",
        "screenshot": {
          "type": "verify",
          "desc": "API dashboard -- verify current appearance and any new dashboard features"
        }
      },
      {
        "type": "unchanged",
        "title": "c) DB Structure",
        "oldText": "Modify database structure. Duplicate database. Add/delete/reorder fields. Version updates on save. Publish and remap in BPA required.",
        "newText": null,
        "explanation": "The DB structure management workflow (modify, duplicate, version, publish, remap) is core GDB functionality."
      }
    ]
  },
  {
    "id": "gdb-special-features",
    "group": "III. Generic Database (GDB)",
    "title": "B.5. Special features",
    "path": "III. Generic Database → B.5. Special features",
    "pages": "175-182",
    "status": "pending",
    "changes": 2,
    "changeSummary": "2 changes detected: Special features are largely stable. ID format tags and triggers may have new options. Some features may have minor improvements but the documented functionality is accurate.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "a) Change format of ID",
        "oldText": "Click DB Structure, click settings cog on ID column. Advanced Settings, Triggers tab. Configure with available tags: Short name, Index no, Index no by database code, Current year, End of number current year.",
        "newText": null,
        "explanation": "The ID format configuration with its tag system is a mature GDB feature. The workflow (settings cog, advanced settings, triggers tab) has not changed."
      },
      {
        "type": "verify",
        "title": "ID format tags - possible new tags",
        "oldText": "Tags available: Short name, Index no, Index no by database code, Current year, End of number current year.",
        "newText": "The documented tags are: Short name, Index no, Index no by database code, Current year, End of number current year. Additional tags may have been added to the platform.",
        "explanation": "The ID format tag list is specific and may have been expanded. New tags could have been added for additional formatting options (e.g., month, custom prefix, sequential numbering variations). The current tag dropdown should be verified to confirm the complete list.",
        "screenshot": {
          "type": "verify",
          "desc": "ID format tags dropdown -- verify if new tags have been added"
        }
      },
      {
        "type": "unchanged",
        "title": "b) Show catalog key in database structure",
        "oldText": "Click Settings, activate 'Show key and value' toggle.",
        "newText": null,
        "explanation": "The catalog key display toggle is a simple feature that has not changed."
      },
      {
        "type": "unchanged",
        "title": "c) Migrate data between databases",
        "oldText": "Open target table, click 'Import Data', Database tab, Create. Select source database, drag and drop column labels to map data, click Migrate.",
        "newText": null,
        "explanation": "The data migration workflow between databases has not changed."
      },
      {
        "type": "unchanged",
        "title": "d) Import data to other database on trigger",
        "oldText": "Import data to other database on trigger.",
        "newText": null,
        "explanation": "The trigger-based import feature remains available."
      },
      {
        "type": "unchanged",
        "title": "e) Setting readonly field property",
        "oldText": "Setting readonly field property on GDB.",
        "newText": null,
        "explanation": "The readonly field property setting has not changed."
      },
      {
        "type": "unchanged",
        "title": "f) Pattern label (regex)",
        "oldText": "How to apply pattern label (regex using) on GDB.",
        "newText": null,
        "explanation": "The regex pattern label feature has not changed."
      },
      {
        "type": "unchanged",
        "title": "g) Listing value in edit grids",
        "oldText": "How to add listing value in GDB edit grids.",
        "newText": null,
        "explanation": "The listing value feature in edit grids has not changed."
      },
      {
        "type": "unchanged",
        "title": "h) Compare databases",
        "oldText": "How to compare two databases.",
        "newText": null,
        "explanation": "The database comparison feature has not changed."
      },
      {
        "type": "unchanged",
        "title": "i) Textfield to select",
        "oldText": "How to make a textfield into a select predefined values field.",
        "newText": null,
        "explanation": "The textfield-to-select conversion feature has not changed."
      },
      {
        "type": "unchanged",
        "title": "j) Limit document type",
        "oldText": "Where to limit the document type accepted by the file field.",
        "newText": null,
        "explanation": "The document type limitation feature has not changed."
      },
      {
        "type": "unchanged",
        "title": "k) Multiple files",
        "oldText": "How to configure database file field to accept multiple files: Open DB structure, add file field, open advance settings, Base settings tab, activate Multiple toggle, publish.",
        "newText": null,
        "explanation": "The multiple files configuration (advance settings, Base settings tab, Multiple toggle) has not changed."
      },
      {
        "type": "verify",
        "title": "Possible new special features",
        "oldText": null,
        "newText": "Additional special features or GDB triggers may have been added to the platform since July 2025.",
        "explanation": "GDB special features is a collection of various configuration options and tips. While the documented features are all likely still valid, new special features or configuration options may have been added. A comprehensive review of the current GDB settings and advanced options is recommended to identify any undocumented features.",
        "screenshot": {
          "type": "unknown",
          "desc": "Review current GDB advanced settings for any new special features not documented in the manual"
        }
      }
    ]
  },
  {
    "id": "gdb-user-rights",
    "group": "III. Generic Database (GDB)",
    "title": "B.6. User rights in GDB",
    "path": "III. Generic Database → B.6. User rights in GDB",
    "pages": "183-188",
    "status": "pending",
    "changes": 2,
    "changeSummary": "2 changes detected: Rights system is mature and stable. Keycloak integration may have evolved with new import features or SSO improvements. Toggle behavior (GREEN/GREY/YELLOW) is unchanged.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "User rights overview",
        "oldText": "User rights management enables admin users to grant or take away rights and privileges to other users.",
        "newText": null,
        "explanation": "The core purpose of user rights management has not changed."
      },
      {
        "type": "unchanged",
        "title": "a) User rights page layout",
        "oldText": "Click user button, select User management. Left side: list of registered users. Right side: rights granted to selected user.",
        "newText": null,
        "explanation": "The user rights page layout (left side users, right side rights) is core GDB functionality."
      },
      {
        "type": "unchanged",
        "title": "Search existing user",
        "oldText": "Search an existing user from the list of registered users.",
        "newText": null,
        "explanation": "User search functionality has not changed."
      },
      {
        "type": "verify",
        "title": "Import user from CAS/Keycloak",
        "oldText": "Create a new user: Must be registered in CAS/KC first. Import by clicking icon next to search field, enter user ID.",
        "newText": "Create a new user: Must be registered in CAS/KC first. Import by clicking icon next to search field, enter user ID. Users can be imported from CAS or Keycloak identity providers.",
        "explanation": "The CAS/Keycloak user import feature is documented and likely still works the same way. However, Keycloak integration may have evolved since July 2025 -- for example, there may be new import options, batch import capabilities, or changes to how Keycloak IDs are handled. The basic workflow (import from identity provider) is likely the same, but specific details should be verified.",
        "screenshot": {
          "type": "verify",
          "desc": "User import from CAS/Keycloak -- verify current import dialog and options"
        }
      },
      {
        "type": "unchanged",
        "title": "Rights columns and actions",
        "oldText": "Right side: rights - Resources (databases) in first column. Actions: Read, Create, Update, Publish, Delete, User rights. Toggles define actions per database.",
        "newText": null,
        "explanation": "The rights matrix with its 6 action types (Read, Create, Update, Publish, Delete, User rights) and per-database toggles is core GDB functionality."
      },
      {
        "type": "unchanged",
        "title": "Groups of databases",
        "oldText": "Groups of databases are listed under their group. Rights can be granted to group or specific database.",
        "newText": null,
        "explanation": "Group-level rights management has not changed."
      },
      {
        "type": "unchanged",
        "title": "b) Database structure rights",
        "oldText": "Read (needs Data toggle on), Update (Save button appears), Publish (Publish button appears), Delete (Delete button appears).",
        "newText": null,
        "explanation": "Database structure rights with their associated UI indicators (buttons appearing) have not changed."
      },
      {
        "type": "unchanged",
        "title": "c) Data User rights (Generic)",
        "oldText": "Read, Update (Edit button per entry), Delete (Delete button per entry).",
        "newText": null,
        "explanation": "Generic data rights with their per-entry action buttons have not changed."
      },
      {
        "type": "unchanged",
        "title": "d) Data User rights (field level restrictions)",
        "oldText": "Click 'restrictions' button. Grant read/update rights to specific columns or records matching filter conditions.",
        "newText": null,
        "explanation": "Field-level restrictions (column-specific and filter-based record access) are an advanced rights feature that has not changed."
      },
      {
        "type": "unchanged",
        "title": "e) Toggle behavior rules",
        "oldText": "GREEN=fully authorised, GREY=not authorised, YELLOW=partially authorised. Parent GREEN=all children GREEN. Parent YELLOW=at least one child YELLOW or GREY. Parent GREY=all children GREY.",
        "newText": null,
        "explanation": "The three-color toggle system (GREEN/GREY/YELLOW) with its inheritance rules is a mature and stable feature of GDB user rights."
      },
      {
        "type": "verify",
        "title": "Keycloak integration evolution",
        "oldText": null,
        "newText": "Keycloak integration for user management may have evolved since July 2025, potentially including new SSO features, improved user synchronization, or changes to how user identities are managed across the platform.",
        "explanation": "Keycloak is the identity management system used by eRegistrations. While the basic import workflow is likely the same, Keycloak itself receives updates and the eRegistrations integration may have been enhanced. Any new Keycloak-related features or changes to the authentication/authorization workflow should be verified with the platform team.",
        "screenshot": {
          "type": "unknown",
          "desc": "Verify if any new Keycloak-related features or settings have been added to the user rights page"
        }
      }
    ]
  },
  {
    "id": "statistics",
    "group": "IV. Statistics",
    "title": "Statistics - A. Overview + B. Types of statistics",
    "path": "IV. Statistics → Statistics - A. Overview + B. Types of statistics",
    "pages": "189-193",
    "status": "pending",
    "changes": 3,
    "changeSummary": "3 changes detected: Statistics module core functionality is stable. New report types or dashboard improvements may exist. Filter options may have expanded. Export capabilities may have improved.",
    "blocks": [
      {
        "type": "unchanged",
        "title": "A. Overview",
        "oldText": "Statistics module is a tool for registered users to see statistical information about files and processes in eRegistrations system. It can also present KPI (Key Performance Indicators) for managers. Panel at top enables switching between types of statistics, changing language or logging out. Every type of statistics has its own set of filters and tools.",
        "newText": null,
        "explanation": "The statistics module overview, its purpose, and the top panel navigation remain accurate.",
        "screenshot": {
          "type": "verify",
          "desc": "Statistics entry view and top panel -- verify current appearance and navigation options"
        }
      },
      {
        "type": "unchanged",
        "title": "1. Roles statistics",
        "oldText": "Purpose: provide information about the number of files that obtained a specific status in a given service role for a defined period of time. Filters: Filter empty rows, Show inactive services, Date field (calendar for period selection), Service filter, Registration filter, Status filter. Data can be broken down into days/weeks/months/years. Export to excel or PDF.",
        "newText": null,
        "explanation": "The Roles statistics type with its comprehensive filter set and export options is core statistics functionality.",
        "screenshot": {
          "type": "verify",
          "desc": "Roles statistics view -- verify current appearance and filter options"
        }
      },
      {
        "type": "unchanged",
        "title": "2. Certificates issued",
        "oldText": "Purpose: provide information about the number of certificates generated for a given service within a period. Filters: Certificates filter (lists certificate across services).",
        "newText": null,
        "explanation": "The Certificates issued statistics type with its certificate filter remains the same.",
        "screenshot": {
          "type": "verify",
          "desc": "Certificates issued view -- verify current appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "3. Operators",
        "oldText": "Purpose: provide information on specific operator activity - number of files processed through a role, broken down into statuses (Processed, Approved, Sent back, Rejected). Filters: Operator filter (type-ahead input), Roles filter.",
        "newText": null,
        "explanation": "The Operators statistics type with its status breakdown and filters remains the same.",
        "screenshot": {
          "type": "verify",
          "desc": "Operators statistics view -- verify current appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "4. Times per Role",
        "oldText": "Purpose: information about how much time the file spent in a given role. Shows average, minimum and maximum time for processed files.",
        "newText": null,
        "explanation": "The Times per Role statistics type with its time metrics (avg/min/max) remains the same.",
        "screenshot": {
          "type": "verify",
          "desc": "Times per Role view -- verify current appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "5. Times per operator",
        "oldText": "Purpose: how much time every operator spent processing files in a given role. Shows average, minimum and maximum time.",
        "newText": null,
        "explanation": "The Times per operator statistics type remains the same.",
        "screenshot": {
          "type": "verify",
          "desc": "Times per operator view -- verify current appearance"
        }
      },
      {
        "type": "unchanged",
        "title": "6. Rejection reasons",
        "oldText": "Provides rejection reasons for files processed and rejected or sent back for correction in Part B revision role. Filter by service name and Status (2-Sent back, 3-Rejected). Dashboard shows: rejection reason, status code, operator, role name, date of rejection.",
        "newText": null,
        "explanation": "The Rejection reasons statistics type with its filters and dashboard columns remains the same.",
        "screenshot": {
          "type": "verify",
          "desc": "Rejection reasons dashboard -- verify current appearance"
        }
      },
      {
        "type": "verify",
        "title": "New statistics types or reports",
        "oldText": null,
        "newText": "The statistics module may have added new types of statistics or reporting capabilities since July 2025. For example, new report types could cover application completion rates, average processing times across services, or user registration trends.",
        "explanation": "The statistics module currently documents 6 types of statistics (Roles, Certificates issued, Operators, Times per Role, Times per operator, Rejection reasons). Additional report types may have been added to the platform. The statistics navigation panel should be verified to confirm the complete list of available statistics types.",
        "screenshot": {
          "type": "unknown",
          "desc": "Statistics navigation panel -- verify if new statistics types have been added beyond the 6 documented"
        }
      },
      {
        "type": "verify",
        "title": "Enhanced filter and export options",
        "oldText": null,
        "newText": "Individual statistics types may have received enhanced filter options or additional export formats since July 2025.",
        "explanation": "While the documented filters and export options (Excel, PDF) are likely still present, new filter options or export formats may have been added. For example, there could be new date range presets, additional grouping options, or new export formats (CSV, API access). Each statistics type's filter panel should be compared against the manual to identify any additions.",
        "screenshot": {
          "type": "unknown",
          "desc": "Verify filter panels for each statistics type for any new filter options or export formats"
        }
      }
    ]
  },
  {
    "id": "effects-system",
    "group": "New Features",
    "title": "Effects System",
    "path": "New Features → Effects System",
    "pages": "new",
    "status": "draft",
    "changes": 8,
    "changeSummary": "Entirely new section. The Effects system is a newer addition to eRegistrations that extends the Determinants functionality. It allows analysts to define conditional behaviors on form components such as show/hide, enable/disable, activate/deactivate, and set values. Effects link one or more determinants to a component using AND/OR logic. The system is managed through component behaviours, where each behaviour can contain multiple effects. MCP tool signatures confirm the existence of effect_create, effect_delete, componentbehaviour_list, componentbehaviour_get, and componentbehaviour_get_by_component endpoints. 8 blocks identified, all new or needing verification.",
    "blocks": [
      {
        "type": "added",
        "title": "Overview of the Effects System",
        "oldText": null,
        "newText": "<span class=\"hl-added\">The Effects system is an extension of the Determinants functionality in eRegistrations. While determinants define conditions based on field values (e.g., 'if field X equals Y'), Effects define what happens to a component when those conditions are met. Effects provide more granular control over component behavior than the basic determinant show/hide mechanism described in the Determinants section.\n\nEffects work through a layered structure:\n- A form component can have a 'component behaviour' attached to it.\n- Each component behaviour can contain one or more 'effects'.\n- Each effect links one or more determinants to the component and specifies what should happen when the determinant conditions are met.</span>",
        "explanation": "This is an entirely new feature not present in the original manual. The original manual documents determinants (section D.2) and their basic show/hide functionality, but does not cover the Effects system which provides a more structured and powerful approach to conditional component behavior. The MCP tool definitions confirm the existence of componentbehaviour_list, componentbehaviour_get, componentbehaviour_get_by_component, effect_create, and effect_delete operations.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Overview screenshot showing where the Effects system is accessed in the BPA interface, likely within the component edit modal or a dedicated section."
        }
      },
      {
        "type": "added",
        "title": "Effect Types",
        "oldText": null,
        "newText": "<span class=\"hl-added\">The following effect types are available when creating an effect:\n- activate: Activates a component when the determinant conditions are met.\n- deactivate: Deactivates a component when the determinant conditions are met.\n- show: Makes a component visible when the determinant conditions are met.\n- hide: Hides a component when the determinant conditions are met.\n- enable: Enables a component (makes it editable) when the determinant conditions are met.\n- disable: Disables a component (makes it read-only) when the determinant conditions are met.\n\nEach effect also has an effect_value (a boolean) that determines the polarity of the effect.</span>",
        "explanation": "The effect types are confirmed by the MCP tool definition for effect_create, which lists the valid effect_type values as: activate, deactivate, show, hide, enable, disable. The default effect_type is 'activate' and the default effect_value is True. This provides significantly more options than the basic show/hide behavior documented for determinants in the current manual.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the effect type selection dropdown or interface showing all available effect types (activate, deactivate, show, hide, enable, disable)."
        }
      },
      {
        "type": "added",
        "title": "Creating an Effect",
        "oldText": null,
        "newText": "<span class=\"hl-added\">To create an effect on a form component:\n1. Identify the service and the target form component (by its component key).\n2. Select one or more determinants that will serve as the conditions for the effect.\n3. Choose the logic for combining multiple determinants: 'AND' (all determinants must match) or 'OR' (any determinant must match). The default is 'AND'.\n4. Select the effect type (activate, deactivate, show, hide, enable, or disable). The default is 'activate'.\n5. Set the effect value (true or false). The default is true.\n6. Save the effect.\n\nWhen an effect is created, the system generates a behaviour record for the component (if one does not already exist) and attaches the effect to it. The system returns a behaviour_id, effect_id, and an audit_id for tracking the change.</span>",
        "explanation": "The creation workflow is derived from the MCP tool definition for effect_create, which requires: service_id, component_key, determinant_ids (at least one), and optionally logic (AND/OR), effect_type, and effect_value. The response includes behaviour_id, effect_id, component_key, determinant_count, effect_type, effect_value, logic, service_id, and audit_id. The exact BPA UI for this workflow needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Step-by-step screenshots of creating an effect: selecting the component, choosing determinants, selecting logic (AND/OR), choosing effect type, and saving."
        }
      },
      {
        "type": "added",
        "title": "Determinant Logic: AND vs OR",
        "oldText": null,
        "newText": "<span class=\"hl-added\">When an effect references multiple determinants, the logic parameter determines how they are combined:\n- AND logic: All referenced determinants must have their conditions met for the effect to trigger. This is the default.\n- OR logic: The effect triggers if any one of the referenced determinants has its condition met.\n\nThis allows for complex conditional behaviors. For example, you could create an effect that shows a field only when both the applicant type is 'company' AND the registration type is 'new registration' (AND logic), or create an effect that disables a field when either the application is in 'draft' status OR the user has selected 'not applicable' (OR logic).</span>",
        "explanation": "The AND/OR logic is confirmed by the MCP tool definition for effect_create which includes a 'logic' parameter with values 'AND' or 'OR', defaulting to 'AND'. The current manual's Determinants section mentions combining determinants with AND/OR operators for registration determinants, but the Effects system formalizes this with a dedicated parameter.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot showing the logic selector (AND/OR) when creating an effect with multiple determinants."
        }
      },
      {
        "type": "added",
        "title": "Component Behaviours",
        "oldText": null,
        "newText": "<span class=\"hl-added\">Component behaviours are the containers that hold effects for a specific form component. Each form component can have at most one behaviour record, but that behaviour can contain multiple effects.\n\nA component behaviour includes:\n- A unique behaviour ID.\n- The component key identifying which form component it applies to.\n- The service ID.\n- A list of effects, each containing its own determinants and property effects.\n\nYou can list all component behaviours for a service to see which components have effects configured, along with the effect count for each. You can also retrieve the behaviour for a specific component by its key.</span>",
        "explanation": "Component behaviours are confirmed by the MCP tool definitions for componentbehaviour_list (returns behaviours with id, component_key, effect_count, total, service_id), componentbehaviour_get (returns id, component_key, service_id, effects with determinants and property_effects), and componentbehaviour_get_by_component (returns the same structure for a specific component). The exact BPA UI for browsing behaviours needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot showing the component behaviours list for a service, displaying which components have behaviours and their effect counts."
        }
      },
      {
        "type": "added",
        "title": "Deleting an Effect",
        "oldText": null,
        "newText": "<span class=\"hl-added\">To delete an effect, you need the behaviour_id of the behaviour containing the effect. Deleting a behaviour removes it and all its associated effects from the component.\n\nThe delete operation is audited and returns confirmation of the deletion along with details of the deleted behaviour and an audit_id.</span>",
        "explanation": "The delete operation is confirmed by the MCP tool definition for effect_delete, which takes a behaviour_id and returns deleted (bool), behaviour_id, deleted_behaviour, and audit_id. Note that the deletion appears to operate at the behaviour level rather than individual effect level. The exact UI workflow for deletion needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot showing the delete action for an effect or behaviour, including any confirmation dialog."
        }
      },
      {
        "type": "verify",
        "title": "Relationship between Effects and Determinants",
        "oldText": null,
        "newText": "The Effects system works in conjunction with the existing Determinants system (documented in section D.2 of the manual). Determinants define conditions based on field values, while Effects define what happens when those conditions are met. The Effects system uses JSONLogic internally for determinant evaluation.\n\nIt is likely that the existing determinant show/hide behavior described in section D.2 coexists with the newer Effects system. The original determinant-based show/hide may still work for simple cases, while the Effects system provides more advanced options. The exact relationship and whether the Effects system supersedes or complements the older approach needs to be verified.",
        "explanation": "The componentbehaviour_get tool returns effects with 'parsed JSONLogic determinants', confirming that Effects use JSONLogic internally. The relationship between the basic determinant show/hide in section D.2 and the Effects system needs clarification. It is possible that the Effects system is the underlying mechanism for determinants, or that they are parallel systems. A human reviewer should verify this on the live platform.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots comparing the old determinant configuration UI with the new Effects configuration UI would help clarify the relationship."
        }
      },
      {
        "type": "verify",
        "title": "Effects System UI Location in BPA",
        "oldText": null,
        "newText": "The Effects system is likely accessible through one or more of the following locations in the BPA:\n- Within the component edit modal (slider), possibly as a new tab alongside or replacing the existing 'Determinant' tab.\n- As a dedicated section in the side menu for managing all effects across the service.\n- Through the component's gear/edit icon, similar to how determinants are currently configured.\n\nThe exact UI location, navigation path, and visual appearance of the Effects configuration interface need to be verified on the live platform.",
        "explanation": "The MCP tools provide API-level access to effects but do not describe the BPA user interface. The UI could be integrated into the existing component edit workflow or could be a separate section. A human reviewer should document the exact navigation path to access the Effects configuration.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of the BPA navigation path to access the Effects system, showing where it appears in menus or component edit modals."
        }
      }
    ],
    "isNew": true
  },
  {
    "id": "smartlink",
    "group": "New Features",
    "title": "SmartLink",
    "path": "New Features → SmartLink",
    "pages": "new",
    "status": "draft",
    "changes": 6,
    "changeSummary": "Entirely new section. SmartLink is a feature for linking between services in eRegistrations, enabling data sharing and workflow coordination across multiple services within the same instance. The original manual documents Internal BOTs for cross-service data transfer (section E, BOT builder), but SmartLink appears to be a higher-level or complementary mechanism. The exact relationship to Internal BOTs, the UI configuration workflow, and the available linking options all need verification. The MCP tools include a serviceregistration_link endpoint suggesting service-registration linkage is part of the infrastructure. 6 blocks identified, mostly needing verification due to limited concrete information.",
    "blocks": [
      {
        "type": "verify",
        "title": "Overview of SmartLink",
        "oldText": null,
        "newText": "SmartLink is a feature in eRegistrations that enables linking between services, allowing data sharing and workflow coordination across multiple services within the same instance. When services are linked through SmartLink, data entered in one service can flow to another service, and workflow steps can be coordinated across service boundaries.\n\nSmartLink may extend or complement the Internal BOT functionality that already exists for cross-service data transfer (documented in the BOT builder section). While Internal BOTs copy data between specific form fields across services, SmartLink may provide a higher-level linkage mechanism that manages the overall relationship between services.",
        "explanation": "SmartLink is identified as a new feature in the manual update plan. The MCP tools include a 'serviceregistration_link' endpoint that links services to registrations, which may be part of the SmartLink infrastructure. However, the exact scope and definition of 'SmartLink' as a user-facing feature needs verification. It is unclear whether SmartLink is a specific named feature in the BPA UI or an umbrella term for service-linking capabilities.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of the SmartLink feature in the BPA, if it has a dedicated UI, or screenshots of how services are linked together."
        }
      },
      {
        "type": "verify",
        "title": "SmartLink vs Internal BOT for Cross-Service Data Transfer",
        "oldText": null,
        "newText": "The original manual documents Internal BOTs (section E, BOT builder) as the mechanism for copying data between services. An Internal BOT can be configured to 'paste data from current service form to another form in a different service' by changing the receiving service in the mapping page.\n\nSmartLink may be:\n1. A separate, higher-level feature that manages service-to-service relationships, with Internal BOTs handling the actual data transfer.\n2. A replacement or evolution of the Internal BOT cross-service functionality.\n3. A UI layer on top of Internal BOTs that makes cross-service linking easier to configure.\n\nThe exact relationship between SmartLink and Internal BOTs needs to be verified.",
        "explanation": "The original manual clearly documents Internal BOTs for cross-service data transfer. SmartLink is a newer feature whose relationship to Internal BOTs is not clear from the available information. A human reviewer should determine whether SmartLink replaces, extends, or is unrelated to Internal BOTs.",
        "screenshot": {
          "type": "unknown",
          "desc": "Side-by-side comparison of SmartLink configuration and Internal BOT cross-service mapping, if both exist."
        }
      },
      {
        "type": "verify",
        "title": "Service-Registration Linking",
        "oldText": null,
        "newText": "The platform supports linking services to registrations through a dedicated mechanism. This allows a registration created under one service to be associated with or accessible from another service. This may be a component of the SmartLink feature or a separate capability.\n\nThe linking operation connects a service with a registration, enabling the registration's data, documents, and fees to be shared across service boundaries.",
        "explanation": "The MCP tools include a 'serviceregistration_link' endpoint that takes a service_id and registration_id, suggesting that service-registration linking is a supported operation. However, it is not clear whether this is part of SmartLink or a general platform capability. The current manual documents adding registrations to services (section C) but does not mention linking registrations across services.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshot of the service-registration linking interface, if distinct from the standard 'add registration to service' workflow."
        }
      },
      {
        "type": "verify",
        "title": "SmartLink Configuration Workflow",
        "oldText": null,
        "newText": "The SmartLink configuration workflow likely involves:\n1. Navigating to the SmartLink configuration area (location in BPA to be verified).\n2. Selecting the source service and the target service to link.\n3. Defining what data or workflow elements are shared between the services.\n4. Configuring the direction of data flow (unidirectional or bidirectional).\n5. Optionally defining conditions under which the link is active.\n6. Saving and publishing the link configuration.\n\nThe exact steps, UI location, and available options need verification on the live platform.",
        "explanation": "The configuration workflow is speculative based on the general concept of service linking. No MCP tool or existing documentation provides the specific UI steps. A human reviewer must document the actual workflow by accessing the BPA.",
        "screenshot": {
          "type": "unknown",
          "desc": "Step-by-step screenshots of the SmartLink configuration process in the BPA."
        }
      },
      {
        "type": "verify",
        "title": "SmartLink Data Sharing Capabilities",
        "oldText": null,
        "newText": "SmartLink may enable sharing of the following types of data between linked services:\n- Applicant form data (personal information, company details, etc.)\n- Document uploads\n- Registration results and certificates\n- Application status and workflow state\n- Fee payment information\n\nThe exact types of data that can be shared and any restrictions on data sharing need verification.",
        "explanation": "The data sharing capabilities are speculative based on what would be useful in a multi-service context. The actual capabilities may be more limited or more extensive. A human reviewer should verify what data types can be shared through SmartLink.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots showing the data sharing configuration options in SmartLink."
        }
      },
      {
        "type": "verify",
        "title": "SmartLink UI Location in BPA",
        "oldText": null,
        "newText": "SmartLink may be accessible from one or more of the following locations in the BPA:\n- A dedicated 'SmartLink' tab or menu item in the side menu.\n- Within the service settings or service bar.\n- Through the registration configuration interface.\n- As part of the BOT builder interface.\n\nThe exact location and navigation path need to be verified on the live platform.",
        "explanation": "Without access to the live BPA UI, the exact location of SmartLink cannot be determined. The MCP tools do not describe UI navigation. A human reviewer should identify where SmartLink is accessed in the BPA.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots showing where SmartLink appears in the BPA navigation and menus."
        }
      }
    ],
    "isNew": true
  },
  {
    "id": "micro-publish",
    "group": "New Features",
    "title": "Micro-publish",
    "path": "New Features → Micro-publish",
    "pages": "new",
    "status": "draft",
    "changes": 6,
    "changeSummary": "Entirely new section. Micro-publish allows publishing only specific parts of a service rather than the entire service. This reduces publish time and risk of unintended changes. The original manual describes the publish button on the service bar (section B) as a single full-service publish action. Micro-publish is an enhancement to this workflow. The service settings section (section I) mentions 'Publish history' which likely reflects micro-publish operations. The MCP service_publish tool does not expose micro-publish granularity, suggesting the feature may be UI-only or use different API endpoints. 6 blocks identified, most needing verification.",
    "blocks": [
      {
        "type": "added",
        "title": "Overview of Micro-publish",
        "oldText": null,
        "newText": "<span class=\"hl-added\">Micro-publish is an enhancement to the service publishing workflow in eRegistrations. Instead of publishing the entire service (all forms, roles, BOTs, certificates, and configuration), micro-publish allows analysts to publish only the specific parts of the service that have changed.\n\nThis provides two key benefits:\n1. Reduced publish time: Publishing only changed components is faster than republishing everything.\n2. Reduced risk: By publishing only specific changes, there is less risk of unintended modifications being pushed to the public interface.\n\nMicro-publish is accessed through the 'publish service' button on the service bar, which now provides options for granular publishing in addition to the traditional full-service publish.</span>",
        "explanation": "The original manual describes publishing as a single action: 'when a service is published, it becomes available on the public interface. Every time a change is made in the BPA that needs to be reflected on the public interface (DS), the service has to be (re)published.' Micro-publish adds granularity to this process. The exact UI needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the micro-publish interface, likely a dialog or dropdown that appears when clicking the publish button, showing the options for selecting which parts to publish."
        }
      },
      {
        "type": "verify",
        "title": "Micro-publish Options",
        "oldText": null,
        "newText": "When using micro-publish, the analyst can likely select from the following publishable components:\n- Forms (applicant form, guide form, processing role forms)\n- Roles configuration\n- BOT configuration and mappings\n- Certificate/document templates\n- Registration settings (documents, fees, institutions)\n- Service settings and display options\n\nEach component may show an indicator of whether it has unpublished changes, helping the analyst identify what needs to be published.",
        "explanation": "The specific components available for micro-publish are speculative based on the service structure documented in the manual. The actual options presented in the micro-publish UI need to be verified on the live platform. The MCP service_publish tool does not expose micro-publish granularity, suggesting the feature may have its own UI workflow.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot showing the list of publishable components with change indicators in the micro-publish dialog."
        }
      },
      {
        "type": "verify",
        "title": "Micro-publish Workflow",
        "oldText": null,
        "newText": "The micro-publish workflow likely involves:\n1. Click the 'Publish service' button on the service bar.\n2. A dialog or expanded interface appears showing the available publish options.\n3. Select which parts of the service to publish (individual components or groups).\n4. The system may show a preview or summary of what changes will be published.\n5. Confirm the publish action.\n6. The system publishes only the selected components and updates the publish history.\n\nAlternatively, micro-publish may be automatic -- the system may detect what has changed since the last publish and only publish those changes, without requiring manual selection.",
        "explanation": "The exact workflow is not confirmed. It could be a manual selection process or an automatic change-detection-based process. A human reviewer should test the publish workflow on the live BPA to document the exact steps.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Step-by-step screenshots of the micro-publish workflow from clicking publish to completion."
        }
      },
      {
        "type": "verify",
        "title": "Publish History and Micro-publish",
        "oldText": null,
        "newText": "The service settings section includes a 'Publish history' tab (documented in section I of the manual). With micro-publish, the publish history likely shows more granular entries, indicating which specific parts of the service were published in each operation rather than just recording a full-service publish.\n\nPublish history entries for micro-publish operations may include:\n- Timestamp of the publish operation\n- Which components were published\n- Who performed the publish\n- Whether it was a full publish or a micro-publish",
        "explanation": "The original manual mentions 'Publish history' as a tab in service settings but does not describe its contents in detail. Micro-publish likely enhanced the publish history to show more granular information. The exact format of publish history entries needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the publish history showing micro-publish entries with component-level detail."
        }
      },
      {
        "type": "verify",
        "title": "Full Publish vs Micro-publish",
        "oldText": null,
        "newText": "After the introduction of micro-publish, the original full-service publish capability likely still exists as an option. Analysts may be able to choose between:\n- Full publish: Republishes the entire service, as documented in the original manual.\n- Micro-publish: Publishes only selected or changed components.\n\nThe full publish may serve as a 'safety net' when the analyst wants to ensure all changes are synchronized, while micro-publish is the preferred approach for routine updates.",
        "explanation": "It is standard practice to maintain backward compatibility with full publish while adding micro-publish. However, the exact UI presentation of both options needs verification. It is possible that micro-publish replaced the full publish entirely, or that both options are presented side by side.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshot showing the option to choose between full publish and micro-publish, if both exist."
        }
      },
      {
        "type": "verify",
        "title": "Micro-publish Error Handling",
        "oldText": null,
        "newText": "When a micro-publish operation encounters issues, the system likely provides feedback about:\n- Dependency conflicts (e.g., publishing a role that references an unpublished BOT)\n- Validation errors in the components being published\n- Warnings about components that may need to be published together\n\nThe error handling and dependency checking behavior needs verification.",
        "explanation": "Micro-publish introduces complexity around component dependencies. The system likely has some form of dependency checking, but the exact behavior is unknown. A reviewer should test edge cases like publishing a form that references an unpublished determinant.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of any error messages or warnings during micro-publish, particularly around dependency issues."
        }
      }
    ],
    "isNew": true
  },
  {
    "id": "e-signature",
    "group": "New Features",
    "title": "E-signature",
    "path": "New Features → E-signature",
    "pages": "new",
    "status": "draft",
    "changes": 7,
    "changeSummary": "Entirely new section. E-signature functionality allows applicants to digitally sign documents or the application itself. The original manual describes the Send file page (section D.6) as the 'declaration and signature page' with an 'I Swear' custom component, but does not mention digital or electronic signatures. E-signature likely extends the Send page with actual digital signing capability. It may involve integration with external e-signature providers, new custom components, or configuration in service settings. No direct MCP tool endpoints for e-signature were found, suggesting it may be implemented as a form component configuration or external integration. 7 blocks identified, all needing verification due to limited concrete information.",
    "blocks": [
      {
        "type": "verify",
        "title": "Overview of E-signature",
        "oldText": null,
        "newText": "E-signature functionality allows applicants to digitally sign documents or the application itself within the eRegistrations platform. This provides legal validity to the submission and may replace or supplement the traditional 'I Swear' declaration component.\n\nE-signature may be implemented as:\n- A new custom component in the form builder that can be placed on the Send page or other pages.\n- An enhancement to the existing Send file page workflow.\n- An integration with external e-signature providers (e.g., DocuSign, Adobe Sign, or government-provided e-signature infrastructure).\n\nThe specific implementation approach needs verification.",
        "explanation": "The original manual's Send file section (D.6) mentions the 'I Swear' component for declaration and signature but does not describe electronic or digital signature capabilities. E-signature is identified as a new feature in the manual update plan. No MCP tool endpoints specific to e-signature were found in the available tools, suggesting it may be implemented at the form component or service configuration level.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of the e-signature feature in use, showing the signing interface as seen by the applicant."
        }
      },
      {
        "type": "verify",
        "title": "E-signature Configuration in BPA",
        "oldText": null,
        "newText": "To configure e-signature for a service, the analyst likely needs to:\n1. Enable e-signature at the service level (possibly through service settings).\n2. Add an e-signature component to the appropriate form page (likely the Send page).\n3. Configure which documents or forms require a signature.\n4. Set up the e-signature provider integration (if using an external provider).\n5. Configure the signature validation rules and appearance.\n\nThe exact configuration steps and UI location need verification.",
        "explanation": "The configuration workflow is speculative. The bpa-settings analysis notes that e-signature may have associated settings at the service level. A human reviewer should document the actual configuration process by accessing the BPA.",
        "screenshot": {
          "type": "unknown",
          "desc": "Step-by-step screenshots of configuring e-signature in the BPA, including any settings toggles and component placement."
        }
      },
      {
        "type": "verify",
        "title": "E-signature Component in Form Builder",
        "oldText": null,
        "newText": "E-signature may be available as a new custom component in the form builder, similar to the existing 'I Swear' component and 'QR code' component found in the Custom Components tab.\n\nThe e-signature component would likely allow:\n- Capturing a digital signature (drawn, typed, or uploaded).\n- Linking the signature to specific form data or documents.\n- Displaying a signature verification indicator.\n\nThe component may have its own configuration options for signature type, appearance, and validation.",
        "explanation": "The original manual documents several custom components (I Swear, QR code, Payment Providers) but does not mention an e-signature component. If e-signature is a form component, it would likely appear in the Custom Components tab alongside these. The exact component type and configuration options need verification.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshot of the e-signature component in the Custom Components tab of the form builder, and its configuration options."
        }
      },
      {
        "type": "verify",
        "title": "E-signature Provider Integration",
        "oldText": null,
        "newText": "E-signature may integrate with external providers for digital signature validation. Common integration patterns include:\n- Government PKI (Public Key Infrastructure) systems for legally binding signatures.\n- Third-party e-signature services (DocuSign, Adobe Sign, etc.).\n- OTP (One-Time Password) based signature verification.\n- Certificate-based digital signatures.\n\nThe integration may be configured at the instance level (affecting all services) or at the service level.",
        "explanation": "The nature of the e-signature integration is entirely speculative. Different eRegistrations deployments may use different e-signature providers depending on local legal requirements. A human reviewer should determine what providers are supported and how they are configured.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of any e-signature provider configuration settings in the BPA."
        }
      },
      {
        "type": "verify",
        "title": "E-signature on Send Page",
        "oldText": null,
        "newText": "The Send file page (section D.6 of the manual) is described as the 'declaration and signature page.' E-signature functionality likely appears on or is closely associated with this page.\n\nWith e-signature enabled, the Send page may include:\n- A digital signature pad or upload area.\n- A summary of what the applicant is signing.\n- Terms and conditions with the signature requirement.\n- Signature verification status indicators.\n\nThe existing 'I Swear' component may work alongside or be replaced by the e-signature component.",
        "explanation": "The Send page is the most logical location for e-signature since it is already designated as the declaration and signature page. The exact integration of e-signature with the Send page workflow needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the Send page with e-signature enabled, showing how the signature interface appears to the applicant."
        }
      },
      {
        "type": "verify",
        "title": "E-signature in Service Settings",
        "oldText": null,
        "newText": "E-signature may require configuration in the service settings area. Possible settings include:\n- Enable/disable e-signature for the service.\n- E-signature provider selection.\n- Signature requirements (which pages or documents require signatures).\n- Signature appearance customization.\n- Legal text and terms associated with the signature.\n\nThe bpa-settings analysis has already flagged that new settings related to e-signature may exist.",
        "explanation": "The bpa-settings.json analysis file includes a 'verify' block for 'E-signature related settings'. This section should be consistent with whatever e-signature settings are found in the service settings area.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshot of e-signature related settings in the service settings or instance settings panel."
        }
      },
      {
        "type": "verify",
        "title": "E-signature Applicant Experience (DS)",
        "oldText": null,
        "newText": "From the applicant's perspective on the Display System (DS), e-signature likely appears as:\n- A signature step or area on the Send page before final submission.\n- Instructions for how to complete the digital signature.\n- A visual confirmation that the document/application has been signed.\n- A record of the signature in the application history.\n\nThe signed document or application may be available for download with an embedded signature.",
        "explanation": "The applicant-side experience of e-signature is speculative. The exact UI and user flow need to be verified on the Display System. This may also require documentation in the DS section of the manual (Part II).",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of the e-signature experience from the applicant's perspective on the DS, including the signing interface and confirmation."
        }
      }
    ],
    "isNew": true
  },
  {
    "id": "card-style-radios",
    "group": "New Features",
    "title": "Card-style Radios",
    "path": "New Features → Card-style Radios",
    "pages": "new",
    "status": "draft",
    "changes": 5,
    "changeSummary": "Entirely new section. Card-style radios are a new UI pattern for radio buttons that displays options as visual cards rather than traditional radio buttons. The original manual documents the 'Radio Switch' custom class (section D.8) which changes radio button appearance, but card-style radios appear to be a further evolution providing a more visual selection interface. This may be implemented as a new custom class, a new radio display mode in the form builder, or a new component type. 5 blocks identified, all needing verification.",
    "blocks": [
      {
        "type": "verify",
        "title": "Overview of Card-style Radios",
        "oldText": null,
        "newText": "Card-style radios are a new UI pattern in eRegistrations that displays radio button options as visual cards rather than traditional radio button circles with labels. Each option appears as a distinct card, potentially with an icon, title, and description, providing a more visual and user-friendly selection interface.\n\nThis pattern is particularly useful for:\n- Guide questions where the applicant needs to make a clear choice between visually distinct options.\n- Service type selection where each option has a unique visual identity.\n- Any scenario where the visual card layout improves comprehension of the available options.\n\nThe original manual documents the 'Radio Switch' custom class which changes radio buttons into a switch-like appearance. Card-style radios are a further evolution of radio button display options.",
        "explanation": "Card-style radios are identified as a new feature in the manual update plan. The original manual documents several radio-related custom classes including 'Radio Switch' (section D.8 - Appearance changing classes) but does not mention card-style display. The exact implementation mechanism needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot showing card-style radios in use on a form, comparing the visual appearance with traditional radio buttons."
        }
      },
      {
        "type": "verify",
        "title": "Implementing Card-style Radios",
        "oldText": null,
        "newText": "Card-style radios may be implemented through one of the following mechanisms:\n\n1. Custom class: A new custom class (e.g., 'card-radio' or 'radio-card') applied to a radio component through the Custom Class field in the component edit modal. This would follow the same pattern as the existing 'Radio Switch' custom class.\n\n2. New display mode: A new display mode option in the radio component configuration, alongside existing layout options.\n\n3. New component type: A dedicated 'Card Radio' component in the form builder, separate from the standard radio component.\n\nThe implementation mechanism determines how analysts configure card-style radios in the BPA.",
        "explanation": "The implementation mechanism is not confirmed. The custom class approach is most consistent with how eRegistrations handles visual variations (the manual documents numerous custom classes for different visual effects). However, it could also be a component property or a new component type. A human reviewer should verify the implementation.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot showing how card-style radios are configured in the BPA form builder -- whether through custom class, display mode, or component type."
        }
      },
      {
        "type": "verify",
        "title": "Card-style Radio Appearance and Customization",
        "oldText": null,
        "newText": "Card-style radios likely display each option as a card element that may include:\n- An icon or image representing the option.\n- The option label/title displayed prominently.\n- An optional description or subtitle.\n- A visual selection indicator (highlighted border, checkmark, or color change when selected).\n\nCustomization options may include:\n- Card size (small, medium, large).\n- Card layout (horizontal row, grid, or vertical stack).\n- Icon or image support.\n- Color theming.\n\nThe exact customization options available need verification.",
        "explanation": "The visual appearance and customization options are speculative based on common card-radio patterns in web applications. The actual appearance in eRegistrations may be more limited or have different options. A reviewer should capture screenshots of card-style radios in various configurations.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshots showing card-style radios with different configurations: with icons, different sizes, different layouts, and in selected/unselected states."
        }
      },
      {
        "type": "verify",
        "title": "Card-style Radios in the Guide",
        "oldText": null,
        "newText": "Card-style radios may be particularly useful in the Guide section of the application file, where applicants answer questions to determine their registration requirements. The card layout can make guide questions more intuitive by providing visual cards for each option.\n\nFor example, a guide question asking 'What type of registration do you need?' could display options as cards with icons representing each registration type, rather than a simple radio button list.",
        "explanation": "The Guide is a natural use case for card-style radios because it involves clear choice-making. However, whether card-style radios are specifically designed for or restricted to the Guide needs verification. They may be available for any radio component in any form.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of card-style radios used in a Guide question, showing how the card layout improves the question presentation."
        }
      },
      {
        "type": "verify",
        "title": "Relationship to Existing Custom Classes",
        "oldText": null,
        "newText": "The original manual documents the following appearance-changing custom classes that affect radio and selection components:\n- Radio Switch: Changes radio buttons into a switch-like appearance.\n- Search results list: Changes the display of select/radio options.\n\nCard-style radios may be:\n- An addition to this list of custom classes (e.g., 'radio-card' class).\n- A replacement for Radio Switch with more advanced visual options.\n- An entirely separate feature unrelated to custom classes.\n\nIf it is a custom class, it would be documented in section D.8 (Custom classes) rather than as a standalone section. The appropriate location in the manual depends on the implementation.",
        "explanation": "The relationship to existing custom classes determines where card-style radios should be documented in the manual. If it is a custom class, it belongs in section D.8. If it is a new component or display mode, it may belong in section D.3 (Applicant form) or as a standalone section. A reviewer should determine the correct categorization.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshot showing where card-style radios are configured -- custom class dropdown, component properties, or elsewhere."
        }
      }
    ],
    "isNew": true
  },
  {
    "id": "part-b",
    "group": "New Features",
    "title": "Part B (Processing)",
    "path": "New Features → Part B (Processing)",
    "pages": "new",
    "status": "draft",
    "changes": 8,
    "changeSummary": "Expanded documentation for the processing/operator side of eRegistrations. The original manual references 'Part B' in multiple places: section I (Settings) mentions 'Part B system actions', 'Part B system buttons', 'visible in Part B', and 'show print buttons on Part B'; section F (Roles) describes processing roles including revision and approval; section II.C (DS) describes operators processing pages. However, Part B as a comprehensive concept is not given its own dedicated section. This new section consolidates and expands Part B documentation, covering system actions, system buttons, operator-side form visibility, and processing workflow features. The MCP tools include componentaction_get_system_actions endpoint which lists built-in system button actions available for form components. 8 blocks identified.",
    "blocks": [
      {
        "type": "added",
        "title": "Overview of Part B (Processing)",
        "oldText": null,
        "newText": "<span class=\"hl-added\">Part B refers to the processing/operator side of an eRegistrations service. While Part A is the applicant-facing side (the application file with its guide, form, documents, payment, and send pages), Part B is the operator-facing side where processing roles review, validate, and act on submitted applications.\n\nPart B encompasses:\n- The operator processing pages (file list, processing page, revision page).\n- System actions and buttons available to operators.\n- Form components and data visible to operators during processing.\n- Configuration of what applicant data is visible or editable in Part B.\n- Automated actions triggered during processing (BOT roles).\n\nPart B is configured through the Roles section (section F) of the BPA and is accessed by operators through the Display System (DS).</span>",
        "explanation": "The manual references Part B in scattered locations but does not provide a consolidated overview. This overview block brings together the various Part B references from sections F (Roles), I (Settings), and II.C (DS Operators processing pages) into a single introductory block. The concept of Part B as the operator side is well-established in the platform.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Overview screenshot of the Part B interface as seen by an operator, showing the main layout and navigation elements."
        }
      },
      {
        "type": "added",
        "title": "Part B System Actions",
        "oldText": null,
        "newText": "<span class=\"hl-added\">Part B system actions are built-in actions that can be triggered during the processing workflow. These are pre-defined actions provided by the platform (as opposed to custom BOT actions created by the analyst).\n\nSystem actions are available for form components and can be assigned to buttons, fields, or blocks within processing role forms. They provide standard processing functionality without requiring custom BOT configuration.\n\nThe list of available system actions can be viewed through the system actions interface. Each action has an ID, name, and category.</span>",
        "explanation": "The MCP tool componentaction_get_system_actions is described as 'List built-in system button actions available for form components' and returns 'actions list (id, name, category), count, note'. This confirms the existence of system actions as a platform feature. The original manual's Settings section mentions 'enabling BPA system buttons in Part B' but does not list or describe the available system actions.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot listing the available Part B system actions with their names and categories."
        }
      },
      {
        "type": "verify",
        "title": "Part B System Buttons",
        "oldText": null,
        "newText": "Part B system buttons are pre-defined buttons that can be enabled for operator processing forms. The service settings (section I) mention 'enabling BPA system buttons in Part B' as a toggle option.\n\nSystem buttons may include:\n- Approve/validate button\n- Reject button\n- Send back for correction button\n- Print button\n- Generate certificate button\n- Other standard processing workflow buttons\n\nThese buttons are distinct from custom buttons created by the analyst in the form builder. They provide standardized processing functionality with built-in workflow logic.",
        "explanation": "The original manual's Settings section mentions 'enabling BPA system buttons in Part B' as a toggle under 'Buttons' in 'Pages, buttons and fields'. The Roles section describes statuses (0=pending, 1=passed, 2=send back, 3=rejected) which correspond to button actions. The exact list of system buttons and their behavior needs verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the Part B system buttons as they appear to the operator, and the settings toggle for enabling them."
        }
      },
      {
        "type": "verify",
        "title": "Component Actions in Part B",
        "oldText": null,
        "newText": "Component actions define how BOTs and system actions are linked to form components in Part B. Each form component (button, field, or block) can have actions attached to it that execute when the component is interacted with or rendered.\n\nComponent actions support:\n- Linking a single BOT to a component.\n- Linking multiple BOTs to execute in sequence or concurrently (parallel execution).\n- Linking system actions to buttons.\n- Configuring sort order for multiple actions on the same component.\n- Making actions mandatory or optional.\n- Applying determinant conditions to control when actions execute.\n- Multiple BOT execution with a field key selector for dynamic BOT selection.\n\nActions are configured per component and are specific to the service.",
        "explanation": "Component actions are confirmed by the MCP tool definitions: componentaction_save takes service_id, component_key, and an actions array with support for bot_id, bot_ids (multi-bot), sort_order, parallel, mandatory, json_determinants, multiple_bot, and multiple_field_key. The original manual describes BOT actions on buttons, fields, and blocks (section E) but does not detail all the configuration options revealed by the MCP tool definitions. Some of these features may be specific to Part B processing forms.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the component action configuration interface showing options for BOT linking, parallel execution, and determinant conditions."
        }
      },
      {
        "type": "added",
        "title": "Part B Form Visibility Configuration",
        "oldText": null,
        "newText": "<span class=\"hl-added\">The service settings allow configuration of which form components are visible in Part B. Under 'Pages, buttons and fields' in service settings, there is an option to 'make blocks/fields visible in Part A and Part B based on registration linkage.'\n\nThis means:\n- Some form components can be configured to appear only in the applicant form (Part A).\n- Some components can be configured to appear only in the operator processing form (Part B).\n- Some components can appear in both Part A and Part B.\n\nThe visibility is typically controlled through the block or field configuration, where the analyst can specify which part the component belongs to.</span>",
        "explanation": "The original manual's Settings section (section I) explicitly mentions 'Option to make blocks/fields visible in Part A and Part B based on registration linkage' under 'Blocks and fields' in service settings. This is documented but only briefly mentioned. This block expands on the concept for the Part B section.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot showing the Part A/Part B visibility toggle for a block or field in the form builder, and the corresponding service settings option."
        }
      },
      {
        "type": "verify",
        "title": "Part B Print Functionality",
        "oldText": null,
        "newText": "The service settings mention 'show print buttons on Part B' as a configuration option. When enabled, operators can print application data, documents, or certificates directly from the processing page.\n\nPrint functionality in Part B may include:\n- Printing the complete application file.\n- Printing specific documents or certificates.\n- Printing a summary of the processing history.\n\nThe print button appearance and behavior need verification.",
        "explanation": "The original manual's Settings section mentions 'show print buttons on Guide and Part B' as a toggle option. The exact print capabilities available in Part B need to be documented. The print functionality likely uses the print document templates described in the MCP tools (print_document_list, print_document_get, etc.).",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the print button in Part B and the resulting print dialog or preview."
        }
      },
      {
        "type": "verify",
        "title": "Processing Role Form in Part B",
        "oldText": null,
        "newText": "Each processing role (human role) has a form that defines what the operator sees and can do. This form is built in the BPA using the same form builder as the applicant form, but it serves a different purpose.\n\nThe processing role form in Part B can include:\n- Display components showing applicant data (read-only or editable).\n- Action buttons linked to BOTs or system actions.\n- Data entry fields for operator-added information.\n- Document generation and display components.\n- Approval/rejection/send-back controls.\n\nThe form is configured under the 'Form' tab of each role in the Roles section (section F).",
        "explanation": "The original manual describes processing role forms in section F (Roles) and II.C (DS Operators processing pages). This block consolidates that information for the Part B section. The form builder capabilities for Part B may have expanded since the original manual. A reviewer should verify if there are new component types or features available specifically for Part B forms.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of a processing role form being built in the BPA, showing the available components and configuration options for Part B."
        }
      },
      {
        "type": "verify",
        "title": "Part B Data Revision Features",
        "oldText": null,
        "newText": "Part B includes data revision capabilities where operators can review applicant-submitted data field by field. The original manual mentions 'revision by field' as a service setting toggle and describes the revision role workflow.\n\nEnhanced data revision features in Part B may include:\n- Field-by-field verification with approve/reject per field.\n- Side-by-side comparison of submitted data with previous versions.\n- Inline editing capabilities for operators to correct data.\n- Batch approval or rejection of multiple fields.\n\nThe data revision features and any enhancements since the original manual need verification.",
        "explanation": "The original manual describes revision roles (section F.3) with documents revision and data revision tabs, and mentions 'revision by field' in service settings. There may have been enhancements to the data revision capabilities. A reviewer should verify the current state of Part B data revision features.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the Part B data revision interface showing field-by-field verification."
        }
      }
    ],
    "isNew": true
  },
  {
    "id": "collapsible-fields",
    "group": "New Features",
    "title": "Collapsible Fields",
    "path": "New Features → Collapsible Fields",
    "pages": "new",
    "status": "draft",
    "changes": 5,
    "changeSummary": "Enhanced documentation for collapsible functionality. The original manual documents block collapsible toggle in section D.3 (Applicant form): 'Blocks are collapsible. If you do not want your blocks to collapse, disable the collapsible toggle under the general tab.' This new section documents enhanced collapsible behaviors that may extend beyond basic block collapsing to include individual fields, groups of fields, field sets, and more granular collapsible controls. This may include new collapsible modes, default collapsed/expanded states, and collapsible behavior triggered by determinants or effects. 5 blocks identified, mostly needing verification.",
    "blocks": [
      {
        "type": "added",
        "title": "Overview of Collapsible Fields",
        "oldText": null,
        "newText": "<span class=\"hl-added\">The collapsible functionality in eRegistrations allows form sections to be collapsed and expanded by the user, reducing visual clutter and improving form navigation. The original manual documents block-level collapsing, where entire blocks can be toggled between collapsed and expanded states.\n\nEnhanced collapsible functionality may extend this capability to:\n- Individual fields or groups of fields within a block.\n- Field sets with collapsible headers.\n- Nested collapsible sections (collapsible elements inside other collapsible elements).\n- Collapsible behavior controlled by determinants or effects (auto-collapse/expand based on conditions).\n\nThe basic block collapsible toggle (documented in section D.3) remains the foundation of this feature.</span>",
        "explanation": "The original manual explicitly documents block collapsible: 'Blocks are collapsible. If you do not want your blocks to collapse, disable the collapsible toggle under the general tab.' This new section expands on that foundation with enhanced collapsible capabilities that may have been added to the platform. The exact enhancements need verification.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshots showing the various collapsible behaviors: block collapsible, field-level collapsible (if available), and different collapsed/expanded states."
        }
      },
      {
        "type": "verify",
        "title": "Block Collapsible Toggle (Enhanced)",
        "oldText": null,
        "newText": "The block collapsible toggle, documented in the original manual, may have been enhanced with additional options:\n\n- Default state: Configuration for whether the block starts collapsed or expanded when the form loads.\n- Collapsible icon position: Where the collapse/expand control appears (header left, header right, etc.).\n- Collapse animation: Whether the collapse/expand transition is animated.\n- Remember state: Whether the collapsed/expanded state is remembered when the user navigates away and returns.\n\nThe basic toggle (enable/disable collapsible) remains available under the General tab of the block configuration.",
        "explanation": "The original manual documents the basic collapsible toggle for blocks. Enhanced options like default state, icon position, and state persistence are common in form builders and may have been added. A reviewer should check the current block configuration options for any enhancements.",
        "screenshot": {
          "type": "new",
          "path": "",
          "desc": "Screenshot of the block configuration showing the collapsible toggle and any additional collapsible options that may have been added."
        }
      },
      {
        "type": "verify",
        "title": "Field-level Collapsible Behavior",
        "oldText": null,
        "newText": "Beyond block-level collapsing, the platform may support collapsible behavior for individual fields or field groups:\n\n- Field sets with collapsible headers: The Field Set container (documented in section D.3) may now support a collapsible toggle similar to blocks.\n- Collapsible panels within blocks: Sub-sections within a block that can be independently collapsed.\n- Collapsible edit grids: Edit grid rows or sections that can be collapsed to show only summary data.\n\nThe exact scope of field-level collapsible behavior needs verification.",
        "explanation": "The original manual documents Field Set as a container that 'groups the fields of the same category of data together' but does not mention collapsible behavior for field sets. Edit Grids and Data Grids are documented as repeating containers. Whether these now support collapsible behavior is unknown. A reviewer should check each container type for collapsible options.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshots of field-level collapsible behavior if available: collapsible field sets, collapsible panels, collapsible edit grid sections."
        }
      },
      {
        "type": "verify",
        "title": "Conditional Collapsible Behavior",
        "oldText": null,
        "newText": "The collapsible state of blocks or fields may be controllable through determinants or the Effects system:\n\n- A determinant condition could automatically collapse or expand a section based on the applicant's input.\n- The Effects system (if used) could include 'collapse' and 'expand' as effect types applied to blocks.\n- This would allow dynamic form behavior where sections collapse or expand as the user fills in the form.\n\nFor example, a block of additional fields could start collapsed and automatically expand when the user selects 'Yes' to a relevant question.",
        "explanation": "The Effects system supports activate/deactivate/show/hide/enable/disable effect types. Collapse/expand may be an additional behavior type or may be achieved through the existing show/hide mechanism. The integration between collapsible behavior and determinants/effects needs verification.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshot showing conditional collapsible behavior configuration, if it exists -- linking a determinant to a collapse/expand action."
        }
      },
      {
        "type": "verify",
        "title": "Collapsible Behavior in Custom Classes",
        "oldText": null,
        "newText": "Collapsible behavior may be achievable or modified through custom classes. The custom classes section (D.8) documents numerous appearance and spacing classes, and a 'collapsible' custom class or variant may exist.\n\nPossible custom classes related to collapsible behavior:\n- Start collapsed: A class that makes a component start in the collapsed state.\n- No collapse: A class that prevents collapsing (alternative to the toggle).\n- Collapse with summary: A class that shows a summary of the contained data when collapsed.\n\nThe existence and names of collapsible-related custom classes need verification.",
        "explanation": "The original manual's custom classes section does not mention collapsible-related classes, but the platform may have added them. Custom classes are the standard mechanism for adding visual behaviors in eRegistrations. A reviewer should check the custom classes dropdown for any collapsible-related options.",
        "screenshot": {
          "type": "unknown",
          "desc": "Screenshot of any collapsible-related custom classes in the custom class dropdown or documentation."
        }
      }
    ],
    "isNew": true
  }
];
