# D.8. Custom classes -- Update Analysis (p.64-77)

**Changes detected:** 5 (3 verify items, 0 modified, 0 added)
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## Custom class introduction
**UNCHANGED**

> Custom class is a feature that can be applied to the fields in the forms. It is used for customizing fields (in terms of spacing, alignment, color, size, etc.) or to deploy a function to a particular field. Depending on the type of fields, different options to customize will be available for selection.

The fundamental description and the workflow to add custom classes (open edit modal, toggle advanced, select custom class) remains accurate.

**Screenshot:** Verify -- confirm the custom class dropdown UI appearance has not changed.

---

## 1. Appearance changing classes
**UNCHANGED**

> List of classes: Value like label, Field + Button, Hide, Text right, Align value to right, Highlight block, Background (Blue, Gray, Green, Orange, Red), Fill background, Default notice, Radio Switch, Search results list.

Note: The raw manual text also documents **List bullet check** (replaces bullets in an unordered list with a check icon), which was not in the original summary bullet list but is described in the body text.

All class descriptions (Value like label, Field+Button column layout, background color inheritance warning, Default notice with colored left border, Radio Switch for button group, etc.) remain accurate. Compatibility matrices included.

**Screenshot:** Verify -- confirm visual appearance of each class has not changed.

---

## 2. Spacing and alignment classes
**UNCHANGED**

> List of classes: Remove top space, Space top (label space), Top space / Top space (2X) / Top space (3X), Remove top inner space, Vertical align top/center/bottom, Full height.

All descriptions remain accurate. Compatibility matrix included.

---

## 3. Datagrid related classes
**UNCHANGED**

> List of classes: Datagrid footer, Add/Remove disabled, Datagrid Condensed, Has footer, Width (width5 through width100 in steps of 5), Datagrid Hide Column Label.

Class interdependencies (Datagrid footer and Add/Remove disabled both require Has footer on the datagrid above) are correctly documented. Width values range from width5 to width100 in increments of 5.

---

## 4. Custom classes for Button
**UNCHANGED**

> List of classes: Field + Button, Orange/Blue/Green/Red, Disable on success, Show cog during form submit, Light color, Outline button.

All descriptions remain accurate. Note about combining Light color with Outline for a subtler appearance is documented.

---

## 5. Certificate layout classes -- New styles (Print Page A4 system)
**UNCHANGED**

> New certificate styles: Print Page A4, Print text center/right/left, Print center vertical, Print Page top/bottom/horizontal margin small/medium/large (12mm/24mm/36mm), Print corner top/bottom left/right, Print watermark, Print footer distance small/medium/large, Print non latin text, Print color light/dark/brand, Print space xsmall(2mm)/small(4mm)/medium(8mm)/large(12mm)/xlarge(16mm), Print value small(10pt)/large(14pt), Print label small(8pt)/large(10pt).

The Print Page A4 system was already comprehensively documented in the July 2025 manual with exact measurements. This is a complete certificate styling framework.

**Screenshot:** Verify -- confirm no new Print classes have been added since the manual was written.

---

## 5. Certificate layout classes -- Old styles
**UNCHANGED**

> Old certificate styles: print-big-field, print-small-field, (Print) Highlight Value, (Print) Certificate, (Print) Document Section, (Print) Documents last section, (Print) Terms and conditions, (Print) Certificate header, (Print) Certificate document title, (Print) Certificate footer.

Old styles remain for backward compatibility. New Print Page A4 system is the recommended approach for new certificates.

---

## 6. Other custom classes
**UNCHANGED**

> Payment form component and I-swear component.

---

## Card-style radio class (potentially new)
**VERIFY**

> A card-style radio class may have been added to the platform, allowing radio button groups to display as selectable cards rather than traditional radio buttons.

**Needs verification:** The update plan mentions "card-style radios" as a new platform feature. This could be a new custom class similar to Radio Switch. A reviewer should check the current custom class dropdown to confirm its existence and name.

**Screenshot:** Needs new -- capture card-style radio class example if it exists.

---

## New custom classes added since July 2025
**VERIFY**

> Additional custom classes may have been added in the ~9,600 commits since the manual was written.

**Needs verification:** A human reviewer should check the complete custom class dropdown on a current BPA instance to identify any classes not documented in the manual.

**Screenshot:** Needs update -- capture full custom class dropdown list from current platform.

---

## Effects system relationship to custom classes
**VERIFY**

> The Effects system (confirmed to support activate/deactivate/show/hide/enable/disable effect types) is a new platform feature that may complement custom class functionality.

**Needs verification:** The Effects system exists (confirmed via MCP tools) and operates differently from custom classes (effects are determinant-driven behaviors; custom classes are static styling). A reviewer should determine if this relationship warrants mention in the custom classes section.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Custom class introduction | UNCHANGED | Verify |
| 1. Appearance changing classes | UNCHANGED | Verify |
| 2. Spacing and alignment classes | UNCHANGED | Same |
| 3. Datagrid related classes | UNCHANGED | Same |
| 4. Custom classes for Button | UNCHANGED | Same |
| 5. Certificate layout - New styles | UNCHANGED | Verify |
| 5. Certificate layout - Old styles | UNCHANGED | Same |
| 6. Other custom classes | UNCHANGED | Same |
| Card-style radio class | VERIFY | Needs new |
| New custom classes since July 2025 | VERIFY | Needs update |
| Effects system relationship | VERIFY | Unknown |
