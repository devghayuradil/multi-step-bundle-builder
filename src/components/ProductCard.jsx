import QuantityStepper from './QuantityStepper';
import VariantSelector from './VariantSelector';
import { ExternalLinkIcon } from './icons';
import { useBundleContext } from '../context/BundleContext';

const fmt = (n) => `$${n.toFixed(2)}`;

/**
 * ProductCard
 * Full product card with optional badge, image, variants, stepper, pricing.
 * "Selected" state (qty > 0 for any variant) shows blue border + tinted bg.
 */
export default function ProductCard({ product }) {
  const bundle = useBundleContext();
  const hasVariants = product.variants?.length > 0;
  const activeVariantId = hasVariants ? bundle.activeVariants[product.id] : null;

  // qty for the currently active variant (or the product if no variants)
  const activeQty = bundle.getActiveQty(product);

  // Is this product selected (any variant has qty > 0)?
  const isSelected = hasVariants
    ? product.variants.some(
      (v) => (bundle.getQty(product.id, v.id)) > 0
    )
    : activeQty > 0;

  const handleDecrement = () => {
    bundle.changeQty(product.id, activeVariantId, -1);
  };

  const handleIncrement = () => {
    bundle.changeQty(product.id, activeVariantId, +1);
  };

  const handleVariantSelect = (variantId) => {
    bundle.setActiveVariant(product.id, variantId);
  };

  const isFree = product.isFree;
  const priceLabel = product.priceLabel;

  const handleCardClick = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }

    if (isSelected) {
      if (hasVariants) {
        product.variants.forEach(v => {
          if (bundle.getQty(product.id, v.id) > 0) {
            bundle.setQtyValue(product.id, v.id, 0);
          }
        });
      } else {
        bundle.setQtyValue(product.id, null, 0);
      }
    } else {
      bundle.setQtyValue(product.id, activeVariantId, 1);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative flex max-sm:flex-col justify-center item-center rounded-xl border-2 transition-all duration-200 overflow-hidden cursor-pointer bg-white flex-[0_0_100%] md:flex-[0_0_calc(50%_-_16px)]
        ${isSelected
          ? 'border-[#4E2FD2B2] card-selected shadow-md'
          : 'border-none hover:shadow-sm'
        }`}
    >

      {/* Discount badge */}
      {product.badge && (
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-block bg-[#4E2FD2] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            {product.badge}
          </span>
        </div>
      )}

      {/* Product image */}
      <div className="flex items-center justify-center py-3 px-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full sm:w-[100px] object-contain mix-blend-multiply"
          loading="lazy"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col justify-center flex-1 px-3 py-3 gap-2">
        {/* Name */}
        <h3 className="text-sm font-semibold text-[#1a1c1e] leading-snug">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#454555] leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Learn More */}
        <a
          href={product.learnMoreUrl}
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#2d32d1] hover:underline w-fit"
        >
          Learn More <ExternalLinkIcon className="w-2.5 h-2.5" />
        </a>

        {/* Variant selector */}
        {hasVariants && (
          <VariantSelector
            variants={product.variants}
            activeVariantId={activeVariantId}
            onSelect={handleVariantSelect}
            productId={product.id}
            getQty={bundle.getQty}
          />
        )}

        {/* Bottom row: stepper + price */}
        <div className="flex items-center justify-between gap-2">
          <QuantityStepper
            qty={activeQty}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            size="sm"
            minQty={isSelected ? 1 : 0}
          />

          <div className="text-right flex-1 min-w-0">
            {isFree ? (
              <span className="text-sm font-bold text-[#2d32d1]">FREE</span>
            ) : priceLabel ? (
              <div>
                {product.compareAtPrice && (
                  <span className="text-[10px] text-[#ba1a1a] line-through block">
                    {fmt(product.compareAtPrice)}
                  </span>
                )}
                <span className="text-xs font-bold text-[#2d32d1]">{priceLabel}</span>
              </div>
            ) : (
              <div>
                {product.compareAtPrice && (
                  <span className="text-[10px] text-[#ba1a1a] line-through block">
                    {fmt(product.compareAtPrice)}
                  </span>
                )}
                <span className="text-sm font-bold text-[#1a1c1e]">
                  {fmt(product.price)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
