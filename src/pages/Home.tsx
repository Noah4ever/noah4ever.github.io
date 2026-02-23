import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCardLink from "@/components/ProjectCardLink";
import "@styles/pages/home.scss";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { IoLogoGithub as Github } from "react-icons/io5";
import { IoLogoLinkedin as LinkedIn } from "react-icons/io5";
import { IoMailOutline as EMail } from "react-icons/io5";
import { IoArrowDownOutline as Arrow } from "react-icons/io5";
import { IoArrowDownCircleOutline as ScrollDownArrow } from "react-icons/io5";

export default function Home() {
  const { t } = useTranslation();

  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      // 50% of the viewport height as the threshold
      const fadeThreshold = window.innerHeight * 0.3;
      const scrollY = window.scrollY;
      // Calculate the new opacity: fade to 0 when scrollY >= fadeThreshold
      let newOpacity = 1 - scrollY / fadeThreshold;
      newOpacity = Math.max(0, Math.min(1, newOpacity));
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeStyle, setActiveStyle] = useState<React.CSSProperties>({});
  const transitionDuration = 400; // in ms

  const handleSkillClick = (
    skillName: string,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    removeClickedClasses();
    // If not active, animate it to the center with a flip.
    if (activeSkill !== skillName) {
      const rect = e.currentTarget.getBoundingClientRect();

      const descriptionElement = document.getElementById(
        `skill-description-${skillName}`,
      );
      if (descriptionElement) {
        descriptionElement.classList.add("skill-clicked-in");
      }
      // Set the card’s fixed starting position.
      setActiveStyle({
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        transform: "none",
        zIndex: 1000,
      });
      setActiveSkill(skillName);
      // Next frame: animate to center and flip.
      requestAnimationFrame(() => {
        setActiveStyle({
          position: "fixed",
          top: "50%",
          left: "50%",
          width: window.innerWidth / 1.2,
          height: window.innerHeight / 2,
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
        });
      });
    } else {
      // Closing: animate the card back to its grid position.
      closeActiveSkill();
    }
  };

  function removeClickedClasses() {
    const classes = ["skill-clicked-out", "skill-clicked-in"];
    classes.forEach((className) => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        element.classList.remove(className);
      });
    });
  }

  // Close active skill with an animation back to its grid position.
  const closeActiveSkill = () => {
    removeClickedClasses();
    if (!activeSkill) return;
    const liElement = document.getElementById(`skill-${activeSkill}`);
    if (liElement) {
      const rect = liElement.getBoundingClientRect();
      const descriptionElement = document.getElementById(
        `skill-description-${activeSkill}`,
      );
      if (descriptionElement) {
        descriptionElement.classList.add("skill-clicked-out");
      }
      setActiveStyle({
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        zIndex: 1000,
      });
      setTimeout(() => {
        setActiveSkill(null);
        setActiveStyle({});
      }, transitionDuration);
    }
  };

  const skills = [
    {
      key: "typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      key: "react",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      key: "scss",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      key: "nodejs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      key: "python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      key: "cpp",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      key: "git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      key: "blender",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    },
  ];

  return (
    <div className="home-container" id="home">
      <Header />
      {/* <Navigationbar /> */}
      <main id="home-content" role="main">
        <div className="home-top-container">
          <div className="home-picture-container">
            <div className="home-picture-blob">
              <div className="home-picture-text">
                {t("home.hero.meLabel")}
                <div className="home-picture-text-arrow">
                  <svg
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35 262C160.529 140.938 328.006 207.285 361 215.518"
                      stroke="var(--color-text-invert)"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M343.69 143C355.23 190.289 361 214.681 361 216.177C361 218.421 327.488 234.13 312 258"
                      stroke="var(--color-text-invert)"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <svg
                className="home-picture-svg-blob"
                viewBox="20 20 150 150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="blob-gradient">
                    <stop
                      offset="19%"
                      stopColor="var(--color-picture-blob-2)"
                    />
                    <stop
                      offset="84%"
                      stopColor="var(--color-picture-blob-1)"
                    />
                  </linearGradient>
                  <clipPath id="blob-clip">
                    <path
                      fill="url(#blob-gradient)"
                      d="M28.3,-50.1C39.7,-42.5,53.9,-40.9,62.6,-33.6C71.3,-26.2,74.5,-13.1,72.6,-1.1C70.8,11,63.9,22,55.4,29.6C46.8,37.2,36.6,41.4,27.1,51.1C17.6,60.8,8.8,75.9,-2.4,80.1C-13.6,84.3,-27.3,77.6,-35,66.9C-42.8,56.2,-44.7,41.6,-50.1,29.8C-55.5,18,-64.4,9,-67.6,-1.9C-70.9,-12.7,-68.4,-25.4,-59.5,-31.1C-50.6,-36.9,-35.2,-35.6,-24.2,-43.4C-13.3,-51.2,-6.6,-67.9,0.9,-69.5C8.5,-71.1,17,-57.6,28.3,-50.1Z"
                      transform="translate(100 100) rotate(200, 0 ,0)"
                    />
                  </clipPath>
                </defs>

                <path
                  fill="url(#blob-gradient)"
                  d="M28.3,-50.1C39.7,-42.5,53.9,-40.9,62.6,-33.6C71.3,-26.2,74.5,-13.1,72.6,-1.1C70.8,11,63.9,22,55.4,29.6C46.8,37.2,36.6,41.4,27.1,51.1C17.6,60.8,8.8,75.9,-2.4,80.1C-13.6,84.3,-27.3,77.6,-35,66.9C-42.8,56.2,-44.7,41.6,-50.1,29.8C-55.5,18,-64.4,9,-67.6,-1.9C-70.9,-12.7,-68.4,-25.4,-59.5,-31.1C-50.6,-36.9,-35.2,-35.6,-24.2,-43.4C-13.3,-51.2,-6.6,-67.9,0.9,-69.5C8.5,-71.1,17,-57.6,28.3,-50.1Z"
                  transform="translate(100 100) rotate(200, 0 ,0)"
                />

                <image
                  clipPath="url(#blob-clip)"
                  href="/Noah-900.webp"
                  x={15}
                  y={50}
                  width="150"
                  height="150"
                  preserveAspectRatio="xMidYMid meet"
                />
              </svg>
            </div>
          </div>
          <div className="home-welcome">
            <div className="home-welcome-1">{t("home.hero.greeting")}</div>
            <div className="home-welcome-name">{t("home.hero.name")}</div>
            <div className="home-welcome-sub">
              {t("home.hero.rolePrefix")} <u>{t("home.hero.role")}</u>
            </div>
          </div>
        </div>

        <nav id="links" role="navigation" aria-label="Page links">
          <ul>
            <li>
              <a href="https://github.com/Noah4ever">
                <Github />
                {t("home.links.github")}
              </a>
            </li>
            <li>
              <a href="https://de.linkedin.com/in/noah-thiering">
                <LinkedIn />
                {t("home.links.linkedin")}
              </a>
            </li>
            <li>
              <a href="mailto:noah@thiering.org">
                <EMail />
                {t("home.links.email")}
              </a>
            </li>
            <li>
              <a href="#about">
                <Arrow />
                {t("home.links.about")}
              </a>
            </li>
          </ul>
        </nav>

        <div
          id="scroll-down-container"
          style={{ opacity, transition: "opacity 0.3s ease" }}
        >
          <a href="#about">
            <ScrollDownArrow />
            {t("home.scroll.label")}
          </a>
        </div>
      </main>

      <section id="about">
        <h2>{t("home.about.title")}</h2>
        <div className="about-container blur-container">
          <h3>{t("home.about.personalTitle")}</h3>
          <p>
            <Trans
              i18nKey="home.about.personalText"
              components={[
                <a
                  href="https://www.uni-bremen.de/en/"
                  key="university-link"
                />,
              ]}
            />
          </p>
        </div>
        <div className="about-container skills-container">
          <h3>{t("home.about.skillsTitle")}</h3>
          <div className="skill-subtitle-container">
            <div className="skill-subtitle-text">
              {t("home.about.skillsSubtitle")}
            </div>
          </div>
          <ul>
            {skills.map((skill) => (
              <li
                key={skill.key}
                id={`skill-${skill.key}`}
                onClick={(e) => handleSkillClick(skill.key, e)}
              >
                {/* Wrap the card in a container with perspective */}
                <div className="card-container">
                  <div
                    className={`skill-inner-container ${activeSkill === skill.key ? "active" : ""}`}
                    style={activeSkill === skill.key ? activeStyle : {}}
                  >
                    <div className="card-face">
                      <div className="card-thumbnail">
                        <img
                          src={skill.icon}
                          alt={t("home.skills.iconAlt", {
                            skill: t(`home.skills.items.${skill.key}.name`),
                          })}
                          loading="lazy"
                          decoding="async"
                        />
                        <span>{t(`home.skills.items.${skill.key}.name`)}</span>
                      </div>
                      <div
                        className="card-description"
                        id={`skill-description-${skill.key}`}
                      >
                        {t(`home.skills.items.${skill.key}.description`)}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <section
          className="about-container projects-container"
          aria-labelledby="projects-heading"
        >
          <h3 id="projects-heading">{t("home.about.projectsTitle")}</h3>
          <ul className="projects-list" role="list">
            <li>
              <ProjectCardLink
                title={t("home.projects.giftboard.title")}
                description={t("home.projects.giftboard.description")}
                imageSrc="/Projects/giftboard-hero.webp"
                href="/projects/giftboard"
                ariaLabel={t("home.projects.giftboard.aria")}
                imageAlt={t("home.projects.giftboard.imageAlt")}
                tags={["React", "TypeScript", "nodejs"]}
              />
            </li>

            <li>
              <ProjectCardLink
                title={t("home.projects.customParty.title")}
                description={t("home.projects.customParty.description")}
                imageSrc="/Projects/party-landingpage.webp"
                href="/projects/custom-party-app"
                ariaLabel={t("home.projects.customParty.aria")}
                imageAlt={t("home.projects.customParty.imageAlt")}
                tags={["React Native", "TypeScript", "nodejs"]}
              />
            </li>
          </ul>
        </section>
      </section>

      {/* Overlay that darkens the background when a skill is active */}
      {activeSkill && (
        <div className="popup-overlay" onClick={closeActiveSkill}></div>
      )}

      <Footer />
    </div>
  );
}
