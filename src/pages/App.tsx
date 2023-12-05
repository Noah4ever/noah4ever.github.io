import "@styles/app.scss";
import Welcome from "@/components/Welcome";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import ScrollToHashElement from "@/utils/ScrollToHashElement";

export default function App() {
  return (
    <div className="app-container">
      <ScrollToHashElement />
      <Welcome />
      <Content />
      <Footer />
    </div>
  );
}
