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
  const { pathname, hash, key, state } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const cameFromAnotherRoute = previousPath.current !== pathname;
    previousPath.current = pathname;

    // A section handed over by SectionLink when arriving from another route.
    // It travels in router state rather than the URL so the address bar stays
    // clean; the fragment below still works for links opened from outside.
    const target = state?.scrollTo
      ? `#${state.scrollTo}`
      : hash || null;

    if (!target || target === "#home") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // The target may not be mounted yet when the route has just changed, so
    // retry briefly. Timers are used rather than requestAnimationFrame, which
    // is throttled in background tabs and would leave the scroll pending.
    let timer;
    let attempts = 0;

    const scrollToTarget = () => {
      let element = null;
      try {
        element = document.querySelector(target);
      } catch {
        // A malformed fragment is not a valid selector - treat it as no target.
      }

      if (element) {
        element.scrollIntoView({
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
  }, [pathname, hash, key, state]);

  return null;
};

export default ScrollManager;
