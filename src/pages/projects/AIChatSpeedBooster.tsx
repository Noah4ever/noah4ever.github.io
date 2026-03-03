import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/ai_chat_speed_booster.scss";
import {
    IoRocketOutline as RocketIcon,
    IoLogoGithub as GithubIcon,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function AIChatSpeedBooster() {
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
                className="ai-chat-speed-booster-hero"
                aria-labelledby="ai-chat-speed-booster-title"
            >
                <div className="ai-chat-speed-booster-hero-icon" aria-hidden="true">
                    <RocketIcon />
                </div>
                <h1 id="ai-chat-speed-booster-title">{t("aiChatSpeedBooster.hero.title")}</h1>
                <div className="project-hero-badges">
                    <a
                        href="https://github.com/Noah4ever/ai-chat-speed-booster"
                        className="view-github-badge"
                    >
                        View on GitHub <GithubIcon />
                    </a>
                </div>
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
                        <div>
                            <strong>{t("aiChatSpeedBooster.settings.visibleTitle")}</strong>
                            <p>{t("aiChatSpeedBooster.settings.visibleText")}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>{t("aiChatSpeedBooster.settings.batchTitle")}</strong>
                            <p>{t("aiChatSpeedBooster.settings.batchText")}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>{t("aiChatSpeedBooster.settings.toggleTitle")}</strong>
                            <p>{t("aiChatSpeedBooster.settings.toggleText")}</p>
                        </div>
                    </li>
                </ul>
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
                        <div>
                            <strong>{t("aiChatSpeedBooster.how.lazyTitle")}</strong>
                            <p>{t("aiChatSpeedBooster.how.lazyText")}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>{t("aiChatSpeedBooster.how.hiddenTitle")}</strong>
                            <p>{t("aiChatSpeedBooster.how.hiddenText")}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>{t("aiChatSpeedBooster.how.loadMoreTitle")}</strong>
                            <p>{t("aiChatSpeedBooster.how.loadMoreText")}</p>
                        </div>
                    </li>
                    <li>
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

                <h3>{t("aiChatSpeedBooster.code.fifoTitle")}</h3>
                <p>{t("aiChatSpeedBooster.code.fifoText")}</p>
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

                <h3>{t("aiChatSpeedBooster.code.domObserverTitle")}</h3>
                <p>{t("aiChatSpeedBooster.code.domObserverText")}</p>
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

                <h3>{t("aiChatSpeedBooster.code.backgroundTitle")}</h3>
                <p>{t("aiChatSpeedBooster.code.backgroundText")}</p>
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
