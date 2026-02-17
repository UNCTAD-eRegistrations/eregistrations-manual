---
title: "D.4. Documents"
description: "eRegistrations Manual - D.4. Documents (Original pages p.43)"
---

# D.4. Documents


<!-- PDF Screenshots -->
??? example "Original Manual Screenshots"
 ![pdf-bpa-documents-01.png](./screenshots/pdf-bpa-documents-01.png){ loading=lazy }

 ![pdf-bpa-documents-02.png](./screenshots/pdf-bpa-documents-02.png){ loading=lazy }


<!-- Live BPA Screenshot: live-documents -->
<div class="live-screenshot" markdown>

![Documents - Document requirements configuration](./screenshots/live-documents.png){ loading=lazy }
*Current BPA view (2026-02-15) — [D.4. Documents](https://bpa.cuba.eregistrations.org/services/2c918084887c7a8f01887c99ed2a6fd5/forms/document-form){ target=_blank }*

</div>
<!-- /Live BPA Screenshot: live-documents -->

## Documents tab toggle

The Documents tab can be enabled or disabled for a service. When enabled, it provides a dedicated tab where applicants can see required documents and upload them.

---

## Linking file upload components to required documents

File upload components are linked to required documents through the Data tab. In the Data tab of a file upload component, the Requirement dropdown allows selecting which required document the upload is associated with.

---

!!! example "Document requirement types in the Cuba VUCE"
 The platform has **181 global document types** available. These are reusable document definitions that can be linked to any registration via the BPA.

 **Document types by category**:

 | Category | Count | Examples |
 |----------|-------|----------|
 | Certificados (Certificates) | ~30 | Certificado de Libre Venta, Certificado sanitario de exportación, Certificado de aprobación de Modelo, Certificado de Inscripción en la ONAT, Certificado de origen, Certificado para Autoridad Aduanera, Certificado Registro Sanitario (INHEM), Certificado de no objeción |
 | Permisos (Permits) | ~8 | Permiso eventual, Permiso fitosanitario, Permiso zoosanitario, Permiso eventual firmado, Permiso de Sustancias sometidas a Fiscalización, Permisos emitidos |
 | Registros (Registrations) | ~8 | Registro en Aduana, Registro Sanitario, Registro CCRC, Registro de medicamento, Registro de alimento, Registro Nacional de alimentos, Registro de sucursales, Registro de Sustancias sometidas a Fiscalización |
 | Documentos legales (Legal) | ~12 | Resolución emitida por el MINCEX, Resolución con objeto social, Certifico del Ministerio de Justicia, Certificación de Registro Mercantil, Escritura notarial de la empresa, Resolución nombramiento del director |
 | Documentos financieros (Financial) | ~6 | Factura Comercial, Aval bancario y/o Factura Comercial, Contrato de importación, Contrato Firmado INHEM |
 | Documentos técnicos (Technical) | ~15 | Fichas Técnicas, Ficha técnica del producto, Homologación tecnica, Documento Maestro, Lista de empaque |
 | Documentos sanitarios (Health/Sanitary) | ~20 | Certificado Sanitario, Resultados de la Inspección Sanitaria Estatal, Resultado de análisis de laboratorio, Certificado de libre venta, Forma farmacéutica |
 | Otros (Other) | ~15 | Inscripción AGR, Inscripción CCRC, Facultad de comercio exterior y nomenclatura, Modelo de aprobación, Modelo de solicitud |

 *Note: The Permisos eventuales service manages its supporting documents through form file upload fields rather than linked document requirements. Its registration currently has **0 document requirements linked** — instead, the form includes 2 file upload components: "Documento que avale la fundamentación" and "Subir la Carta emitida por la Oficina de la ZED Mariel".*
