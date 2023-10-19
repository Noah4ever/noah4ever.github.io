import Welcome from "@/components/Welcome";
import Header from "../components/Header";
import "@styles/app.scss";
import Contact from "@/components/contact";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Welcome />
      <Contact />
    </div>
  );
}
