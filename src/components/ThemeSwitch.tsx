import { useThemeStore } from "@/stores/ThemeStore";
import "@styles/components/theme_switch.scss";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { IoSunnyOutline as Sun, IoMoonOutline as Moon } from "react-icons/io5";

export default function ThemeSwitch() {
  const theme = useThemeStore((state) => state.theme);
  const { t } = useTranslation();

  const toggleTheme = () => {
    useThemeStore.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

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
