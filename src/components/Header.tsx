import "@styles//header.scss";
import { LocalStorageController } from "@/utils/PersistanceController";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineMenuAlt3 as Menu,
  HiX as Close,
  HiSun as Sun,
  HiOutlineMoon as Moon,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const persistance = new LocalStorageController();

  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [lightmode, setLightMode] = useState<boolean>(false);

  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const [showLinks, setShowLinks] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  }, [location]);

  useEffect(() => {
    function handleScroll() {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollTop(currentScrollTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const applyHeaderClass = () => {
      if (headerRef.current) {
        const { classList } = headerRef.current;
        isScrollingUp
          ? classList.add("header-up")
          : classList.remove("header-up");
      }
    };

    const intervalId = setInterval(applyHeaderClass, 250);

    return () => clearInterval(intervalId);
  }, [isScrollingUp]);

  /**
   * Handles clicks on the menu button.
   */
  function handleMenuClick() {
    // Get the menu links element.
    const menuLinks = document.querySelector(".header-links");
    if (!menuLinks) return;

    // If the menu is open, close it with animation
    if (menuOpen) {
      // Add the 'closing' class to the menu links element and all of its `li` children.
      menuLinks.classList.add("closing");
      menuLinks
        .querySelectorAll("li")
        .forEach((li) => li.classList.add("closing"));

      setMenuOpen(!menuOpen);
      // Set a timeout to remove the 'closing' class from the menu links element and all of its `li` children, and to close the menu.
      setTimeout(() => {
        menuLinks.classList.remove("closing");
        menuLinks
          .querySelectorAll("li")
          .forEach((li) => li.classList.remove("closing"));
        menuLinks.classList.remove("open");
      }, 250);
    } else {
      // Open the menu.
      menuLinks.classList.add("open");
      setMenuOpen(!menuOpen);
    }
  }

  function handleLightMode() {
    document.body.classList.toggle("light");
    const colorScheme = persistance.load("color-scheme");
    persistance.save(
      "color-scheme",
      colorScheme === "light" ? "dark" : "light"
    );
    setLightMode(!lightmode);
  }

  return (
    <header className="header-container" ref={headerRef}>
      <div className="header-logo-container">
        <div className="header-logo-name-container">
          <Link className="header-logo-name lastname" to={"/"}>
            Thiering
          </Link>
        </div>
      </div>

      <div className="header-links-container">
        <button
          className="header-link-menu-button"
          id="main"
          onClick={handleMenuClick}
          aria-label="On mobile open menu with links to other sections"
        >
          {menuOpen ? (
            <Close className="header-link-menu" />
          ) : (
            <Menu className="header-link-menu" />
          )}
        </button>
        <ul className="header-links">
          {showLinks ? (
            <>
              <li>
                <Link to="#timeline" onClick={handleMenuClick}>
                  timeline
                </Link>
              </li>
              <li>
                <Link to="#about" onClick={handleMenuClick}>
                  about
                </Link>
              </li>
              <li>
                <Link to="#skills" onClick={handleMenuClick}>
                  skills
                </Link>
              </li>
              <li>
                <Link to="#contact" onClick={handleMenuClick}>
                  contact
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <li>
            <span
              onClick={handleLightMode}
              className="header-links-theme-change"
            >
              {persistance.load("color-scheme") == "light" ? <Moon /> : <Sun />}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
