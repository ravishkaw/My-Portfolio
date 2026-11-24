import { useEffect } from "react";

/**
 * Adds `is-visible` to every `.reveal` element once it scrolls into view,
 * with a clean, GPU-friendly stagger delay for sibling items.
 * Zero continuous scroll or mousemove listeners so scrolling stays 60fps+ butter-smooth.
 */
const useReveal = (deps = []) => {
  useEffect(() => {
    const staggerGroups = document.querySelectorAll(
      ".about-highlights, .about-focus-grid, .timeline, .skills-grid, .projects-grid, .contact-list"
    );
    staggerGroups.forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        child.style.setProperty(
          "--reveal-delay",
          `${Math.min(index * 70, 320)}ms`
        );
      });
    });

    const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!nodes.length) return;

    const showAll = () => nodes.forEach((n) => n.classList.add("is-visible"));

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
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    const fallback = setTimeout(showAll, 4000);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useReveal;
