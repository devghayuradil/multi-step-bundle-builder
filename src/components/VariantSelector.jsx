export default function VariantSelector({
  variants,
  activeVariantId,
  onSelect,
  productId,
  getQty,
}) {
  if (!variants || variants.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {variants.map((variant) => {
        const isActive = variant.id === activeVariantId;
        const qty = getQty(productId, variant.id);

        return (
          <button
            key={variant.id}
            type="button"
            onClick={() => onSelect(variant.id)}
            title={`${variant.label}${qty > 0 ? ` (${qty} in cart)` : ''}`}
            className={`relative flex items-center gap-1.5 px-2 py-1 rounded border text-xs font-medium
              transition-all duration-150 cursor-pointer
              ${isActive
                ? 'border-[#2d32d1] bg-[#e8eaff] text-[#2d32d1] shadow-sm'
                : 'border-[#c6c5d8] bg-white text-[#454555] hover:border-[#767587] hover:bg-[#f3f3f6]'
              }`}
          >
            <img src={variant.image} alt={variant.label} className="w-4 h-4" />
            <span className="text-[10px]">{variant.label}</span>
          </button>
        );
      })}
    </div>
  );
}
