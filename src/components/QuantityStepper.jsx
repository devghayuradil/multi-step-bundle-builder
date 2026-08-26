
export default function QuantityStepper({
  qty,
  onDecrement,
  onIncrement,
  size = 'md',
  disabled = false,
  minQty = 0,
  quantityStyle = {
    btn: 'bg-[#F0F4F7] text-[#525963] border-none'
  },
  isFree = false
}) {
  const sm = size === 'sm';

  return (
    <div
      className={`inline-flex items-center overflow-hidden select-none
        ${disabled ? 'opacity-50 pointer-events-none' : ''}
        ${sm ? 'h-7 text-xs' : 'h-8 text-sm'}
      `}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={onDecrement}
        disabled={qty <= minQty || disabled || isFree}
        className={`flex items-center justify-center font-bold rounded-md cursor-pointer disabled:cursor-not-allowed
          ${sm ? 'w-5 h-5' : 'w-5 h-5'}
          ${isFree ? 'bg-[#CED6DE]' : qty <= minQty ? 'border border-[#E6EBF0] text-[#E6EBF0]' : quantityStyle.btn}
          
        `}
      >
        −
      </button>

      <span
        className={`flex items-center justify-center font-semibold text-[#0B0D10] border-[#c6c5d8]
          ${sm ? 'min-w-6 h-5 text-xs' : 'min-w-6 h-5 text-sm'}
        `}
      >
        {qty}
      </span>

      <button
        type="button"
        aria-label="Increase quantity"
        onClick={onIncrement}
        disabled={disabled || isFree}
        className={`flex items-center justify-center font-bold rounded-md cursor-pointer disabled:cursor-not-allowed
          ${sm ? 'w-5 h-5' : 'w-5 h-5'}
          ${isFree ? 'border border-[#E6EBF0] text-[#525963] bg-[#CED6DE]' : quantityStyle.btn}
        `}
      >
        +
      </button>
    </div>
  );
}
