import "@styles/components/language_switch.scss";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n, t } = useTranslation();
  const activeLanguage = (i18n.resolvedLanguage ?? i18n.language ?? "en")
    .toLowerCase()
    .startsWith("de")
    ? "de"
    : "en";

  const setLanguage = (language: "en" | "de") => {
    if (activeLanguage !== language) {
      i18n.changeLanguage(language);
    }
  };

  function toggleLanguage() {
    const newLanguage = activeLanguage === "en" ? "de" : "en";
    document.documentElement.lang = newLanguage;
    setLanguage(newLanguage);
  }

  return (
    <div
      className={`language-switch ${activeLanguage === "de" ? "active-de" : "active-en"}`}
      role="group"
      aria-label={t("header.languageSwitchAria")}
      onClick={toggleLanguage}
    >
      <span className="language-switch-indicator" aria-hidden="true" />
      <button
        type="button"
        className={`language-switch-button ${activeLanguage === "en" ? "active" : ""}`}
        aria-pressed={activeLanguage === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={`language-switch-button ${activeLanguage === "de" ? "active" : ""}`}
        aria-pressed={activeLanguage === "de"}
      >
        DE
      </button>
    </div>
  );
}
