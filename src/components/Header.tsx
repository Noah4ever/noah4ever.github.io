import "@styles//header.scss";
import { useState } from "react";
import { HiOutlineMenuAlt3 as Menu, HiX as Close } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenuClick() {
    document.querySelector(".header-links")?.classList.toggle("open");
    setMenuOpen(!menuOpen);
  }
  function handleLinkClick() {
    document.querySelector(".header-links")?.classList.remove("open");
    setMenuOpen(false);
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
          <li onClick={handleLinkClick}>timeline</li>
          <li onClick={handleLinkClick}>about</li>
          <li onClick={handleLinkClick}>skills</li>
          <li onClick={handleLinkClick}>contact</li>
        </ul>
      </div>
    </header>
  );
}
