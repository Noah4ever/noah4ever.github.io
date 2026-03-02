import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/ai_chat_speed_boost.scss";
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

export default function AIChatSpeedBoost() {
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
                className="ai-chat-speed-boost-hero"
                aria-labelledby="ai-chat-speed-boost-title"
            >
                <div className="ai-chat-speed-boost-hero-icon" aria-hidden="true">
                    <RocketIcon />
                </div>
                <h1 id="ai-chat-speed-boost-title">{t("aiChatSpeedBoost.hero.title")}</h1>
                <div className="project-hero-badges">
                    <a
                        href="https://github.com/Noah4ever/ai-chat-speed-boost"
                        className="view-github-badge"
                    >
                        View on GitHub <GithubIcon />
                    </a>
                </div>
                <p className="ai-chat-speed-boost-tagline">
                    {t("aiChatSpeedBoost.hero.tagline")}
                </p>
            </section>

            <section
                className="project-section"
                aria-labelledby="ai-chat-speed-boost-what-heading"
            >
                <h2 id="ai-chat-speed-boost-what-heading">
                    {t("aiChatSpeedBoost.sections.whatTitle")}
                </h2>
                <p>{t("aiChatSpeedBoost.sections.whatText")}</p>
            </section>

            <section
                className="ai-chat-speed-boost-image"
                aria-labelledby="ai-chat-speed-boost-image-heading"
            >
                <h2 id="ai-chat-speed-boost-image-heading" className="sr-only">
                    {t("aiChatSpeedBoost.sections.screenshotTitle")}
                </h2>
                <figure>
                    <ImageBorder
                        src="/Projects/ai-chat-speed-boost/speed-booster-popup.png"
                        alt={t("aiChatSpeedBoost.image.alt")}
                    />
                    <figcaption>{t("aiChatSpeedBoost.image.caption")}</figcaption>
                </figure>
            </section>


            <section
                className="project-section"
                aria-labelledby="ai-chat-speed-boost-settings-heading"
            >
                <h2 id="ai-chat-speed-boost-settings-heading">
                    {t("aiChatSpeedBoost.sections.settingsTitle")}
                </h2>
                <ul className="ai-chat-speed-boost-feature-list" role="list">
                    <li>
                        <span aria-hidden="true">
                            <VisibleIcon />
                        </span>
                        <div>
                            <strong>{t("aiChatSpeedBoost.settings.visibleTitle")}</strong>
                            <p>{t("aiChatSpeedBoost.settings.visibleText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <BatchIcon />
                        </span>
                        <div>
                            <strong>{t("aiChatSpeedBoost.settings.batchTitle")}</strong>
                            <p>{t("aiChatSpeedBoost.settings.batchText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <ToggleIcon />
                        </span>
                        <div>
                            <strong>{t("aiChatSpeedBoost.settings.toggleTitle")}</strong>
                            <p>{t("aiChatSpeedBoost.settings.toggleText")}</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section
                className="project-section"
                aria-labelledby="ai-chat-speed-boost-how-heading"
            >
                <h2 id="ai-chat-speed-boost-how-heading">
                    {t("aiChatSpeedBoost.sections.howTitle")}
                </h2>
                <ul className="ai-chat-speed-boost-feature-list" role="list">
                    <li>
                        <span aria-hidden="true">
                            <FlashIcon />
                        </span>
                        <div>
                            <strong>{t("aiChatSpeedBoost.how.lazyTitle")}</strong>
                            <p>{t("aiChatSpeedBoost.how.lazyText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <VisibleIcon />
                        </span>
                        <div>
                            <strong>{t("aiChatSpeedBoost.how.hiddenTitle")}</strong>
                            <p>{t("aiChatSpeedBoost.how.hiddenText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <LoadMoreIcon />
                        </span>
                        <div>
                            <strong>{t("aiChatSpeedBoost.how.loadMoreTitle")}</strong>
                            <p>{t("aiChatSpeedBoost.how.loadMoreText")}</p>
                        </div>
                    </li>
                    <li>
                        <span aria-hidden="true">
                            <FifoIcon />
                        </span>
                        <div>
                            <strong>{t("aiChatSpeedBoost.how.fifoTitle")}</strong>
                            <p>{t("aiChatSpeedBoost.how.fifoText")}</p>
                        </div>
                    </li>
                </ul>
            </section>


            <section
                className="project-section"
                aria-labelledby="ai-chat-speed-boost-privacy-heading"
            >
                <h2 id="ai-chat-speed-boost-privacy-heading">
                    {t("aiChatSpeedBoost.sections.privacyTitle")}
                </h2>
                <div className="ai-chat-speed-boost-privacy-card">
                    <div className="ai-chat-speed-boost-privacy-icon" aria-hidden="true">
                        <PrivacyIcon />
                    </div>
                    <ul>
                        <li>{t("aiChatSpeedBoost.privacy.noRead")}</li>
                        <li>{t("aiChatSpeedBoost.privacy.noAnalytics")}</li>
                        <li>{t("aiChatSpeedBoost.privacy.localStorage")}</li>
                        <li>{t("aiChatSpeedBoost.privacy.openSource")}</li>
                    </ul>
                </div>
            </section>

            <section
                className="project-section"
                aria-labelledby="ai-chat-speed-boost-tech-heading"
            >
                <h2 id="ai-chat-speed-boost-tech-heading">
                    {t("aiChatSpeedBoost.sections.techTitle")}
                </h2>
                <div className="ai-chat-speed-boost-tech-card">
                    <div className="ai-chat-speed-boost-tech-icon" aria-hidden="true">
                        <SettingsIcon />
                    </div>
                    <p>{t("aiChatSpeedBoost.tech.text")}</p>
                </div>
            </section>

            <section
                className="project-section"
                aria-labelledby="ai-chat-speed-boost-build-heading"
            >
                <h2 id="ai-chat-speed-boost-build-heading">
                    <BuildIcon className="ai-chat-speed-boost-section-icon" aria-hidden="true" />
                    {t("aiChatSpeedBoost.sections.buildTitle")}
                </h2>
                <p>{t("aiChatSpeedBoost.build.p1")}</p>
                <p>{t("aiChatSpeedBoost.build.p2")}</p>
                <p>{t("aiChatSpeedBoost.build.p3")}</p>
            </section>

            <section
                className="project-section ai-chat-speed-boost-code-section"
                aria-labelledby="ai-chat-speed-boost-code-heading"
            >
                <h2 id="ai-chat-speed-boost-code-heading">
                    <CodeIcon className="ai-chat-speed-boost-section-icon" aria-hidden="true" />
                    {t("aiChatSpeedBoost.sections.codeTitle")}
                </h2>
                <p>{t("aiChatSpeedBoost.code.intro")}</p>

                <h3>{t("aiChatSpeedBoost.code.messageManagerTitle")}</h3>
                <p>{t("aiChatSpeedBoost.code.messageManagerText")}</p>
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

                <h3>{t("aiChatSpeedBoost.code.fifoTitle")}</h3>
                <p>{t("aiChatSpeedBoost.code.fifoText")}</p>
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

                <h3>{t("aiChatSpeedBoost.code.domObserverTitle")}</h3>
                <p>{t("aiChatSpeedBoost.code.domObserverText")}</p>
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

                <h3>{t("aiChatSpeedBoost.code.backgroundTitle")}</h3>
                <p>{t("aiChatSpeedBoost.code.backgroundText")}</p>
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
