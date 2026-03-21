import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/node_runner.scss";
import {
  IoLogoGithub as GithubIcon,
  IoOpenOutline as LiveIcon,
  IoCubeOutline as BlenderIcon,
  IoCodeSlashOutline as CodeIcon,
  IoDownloadOutline as ImportIcon,
  IoCopyOutline as ClipboardIcon,
  IoGitCompareOutline as VersionIcon,
  IoArrowForwardOutline as FlowIcon,
  IoShareSocialOutline as ShareIcon,
  IoPersonOutline as AccountIcon,
  IoHeartOutline as SocialIcon,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function NodeRunner() {
  const { t } = useTranslation();

  const media = (fileName: string) => `/Projects/node-runner/${fileName}`;
  const aiPromptSpec = `{
  "nodes": {
    "<Display Name>": {
      "type": "<bl_idname>",
      "location": [x, y],
      "settings": { "<prop>": "<value>" },
      "inputs": { "<Socket Name>": <value> },
      "outputs": { "<Socket Name>": <value> }
    }
  },
  "links": [
    ["<FromNode>.<OutputSocket>", "<ToNode>.<InputSocket>"]
  ],
  "tree_type": "ShaderNodeTree",
  "name": "<Descriptive Name>"
}`;

  return (
    <>
      <section className="node-runner-hero" aria-labelledby="node-runner-title">
        <div className="node-runner-hero-icon" aria-hidden="true">
          <BlenderIcon />
        </div>
        <h1 id="node-runner-title">{t("nodeRunner.hero.title")}</h1>
        <div className="project-hero-badges">
          <a
            href="https://node-runner.thiering.org"
            className="view-live-badge"
          >
            <LiveIcon /> {t("nodeRunner.hero.website")}
          </a>
          <a
            href="https://github.com/Noah4ever/node_runner"
            className="view-github-badge"
          >
            View on GitHub <GithubIcon />
          </a>
          <a
            href="https://extensions.blender.org/add-ons/node-runner/"
            className="view-live-badge"
          >
            {t("nodeRunner.hero.blenderAddon")}
          </a>
        </div>
        <ul className="project-hero-tags">
          <li className="project-tag--blender">Blender</li>
          <li className="project-tag--python">Python</li>
          <li className="project-tag--web-platform">Web Platform</li>
        </ul>
        <p className="node-runner-tagline">{t("nodeRunner.hero.tagline")}</p>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-what-heading"
      >
        <h2 id="node-runner-what-heading">
          {t("nodeRunner.sections.whatTitle")}
        </h2>
        <p>{t("nodeRunner.sections.whatText")}</p>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-video-heading"
      >
        <h2 id="node-runner-video-heading">
          {t("nodeRunner.sections.videoTitle")}
        </h2>
        <div className="node-runner-grid one-up">
          <figure>
            <video controls playsInline preload="metadata">
              <source
                src={media("export-node-tree-in-blender.mp4") + "#t=0.001"}
                type="video/mp4"
              />
            </video>
            <figcaption>{t("nodeRunner.media.exportVideoCaption")}</figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="metadata">
              <source
                src={media("import-node-tree-in-blender.mp4") + "#t=0.001"}
                type="video/mp4"
              />
            </video>
            <figcaption>{t("nodeRunner.media.importVideoCaption")}</figcaption>
          </figure>
        </div>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-features-heading"
      >
        <h2 id="node-runner-features-heading">
          {t("nodeRunner.sections.featuresTitle")}
        </h2>
        <ul className="node-runner-feature-list" role="list">
          <li>
            <span aria-hidden="true">
              <CodeIcon />
            </span>
            <p>{t("nodeRunner.features.exportFormats")}</p>
          </li>
          <li>
            <span aria-hidden="true">
              <ImportIcon />
            </span>
            <p>{t("nodeRunner.features.import")}</p>
          </li>
          <li>
            <span aria-hidden="true">
              <ClipboardIcon />
            </span>
            <p>{t("nodeRunner.features.clipboard")}</p>
          </li>
          <li>
            <span aria-hidden="true">
              <VersionIcon />
            </span>
            <p>{t("nodeRunner.features.versionChecks")}</p>
          </li>
        </ul>
        <p className="node-runner-flow-text">
          {t("nodeRunner.features.treeTypes")}
        </p>
        <p className="node-runner-flow-text">
          {t("nodeRunner.features.imagePaths")}
        </p>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-export-heading"
      >
        <h2 id="node-runner-export-heading">
          {t("nodeRunner.sections.exportTitle")}
        </h2>
        <p className="node-runner-flow-text">{t("nodeRunner.export.step1")}</p>
        <p className="node-runner-flow-text">{t("nodeRunner.export.step2")}</p>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-import-heading"
      >
        <h2 id="node-runner-import-heading">
          {t("nodeRunner.sections.importTitle")}
        </h2>
        <p className="node-runner-flow-text">{t("nodeRunner.import.step1")}</p>
        <p className="node-runner-flow-text">{t("nodeRunner.import.step2")}</p>
        <p className="node-runner-flow-text">{t("nodeRunner.import.step3")}</p>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-formats-heading"
      >
        <h2 id="node-runner-formats-heading">
          {t("nodeRunner.sections.formatsTitle")}
        </h2>
        <p className="node-runner-flow-text">
          Depending on context, you can pick compact output for sharing or
          structured formats for easier editing and automation.
        </p>
        <ul className="node-runner-text-list" role="list">
          <li>{t("nodeRunner.formats.hash")}</li>
          <li>{t("nodeRunner.formats.json")}</li>
          <li>{t("nodeRunner.formats.xml")}</li>
        </ul>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-how-heading"
      >
        <h2 id="node-runner-how-heading">
          {t("nodeRunner.sections.howTitle")}
        </h2>
        <ul className="node-runner-feature-list" role="list">
          <li>
            <span aria-hidden="true">
              <FlowIcon />
            </span>
            <p>{t("nodeRunner.how.export")}</p>
          </li>
          <li>
            <span aria-hidden="true">
              <ImportIcon />
            </span>
            <p>{t("nodeRunner.how.import")}</p>
          </li>
          <li>
            <span aria-hidden="true">
              <ShareIcon />
            </span>
            <p>{t("nodeRunner.how.share")}</p>
          </li>
        </ul>
        <p className="node-runner-flow-text node-runner-flow-with-icon">
          <span aria-hidden="true">
            <AccountIcon />
          </span>
          <span>{t("nodeRunner.how.account")}</span>
        </p>
        <p className="node-runner-flow-text node-runner-flow-with-icon">
          <span aria-hidden="true">
            <SocialIcon />
          </span>
          <span>{t("nodeRunner.how.social")}</span>
        </p>
      </section>

      <section
        className="node-runner-gallery"
        aria-labelledby="node-runner-gallery-heading"
      >
        <h2 id="node-runner-gallery-heading">
          {t("nodeRunner.sections.galleryTitle")}
        </h2>
        <div className="node-runner-grid one-up">
          <figure>
            <ImageBorder
              src={media("discover-page.png")}
              alt={t("nodeRunner.media.discoverAlt")}
              frame="safari"
              lookAtCursor
            />
            <figcaption>{t("nodeRunner.media.discoverCaption")}</figcaption>
          </figure>
          <figure>
            <ImageBorder
              src={media("node-tree-uploaded.png")}
              alt={t("nodeRunner.media.uploadAlt")}
              frame="safari"
              lookAtCursor
            />
            <figcaption>{t("nodeRunner.media.uploadCaption")}</figcaption>
          </figure>
        </div>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-sharing-heading"
      >
        <h2 id="node-runner-sharing-heading">
          {t("nodeRunner.sections.sharingTitle")}
        </h2>
        <p>{t("nodeRunner.sharing.p1")}</p>
        <p>{t("nodeRunner.sharing.p2")}</p>
      </section>

      <section
        className="project-section"
        aria-labelledby="node-runner-ai-heading"
      >
        <h2 id="node-runner-ai-heading">
          {t("nodeRunner.sections.aiPromptTitle")}
        </h2>
        <p>{t("nodeRunner.aiPrompt.intro")}</p>
        <pre className="code-block">
          <code>{aiPromptSpec}</code>
        </pre>
        <p>{t("nodeRunner.aiPrompt.rules")}</p>
      </section>
    </>
  );
}
