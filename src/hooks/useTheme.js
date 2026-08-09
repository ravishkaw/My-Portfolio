import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  // The inline script in index.html resolves this before first paint.
  const attr = document.documentElement.dataset.theme;
  return attr === "dark" ? "dark" : "light";
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#08080c" : "#fbfbfd";

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage may be unavailable — the theme still applies for this visit */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggleTheme };
};

export default useTheme;
