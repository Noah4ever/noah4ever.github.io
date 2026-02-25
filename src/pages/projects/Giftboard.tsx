import "@styles/pages/giftboard.scss";
import { useThemeStore } from "@/stores/ThemeStore";
import ImageBorder from "@/components/ImageBorder";
import {
  IoGiftOutline as GiftIcon,
  IoLinkOutline as LinkIcon,
  IoShieldCheckmarkOutline as ReserveIcon,
  IoCloudUploadOutline as UploadIcon,
  IoStarOutline as PriorityIcon,
  IoBrowsersOutline as FrontendIcon,
  IoServerOutline as BackendIcon,
  IoLogoGithub as GithubIcon,
  IoOpenOutline as LiveIcon,
} from "react-icons/io5";
import { Trans, useTranslation } from "react-i18next";

export default function Giftboard() {
  const theme = useThemeStore((state) => state.theme);
  const { t } = useTranslation();
  const showDarkmodeScreenshots = theme === "dark";

  const themedProjectImage = (stem: string) => {
    const suffix = showDarkmodeScreenshots ? "-darkmode" : "";
    return `/Projects/${stem}${suffix}.webp`;
  };

  const themePreviewImage =
    theme === "dark"
      ? "/Projects/giftboard-theme-lightmode.webp"
      : "/Projects/giftboard-theme-darkmode.webp";

  const highlightJson = (json: string) => {
    const escaped = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return escaped
      .replace(
        /("(?:\\.|[^"\\])*")(?=\s*:)/g,
        '<span class="json-key">$1</span>',
      )
      .replace(
        /:\s*("(?:\\.|[^"\\])*")/g,
        ': <span class="json-string">$1</span>',
      )
      .replace(
        /(:\s*)(-?\d+(?:\.\d+)?)/g,
        '$1<span class="json-number">$2</span>',
      )
      .replace(/\b(true|false)\b/g, '<span class="json-boolean">$1</span>')
      .replace(/\bnull\b/g, '<span class="json-null">null</span>');
  };

  const highlightTypeScript = (code: string) => {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return escaped
      .replace(/(\/\/.*$)/gm, '<span class="ts-comment">$1</span>')
      .replace(
        /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)/g,
        '<span class="ts-string">$1</span>',
      )
      .replace(
        /\b(async|await|const|let|return|if|try|catch|null|type)\b/g,
        '<span class="ts-keyword">$1</span>',
      )
      .replace(
        /\b(app|fetch|Request|Response|URL|AbortSignal)\b/g,
        '<span class="ts-type">$1</span>',
      )
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="ts-number">$1</span>');
  };

  return (
    <>
      <section className="giftboard-hero" aria-labelledby="giftboard-title">
        <div className="giftboard-hero-icon" aria-hidden="true">
          <GiftIcon />
        </div>
        <h1 id="giftboard-title">{t("giftboard.hero.title")}</h1>
        <div className="project-hero-badges">
          <a
            href="https://projects.thiering.org/giftboard"
            className="view-live-badge"
          >
            <LiveIcon /> Live
          </a>
          <a
            href="https://github.com/Noah4ever/giftboard"
            className="view-github-badge"
          >
            View on GitHub <GithubIcon />
          </a>
        </div>
        <p className="giftboard-tagline">
          <Trans
            i18nKey="giftboard.hero.tagline"
            components={[
              <a
                href="https://ashley.thiering.org"
                className="giftboard-inline-link"
                key="girlfriend-link"
              />,
            ]}
          />
        </p>
      </section>

      <section
        className="project-section giftboard-story"
        aria-labelledby="giftboard-why-heading"
      >
        <h2 id="giftboard-why-heading">{t("giftboard.sections.whyTitle")}</h2>
        <blockquote>
          <p>{t("giftboard.sections.whyP1")}</p>
          <p>{t("giftboard.sections.whyP2")}</p>
        </blockquote>
      </section>

      {/* Alternating: What it does + hero screenshot */}
      <section
        className="giftboard-alternating"
        data-image-side="right"
        aria-labelledby="giftboard-what-heading"
      >
        <div className="giftboard-alt-text">
          <h2 id="giftboard-what-heading">
            {t("giftboard.sections.whatTitle")}
          </h2>
          <p>{t("giftboard.sections.whatP1")}</p>
          <p>{t("giftboard.sections.whatP2")}</p>
        </div>
        <div className="giftboard-alt-image">
          <figure className="giftboard-3d-image">
            <ImageBorder
              src={themedProjectImage("giftboard-hero")}
              alt={t("giftboard.gallery.heroAlt")}
              frame="safari"
              lookAtCursor
            />
            <figcaption>{t("giftboard.gallery.heroCaption")}</figcaption>
          </figure>
        </div>
      </section>

      {/* Alternating: How it works + wishes overview */}
      <section
        className="giftboard-alternating"
        data-image-side="left"
        aria-labelledby="giftboard-how-heading"
      >
        <div className="giftboard-alt-image">
          <figure className="giftboard-3d-image">
            <ImageBorder
              src={themedProjectImage("giftboard-wishes-overview")}
              alt={t("giftboard.gallery.wishesAlt")}
              frame="safari"
              lookAtCursor
            />
            <figcaption>{t("giftboard.gallery.wishesCaption")}</figcaption>
          </figure>
        </div>
        <div className="giftboard-alt-text">
          <h2 id="giftboard-how-heading">{t("giftboard.sections.howTitle")}</h2>
          <ul className="giftboard-how-list" role="list">
            <li>
              <span className="giftboard-how-icon" aria-hidden="true">
                <LinkIcon />
              </span>
              <div>
                <strong>{t("giftboard.how.amazonTitle")}</strong>
                <p>{t("giftboard.how.amazonText")}</p>
              </div>
            </li>
            <li>
              <span className="giftboard-how-icon" aria-hidden="true">
                <UploadIcon />
              </span>
              <div>
                <strong>{t("giftboard.how.customTitle")}</strong>
                <p>{t("giftboard.how.customText")}</p>
              </div>
            </li>
            <li>
              <span className="giftboard-how-icon" aria-hidden="true">
                <ReserveIcon />
              </span>
              <div>
                <strong>{t("giftboard.how.hiddenTitle")}</strong>
                <p>{t("giftboard.how.hiddenText")}</p>
              </div>
            </li>
            <li>
              <span className="giftboard-how-icon" aria-hidden="true">
                <PriorityIcon />
              </span>
              <div>
                <strong>{t("giftboard.how.prioritiesTitle")}</strong>
                <p>{t("giftboard.how.prioritiesText")}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Alternating: Tech + theme screenshot */}
      <section
        className="giftboard-alternating"
        data-image-side="right"
        aria-labelledby="giftboard-tech-heading"
      >
        <div className="giftboard-alt-text">
          <h2 id="giftboard-tech-heading">
            {t("giftboard.sections.techTitle")}
          </h2>
          <div className="giftboard-tech-grid">
            <article className="giftboard-tech-card">
              <div className="giftboard-tech-card-icon" aria-hidden="true">
                <FrontendIcon />
              </div>
              <h3>{t("giftboard.tech.frontendTitle")}</h3>
              <p>{t("giftboard.tech.frontendText")}</p>
            </article>
            <article className="giftboard-tech-card">
              <div className="giftboard-tech-card-icon" aria-hidden="true">
                <BackendIcon />
              </div>
              <h3>{t("giftboard.tech.backendTitle")}</h3>
              <p>{t("giftboard.tech.backendText")}</p>
            </article>
          </div>
        </div>
        <div className="giftboard-alt-image">
          <figure className="giftboard-3d-image">
            <ImageBorder
              src={themePreviewImage}
              alt={t("giftboard.gallery.themeAlt")}
              frame="safari"
              lookAtCursor
            />
            <figcaption>{t("giftboard.gallery.themeCaption")}</figcaption>
          </figure>
        </div>
      </section>

      {/* Bottom images with 3D effect */}
      <section
        className="giftboard-bottom-image"
        aria-labelledby="giftboard-bottom-image-heading"
      >
        <h2 id="giftboard-bottom-image-heading" className="sr-only">
          {t("giftboard.sections.extraScreenshotTitle")}
        </h2>
        <figure className="giftboard-bottom-image-figure giftboard-3d-image">
          <ImageBorder
            src={themedProjectImage("giftboard-create-wish")}
            alt={t("giftboard.gallery.createWishAlt")}
            frame="safari"
            lookAtCursor
          />
          <figcaption>{t("giftboard.gallery.createWishCaption")}</figcaption>
        </figure>
      </section>

      <section
        className="giftboard-bottom-image"
        aria-labelledby="giftboard-bottom-image-heading"
      >
        <figure className="giftboard-bottom-image-figure giftboard-3d-image">
          <ImageBorder
            src={themedProjectImage("giftboard-board-overview")}
            alt={t("giftboard.gallery.boardAlt")}
            frame="chrome"
            lookAtCursor
          />
          <figcaption>{t("giftboard.gallery.boardCaption")}</figcaption>
        </figure>
      </section>

      <section
        className="project-section giftboard-scrape-explainer"
        aria-labelledby="giftboard-scrape-heading"
      >
        <h2 id="giftboard-scrape-heading">
          {t("giftboard.sections.scrapeTitle")}
        </h2>
        <p>{t("giftboard.sections.scrapeP1")}</p>
        <pre className="code-block">
          <code
            className="code-highlight"
            dangerouslySetInnerHTML={{
              __html:
                highlightTypeScript(String.raw`type PriceRequestBody = { url?: string };

app.post("/price", async (
    req: Request<unknown, unknown, PriceRequestBody>,
    res: Response,
) => {
    const { url } = req.body;
    if (typeof url !== "string" || !url.trim()) {
        return res.status(400).json({ message: "url is required" });
    }

    const safeUrl = await assertSafePublicHttpUrl(url);
    const resp = await fetch(safeUrl.toString(), {
        headers: humanRequestHeaders(safeUrl.toString()),
        redirect: "follow",
        signal: AbortSignal.timeout(8000),
    });

    const html = await resp.text();
    const source = chooseMetaSource(new URL(resp.url).hostname, await loadMetaSources());
    const price = extractPriceFromHtml(html, source);
    const image = extractImageFromSource(html, source);

    return res.json({ price: price ?? null, image: image ?? null });
});`),
            }}
          />
        </pre>
        <p>{t("giftboard.sections.scrapeP2")}</p>
        <p>{t("giftboard.sections.scrapeP3")}</p>
        <p>{t("giftboard.sections.scrapeP4")}</p>
        <pre className="code-block">
          <code
            className="code-highlight"
            dangerouslySetInnerHTML={{
              __html: highlightJson(String.raw`[
    {
        "name": "amazon",
        "domains": [
            "amazon.com",
            "amazon.de",
            "amazon.co.uk",
            "amazon.fr",
            "amazon.es",
            "amzn.eu"
        ],
        "selectors": {
            "whole": { "type": "classText", "value": "a-price-whole" },
            "fraction": { "type": "classText", "value": "a-price-fraction" },
            "symbol": { "type": "classText", "value": "a-price-symbol" },
            "image": { "type": "attr", "selector": "#landingImage", "attr": "src" },
            "dynamicImage": {
                "type": "attr",
                "selector": "#landingImage",
                "attr": "data-a-dynamic-image",
                "parse": "jsonKey"
            },
            "altImage": {
                "type": "attr",
                "selector": "#landingImage",
                "attr": "data-old-hires"
            }
        },
        "fallbackRegexes": [
            "\\\"price\\\"\\s*:\\s*\\\"([0-9.,]+)\\\"",
            "price\":\"([0-9.,]+)\"",
            "\\$(\\d+[\\d.,]*)"
        ]
    }
]`),
            }}
          />
        </pre>
        <p>{t("giftboard.sections.scrapeP5")}</p>
      </section>

      <section
        className="project-section giftboard-json-showcase"
        aria-labelledby="giftboard-json-heading"
      >
        <h2 id="giftboard-json-heading">{t("giftboard.sections.jsonTitle")}</h2>
        <p>{t("giftboard.sections.jsonIntro")}</p>

        <article
          className="giftboard-json-part"
          aria-labelledby="giftboard-json-list-meta"
        >
          <h3 id="giftboard-json-list-meta">
            {t("giftboard.json.part1Title")}
          </h3>
          <p>{t("giftboard.json.part1Text")}</p>
          <pre className="code-block">
            <code
              className="code-highlight"
              dangerouslySetInnerHTML={{
                __html: highlightJson(`{
    "id": "b2a8ce80-89e4-4f0a-97f0-26c7ebf6ab4f",
    "title": "Birthday 2026",
    "code": "noah-bday-2026",
    "owner": "Noah",
    "description": "Gift ideas for my birthday",
    "createdAt": "2026-01-06T14:37:33.938Z"
}`),
              }}
            />
          </pre>
        </article>

        <article
          className="giftboard-json-part"
          aria-labelledby="giftboard-json-wishes"
        >
          <h3 id="giftboard-json-wishes">{t("giftboard.json.part2Title")}</h3>
          <p>{t("giftboard.json.part2Text")}</p>
          <pre className="code-block">
            <code
              className="code-highlight"
              dangerouslySetInnerHTML={{
                __html: highlightJson(`"wishes": [
    {
        "id": "98fbc148-4df3-43f7-a8be-0a5337b10cbf",
        "title": "The Lord of the Rings Box Set",
        "priority": "high",
        "description": "Hardcover edition",
        "link": "https://www.amazon.de/dp/0261103563",
        "image": "https://m.media-amazon.com/images/I/71+4WXa9RfL._SY385_.jpg",
        "price": 33.34,
        "priceRange": "",
        "quantity": 1,
        "createdAt": "2026-01-06T14:51:08.312Z"
    },
    {
        "id": "7f82dc66-f60d-428d-b68a-d84f5871723a",
        "title": "Mechanical keyboard wrist rest",
        "priority": "medium",
        "description": "Walnut wood",
        "link": "",
        "image": "",
        "price": null,
        "priceRange": "20-35",
        "quantity": 1,
        "createdAt": "2026-01-06T15:12:23.003Z"
    }
]`),
              }}
            />
          </pre>
        </article>

        <article
          className="giftboard-json-part"
          aria-labelledby="giftboard-json-reserve-state"
        >
          <h3 id="giftboard-json-reserve-state">
            {t("giftboard.json.part3Title")}
          </h3>
          <p>{t("giftboard.json.part3Text")}</p>
          <pre className="code-block">
            <code
              className="code-highlight"
              dangerouslySetInnerHTML={{
                __html: highlightJson(`{
    "reservations": [
        {
            "userName": "Ashley",
            "at": "2026-01-06T15:50:42.171Z"
        }
    ],
    "reservedCount": 1,
    "ticked": true,
    "tickedBy": "Ashley",
    "tickedAt": "2026-01-06T15:50:42.171Z"
}`),
              }}
            />
          </pre>
        </article>

        <article
          className="giftboard-json-part"
          aria-labelledby="giftboard-json-full"
        >
          <h3 id="giftboard-json-full">{t("giftboard.json.part4Title")}</h3>
          <pre className="code-block">
            <code
              className="code-highlight"
              dangerouslySetInnerHTML={{
                __html: highlightJson(`{
    "lists": [
        {
            "id": "b2a8ce80-89e4-4f0a-97f0-26c7ebf6ab4f",
            "title": "Birthday 2026",
            "code": "noah-bday-2026",
            "owner": "Noah",
            "description": "Gift ideas for my birthday",
            "createdAt": "2026-01-06T14:37:33.938Z",
            "wishes": [
                {
                    "id": "98fbc148-4df3-43f7-a8be-0a5337b10cbf",
                    "title": "The Lord of the Rings Box Set",
                    "priority": "high",
                    "description": "Hardcover edition",
                    "link": "https://www.amazon.de/dp/0261103563",
                    "image": "https://m.media-amazon.com/images/I/71+4WXa9RfL._SY385_.jpg",
                    "price": 33.34,
                    "priceRange": "",
                    "quantity": 1,
                    "reservations": [
                        {
                            "userName": "Ashley",
                            "at": "2026-01-06T15:50:42.171Z"
                        }
                    ],
                    "reservedCount": 1,
                    "ticked": true,
                    "tickedBy": "Ashley",
                    "tickedAt": "2026-01-06T15:50:42.171Z",
                    "createdAt": "2026-01-06T14:51:08.312Z"
                },
                {
                    "id": "7f82dc66-f60d-428d-b68a-d84f5871723a",
                    "title": "Mechanical keyboard wrist rest",
                    "priority": "medium",
                    "description": "Walnut wood",
                    "link": "",
                    "image": "",
                    "price": null,
                    "priceRange": "20-35",
                    "quantity": 1,
                    "reservations": [],
                    "reservedCount": 0,
                    "ticked": false,
                    "tickedBy": null,
                    "tickedAt": null,
                    "createdAt": "2026-01-06T15:12:23.003Z"
                }
            ]
        }
    ]
}`),
              }}
            />
          </pre>
        </article>
      </section>
    </>
  );
}
