import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { IoArrowBackOutline as BackArrow } from "react-icons/io5";
import "@styles/components/project_layout.scss";

export default function ProjectLayout() {
    return (
        <div className="project-page">
            <Header />

            <main className="project-content">
                <nav className="project-back" aria-label="Back to homepage">
                    <a href="/" className="project-back-link">
                        <BackArrow aria-hidden="true" />
                        <span>Back to portfolio</span>
                    </a>
                </nav>

                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
