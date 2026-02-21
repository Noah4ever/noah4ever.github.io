import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/custom_party_app.scss";
import {
  IoSparklesOutline as PartyIcon,
  IoPeopleOutline as PartnerIcon,
  IoHelpCircleOutline as QuizIcon,
  IoImagesOutline as GalleryIcon,
  IoPhonePortraitOutline as MobileIcon,
} from "react-icons/io5";

export default function CustomPartyApp() {
  return (
    <>
      <section
        className="custom-party-hero"
        aria-labelledby="custom-party-title"
      >
        <div className="custom-party-hero-icon" aria-hidden="true">
          <PartyIcon />
        </div>
        <h1 id="custom-party-title">Custom Party App</h1>
        <p className="custom-party-tagline">
          A custom party app we built for my father-in-law&apos;s 49th birthday.
        </p>
      </section>

      <section
        className="project-section"
        aria-labelledby="custom-party-story-heading"
      >
        <h2 id="custom-party-story-heading">What it is</h2>
        <p>
          This app was designed for one event: guests open a single link and get
          access to interactive activities. The goal was to make the party feel
          personal and playful, and to get everyone involved. Also because
          everybody got a "random" partner, it encouraged people to talk to
          others they did not know well.
        </p>
      </section>

      <section
        className="project-section"
        aria-labelledby="custom-party-features-heading"
      >
        <h2 id="custom-party-features-heading">Main features</h2>
        <ul className="custom-party-feature-list" role="list">
          <li>
            <span aria-hidden="true">
              <PartnerIcon />
            </span>
            <div>
              <strong>Find your partner game</strong>
              <p>
                Guests solve clues and match with their assigned partner for the
                next activity.
              </p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <QuizIcon />
            </span>
            <div>
              <strong>Birthday quiz</strong>
              <p>A quiz focused on fun facts and stories about him.</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <GalleryIcon />
            </span>
            <div>
              <strong>Shared photo gallery</strong>
              <p>Everyone can upload and browse party photos in one place.</p>
            </div>
          </li>
        </ul>
      </section>

      <section
        className="project-section"
        aria-labelledby="custom-party-tech-heading"
      >
        <h2 id="custom-party-tech-heading">Tech</h2>
        <div className="custom-party-tech-card">
          <div className="custom-party-tech-icon" aria-hidden="true">
            <MobileIcon />
          </div>
          <p>
            Built with React Native + TypeScript to make the experience smooth
            on phones and fast to ship for a one-time event.
          </p>
        </div>
      </section>

      <section
        className="custom-party-image"
        aria-labelledby="custom-party-image-heading"
      >
        <h2 id="custom-party-image-heading" className="sr-only">
          Custom Party App screenshot
        </h2>
        <figure>
          <ImageBorder
            src="/Projects/party-landingpage.png"
            alt="Custom Party App landing page"
            frame="safari"
          />
          <figcaption>Landing page</figcaption>
        </figure>
      </section>
    </>
  );
}
