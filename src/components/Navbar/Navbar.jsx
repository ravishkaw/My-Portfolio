import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt4, HiX, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

import { navLinks, profile } from "../../data";
import useTheme from "../../hooks/useTheme";
import useActiveSection from "../../hooks/useActiveSection";
import "./Navbar.css";

const sectionIds = navLinks.map((link) => link.section).filter(Boolean);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds, pathname === "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on any navigation
  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (section) => pathname === "/" && section === activeSection;

  // Navigating to the location you are already on is a no-op for the router,
  // so "Home" has to scroll back up itself.
  const handleClick = (url) => {
    if (url === "/" && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">RW</span>
          <span className="brand-name">{profile.name.split(" ")[0]}</span>
        </Link>

        <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Main">
          <ul className="nav-links">
            {navLinks.map(({ id, name, url, section }) => (
              <li key={id}>
                <Link
                  to={url}
                  className={`nav-link ${
                    isActive(section) ? "nav-link-active" : ""
                  }`}
                  aria-current={isActive(section) ? "page" : undefined}
                  onClick={() => handleClick(url)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta"
          >
            Resume
          </a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
