import "@styles/app.scss";
import Header from "../components/Header";
import Welcome from "@/components/Welcome";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="app-container">
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
