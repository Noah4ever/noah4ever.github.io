import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { IoArrowBackOutline as BackArrow } from "react-icons/io5";
import "@styles/components/project_layout.scss";
import { useTranslation } from "react-i18next";

export default function ProjectLayout() {
    const { t } = useTranslation();

    return (
        <div className="project-page">
            <Header />

            <main className="project-content">
                <nav className="project-back" aria-label={t("projectLayout.backAria")}>
                    <a href="/" className="project-back-link">
                        <BackArrow aria-hidden="true" />
                        <span>{t("projectLayout.backLabel")}</span>
                    </a>
                </nav>

                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
