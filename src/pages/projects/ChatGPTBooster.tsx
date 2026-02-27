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
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function ChatGPTBooster() {
    const { t } = useTranslation();

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
                className="chatgpt-booster-image"
                aria-labelledby="chatgpt-booster-image-heading"
            >
                <h2 id="chatgpt-booster-image-heading" className="sr-only">
                    {t("chatgptBooster.sections.screenshotTitle")}
                </h2>
                <figure>
                    <ImageBorder
                        src="/Projects/chatgptbooster/screenshot-1.png"
                        alt={t("chatgptBooster.image.alt")}
                        frame="chrome"
                    />
                    <figcaption>{t("chatgptBooster.image.caption")}</figcaption>
                </figure>
            </section>
        </>
    );
}
