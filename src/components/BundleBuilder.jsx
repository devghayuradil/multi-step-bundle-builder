import { useEffect } from 'react';
import StepAccordion from './StepAccordion';
import ReviewPanel from './ReviewPanel';
import data from '../data/products.js';
import { useBundleContext } from '../context/BundleContext';
import wyzeLogo from '../assets/images/wyze.svg';

export default function BundleBuilder() {
  const bundle = useBundleContext();

  return (
    <div className="font-sans">

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto md:px-8 pt-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] md:gap-5 items-start">

          {/* Left Column: Builder */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold tracking-tight mb-2 md:hidden mb-4 text-center">
              Let's get started!
            </h2>

            <div className="flex flex-col">
              {data.steps.map((step, index) => (
                <StepAccordion
                  key={step.id}
                  step={step}
                  totalSteps={data.steps.length}
                  isOpen={bundle.activeStep === index}
                  onToggle={() => bundle.setActiveStep(bundle.activeStep === index ? -1 : index)}
                  onNext={() => bundle.setActiveStep(index + 1)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Review Panel */}
          <div className="w-full lg:sticky top-2">
            <ReviewPanel />
          </div>

        </div>
      </main>

      {/* Toast Notification */}
      {bundle.toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 toast-enter">
          <div className="bg-[#1a1c1e] text-white px-6 py-3 rounded-full shadow-lg font-medium text-sm flex items-center gap-3">
            <div className="w-5 h-5 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            {bundle.toastMsg}
          </div>
        </div>
      )}
    </div>
  );
}
