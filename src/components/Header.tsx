import "@styles//header.scss";
import { useState } from "react";
import {
  HiOutlineMenuAlt3 as Menu,
  HiX as Close,
  HiSun as Sun,
  HiOutlineMoon as Moon,
} from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  function handleMenuClick() {
    document.querySelector(".header-links")?.classList.toggle("open");
    setMenuOpen(!menuOpen);
  }
  function handleLightMode() {
    document.querySelector("body")?.classList.toggle("dark");
    setLightMode(!lightMode);
  }

  return (
    <header className="header-container">
      <div className="header-logo-container">
        <div className="header-logo-name-container">
          <h1 className="header-logo-name lastname">thiering</h1>
          <h2 className="header-logo-name firstname">noah</h2>
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
