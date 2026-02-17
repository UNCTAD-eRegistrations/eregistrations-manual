---
title: "Card-style Radios"
description: "eRegistrations Manual - Card-style Radios"
---

# Card-style Radios


<div class="live-screenshot" markdown>

![Card-style Radios - Enhanced radio button display as selection cards](../screenshots/live-card-radios.png){ loading=lazy }
*Current BPA view — Card-style Radios*
*Card-style radios are a display option for radio components in the form builder.*


</div>

## Overview of Card-style Radios


Card-style radios are a new UI pattern in eRegistrations that displays radio button options as visual cards rather than traditional radio button circles with labels. Each option appears as a distinct card, potentially with an icon, title, and description, providing a more visual and user-friendly selection interface.

This pattern is particularly useful for:
- Guide questions where the applicant needs to make a clear choice between visually distinct options.
- Service type selection where each option has a unique visual identity.
- Any scenario where the visual card layout improves comprehension of the available options.


---

## Implementing Card-style Radios


Card-style radios may be implemented through one of the following mechanisms:

1. Custom class: A new custom class (e.g., 'card-radio' or 'radio-card') applied to a radio component through the Custom Class field in the component edit modal. This would follow the same pattern as the existing 'Radio Switch' custom class.

2. New display mode: A new display mode option in the radio component configuration, alongside existing layout options.

3. New component type: A dedicated 'Card Radio' component in the form builder, separate from the standard radio component.

The implementation mechanism determines how analysts configure card-style radios in the BPA.


---

## Card-style Radio Appearance and Customization


Card-style radios likely display each option as a card element that may include:
- An icon or image representing the option.
- The option label/title displayed prominently.
- An optional description or subtitle.
- A visual selection indicator (highlighted border, checkmark, or color change when selected).

Customization options may include:
- Card size (small, medium, large).
- Card layout (horizontal row, grid, or vertical stack).
- Icon or image support.
- Color theming.

The exact customization options available need verification.


---

## Card-style Radios in the Guide


Card-style radios may be particularly useful in the Guide section of the application file, where applicants answer questions to determine their registration requirements. The card layout can make guide questions more intuitive by providing visual cards for each option.

For example, a guide question asking 'What type of registration do you need?' could display options as cards with icons representing each registration type, rather than a simple radio button list.


---

## Relationship to Existing Custom Classes


- Radio Switch: Changes radio buttons into a switch-like appearance.
- Search results list: Changes the display of select/radio options.

Card-style radios may be:
- An addition to this list of custom classes (e.g., 'radio-card' class).
- A replacement for Radio Switch with more advanced visual options.
- An entirely separate feature unrelated to custom classes.

If it is a custom class, it would be documented in section D.8 (Custom classes) rather than as a standalone section. The appropriate location in the manual depends on the implementation.

---
