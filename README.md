# Wyze Multi-Step Bundle Builder

A polished, production-quality React prototype of a multi-step security system bundle builder — built as a frontend take-home project.

---

## 📸 Overview

A two-column shopping experience where users assemble a custom home security system step by step, with a live review panel updating in real time beside them.

### Left Column — 4-Step Accordion Builder
Users are walked through each step sequentially:

| Step | Content |
|------|---------|
| 1 | **Choose your cameras** — Wyze Cam v4, Cam Pan v3, Floodlight v2, Duo Doorbell, Battery Cam Pro |
| 2 | **Choose your plan** — Cam Unlimited subscription |
| 3 | **Choose your sensors** — Motion Sensor, Sense Hub (free) |
| 4 | **Add extra protection** — MicroSD Card |

### Right Column — Live Review Panel
- Lists all selected items with quantity steppers
- Calculates real-time totals, savings, and "as low as $/mo"
- Shipping always shown as FREE (with crossed-out $5.99)
- "Save my system for later" persists to `localStorage`

---

## ✨ Features

- **Multi-step accordion** — only one step open at a time; advances via "Next" button
- **Product cards** — click to select/deselect; quantity stepper; variant selector with images; discount badges
- **Variant-aware cart** — each color variant tracked independently (e.g., 2× White + 1× Black Cam v4)
- **Live review panel** — synced with builder in real time via React Context
- **Persist on demand** — "Save my system for later" saves to `localStorage`; restored on next visit
- **Free product lock** — "FREE" items (Sense Hub) have stepper locked; cannot be incremented/decremented
- **Gilroy typography** — custom `Gilroy-Medium` (body) and `Gilroy-SemiBold` (headings) via `@font-face`
- **Responsive layout** — single column on mobile, two-column on desktop

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **React Context API** | Global state management (`BundleContext`) |
| **localStorage** | Manual persistence via "Save" button |

---

## 🗂 Project Structure

```
src/
├── assets/
│   ├── fonts/          # Gilroy-Medium.woff2, Gilroy-SemiBold.woff2
│   └── images/         # Product images, variant swatches, icons
├── components/
│   ├── BundleBuilder.jsx     # Root layout (header + 2-col grid)
│   ├── StepAccordion.jsx     # Collapsible step wrapper
│   ├── StepHeader.jsx        # Step header (label, count, chevron)
│   ├── ProductCard.jsx       # Individual product card
│   ├── VariantSelector.jsx   # Color/variant chip buttons
│   ├── QuantityStepper.jsx   # −/qty/+ control (shared)
│   ├── ReviewPanel.jsx       # Right-column live order summary
│   ├── ReviewLineItem.jsx    # Single line item in review panel
│   └── icons.jsx             # SVG icon components
├── context/
│   └── BundleContext.jsx     # Global state: quantities, variants, steps
├── data/
│   └── products.js           # Catalog data with imported image assets
├── App.jsx                   # Wraps app in BundleProvider
├── App.css                   # Flat CSS (animations, keyframes, utilities)
└── index.css                 # @font-face, @theme tokens, global resets
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🧠 State Management

All bundle state lives in [`BundleContext`](src/context/BundleContext.jsx):

| State | Description |
|-------|-------------|
| `quantities` | `{ [productId_variantId]: number }` — cart quantities |
| `activeVariants` | `{ [productId]: variantId }` — selected variant per product |
| `activeStep` | Index of the currently open accordion step |

**Key functions exposed via context:**

- `getQty(productId, variantId)` — get qty for a specific variant
- `changeQty(productId, variantId, delta)` — increment/decrement
- `setQtyValue(productId, variantId, value)` — set exact qty
- `setActiveVariant(productId, variantId)` — switch active variant
- `getReviewItems()` — flat list of all cart items (qty > 0)
- `getTotals()` — `{ total, compareTotal, savings }`
- `saveSystem()` — persist current state to `localStorage`

---

## 💡 Design Decisions

- **Context API over prop drilling** — `bundle` was previously passed 4 levels deep; now every component calls `useBundleContext()` directly.
- **Variant-as-line-item** — each `productId + variantId` pair is an independent cart entry, enabling "2 white + 1 black" scenarios.
- **Manual save** — auto-save on every keystroke was intentionally removed; persistence only happens when the user clicks "Save my system for later".
- **Visual qty default** — unselected cards show qty `0`; clicking the card selects it at `qty = 1` with the minus button locked (can't go below 1 while selected; use card click to deselect).
- **Flat CSS** — `App.css` uses no nesting and consolidates all `@media` queries at the end (DRY principle).

---

## 📄 License

MIT — built as a frontend take-home exercise.
