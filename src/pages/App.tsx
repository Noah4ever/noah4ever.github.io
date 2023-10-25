import Welcome from "@/components/Welcome";
import Header from "../components/Header";
import "@styles/app.scss";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="app-container">
      {/* Jump to main content */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <Welcome />
      <Contact />
      <Footer />
    </div>
  );
}
