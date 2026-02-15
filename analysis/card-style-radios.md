# Card-style Radios -- Update Analysis

**Changes detected:** 5
**Status:** New section -- ready for review (all items need verification)
**Analyzed:** 2026-02-15
**Section type:** Entirely new -- not present in original manual

---

## Overview of Card-style Radios
**VERIFY**

> Card-style radios are a new UI pattern in eRegistrations that displays radio button options as visual cards rather than traditional radio button circles with labels. Each option appears as a distinct card, potentially with an icon, title, and description, providing a more visual and user-friendly selection interface.
>
> This pattern is particularly useful for:
> - Guide questions where the applicant needs to make a clear choice.
> - Service type selection with visually distinct options.
> - Any scenario where visual card layout improves comprehension.
>
> The original manual documents 'Radio Switch' custom class but not card-style display.

**Needs verification:** The exact implementation, appearance, and availability of card-style radios need confirmation on the live platform.
**Screenshot:** Needs new -- capture card-style radios in use on a form, comparing with traditional radios.

---

## Implementing Card-style Radios
**VERIFY**

> Card-style radios may be implemented through:
> 1. **Custom class**: A new class (e.g., 'card-radio') applied via the Custom Class field, following the 'Radio Switch' pattern.
> 2. **New display mode**: A display option in radio component configuration.
> 3. **New component type**: A dedicated 'Card Radio' component in the form builder.

**Needs verification:** The implementation mechanism is not confirmed. The custom class approach is most consistent with existing eRegistrations patterns. A reviewer should identify the correct implementation.
**Screenshot:** Needs new -- capture the configuration interface for card-style radios.

---

## Card-style Radio Appearance and Customization
**VERIFY**

> Card-style radios likely display each option as a card with:
> - An icon or image
> - The option label/title
> - An optional description
> - A visual selection indicator (border, checkmark, or color change)
>
> Customization may include card size, layout (horizontal/grid/vertical), icon support, and color theming.

**Needs verification:** Appearance details are speculative. Must be captured from the live platform.
**Screenshot:** Needs new -- capture card-style radios in various configurations and states.

---

## Card-style Radios in the Guide
**VERIFY**

> Card-style radios may be particularly useful in the Guide section, making guide questions more intuitive with visual cards for each option.
>
> For example, a 'What type of registration do you need?' question could display options as cards with icons for each registration type.

**Needs verification:** Whether card-style radios are designed for or restricted to the Guide, or available for any radio component.
**Screenshot:** Needs new -- capture card-style radios in a Guide question.

---

## Relationship to Existing Custom Classes
**VERIFY**

> The original manual documents 'Radio Switch' and 'Search results list' custom classes for radio/selection components. Card-style radios may be:
> - An addition to the custom class list (e.g., 'radio-card')
> - A replacement for Radio Switch
> - An entirely separate feature
>
> If a custom class, it belongs in section D.8. If a new component, it may belong in section D.3 or standalone.

**Needs verification:** The categorization determines where this should be documented in the final manual. A reviewer should confirm the implementation mechanism.
**Screenshot:** Unknown -- capture showing where card-style radios are configured.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| Overview of Card-style Radios | VERIFY | Needs new |
| Implementing Card-style Radios | VERIFY | Needs new |
| Card-style Radio Appearance | VERIFY | Needs new |
| Card-style Radios in the Guide | VERIFY | Needs new |
| Relationship to Existing Custom Classes | VERIFY | Unknown |
