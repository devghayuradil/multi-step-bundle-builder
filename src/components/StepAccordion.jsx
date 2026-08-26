import { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useBundleContext } from '../context/BundleContext';
import StepHeader from './StepHeader';

export default function StepAccordion({
  step,
  totalSteps,
  isOpen,
  onToggle,
  onNext,
}) {
  const bundle = useBundleContext();
  const contentRef = useRef(null);

  // Focus management or scroll into view when opened could go here if desired
  useEffect(() => {
    if (isOpen && contentRef.current) {
      // Small delay to let the animation start
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }, [isOpen]);

  const selectedCount = bundle.getStepSelectedCount(step);

  return (
    <div className={`flex flex-col md:rounded-xl ${isOpen && 'bg-[#EDF4FF]'}`}>
      <StepHeader
        stepNumber={step.stepNumber}
        totalSteps={totalSteps}
        label={step.label}
        iconName={step.icon}
        isOpen={isOpen}
        selectedCount={selectedCount}
        onClick={onToggle}
      />

      {isOpen && (
        <div
          ref={contentRef}
          className="px-4 pt-6 pb-2 step-body-enter flex flex-col gap-6"
        >
          {/* Product Grid */}
          <div className="flex justify-center gap-4 flex-wrap">
            {step.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Next Button */}
          {step.nextStepLabel && (
            <div className="flex justify-center pb-5">
              <button
                type="button"
                onClick={onNext}
                className="px-6 py-[5px] rounded-lg border-1 border-[#4E2FD2] text-[#4E2FD2] font-semibold text-[18px] 
                  hover:bg-[#f0f1ff] active:bg-[#e8eaff] transition-colors cursor-pointer"
              >
                Next: {step.nextStepLabel}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
