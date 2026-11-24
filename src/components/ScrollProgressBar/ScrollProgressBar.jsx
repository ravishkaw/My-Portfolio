import { useEffect, useState } from "react";
import "./ScrollProgressBar.css";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrolled)));
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div
        className="scroll-progress-fill"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
