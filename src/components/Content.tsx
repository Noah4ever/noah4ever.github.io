import "@styles/content.scss";
import Contact from "@components/Contact";
import { useEffect } from "react";

export default function Content() {
  function copyURL(id: string) {
    const url = window.location.origin + "/#" + id;
    navigator.clipboard.writeText(url);
  }

  useEffect(() => {
    const ids = ["timeline", "about", "skills", "contact"];
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener("click", () => copyURL(id));
      }
    });
  }, []);

  return (
    <div className="content-container">
      <div className="content content-timeline-container">
        <h2 id="timeline">🚧 timeline 👷</h2>
        <p>🦺 Under construction!</p>
      </div>
      <div className="content content-biography-container">
        <h2 id="about">🔎 about</h2>
        <p>
          I have been developing my skills since 2021, after completing my
          initial training. I specialize in web development using TypeScript and
          React ⚛️. I'm passionate about finding innovative solutions for any
          project! 💻🔧
        </p>
      </div>
      <div className="content content-skills-container">
        <h2 id="skills">🚧 skills 👷</h2>
        <p>🦺 Under construction!</p>
      </div>
      <div className="content content-contact-container">
        <h2 id="contact">📧 contact</h2>
        <Contact />
      </div>
    </div>
  );
}
