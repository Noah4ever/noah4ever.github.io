import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/custom_party_app.scss";
import {
  IoSparklesOutline as PartyIcon,
  IoPeopleOutline as PartnerIcon,
  IoHelpCircleOutline as QuizIcon,
  IoImagesOutline as GalleryIcon,
  IoPhonePortraitOutline as MobileIcon,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function CustomPartyApp() {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="custom-party-hero"
        aria-labelledby="custom-party-title"
      >
        <div className="custom-party-hero-icon" aria-hidden="true">
          <PartyIcon />
        </div>
        <h1 id="custom-party-title">{t("customParty.hero.title")}</h1>
        <p className="custom-party-tagline">
          {t("customParty.hero.tagline")}
        </p>
      </section>

      <section
        className="project-section"
        aria-labelledby="custom-party-story-heading"
      >
        <h2 id="custom-party-story-heading">{t("customParty.sections.whatTitle")}</h2>
        <p>{t("customParty.sections.whatText")}</p>
      </section>

      <section
        className="project-section"
        aria-labelledby="custom-party-features-heading"
      >
        <h2 id="custom-party-features-heading">{t("customParty.sections.featuresTitle")}</h2>
        <ul className="custom-party-feature-list" role="list">
          <li>
            <span aria-hidden="true">
              <PartnerIcon />
            </span>
            <div>
              <strong>{t("customParty.features.partnerTitle")}</strong>
              <p>{t("customParty.features.partnerText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <QuizIcon />
            </span>
            <div>
              <strong>{t("customParty.features.quizTitle")}</strong>
              <p>{t("customParty.features.quizText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <GalleryIcon />
            </span>
            <div>
              <strong>{t("customParty.features.galleryTitle")}</strong>
              <p>{t("customParty.features.galleryText")}</p>
            </div>
          </li>
        </ul>
      </section>

      <section
        className="project-section"
        aria-labelledby="custom-party-tech-heading"
      >
        <h2 id="custom-party-tech-heading">{t("customParty.sections.techTitle")}</h2>
        <div className="custom-party-tech-card">
          <div className="custom-party-tech-icon" aria-hidden="true">
            <MobileIcon />
          </div>
          <p>{t("customParty.tech.text")}</p>
        </div>
      </section>

      <section
        className="custom-party-image"
        aria-labelledby="custom-party-image-heading"
      >
        <h2 id="custom-party-image-heading" className="sr-only">
          {t("customParty.sections.screenshotTitle")}
        </h2>
        <figure>
          <ImageBorder
            src="/Projects/party-landingpage.png"
            alt={t("customParty.image.alt")}
            frame="safari"
          />
          <figcaption>{t("customParty.image.caption")}</figcaption>
        </figure>
      </section>
    </>
  );
}
