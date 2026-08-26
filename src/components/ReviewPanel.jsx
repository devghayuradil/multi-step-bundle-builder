import React, { useMemo } from 'react';
import ReviewLineItem from './ReviewLineItem';
import { TruckIcon } from './icons';
import data from '../data/products.js';
import wyzeSatisfaction from '../assets/images/wyze_satisfaction.png';
import { useBundleContext } from '../context/BundleContext';

const fmt = (n) => `$${n.toFixed(2)}`;

export default function ReviewPanel() {
  const bundle = useBundleContext();
  const items = bundle.getReviewItems();
  const { total, compareTotal, savings } = bundle.getTotals();

  // Group items by step ID (which maps to our categories)
  const groupedItems = useMemo(() => {
    const groups = {};
    data.steps.forEach(s => {
      groups[s.id] = {
        label: s.id.toUpperCase(),
        items: items.filter(i => i.stepId === s.id)
      };
    });
    return groups;
  }, [items]);

  // Financing calculation placeholder (e.g. 12 months)
  const monthly = total > 0 ? (total / 12).toFixed(2) : '0.00';

  return (
    <div className="bg-[#EDF4FF] md:rounded-xl px-5 py-4 flex flex-col gap-6">

      <header>
        <span className="text-[12px] tracking-[0.05em] text-[#767587] uppercase inline-block mb-4">
          Review
        </span>
        <h2 className="text-xl font-semibold text-[#1a1c1e]">
          Your security system
        </h2>
        <p className="text-xs text-[#454555] mt-1">
          Review your personalized protection system designed to keep what matters most safe.
        </p>
      </header>



      <div className="flex flex-col gap-4">
        {data.steps.map(step => {
          const group = groupedItems[step.id];
          if (!group || group.items.length === 0) return null;

          return (
            <div key={step.id}>
              <h3 className="text-[10px] font-bold tracking-[0.05em] text-[#767587] uppercase border-b border-[#c6c5d8] pb-1 mb-1">
                {group.label}
              </h3>
              <div className="flex flex-col">
                {group.items.map(item => (
                  <ReviewLineItem key={item.key} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 pt-2 border-t border-[#c6c5d8]">
        {/* Shipping */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2 text-[#454555]">
            <div className='bg-white p-2 rounded-md'>
              <TruckIcon className="w-6 h-6 text-[#2d32d1]" />
            </div>
            <span className="text-[14px] font-semibold">Fast Shipping</span>
          </div>
          <div>
            <span className="text-[10px] text-[#6F7882] line-through block">
              $5.99
            </span>
            <span className="text-xs font-bold text-[#2d32d1] block">FREE</span>
          </div>

        </div>

        {/* Totals */}
        <div className="flex items-end justify-between mt-2">

          {/* Guarantee Stamp */}
          <div className="flex gap-4 items-center p-2">
            <div className="flex-shrink-0 w-[80px] h-[80px]">
              <img src={wyzeSatisfaction} alt="100% Satisfaction Guarantee" className="w-full h-full object-contain" />
            </div>
            <div className='hidden'>
              <h4 className="text-[11px] font-bold text-[#1a1c1e]">
                30-day hassle-free returns
              </h4>
              <p className="text-[10px] text-[#454555] mt-0.5 leading-tight">
                If you're not totally in love with the product, we will refund you 100%.
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-center text-[#767587] block bg-[#4E2FD2] text-white px-1 py-1 rounded-md mb-3">
              As low as ${monthly}/mo
            </span>
            {savings > 0 && (
              <span className="text-xs text-[#ba1a1a] line-through mr-2">
                {fmt(compareTotal)}
              </span>
            )}
            <span className="text-xl font-semibold text-[#1a1c1e]">
              {fmt(total)}
            </span>
          </div>
        </div>



        <div className="flex flex-col">
          {/* Savings Callout */}
          {savings > 0 && (
            <div className="text-center">
              <span className="inline-block text-[#0AA288] text-[10px] font-bold px-2 py-1 rounded">
                Congrats! You're saving {fmt(savings)} on your security bundle!
              </span>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            alert('Checkout clicked! In a real app, this would process the order.');
          }}
          className="w-full py-3.5 bg-[#2d32d1] hover:bg-[#0701bd] text-white font-bold rounded-lg shadow-md transition-colors"
        >
          Checkout
        </button>

        <button
          type="button"
          onClick={bundle.saveSystem}
          className="w-full underline cursor-pointer py-2 text-xs font-semibold text-[#454555] hover:text-[#1a1c1e] hover:underline transition-colors"
        >
          Save my system for later
        </button>
      </div>
    </div>
  );
}
