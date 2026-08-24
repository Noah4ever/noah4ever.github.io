import { useThemeStore } from "@/stores/ThemeStore";
import { applyTheme, readSharedTheme, writeSharedTheme } from "@/utils/theme";
import "@styles/components/theme_switch.scss";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { IoSunnyOutline as Sun, IoMoonOutline as Moon } from "react-icons/io5";

export default function ThemeSwitch() {
  const theme = useThemeStore((state) => state.theme);
  const { t } = useTranslation();
  const initialized = useRef(false);

  const toggleTheme = () => {
    useThemeStore.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const sharedTheme = readSharedTheme();

      if (sharedTheme && sharedTheme !== theme) {
        useThemeStore.setState({ theme: sharedTheme });
        return;
      }
    }

    applyTheme(theme);
    writeSharedTheme(theme);
  }, [theme]);

  useEffect(() => {
    const syncSharedTheme = () => {
      const sharedTheme = readSharedTheme();

      if (sharedTheme && sharedTheme !== useThemeStore.getState().theme) {
        useThemeStore.setState({ theme: sharedTheme });
      }
    };

    const syncWhenVisible = () => {
      if (document.visibilityState === "visible") syncSharedTheme();
    };

    window.addEventListener("focus", syncSharedTheme);
    window.addEventListener("pageshow", syncSharedTheme);
    document.addEventListener("visibilitychange", syncWhenVisible);

    return () => {
      window.removeEventListener("focus", syncSharedTheme);
      window.removeEventListener("pageshow", syncSharedTheme);
      document.removeEventListener("visibilitychange", syncWhenVisible);
    };
  }, []);

  return (
    <div className="theme-switch-container">
      <button
        type="button"
        className="theme-switch"
        aria-label={t("header.themeSwitchAria")}
        onClick={toggleTheme}>
        {theme === "light" ? <Sun size={40} /> : <Moon size={40} />}
      </button>
    </div>
  );
}
