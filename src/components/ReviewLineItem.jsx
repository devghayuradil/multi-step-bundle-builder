import QuantityStepper from './QuantityStepper';
import { useBundleContext } from '../context/BundleContext';

const fmt = (n) => `$${n.toFixed(2)}`;

export default function ReviewLineItem({ item }) {
  const bundle = useBundleContext();

  const handleDecrement = () => {
    bundle.changeQty(item.productId, item.variantId, -1);
  };

  const handleIncrement = () => {
    bundle.changeQty(item.productId, item.variantId, +1);
  };

  return (
    <div className="flex items-center py-3 gap-3 border-b border-[#e2e2e5] last:border-b-0">
      {/* Thumbnail */}
      <div className="w-10 h-10 flex-shrink-0 bg-white rounded flex items-center justify-center p-1">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-full max-h-full object-contain mix-blend-multiply"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[#1a1c1e] leading-tight">
          {item.name}
        </h4>
        {item.variantLabel && (
          <span className="text-xs text-[#767587] mt-0.5">
            {item.variantLabel}
          </span>
        )}
      </div>



      {/* Price */}
      <div className="text-right flex items-center gap-3">
        <div className="flex-shrink-0">
          <QuantityStepper
            qty={item.qty}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            size="sm"
            quantityStyle={
              {
                btn: 'bg-white'
              }
            }
            isFree={item.isFree}
          />
        </div>
        {item.isFree ? (
          <span className="text-sm font-bold text-[#2d32d1]">FREE</span>
        ) : item.priceLabel ? (
          <div>
            {item.compareAtPrice && (
              <span className="text-[10px] text-[#6F7882] line-through block">
                {fmt(item.compareAtPrice * item.qty)}
              </span>
            )}
            <span className="text-xs font-bold text-[#4E2FD2]">
              {item.priceLabel}
            </span>
          </div>
        ) : (
          <div>
            {item.compareAtPrice && (
              <span className="text-[10px] text-[#6F7882] line-through block">
                {fmt(item.compareAtPrice * item.qty)}
              </span>
            )}
            <span className="text-sm font-bold text-[#4E2FD2]">
              {fmt(item.price * item.qty)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
