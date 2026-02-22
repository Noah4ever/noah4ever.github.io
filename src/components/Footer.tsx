import "@styles/components/footer.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-title">
        <a className="footer-logo" href="#top">
          <span className="footer-logo-around">{"{"}</span>
          <span className="footer-logo-center">T</span>
          <span className="footer-logo-around">{"}"}</span>
        </a>
      </div>
      <div className="footer-copyright">{t("footer.copyright", { year: new Date().getFullYear() })}</div>
    </footer>
  );
}
