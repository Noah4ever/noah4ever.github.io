import { LocalStorageController } from "@/utils/PersistanceController";
import "@styles//header.scss";
import { useEffect, useState } from "react";
import {
  HiOutlineMenuAlt3 as Menu,
  HiX as Close,
  HiSun as Sun,
  HiOutlineMoon as Moon,
} from "react-icons/hi";

export default function Header() {
  const persistance = new LocalStorageController();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [lightMode, setLightMode] = useState<boolean>(true);

  useEffect(() => {
    if (persistance.load("color-scheme") === "dark") {
      document.body.classList.add("dark");
      setLightMode(false);
    }
  }, []);

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

      // Set a timeout to remove the 'closing' class from the menu links element and all of its `li` children, and to close the menu.
      setTimeout(() => {
        menuLinks.classList.remove("closing");
        menuLinks
          .querySelectorAll("li")
          .forEach((li) => li.classList.remove("closing"));
        menuLinks.classList.remove("open");
        setMenuOpen(!menuOpen);
      }, 250);
    } else {
      // Open the menu.
      menuLinks.classList.add("open");
      setMenuOpen(!menuOpen);
    }
  }

  function handleLightMode() {
    document.body.classList.toggle("dark");
    setLightMode(!lightMode);
    persistance.save("color-scheme", lightMode ? "dark" : "light");
  }

  return (
    <header className="header-container">
      <div className="header-logo-container">
        <div className="header-logo-name-container">
          <h1 className="header-logo-name lastname">Thiering</h1>
        </div>
      </div>

      <div className="header-links-container">
        {menuOpen ? (
          <Close className="header-link-menu" onClick={handleMenuClick} />
        ) : (
          <Menu className="header-link-menu" onClick={handleMenuClick} />
        )}
        <ul className="header-links">
          <li onClick={handleMenuClick}>timeline</li>
          <li onClick={handleMenuClick}>about</li>
          <li onClick={handleMenuClick}>skills</li>
          <li onClick={handleMenuClick}>contact</li>
          <li onClick={handleLightMode}>
            <div className="header-links-theme-change">
              {lightMode ? <Moon /> : <Sun />}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
