---
name: Structured Security System
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#454555'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#767587'
  outline-variant: '#c6c5d8'
  surface-tint: '#4148e2'
  primary: '#0701bd'
  on-primary: '#ffffff'
  primary-container: '#2d32d1'
  on-primary-container: '#b5b9ff'
  inverse-primary: '#bfc2ff'
  secondary: '#5a5e6f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe1f6'
  on-secondary-container: '#606375'
  tertiary: '#343739'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b4e50'
  on-tertiary-container: '#bcbfc1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#02006d'
  on-primary-fixed-variant: '#2528cb'
  secondary-fixed: '#dfe1f6'
  secondary-fixed-dim: '#c3c5d9'
  on-secondary-fixed: '#171b2a'
  on-secondary-fixed-variant: '#434656'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max-width: 1200px
  sidebar-width: 360px
  gutter: 24px
  margin-mobile: 16px
  stack-gap: 12px
---

## Brand & Style

This design system is built for high-trust configuration environments where clarity and systematic organization are paramount. The personality is **Professional, Reliable, and Instructive**, designed to guide users through complex decision-making processes without cognitive overload.

The visual style follows **Corporate / Modern** principles with a focus on functional clarity. It utilizes a refined card-based architecture, subtle tonal layering to separate configuration steps from summaries, and a "utility-first" aesthetic. High-contrast brand blue is used purposefully for action and emphasis, while a neutral, light-gray foundation ensures a calm, focused atmosphere for technical tasks.

## Colors

The palette is centered around a deep, authoritative primary blue used for primary buttons, active states, and critical information. 

- **Primary (#2D32D1):** High-intent actions, progress indicators, and core branding.
- **Secondary (#E8EAFF):** Soft blue accents used for card backgrounds, subtle highlight containers, and selected state backdrops.
- **Tertiary/Background (#F6F8FA):** A cool-toned light gray used for the global background and input fields to reduce stark white glare.
- **Semantic Accents:** Use a vibrant purple (#5E35B1) for promotional badges or "guarantees" and a standard red for error/price strike-throughs to maintain clear value communication.

## Typography

The typography system uses **Manrope** for headlines to provide a modern, friendly, yet professional character. **Inter** is used for body and labels to ensure maximum legibility in data-dense layouts.

- **Headlines:** Use Bold (700) or ExtraBold (800) weights to create a clear hierarchy between configuration steps.
- **Labels:** Small, uppercase labels with slight letter-spacing should be used for category headers (e.g., "CAMERAS", "SENSORS") in the sidebar summary.
- **Pricing:** Emphasize final pricing with bold weights and the primary blue color, while using a smaller, strike-through style for original prices.

## Layout & Spacing

The design system employs a **Fixed Grid** with a distinctive split-screen composition for desktop:

1.  **Main Content Area:** A flexible 8-column span for step-by-step configuration cards.
2.  **Sticky Sidebar:** A fixed 4-column span (360px) on the right for the 'Review' summary. This ensures users always see the impact of their choices.

**Responsive Reflow:**
- **Desktop:** Sidebar is sticky on the right.
- **Tablet:** Sidebar moves below the main content or becomes a bottom-sheet.
- **Mobile:** Single column layout. The 'Review' section becomes an expandable summary at the bottom of the viewport or a dedicated final step.

Spacing follows an 8px base grid, with 24px gutters between main cards and 12px internal padding for component elements.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Level 0 (Background):** Tertiary Light Gray (#F6F8FA).
- **Level 1 (Cards):** White background with a subtle 1px border (#E0E0E0).
- **Level 2 (Active/Selected):** 1px border using the Primary Blue (#2D32D1) or a soft blue wash (#E8EAFF).
- **Sidebar:** Uses a slightly darker gray or white with a soft, ambient shadow (0px 4px 20px rgba(0,0,0,0.05)) to distinguish it as a summary overlay.

## Shapes

The design system uses **Soft** geometry to maintain a balance between a technical, secure feel and modern friendliness. 

- **Standard Radius:** 4px (0.25rem) for small buttons and input fields.
- **Large Radius:** 8px (0.5rem) for main configuration cards and the review sidebar container.
- **Interactive Elements:** Checkboxes and radio buttons should maintain a 4px radius or be fully circular respectively to align with standard UI conventions.

## Components

### Buttons
- **Primary:** Solid #2D32D1 with white text. High-contrast and full-width in the sidebar for the final "Checkout" action.
- **Secondary/Outline:** 1px #2D32D1 border with primary blue text for "Add" or "Learn More" actions.
- **Ghost:** Used for secondary navigation like "Save system for later."

### Cards
- **Product Cards:** Feature a white background, 8px radius, and contain a product image, title, price, and "Learn More" link.
- **Step Containers:** Group related product cards within a titled section. Use a chevron icon to indicate collapsible/expandable sections.

### Sidebar Summary
- A vertically stacked list of line items grouped by category (Cameras, Sensors, etc.).
- Each item includes a small thumbnail, title, quantity selector (- / +), and price.

### Selection States
- Use a thick primary blue border and a "Selected" badge/check icon in the top right corner of cards to indicate an active choice.

### Input Fields & Steppers
- **Quantity Steppers:** Minimalist horizontal layout with minus/plus icons surrounding the digit, using a subtle gray border.
- **Badges:** Use "Save 20%" style badges with a purple background for high-value callouts.