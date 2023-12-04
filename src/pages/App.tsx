import "@styles/app.scss";
import Header from "../components/Header";
import Welcome from "@/components/Welcome";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const asciiArt = `
      _______ _     _           _             
     |__   __| |   (_)         (_)            
        | |  | |__  _  ___ _ __ _ _ __   __ _ 
        | |  | '_ \\| |/ _ \\ '__| | '_ \\ / _\` |
        | |  | | | | |  __/ |  | | | | | (_| |
        |_|  |_| |_|_|\\___|_|  |_|_| |_|\\__, |
                                         __/ |
                                        |___/  
    `;
    console.log(asciiArt);
  }, []);

  return (
    <div className="app-container">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <Welcome />
      <Content />
      <Footer />
    </div>
  );
}
