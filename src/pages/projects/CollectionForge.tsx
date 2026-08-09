import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/collection_forge.scss";
import {
  IoAlbumsOutline as CardsIcon,
  IoCloudUploadOutline as ImportIcon,
  IoGameControllerOutline as BattleIcon,
  IoLogoGithub as GithubIcon,
  IoOpenOutline as LiveIcon,
  IoPrintOutline as PrintIcon,
  IoShieldCheckmarkOutline as ShieldIcon,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function CollectionForge() {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="collection-forge-hero"
        aria-labelledby="collection-forge-title"
      >
        <div className="collection-forge-hero-icon" aria-hidden="true">
          <ShieldIcon />
        </div>
        <h1 id="collection-forge-title">{t("collectionForge.hero.title")}</h1>
        <div className="project-hero-badges">
          <a
            href="https://projects.thiering.org/collection-forge/"
            className="view-live-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("collectionForge.hero.live")} <LiveIcon />
          </a>
          <a
            href="https://github.com/Noah4ever/collection-forge"
            className="view-github-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("collectionForge.hero.github")} <GithubIcon />
          </a>
        </div>
        <ul className="project-hero-tags">
          <li>Angular</li>
          <li>Spring Boot</li>
          <li>PostgreSQL</li>
          <li>Playwright</li>
        </ul>
        <p className="collection-forge-tagline">
          {t("collectionForge.hero.tagline")}
        </p>
      </section>

      <section
        className="project-section"
        aria-labelledby="collection-forge-why-heading"
      >
        <h2 id="collection-forge-why-heading">
          {t("collectionForge.sections.whyTitle")}
        </h2>
        <p>{t("collectionForge.sections.whyText")}</p>
      </section>

      <section
        className="collection-forge-image collection-forge-image--wide"
        aria-labelledby="collection-forge-overview-heading"
      >
        <h2 id="collection-forge-overview-heading" className="sr-only">
          {t("collectionForge.sections.overviewTitle")}
        </h2>
        <figure>
          <ImageBorder
            src="/Projects/collection-forge/army-cards.jpg"
            alt={t("collectionForge.images.overviewAlt")}
            frame="chrome"
          />
          <figcaption>{t("collectionForge.images.overviewCaption")}</figcaption>
        </figure>
      </section>

      <section
        className="project-section"
        aria-labelledby="collection-forge-features-heading"
      >
        <h2 id="collection-forge-features-heading">
          {t("collectionForge.sections.featuresTitle")}
        </h2>
        <ul className="collection-forge-feature-list" role="list">
          <li>
            <span aria-hidden="true"><ImportIcon /></span>
            <div>
              <strong>{t("collectionForge.features.importTitle")}</strong>
              <p>{t("collectionForge.features.importText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true"><CardsIcon /></span>
            <div>
              <strong>{t("collectionForge.features.cardsTitle")}</strong>
              <p>{t("collectionForge.features.cardsText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true"><PrintIcon /></span>
            <div>
              <strong>{t("collectionForge.features.printTitle")}</strong>
              <p>{t("collectionForge.features.printText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true"><BattleIcon /></span>
            <div>
              <strong>{t("collectionForge.features.battleTitle")}</strong>
              <p>{t("collectionForge.features.battleText")}</p>
            </div>
          </li>
        </ul>
      </section>

      <section
        className="project-section"
        aria-labelledby="collection-forge-card-heading"
      >
        <h2 id="collection-forge-card-heading">
          {t("collectionForge.sections.cardTitle")}
        </h2>
        <p>{t("collectionForge.sections.cardText")}</p>
        <figure className="collection-forge-figure">
          <ImageBorder
            src="/Projects/collection-forge/datasheet-card.jpg"
            alt={t("collectionForge.images.cardAlt")}
            frame="safari"
          />
          <figcaption>{t("collectionForge.images.cardCaption")}</figcaption>
        </figure>
      </section>

      <section
        className="project-section"
        aria-labelledby="collection-forge-battle-heading"
      >
        <h2 id="collection-forge-battle-heading">
          {t("collectionForge.sections.battleTitle")}
        </h2>
        <p>{t("collectionForge.sections.battleText")}</p>
        <figure className="collection-forge-figure">
          <ImageBorder
            src="/Projects/collection-forge/battle-dice.jpg"
            alt={t("collectionForge.images.battleAlt")}
            frame="chrome"
          />
          <figcaption>{t("collectionForge.images.battleCaption")}</figcaption>
        </figure>
      </section>

      <section
        className="project-section collection-forge-tech"
        aria-labelledby="collection-forge-tech-heading"
      >
        <h2 id="collection-forge-tech-heading">
          {t("collectionForge.sections.techTitle")}
        </h2>
        <p>{t("collectionForge.sections.techText")}</p>
        <p className="collection-forge-disclaimer">
          {t("collectionForge.sections.disclaimer")}
        </p>
      </section>
    </>
  );
}
