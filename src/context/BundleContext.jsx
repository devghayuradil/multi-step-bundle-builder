import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import data from '../data/products.js'; // Need the steps data

const STORAGE_KEY = 'wyze-bundle-system-v1';

export const itemKey = (productId, variantId) =>
  variantId ? `${productId}_${variantId}` : productId;

const buildInitialState = (steps) => {
  const quantities = {};
  const activeVariants = {};

  steps.forEach((step) => {
    step.products.forEach((product) => {
      if (product.variants && product.variants.length > 0) {
        activeVariants[product.id] = product.variants[0].id;
      }
      if (product.isPreSelected) {
        const qty = product.preSelectedQty ?? 1;
        if (product.variants && product.variants.length > 0) {
          const key = itemKey(product.id, product.variants[0].id);
          quantities[key] = qty;
        } else {
          quantities[product.id] = qty;
        }
      }
    });
  });

  return { quantities, activeVariants };
};

const loadSaved = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return null;
};

const BundleContext = createContext(null);

export function BundleProvider({ children }) {
  const steps = data.steps;
  const defaultState = buildInitialState(steps);
  const savedState = loadSaved();

  const [activeStep, setActiveStep] = useState(0);
  const [quantities, setQuantities] = useState(
    savedState?.quantities ?? defaultState.quantities
  );
  const [activeVariants, setActiveVariants] = useState(
    savedState?.activeVariants ?? defaultState.activeVariants
  );
  const [toastMsg, setToastMsg] = useState(null);

  const getQty = useCallback(
    (productId, variantId = null) => {
      const key = itemKey(productId, variantId);
      return quantities[key] ?? 0;
    },
    [quantities]
  );

  const getActiveQty = useCallback(
    (product) => {
      const vid =
        product.variants?.length > 0 ? activeVariants[product.id] : null;
      return getQty(product.id, vid);
    },
    [quantities, activeVariants, getQty]
  );

  const changeQty = useCallback((productId, variantId, delta) => {
    const key = itemKey(productId, variantId);
    setQuantities((prev) => {
      const next = Math.max(0, (prev[key] ?? 0) + delta);
      return { ...prev, [key]: next };
    });
  }, []);

  const setQtyValue = useCallback((productId, variantId, value) => {
    const key = itemKey(productId, variantId);
    setQuantities((prev) => ({ ...prev, [key]: Math.max(0, value) }));
  }, []);

  const setActiveVariant = useCallback((productId, variantId) => {
    setActiveVariants((prev) => ({ ...prev, [productId]: variantId }));
  }, []);

  const getStepSelectedCount = useCallback(
    (step) =>
      step.products.reduce((count, product) => {
        let hasAny = false;
        if (product.variants?.length > 0) {
          hasAny = product.variants.some(
            (v) => (quantities[itemKey(product.id, v.id)] ?? 0) > 0
          );
        } else {
          hasAny = (quantities[product.id] ?? 0) > 0;
        }
        return count + (hasAny ? 1 : 0);
      }, 0),
    [quantities]
  );

  const getReviewItems = useCallback(() => {
    const items = [];
    steps.forEach((step) => {
      step.products.forEach((product) => {
        if (product.variants?.length > 0) {
          product.variants.forEach((variant) => {
            const qty = quantities[itemKey(product.id, variant.id)] ?? 0;
            if (qty > 0) {
              items.push({
                key: itemKey(product.id, variant.id),
                productId: product.id,
                variantId: variant.id,
                name: product.name,
                variantLabel: variant.label,
                image: product.image,
                price: product.price,
                compareAtPrice: product.compareAtPrice,
                isFree: product.isFree,
                priceLabel: product.priceLabel,
                qty,
                stepId: step.id,
              });
            }
          });
        } else {
          const qty = quantities[product.id] ?? 0;
          if (qty > 0) {
            items.push({
              key: product.id,
              productId: product.id,
              variantId: null,
              name: product.name,
              variantLabel: null,
              image: product.image,
              price: product.price,
              compareAtPrice: product.compareAtPrice,
              isFree: product.isFree,
              priceLabel: product.priceLabel,
              qty,
              stepId: step.id,
            });
          }
        }
      });
    });
    return items;
  }, [quantities, steps]);

  const getTotals = useCallback(() => {
    const items = getReviewItems();
    const total = items.reduce((s, item) => s + item.price * item.qty, 0);
    const compareTotal = items.reduce(
      (s, item) => s + (item.compareAtPrice ?? item.price) * item.qty,
      0
    );
    const savings = compareTotal - total;
    return { total, compareTotal, savings };
  }, [getReviewItems]);

  const saveSystem = useCallback(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ quantities, activeVariants })
      );
      showToast('✓ Your system has been saved! We\'ll restore it when you return.');
    } catch {
      showToast('Unable to save — please check your browser settings.');
    }
  }, [quantities, activeVariants]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <BundleContext.Provider
      value={{
        activeStep,
        setActiveStep,
        quantities,
        activeVariants,
        getQty,
        getActiveQty,
        changeQty,
        setQtyValue,
        setActiveVariant,
        getStepSelectedCount,
        getReviewItems,
        getTotals,
        saveSystem,
        toastMsg,
        showToast,
      }}
    >
      {children}
    </BundleContext.Provider>
  );
}

export function useBundleContext() {
  const context = useContext(BundleContext);
  if (!context) {
    throw new Error('useBundleContext must be used within a BundleProvider');
  }
  return context;
}
