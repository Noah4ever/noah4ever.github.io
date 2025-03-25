import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Navigationbar from "@/components/NavigationBar";
import "@styles/pages/new_home.scss";
import { useEffect, useState } from "react";
import { IoLogoGithub as Github } from "react-icons/io5";
import { IoLogoLinkedin as LinkedIn } from "react-icons/io5";
import { IoMailOutline as EMail } from "react-icons/io5";
import { IoArrowDownOutline as Arrow } from "react-icons/io5";
import { IoArrowDownCircleOutline as ScrollDownArrow } from "react-icons/io5";

export default function NewHome() {
  window.onmouseup = (event) => event.preventDefault();

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

  const handleSkillClick = (skillName: string, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const existingClickedClassOut = document.querySelectorAll(".skill-clicked-out");
    if (existingClickedClassOut) {
      existingClickedClassOut.forEach((element) => {
        element.classList.remove("skill-clicked-out");
      });
    }
    const existingClickedClassIn = document.querySelectorAll(".skill-clicked-in");
    if (existingClickedClassIn) {
      existingClickedClassIn.forEach((element) => {
        element.classList.remove("skill-clicked-in");
      });
    }
    // If not active, animate it to the center with a flip.
    if (activeSkill !== skillName) {
      const rect = e.currentTarget.getBoundingClientRect();

      const descriptionElement = document.getElementById(`skill-description-${skillName}`);
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
      const liElement = document.getElementById(`skill-${skillName}`);
      if (liElement) {
        const rect = liElement.getBoundingClientRect();
        const descriptionElement = document.getElementById(`skill-description-${skillName}`);
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
    }
  };

  const skills = [
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description:
        "Back in 2021, during my apprenticeship, a friend introduced me to TypeScript. Before that, I was working with JavaScript and PHP, skills I picked up during my IT assistant training from 2019 to 2021. Once I started using TypeScript, I was hooked and have incorporated it into both personal and professional projects ever since.",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description:
        "I was introduced to ReactJS in 2021. Prior to this, I had experimented with EJS, a templating engine that allows embedding JavaScript code within HTML templates . While EJS served its purpose, discovering React's component-based architecture was a game-changer for me. I quickly fell in love with building dynamic and responsive user interfaces using React. Although I also explored Angular for a work project, I found that React's flexibility and simplicity resonated more with my development style. Despite Angular's robust features, my heart lies with React.​",
    },
    {
      name: "SCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      description:
        "Although I had heard about SCSS earlier, it wasn't until 2022 that I decided to give it a try. Once I did, I fell in love with its features. Since then, SCSS has been my go-to for styling in every project. Prior to that, I was using standard CSS, a skill I developed during my IT assistant training.",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description:
        "In 2022, I ventured into Node.js to write my first REST API. This experience opened up new possibilities, and I've since used Node.js for various small side projects. I also experimented with Bun, which I found quite enjoyable.",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description:
        'My first attempt at learning Python was in 2018, but due to school commitments, I couldn\'t stick with it. A few years later, in 2022, I revisited Python and delved deeper. This renewed interest led me to develop a Blender plugin called "Node Runner", which facilitates importing and exporting shader nodes using text. ',
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      description:
        "During my initial IT assistant training between 2019 and 2021, C++ was the first programming language I learned. I used it to create console applications back then and later applied it at work in combination with Qt Widgets. Nowadays, I don't use C++ as often, as my focus has shifted towards web technologies.",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description:
        "I've been using Git for a long time; it's my go-to version control system for any kind of project. Its reliability and efficiency make it an indispensable tool in my development workflow.",
    },
    {
      name: "Blender",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      description:
        'I started actively using Blender in 2022 and quickly became enamored with the creative process of 3D modeling. This passion led me to develop the "Node Runner" plugin for shader nodes, enhancing my workflow within Blender. ',
    },
  ];

  return (
    <div className="home-container">
      <Header />
      {/* <Navigationbar /> */}
      <section id="home">
        <div className="home-top-container">
          <div className="home-picture-container">
            <div className="home-picture-blob">
              <div className="home-picture-text">
                that's me
                <div className="home-picture-text-arrow">
                  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <svg className="home-picture-svg-blob" viewBox="20 20 150 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blob-gradient">
                    <stop offset="19%" stopColor="var(--color-picture-blob-2)" />
                    <stop offset="84%" stopColor="var(--color-picture-blob-1)" />
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
                  transform=""
                  clipPath="url(#blob-clip)"
                  href="/Noah.png"
                  x={15}
                  y={50}
                  width="150"
                  height="150"
                />
              </svg>
            </div>
          </div>
          <div className="home-welcome">
            <div className="home-welcome-1">Hey, I'm</div>
            <div className="home-welcome-name">Noah Thiering</div>
            <div className="home-welcome-sub">
              a <u>Software Developer</u>
            </div>
          </div>
        </div>

        <section id="links">
          <ul>
            <li>
              <a href="https://github.com/Noah4ever">
                <Github />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://de.linkedin.com/in/noah-thiering">
                <LinkedIn />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:noah.thiering@gmail.com">
                <EMail />
                E-Mail
              </a>
            </li>
            <li>
              <a href="#about">
                <Arrow />
                About me
              </a>
            </li>
          </ul>
        </section>

        <div id="scroll-down-container" style={{ opacity, transition: "opacity 0.3s ease" }}>
          <a href="#about">
            <ScrollDownArrow />
            Scroll down
          </a>
        </div>
      </section>

      <section id="about">
        <h2>About me</h2>
        <p></p>
        <div className="about-container blur-container">
          <h3>Personal</h3>
          <p>
            I have been developing my skills since 2021, after completing my initial training. I specialize in web
            development using TypeScript and React ⚛️. I'm passionate about finding innovative solutions for any
            project! 💻🔧
          </p>
        </div>
        <div className="about-container skills-container">
          <h3>Skills</h3>
          <div className="skill-subtitle-container">
            <div className="skill-subtitle-text">Click on a skill to learn more</div>
          </div>
          <ul>
            {skills.map((skill) => (
              <li key={skill.name} id={`skill-${skill.name}`} onClick={(e) => handleSkillClick(skill.name, e)}>
                {/* Wrap the card in a container with perspective */}
                <div className="card-container">
                  <div
                    className={`skill-inner-container ${activeSkill === skill.name ? "active" : ""}`}
                    style={activeSkill === skill.name ? activeStyle : {}}>
                    <div className="card-face">
                      <div className="card-thumbnail">
                        <img src={skill.icon} alt={`${skill.name} icon`} />
                        <span>{skill.name}</span>
                      </div>
                      <div className="card-description" id={`skill-description-${skill.name}`}>
                        {skill.description}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
