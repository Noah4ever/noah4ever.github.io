import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/chatgpt_booster.scss";
import {
    IoRocketOutline as RocketIcon,
    IoSettingsOutline as SettingsIcon,
    IoEyeOutline as VisibleIcon,
    IoLayersOutline as BatchIcon,
    IoToggleOutline as ToggleIcon,
    IoShieldCheckmarkOutline as PrivacyIcon,
    IoLogoGithub as GithubIcon,
    IoFlashOutline as FlashIcon,
    IoArrowUpOutline as LoadMoreIcon,
    IoSwapVerticalOutline as FifoIcon,
    IoConstructOutline as BuildIcon,
    IoCodeSlashOutline as CodeIcon,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function ChatGPTBooster() {
    const { t } = useTranslation();

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
            .replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)/g, '<span class="ts-string">$1</span>')
            .replace(
                /\b(import|export|from|const|let|var|function|return|if|else|for|of|new|this|class|extends|type|interface|enum|readonly|async|await|switch|case|default|break|continue|void|null|undefined|true|false|private|public|static|get|set)\b/g,
                '<span class="ts-keyword">$1</span>',
            )
            .replace(
                /\b(MutationObserver|HTMLElement|DOMObserver|MessageManager|LoadMoreButton|StatusIndicator|ExtensionConfig|ExtensionStatus|TrackedMessage|Promise|Array|Set|Object|setTimeout|clearTimeout|document|window|chrome)\b/g,
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
                className="chatgpt-booster-hero"
                aria-labelledby="chatgpt-booster-title"
            >
                <div className="chatgpt-booster-hero-icon" aria-hidden="true">
                    <RocketIcon />
                </div>
                <h1 id="chatgpt-booster-title">{t("chatgptBooster.hero.title")}</h1>
                <div className="project-hero-badges">
                    <a
                        href="https://github.com/Noah4ever/chatgpt-speed-booster"
                        className="view-github-badge"
                    >
                        View on GitHub <GithubIcon />
                    </a>
                </div>
                <p className="chatgpt-booster-tagline">
                    {t("chatgptBooster.hero.tagline")}
                </p>
            </section>

            <section
                className="project-section"
                aria-labelledby="chatgpt-booster-what-heading"
            >
                <h2 id="chatgpt-booster-what-heading">
                    {t("chatgptBooster.sections.whatTitle")}
                </h2>
                <p>{t("chatgptBooster.sections.whatText")}</p>
            </section>

            <section
                className="chatgpt-booster-image"
                aria-labelledby="chatgpt-booster-image-heading"
            >
                <h2 id="chatgpt-booster-image-heading" className="sr-only">
                    {t("chatgptBooster.sections.screenshotTitle")}
                </h2>
                <figure>
                    <ImageBorder
                        src="/Projects/chatgptbooster/speed-booster-popup.png"
                        alt={t("chatgptBooster.image.alt")}
                        frame="chrome"
                    />
                    <figcaption>{t("chatgptBooster.image.caption")}</figcaption>
                </figure>
            </section>

            <section
                className="project-section"
                aria-labelledby="chatgpt-booster-how-heading"
            >
                <h2 id="chatgpt-booster-how-heading">
                    {t("chatgptBooster.sections.howTitle")}
                </h2>
                <ul className="chatgpt-booster-feature-list" role="list">
                    <li>
                        <span aria-hidden="true">
                            <FlashIcon />
                        </span>
                        <div>
                            <strong>{t("chatgptBooster.how.lazyTitle")}</strong>
                            <p>{t("chatgptBooster.how.lazyText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <VisibleIcon />
                        </span>
                        <div>
                            <strong>{t("chatgptBooster.how.hiddenTitle")}</strong>
                            <p>{t("chatgptBooster.how.hiddenText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <LoadMoreIcon />
                        </span>
                        <div>
                            <strong>{t("chatgptBooster.how.loadMoreTitle")}</strong>
                            <p>{t("chatgptBooster.how.loadMoreText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <FifoIcon />
                        </span>
                        <div>
                            <strong>{t("chatgptBooster.how.fifoTitle")}</strong>
                            <p>{t("chatgptBooster.how.fifoText")}</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section
                className="project-section"
                aria-labelledby="chatgpt-booster-settings-heading"
            >
                <h2 id="chatgpt-booster-settings-heading">
                    {t("chatgptBooster.sections.settingsTitle")}
                </h2>
                <ul className="chatgpt-booster-feature-list" role="list">
                    <li>
                        <span aria-hidden="true">
                            <VisibleIcon />
                        </span>
                        <div>
                            <strong>{t("chatgptBooster.settings.visibleTitle")}</strong>
                            <p>{t("chatgptBooster.settings.visibleText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <BatchIcon />
                        </span>
                        <div>
                            <strong>{t("chatgptBooster.settings.batchTitle")}</strong>
                            <p>{t("chatgptBooster.settings.batchText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <ToggleIcon />
                        </span>
                        <div>
                            <strong>{t("chatgptBooster.settings.toggleTitle")}</strong>
                            <p>{t("chatgptBooster.settings.toggleText")}</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section
                className="project-section"
                aria-labelledby="chatgpt-booster-privacy-heading"
            >
                <h2 id="chatgpt-booster-privacy-heading">
                    {t("chatgptBooster.sections.privacyTitle")}
                </h2>
                <div className="chatgpt-booster-privacy-card">
                    <div className="chatgpt-booster-privacy-icon" aria-hidden="true">
                        <PrivacyIcon />
                    </div>
                    <ul>
                        <li>{t("chatgptBooster.privacy.noRead")}</li>
                        <li>{t("chatgptBooster.privacy.noAnalytics")}</li>
                        <li>{t("chatgptBooster.privacy.localStorage")}</li>
                        <li>{t("chatgptBooster.privacy.openSource")}</li>
                    </ul>
                </div>
            </section>

            <section
                className="project-section"
                aria-labelledby="chatgpt-booster-tech-heading"
            >
                <h2 id="chatgpt-booster-tech-heading">
                    {t("chatgptBooster.sections.techTitle")}
                </h2>
                <div className="chatgpt-booster-tech-card">
                    <div className="chatgpt-booster-tech-icon" aria-hidden="true">
                        <SettingsIcon />
                    </div>
                    <p>{t("chatgptBooster.tech.text")}</p>
                </div>
            </section>

            <section
                className="project-section"
                aria-labelledby="chatgpt-booster-build-heading"
            >
                <h2 id="chatgpt-booster-build-heading">
                    <BuildIcon className="chatgpt-booster-section-icon" aria-hidden="true" />
                    {t("chatgptBooster.sections.buildTitle")}
                </h2>
                <p>{t("chatgptBooster.build.p1")}</p>
                <p>{t("chatgptBooster.build.p2")}</p>
                <p>{t("chatgptBooster.build.p3")}</p>
            </section>

            <section
                className="project-section chatgpt-booster-code-section"
                aria-labelledby="chatgpt-booster-code-heading"
            >
                <h2 id="chatgpt-booster-code-heading">
                    <CodeIcon className="chatgpt-booster-section-icon" aria-hidden="true" />
                    {t("chatgptBooster.sections.codeTitle")}
                </h2>
                <p>{t("chatgptBooster.code.intro")}</p>

                <h3>{t("chatgptBooster.code.messageManagerTitle")}</h3>
                <p>{t("chatgptBooster.code.messageManagerText")}</p>
                <pre className="code-block">
                    <code
                        className="code-highlight"
                        dangerouslySetInnerHTML={{
                            __html: highlightTypeScript(String.raw`private recalculateVisibility(): void {
    if (!this.config.enabled) {
        for (const msg of this.messages) this.showMessage(msg);
        return;
    }

    const limit = this.config.visibleMessageLimit;
    const total = this.messages.length;

    for (let i = 0; i < total; i++) {
        const msg = this.messages[i];
        if (i < total - limit) {
            this.hideMessage(msg);
        } else {
            this.showMessage(msg);
        }
    }
}`),
                        }}
                    />
                </pre>

                <h3>{t("chatgptBooster.code.fifoTitle")}</h3>
                <p>{t("chatgptBooster.code.fifoText")}</p>
                <pre className="code-block">
                    <code
                        className="code-highlight"
                        dangerouslySetInnerHTML={{
                            __html: highlightTypeScript(String.raw`private enforceLimit(): void {
    if (!this.config.enabled) return;
    let excess = this.visibleCount - this.config.visibleMessageLimit;
    for (const msg of this.messages) {
        if (excess <= 0) break;
        if (msg.visible) {
            this.hideMessage(msg);
            excess--;
        }
    }
}`),
                        }}
                    />
                </pre>

                <h3>{t("chatgptBooster.code.domObserverTitle")}</h3>
                <p>{t("chatgptBooster.code.domObserverText")}</p>
                <pre className="code-block">
                    <code
                        className="code-highlight"
                        dangerouslySetInnerHTML={{
                            __html: highlightTypeScript(String.raw`private readonly handleMutations = (mutations: MutationRecord[]): void => {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
        this.processMutations(mutations);
    }, MUTATION_DEBOUNCE_MS);
};

private processMutations(mutations: MutationRecord[]): void {
    const addedMessages: HTMLElement[] = [];
    const removedMessages: HTMLElement[] = [];
    let conversationChanged = false;

    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            if (this.isMessageTurn(node)) {
                addedMessages.push(node);
            } else {
                const nested = node.querySelectorAll(Selectors.messageTurn);
                addedMessages.push(...nested);
            }
            if (this.isConversationContainer(node)) conversationChanged = true;
        }
        // ... same for removedNodes
    }
}`),
                        }}
                    />
                </pre>

                <h3>{t("chatgptBooster.code.backgroundTitle")}</h3>
                <p>{t("chatgptBooster.code.backgroundText")}</p>
                <pre className="code-block">
                    <code
                        className="code-highlight"
                        dangerouslySetInnerHTML={{
                            __html: highlightTypeScript(String.raw`async function broadcastToContentScripts(
    message: ExtensionMessageUnion,
): Promise<void> {
    const tabs = await api.tabs.query({ url: "*://chatgpt.com/*" });
    for (const tab of tabs) {
        if (tab.id == null) continue;
        try {
            await api.tabs.sendMessage(tab.id, message);
        } catch { /* tab not injected yet */ }
    }
}`),
                        }}
                    />
                </pre>
            </section>
        </>
    );
}
