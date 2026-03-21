import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/ai_chat_speed_booster.scss";
import { useEffect, useMemo, useState } from "react";
import {
  IoRocketOutline as RocketIcon,
  IoLogoGithub as GithubIcon,
  IoStarOutline as StarIcon,
  IoConstructOutline as BuildIcon,
  IoLayersOutline as LayersIcon,
  IoToggleOutline as ToggleIcon,
  IoFlashOutline as FastIcon,
  IoEyeOffOutline as HiddenIcon,
  IoArrowForwardOutline as LoadMoreIcon,
  IoArchiveOutline as CacheIcon,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function AIChatSpeedBooster() {
  const { t } = useTranslation();
  const [githubStars, setGithubStars] = useState<number | null>(31);

  useEffect(() => {
    const controller = new AbortController();

    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Noah4ever/ai-chat-speed-booster",
          { signal: controller.signal },
        );
        if (!response.ok) return;
        const data = (await response.json()) as { stargazers_count?: number };
        if (typeof data.stargazers_count === "number") {
          setGithubStars(data.stargazers_count);
        }
      } catch {
        // Keep UI stable if GitHub API is unavailable.
      }
    };

    void fetchStars();

    return () => {
      controller.abort();
    };
  }, []);

  const formattedStars = useMemo(() => {
    if (githubStars == null || githubStars <= 2) return null;
    return new Intl.NumberFormat(undefined, {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(githubStars);
  }, [githubStars]);

  const highlightTypeScript = (code: string) => {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const comments: string[] = [];
    const withPlaceholders = escaped.replace(/(\/\/.*$)/gm, (match) => {
      comments.push(match);
      return `__COMMENT_${comments.length - 1}__`;
    });

    const highlighted = withPlaceholders
      .replace(
        /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)/g,
        '<span class="ts-string">$1</span>',
      )
      .replace(
        /\b(import|export|from|const|let|var|function|return|if|else|for|of|new|this|class|extends|type|interface|enum|readonly|async|await|switch|case|default|break|continue|void|null|undefined|true|false|private|public|static|get|set)\b/g,
        '<span class="ts-keyword">$1</span>',
      )
      .replace(
        /\b(MutationObserver|HTMLElement|Response|Map|Promise|Array|Set|Object|JSON|document|window|fetch|chrome|browser|RequestInfo|RequestInit|URL|Headers)\b/g,
        '<span class="ts-type">$1</span>',
      )
      .replace(/\b(\d+)\b/g, '<span class="ts-number">$1</span>');

    return highlighted.replace(
      /__COMMENT_(\d+)__/g,
      (_, i) => `<span class="ts-comment">${comments[Number(i)]}</span>`,
    );
  };

  return (
    <>
      <section
        className="ai-chat-speed-booster-hero"
        aria-labelledby="ai-chat-speed-booster-title"
      >
        <div className="ai-chat-speed-booster-hero-icon" aria-hidden="true">
          <RocketIcon />
        </div>
        <h1 id="ai-chat-speed-booster-title">
          {t("aiChatSpeedBooster.hero.title")}
        </h1>
        <div className="project-hero-badges">
          <a
            href="https://github.com/Noah4ever/ai-chat-speed-booster"
            className="view-github-badge"
          >
            View on GitHub <GithubIcon />
            {formattedStars && (
              <>
                <StarIcon />
                <span>{formattedStars}</span>
              </>
            )}
          </a>
        </div>
        <ul className="project-hero-tags">
          <li className="project-tag--browser-extension">Browser Extension</li>
          <li className="project-tag--typescript">TypeScript</li>
        </ul>
        <p className="ai-chat-speed-booster-tagline">
          {t("aiChatSpeedBooster.hero.tagline")}
        </p>
      </section>

      <section
        className="project-section"
        aria-labelledby="ai-chat-speed-booster-what-heading"
      >
        <h2 id="ai-chat-speed-booster-what-heading">
          {t("aiChatSpeedBooster.sections.whatTitle")}
        </h2>
        <p>{t("aiChatSpeedBooster.sections.whatText")}</p>
      </section>

      <section
        className="ai-chat-speed-booster-image"
        aria-labelledby="ai-chat-speed-booster-image-heading"
      >
        <h2 id="ai-chat-speed-booster-image-heading" className="sr-only">
          {t("aiChatSpeedBooster.sections.screenshotTitle")}
        </h2>
        <figure>
          <ImageBorder
            src="/Projects/ai-chat-speed-booster/speed-booster-popup.png"
            alt={t("aiChatSpeedBooster.image.alt")}
          />
          <figcaption>{t("aiChatSpeedBooster.image.caption")}</figcaption>
        </figure>
      </section>

      <section
        className="project-section"
        aria-labelledby="ai-chat-speed-booster-settings-heading"
      >
        <h2 id="ai-chat-speed-booster-settings-heading">
          {t("aiChatSpeedBooster.sections.settingsTitle")}
        </h2>
        <ul className="ai-chat-speed-booster-feature-list" role="list">
          <li>
            <span aria-hidden="true">
              <BuildIcon />
            </span>
            <div>
              <strong>{t("aiChatSpeedBooster.settings.visibleTitle")}</strong>
              <p>{t("aiChatSpeedBooster.settings.visibleText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <LayersIcon />
            </span>
            <div>
              <strong>{t("aiChatSpeedBooster.settings.batchTitle")}</strong>
              <p>{t("aiChatSpeedBooster.settings.batchText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <ToggleIcon />
            </span>
            <div>
              <strong>{t("aiChatSpeedBooster.settings.toggleTitle")}</strong>
              <p>{t("aiChatSpeedBooster.settings.toggleText")}</p>
            </div>
          </li>
        </ul>

        <div className="project-hero-badges ai-chat-speed-booster-store-links">
          <a
            href="https://chromewebstore.google.com/detail/ai-chat-speed-booster/apngmjkikmgiedggfjjgkflfkgfihiec"
            className="view-live-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("aiChatSpeedBooster.settings.chromeStore")}
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/ai-chat-speed-booster/"
            className="view-live-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("aiChatSpeedBooster.settings.firefoxStore")}
          </a>
        </div>
        <p>{t("aiChatSpeedBooster.settings.reviewDelay")}</p>
        <p>{t("aiChatSpeedBooster.settings.githubRelease")}</p>
      </section>

      <section
        className="project-section"
        aria-labelledby="ai-chat-speed-booster-how-heading"
      >
        <h2 id="ai-chat-speed-booster-how-heading">
          {t("aiChatSpeedBooster.sections.howTitle")}
        </h2>
        <ul className="ai-chat-speed-booster-feature-list" role="list">
          <li>
            <span aria-hidden="true">
              <FastIcon />
            </span>
            <div>
              <strong>{t("aiChatSpeedBooster.how.lazyTitle")}</strong>
              <p>{t("aiChatSpeedBooster.how.lazyText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <HiddenIcon />
            </span>
            <div>
              <strong>{t("aiChatSpeedBooster.how.hiddenTitle")}</strong>
              <p>{t("aiChatSpeedBooster.how.hiddenText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <LoadMoreIcon />
            </span>
            <div>
              <strong>{t("aiChatSpeedBooster.how.loadMoreTitle")}</strong>
              <p>{t("aiChatSpeedBooster.how.loadMoreText")}</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">
              <CacheIcon />
            </span>
            <div>
              <strong>{t("aiChatSpeedBooster.how.fifoTitle")}</strong>
              <p>{t("aiChatSpeedBooster.how.fifoText")}</p>
            </div>
          </li>
        </ul>
      </section>

      <section
        className="project-section"
        aria-labelledby="ai-chat-speed-booster-privacy-heading"
      >
        <h2 id="ai-chat-speed-booster-privacy-heading">
          {t("aiChatSpeedBooster.sections.privacyTitle")}
        </h2>
        <div className="ai-chat-speed-booster-privacy-card">
          <ul>
            <li>{t("aiChatSpeedBooster.privacy.noRead")}</li>
            <li>{t("aiChatSpeedBooster.privacy.noAnalytics")}</li>
            <li>{t("aiChatSpeedBooster.privacy.localStorage")}</li>
            <li>{t("aiChatSpeedBooster.privacy.openSource")}</li>
          </ul>
        </div>
      </section>

      <section
        className="project-section"
        aria-labelledby="ai-chat-speed-booster-tech-heading"
      >
        <h2 id="ai-chat-speed-booster-tech-heading">
          {t("aiChatSpeedBooster.sections.techTitle")}
        </h2>
        <div className="ai-chat-speed-booster-tech-card">
          <p>{t("aiChatSpeedBooster.tech.text")}</p>
        </div>
      </section>

      <section
        className="project-section"
        aria-labelledby="ai-chat-speed-booster-build-heading"
      >
        <h2 id="ai-chat-speed-booster-build-heading">
          {t("aiChatSpeedBooster.sections.buildTitle")}
        </h2>
        <p>{t("aiChatSpeedBooster.build.p1")}</p>
        <p>{t("aiChatSpeedBooster.build.p2")}</p>
        <p>{t("aiChatSpeedBooster.build.p3")}</p>
      </section>

      <section
        className="project-section ai-chat-speed-booster-code-section"
        aria-labelledby="ai-chat-speed-booster-code-heading"
      >
        <h2 id="ai-chat-speed-booster-code-heading">
          {t("aiChatSpeedBooster.sections.codeTitle")}
        </h2>
        <p>{t("aiChatSpeedBooster.code.intro")}</p>

        <h3>{t("aiChatSpeedBooster.code.messageManagerTitle")}</h3>
        <p>{t("aiChatSpeedBooster.code.messageManagerText")}</p>
        <pre className="code-block">
          <code
            className="code-highlight"
            dangerouslySetInnerHTML={{
              __html: highlightTypeScript(String.raw`/**
 * Fetch Interceptor - runs in the MAIN world (same JS context as the page).
 *
 * It monkey-patches window.fetch so that conversation-loading API responses are
 * trimmed before the application's framework ever sees them.
 */

const ic = site.fetchIntercept;
const originalFetch = window.fetch;

window.fetch = async function patchedFetch(
    input: RequestInfo | URL,
    init?: RequestInit,
): Promise<Response> {
    const url =
        typeof input === "string"
            ? input
            : input instanceof URL
                ? input.toString()
                : input.url;

    const method = (
        init?.method ??
        (input instanceof Request ? input.method : "GET")
    ).toUpperCase();`),
            }}
          />
        </pre>

        <h3>{t("aiChatSpeedBooster.code.fifoTitle")}</h3>
        <p>{t("aiChatSpeedBooster.code.fifoText")}</p>
        <pre className="code-block">
          <code
            className="code-highlight"
            dangerouslySetInnerHTML={{
              __html:
                highlightTypeScript(String.raw`const RESPONSE_CACHE_MAX = 5;

interface CachedResponse {
    body: string;
    trimmed: boolean;
    status: number;
    statusText: string;
    headers: [string, string][];
    url: string;
}

const responseCache = new Map<string, CachedResponse>();

function cachePut(key: string, entry: CachedResponse): void {
    responseCache.delete(key);
    responseCache.set(key, entry);
    while (responseCache.size > RESPONSE_CACHE_MAX) {
        const oldest = responseCache.keys().next().value!;
        responseCache.delete(oldest);
    }
}

function cacheGet(key: string): CachedResponse | undefined {
    const entry = responseCache.get(key);
    if (!entry) return undefined;
    responseCache.delete(key);
    responseCache.set(key, entry);
    return entry;
}`),
            }}
          />
        </pre>

        <h3>{t("aiChatSpeedBooster.code.domObserverTitle")}</h3>
        <p>{t("aiChatSpeedBooster.code.domObserverText")}</p>
        <pre className="code-block">
          <code
            className="code-highlight"
            dangerouslySetInnerHTML={{
              __html:
                highlightTypeScript(String.raw`import sitesConfig from "../../sites.config.json";

export const SITES: readonly SiteConfig[] = sitesConfig as SiteConfig[];

export function detectCurrentSite(): SiteConfig | null {
    const hostname = window.location.hostname;
    return (
        SITES.find((site) =>
            site.hostnames.some((h) => hostname === h || hostname.endsWith("." + h)),
        ) ?? null
    );
}

export function getAllUrlPatterns(): string[] {
    return SITES.flatMap((site) => [...site.urlPatterns]);
}`),
            }}
          />
        </pre>

        <h3>{t("aiChatSpeedBooster.code.backgroundTitle")}</h3>
        <p>{t("aiChatSpeedBooster.code.backgroundText")}</p>
        <pre className="code-block">
          <code
            className="code-highlight"
            dangerouslySetInnerHTML={{
              __html:
                highlightTypeScript(String.raw`async function broadcastToContentScripts(message: ExtensionMessageUnion): Promise<void> {
    try {
        const tabs = await api.tabs.query({ url: allUrlPatterns as string[] });
        for (const tab of tabs) {
            if (tab.id == null) continue;
            try { await api.tabs.sendMessage(tab.id, message); } catch { /* not injected */ }
        }
    } catch (error) {
        logger.error("failed to broadcast to content scripts", error);
    }
}

async function forwardToActiveTab(message: ExtensionMessageUnion): Promise<ExtensionStatus | undefined> {
    try {
        const [tab] = await api.tabs.query({ active: true, currentWindow: true, url: allUrlPatterns as string[] });
        if (!tab?.id) return undefined;
        return (await api.tabs.sendMessage(tab.id, message)) as ExtensionStatus | undefined;
    } catch {
        return undefined;
    }
}`),
            }}
          />
        </pre>
      </section>
    </>
  );
}
