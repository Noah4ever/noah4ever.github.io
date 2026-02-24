import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { IoArrowBackOutline as BackArrow, IoArrowUpOutline as UpArrow } from "react-icons/io5";
import "@styles/components/project_layout.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ProjectLayout() {
    const { t } = useTranslation();
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.6);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="project-page">
            <Header />

            <main
                id="project-main-content"
                className="project-content"
                role="main"
                tabIndex={-1}
            >
                <nav
                    className="project-back"
                    role="navigation"
                    aria-label={t("projectLayout.backAria")}
                >
                    <a href="/" className="project-back-link">
                        <BackArrow aria-hidden="true" />
                        <span>{t("projectLayout.backLabel")}</span>
                    </a>
                </nav>

                <Outlet />
            </main>

            <button
                className={`back-to-top${showTop ? " visible" : ""}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label={t("projectLayout.backToTop")}
            >
                <UpArrow aria-hidden="true" />
            </button>

            <Footer />
        </div>
    );
}
