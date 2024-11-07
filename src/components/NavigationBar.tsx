import "@styles/components/navigation_bar.scss";
import { useEffect } from "react";

// Icons
import { IoHomeOutline as Home } from "react-icons/io5";
import { IoManOutline as About } from "react-icons/io5";
import { IoTerminalOutline as Projects } from "react-icons/io5";
import { IoChatbubbleOutline as Contact } from "react-icons/io5";

export default function Navigationbar() {
  useEffect(() => {
    const navigationItems = document.querySelectorAll<HTMLLIElement>(".navigation-item");
    const navigationLinks = document.querySelectorAll<HTMLAnchorElement>(".navigation-link");

    const handleScroll = () => {
      const scrollTop = window.scrollY + 1;

      let current: string = "";
      navigationLinks.forEach((link) => {
        const section = document.querySelector<HTMLElement>(link.hash);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          // if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) { // <- If you want to highlight the link only when the section is fully visible. Then there will be parts where there is no active link.
          if (scrollTop >= sectionTop) {
            const sectionScrollProgress = ((scrollTop - sectionTop) / sectionHeight) * 100;

            const boundedProgress = Math.min(Math.max(sectionScrollProgress, 0), 100);

            const linkName = link.querySelector(".active > .navigation-link-name") as HTMLElement;
            if (linkName) {
              linkName.style.setProperty("--progress-width", `${boundedProgress}%`);
            }
            current = link.hash;
          }
        }
      });

      navigationItems.forEach((item) => {
        const link = item.querySelector<HTMLAnchorElement>("a")!;
        link.classList.toggle("active", link.hash === current);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        <li className="navigation-item">
          <a href="#home" className="navigation-link active" aria-label="Jump to home section">
            <Home />
            <div className="navigation-link-name">Home</div>
          </a>
        </li>
        <li className="navigation-item">
          <a href="#about" className="navigation-link" aria-label="Jump to about me section">
            <About />
            <div className="navigation-link-name">About</div>
          </a>
        </li>
        <li className="navigation-item">
          <a href="#projects" className="navigation-link" aria-label="Jump to my projects section">
            <Projects />
            <div className="navigation-link-name">Projects</div>
          </a>
        </li>
        <li className="navigation-item">
          <a href="#contact" className="navigation-link" aria-label="Jump to contact section">
            <Contact />
            <div className="navigation-link-name">Contact</div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
