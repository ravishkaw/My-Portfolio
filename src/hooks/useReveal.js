import { useEffect } from "react";

/**
 * Adds `is-visible` to every `.reveal` element once it scrolls into view.
 * Runs once per mount; re-runs when `deps` change so late-loading content
 * (e.g. fetched projects) also gets observed.
 */
const useReveal = (deps = []) => {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!nodes.length) return;

    const showAll = () => nodes.forEach((n) => n.classList.add("is-visible"));

    // Never let a missing/failing observer leave the page blank.
    if (typeof IntersectionObserver === "undefined") {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    // Safety net: reveal anything still hidden after a few seconds.
    const fallback = setTimeout(showAll, 4000);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useReveal;
