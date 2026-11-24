import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const RETRY_INTERVAL = 16;
const MAX_ATTEMPTS = 40;

/**
 * Owns all scroll positioning for the app:
 *  - a location with a hash scrolls that section into view
 *  - any other navigation starts at the top of the page
 *
 * Integrates directly with Lenis smooth scroll when active,
 * falling back cleanly to native browser scrolling.
 */
const ScrollManager = () => {
  const { pathname, hash, key, state } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const cameFromAnotherRoute = previousPath.current !== pathname;
    previousPath.current = pathname;

    // A section handed over by SectionLink when arriving from another route.
    const target = state?.scrollTo
      ? `#${state.scrollTo}`
      : hash || null;

    if (!target || target === "#home") {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: cameFromAnotherRoute, duration: 1.1 });
      } else {
        window.scrollTo({ top: 0, behavior: cameFromAnotherRoute ? "instant" : "smooth" });
      }
      return;
    }

    let timer;
    let attempts = 0;

    const scrollToTarget = () => {
      let element = null;
      try {
        element = document.querySelector(target);
      } catch {
        // Malformed fragment is not a valid selector - treat as no target.
      }

      if (element) {
        if (window.__lenis) {
          window.__lenis.scrollTo(element, {
            offset: -65,
            immediate: cameFromAnotherRoute,
            duration: 1.15,
          });
        } else {
          element.scrollIntoView({
            behavior: cameFromAnotherRoute ? "instant" : "smooth",
            block: "start",
          });
        }
        return;
      }

      if (attempts++ < MAX_ATTEMPTS) {
        timer = setTimeout(scrollToTarget, RETRY_INTERVAL);
        return;
      }

      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    scrollToTarget();
    return () => clearTimeout(timer);
  }, [pathname, hash, key, state]);

  return null;
};

export default ScrollManager;
