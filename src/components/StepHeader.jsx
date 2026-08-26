import { ChevronUpIcon, StepIconMap } from './icons';

export default function StepHeader({
  stepNumber,
  totalSteps,
  label,
  iconName,
  isOpen,
  selectedCount,
  onClick,
}) {
  const Icon = StepIconMap[iconName] || (() => null);

  return (
    <div>
      <span className="text-[11px] font-semibold tracking-[0.05em] text-[#767587] uppercase ml-6">
        STEP {stepNumber} OF {totalSteps}
      </span>
      <button
        type="button"
        onClick={onClick}
        className={`w-full flex items-center justify-between py-4 text-left border-[#1F1F1F]/[0.5]
        transition-colors duration-200 group px-4 ${isOpen ? 'border-t' : 'border-y '}`}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Icon className={`w-5 h-5 ${isOpen ? 'text-[#2d32d1]' : 'text-[#767587] group-hover:text-[#454555]'}`} />
            <h2 className="text-xl font-semibold text-[#1a1c1e]">
              {label}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {selectedCount > 0 && (
            <span className="text-sm font-semibold text-[#2d32d1]">
              {selectedCount} selected
            </span>
          )}
          <div className={`p-1 rounded-full transition-colors`}>
            <ChevronUpIcon className={`w-3 h-3 text-[#2d32d1] ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
          </div>
        </div>
      </button>
    </div>
  );
}
