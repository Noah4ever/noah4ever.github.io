import Header from "@/components/Header";
import Navigationbar from "@/components/NavigationBar";
import "@styles/pages/home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Navigationbar />
      <section id="home">
        <section className="home-picture-container">
          <div className="home-picture-blob">
            <svg className="home-picture-svg-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blob-gradient">
                  <stop offset="19%" stopColor="rgba(21, 228, 146, 1)" />
                  <stop offset="84%" stopColor="rgba(19, 81, 221, 1)" />
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

              <image transform="" clipPath="url(#blob-clip)" href="/Noah.png" x={15} y={50} width="150" height="150" />
            </svg>
          </div>
        </section>
        <section className="home-welcome">
          <div className="home-welcome-1">Hey, I'm</div>
          <div className="home-welcome-name">Noah Thiering</div>
        </section>
      </section>

      {/* 3D Model */}
      <section id="about" className="home-content-section">
        <h2>About</h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perspiciatis magni minima aspernatur, quo
        sed impedit temporibus adipisci fugiat esse sapiente? Dolorum quos culpa accusantium animi beatae earum, dolorem
        deleniti!
      </section>
      <section id="projects" className="home-content-section">
        <h2>Projects</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias dolore, rem ex dolorum rerum ratione
        quae laboriosam commodi eius labore possimus ea accusamus voluptatum obcaecati dolores nostrum libero sunt!
        Doloremque deleniti at, explicabo unde officia quos placeat maxime laboriosam quidem distinctio voluptatibus
        illo sit iste porro quae. Placeat obcaecati doloribus, assumenda porro quibusdam nulla nihil voluptatum ex
        distinctio reiciendis! Cum ipsa, ipsam neque, corrupti eius quibusdam enim a nobis autem ea consectetur dolores
        eos fugit libero asperiores molestias explicabo mollitia. Aut sapiente facilis quasi atque. Mollitia ipsa alias
        dolores!
      </section>
      <section id="contact" className="home-content-section">
        <h2>Contact</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat minima, hic minus quas nemo, libero cum
        distinctio aut eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptate corrupti nulla
        possimus deserunt velit sit neque, aliquam ipsum nam hic tempora. Atque inventore aliquam eum itaque possimus
        commodi natus? reprehenderit culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius quibusdam
        molestiae odio eum minima quam modi soluta a nesciunt voluptatem porro non omnis, rem nobis possimus commodi!
        Assumenda, voluptates! ipsum facilis nam temporibus inventore, consequatur quibusdam eum!
      </section>
    </div>
  );
}
