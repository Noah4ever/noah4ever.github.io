import { useThemeStore } from "@/stores/ThemeStore";
import "@styles/components/theme_switch.scss";
import { useEffect } from "react";

import { IoSunnyOutline as Sun, IoMoonOutline as Moon } from "react-icons/io5";

export default function ThemeSwitch() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="theme-switch-container">
      <div
        className="theme-switch"
        onClick={() => {
          useThemeStore.setState((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          }));
          document.body.dataset.theme = theme === "light" ? "dark" : "light";
        }}>
        {theme === "light" ? <Sun size={40} /> : <Moon size={40} />}
      </div>
    </div>
  );
}
