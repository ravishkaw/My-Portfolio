import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view so the navbar can highlight it.
 * Pass `enabled: false` on routes that have no sections.
 */
const useActiveSection = (ids, enabled = true) => {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? active : "";
};

export default useActiveSection;
