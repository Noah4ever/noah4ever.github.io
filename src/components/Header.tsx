import "@styles/components/header.scss";
import ThemeSwitch from "./ThemeSwitch";
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      if (headerRef.current) {
        if (currentScrollTop > lastScrollTop) {
          headerRef.current.classList.add("header-hide");
        } else {
          headerRef.current.classList.remove("header-hide");
        }
      }

      lastScrollTop = currentScrollTop;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-container" ref={headerRef}>
      <a className="header-logo" href="#home">
        <span className="header-logo-around">{"{"}</span>
        <span className="header-logo-center">T</span>
        <span className="header-logo-around">{"}"}</span>
      </a>
      <ThemeSwitch />
    </header>
  );
}
