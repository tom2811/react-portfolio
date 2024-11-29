import { useRef, useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';

/**
 * Custom hook for handling page scroll animations
 * @param {boolean} once - Whether animation should only trigger once
 * @param {number} amount - Visibility threshold to trigger animation
 * @param {boolean} resetOnLeave - Whether to reset animation when element leaves viewport
 */
export const usePageAnimation = (once = true, amount = 0.3, resetOnLeave = false) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else if (resetOnLeave) {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, resetOnLeave]);

  return { ref, isInView, mainControls };
}; 