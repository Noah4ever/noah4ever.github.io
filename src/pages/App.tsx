import "@styles/app.scss";
import Welcome from "@/components/Welcome";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Welcome />
      <Content />
      <Footer />
    </div>
  );
}
