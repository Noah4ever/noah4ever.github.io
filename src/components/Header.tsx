import "@styles/components/header.scss";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    let lastScrollTop = 0;
    const topLockThreshold = 8;
    const directionThreshold = 2;

    function handleScroll() {
      const rawScrollTop = window.scrollY || document.documentElement.scrollTop;
      const currentScrollTop = Math.max(0, rawScrollTop);

      if (headerRef.current) {
        if (currentScrollTop <= topLockThreshold) {
          headerRef.current.classList.remove("header-hide");
          lastScrollTop = currentScrollTop;
          return;
        }

        if (currentScrollTop > lastScrollTop + directionThreshold) {
          headerRef.current.classList.add("header-hide");
        } else if (currentScrollTop < lastScrollTop - directionThreshold) {
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
      <a className="header-logo" href="/#home" aria-label={t("header.logoAria")}>
        <span className="header-logo-around">{"{"}</span>
        <span className="header-logo-center">T</span>
        <span className="header-logo-around">{"}"}</span>
      </a>
      <div className="header-controls">
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
    </header>
  );
}
