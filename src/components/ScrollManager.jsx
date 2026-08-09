import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const RETRY_INTERVAL = 16;
const MAX_ATTEMPTS = 40;

/**
 * Owns all scroll positioning for the app:
 *  - a location with a hash scrolls that section into view
 *  - any other navigation starts at the top of the page
 *
 * Arriving from another route jumps instantly (the section was never on
 * screen, so animating from the top is just a delay); moving between
 * sections of a page already in view scrolls smoothly.
 *
 * Note: "instant" is deliberate — with `scroll-behavior: smooth` set in CSS,
 * a behavior of "auto" defers to the stylesheet and animates instead.
 */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const cameFromAnotherRoute = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // The target may not be mounted yet when the route has just changed, so
    // retry briefly. Timers are used rather than requestAnimationFrame, which
    // is throttled in background tabs and would leave the scroll pending.
    let timer;
    let attempts = 0;

    const scrollToTarget = () => {
      let target = null;
      try {
        target = document.querySelector(hash);
      } catch {
        // A malformed hash is not a valid selector — treat it as no target.
      }

      if (target) {
        target.scrollIntoView({
          behavior: cameFromAnotherRoute ? "instant" : "smooth",
          block: "start",
        });
        return;
      }

      if (attempts++ < MAX_ATTEMPTS) {
        timer = setTimeout(scrollToTarget, RETRY_INTERVAL);
        return;
      }

      window.scrollTo({ top: 0, behavior: "instant" });
    };

    scrollToTarget();
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
