import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/nolicom.scss";
import {
    IoRadioOutline as SignalIcon,
    IoConstructOutline as BuildIcon,
    IoBugOutline as BugIcon,
    IoArrowForwardOutline as ArrowIcon,
} from "react-icons/io5";
import { Trans, useTranslation } from "react-i18next";

export default function Nolicom() {
    const { t } = useTranslation();
    const media = (fileName: string) => `/Projects/Nolicom/${fileName}`;

    const highlightCpp = (code: string) => {
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
                /("(?:\\.|[^"\\])*")/g,
                '<span class="ts-string">$1</span>',
            )
            .replace(
                /\b(if|else|return|const|void|true|false)\b/g,
                '<span class="ts-keyword">$1</span>',
            )
            .replace(/\b(esp_now_send|analogRead|ledcWrite|esp_sleep_enable_ext0_wakeup|esp_deep_sleep_start|memcmp|leds|buzz|disp|buttonPressed)\b/g, '<span class="ts-type">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="ts-number">$1</span>');

        return highlighted.replace(/__COMMENT_(\d+)__/g, (_, i) =>
            `<span class="ts-comment">${comments[Number(i)]}</span>`,
        );
    };

    const Arrow = () => <ArrowIcon className="nolicom-inline-arrow" aria-hidden="true" />;

    return (
        <div className="nolicom-page">
            <section className="nolicom-hero" aria-labelledby="nolicom-title">
                <div className="nolicom-hero-icon" aria-hidden="true">
                    <SignalIcon />
                </div>
                <h1 id="nolicom-title">{t("nolicom.hero.title")}</h1>
                <p className="nolicom-tagline">{t("nolicom.hero.tagline")}</p>
            </section>

            <section className="project-section nolicom-story" aria-labelledby="nolicom-problem-heading">
                <h2 id="nolicom-problem-heading">{t("nolicom.problem.title")}</h2>
                <blockquote>
                    <p>{t("nolicom.problem.p1")}</p>
                    <p>{t("nolicom.problem.p2")}</p>
                    <p>
                        <Trans i18nKey="nolicom.problem.p3" components={[<Arrow key="problem-arrow" />]} />
                    </p>
                </blockquote>
            </section>

            <section className="nolicom-alternating" data-image-side="right" aria-labelledby="nolicom-concept-heading">
                <div className="nolicom-alt-text">
                    <h2 id="nolicom-concept-heading">{t("nolicom.concept.title")}</h2>
                    <p>{t("nolicom.concept.p1")}</p>
                    <p>
                        <Trans i18nKey="nolicom.concept.p2" components={[<Arrow key="concept-arrow" />]} />
                    </p>
                    <p>{t("nolicom.concept.p3")}</p>
                </div>
                <div className="nolicom-alt-image">
                    <figure>
                        <ImageBorder
                            src={media("Retro 1980s Electronic Device Design-second-mocku.webp")}
                            alt={t("nolicom.media.conceptAlt")}
                            frame="safari"
                            lookAtCursor
                        />
                        <figcaption>{t("nolicom.media.conceptCaption")}</figcaption>
                    </figure>
                </div>
            </section>

            <section className="nolicom-alternating" data-image-side="left" aria-labelledby="nolicom-hardware-heading">
                <div className="nolicom-alt-image">
                    <figure>
                        <ImageBorder
                            src={media("prototype-breadboard-testing-all-parts.webp")}
                            alt={t("nolicom.media.hardwareProtoAlt")}
                            lookAtCursor
                        />
                        <figcaption>{t("nolicom.media.hardwareProtoCaption")}</figcaption>
                    </figure>
                </div>
                <div className="nolicom-alt-text">
                    <h2 id="nolicom-hardware-heading">{t("nolicom.hardware.title")}</h2>
                    <p>{t("nolicom.hardware.p1")}</p>
                    <p>{t("nolicom.hardware.p2")}</p>
                    <ul className="nolicom-list" role="list">
                        <li>{t("nolicom.hardware.list.esp32")}</li>
                        <li>{t("nolicom.hardware.list.lipo")}</li>
                        <li>{t("nolicom.hardware.list.tp4056")}</li>
                        <li>{t("nolicom.hardware.list.mt3608")}</li>
                        <li>{t("nolicom.hardware.list.buzzer")}</li>
                        <li>{t("nolicom.hardware.list.leds")}</li>
                        <li>{t("nolicom.hardware.list.button")}</li>
                        <li>{t("nolicom.hardware.list.switch")}</li>
                        <li>{t("nolicom.hardware.list.poti")}</li>
                        <li>{t("nolicom.hardware.list.display")}</li>
                        <li>{t("nolicom.hardware.list.shift")}</li>
                        <li>{t("nolicom.hardware.list.misc")}</li>
                        <li>{t("nolicom.hardware.list.case")}</li>
                    </ul>
                    <p>{t("nolicom.hardware.p3")}</p>
                    <p>{t("nolicom.hardware.p4")}</p>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-comms-heading">
                <h2 id="nolicom-comms-heading">{t("nolicom.comms.title")}</h2>
                <p>
                    {t("nolicom.comms.protocolPrefix")} <strong>ESP-NOW</strong> {t("nolicom.comms.protocolSuffix")}
                </p>
                <p>{t("nolicom.comms.p1")}</p>

                <ol className="nolicom-flow" aria-label={t("nolicom.comms.flowLabel")}>
                    <li>{t("nolicom.comms.flow1")}</li>
                    <li>{t("nolicom.comms.flow2")}</li>
                    <li>{t("nolicom.comms.flow3")}</li>
                    <li>{t("nolicom.comms.flow4")}</li>
                    <li>{t("nolicom.comms.flow5")}</li>
                </ol>

                <figure className="nolicom-compact-media">
                    <ImageBorder
                        src={media("ESP-32-pinout.webp")}
                        alt={t("nolicom.media.pinoutAlt")}
                        frame="chrome"
                        lookAtCursor
                    />
                    <figcaption>{t("nolicom.media.pinoutCaption")}</figcaption>
                </figure>

                <pre className="code-block">
                    <code
                        className="code-highlight"
                        dangerouslySetInnerHTML={{
                            __html: highlightCpp(String.raw`// Receive callback
void onRecv(const uint8_t* mac, const uint8_t* data, int len) {
  if (len == 4 && memcmp(data, "PING", 4) == 0) {
    leds.playLEDAnim(TriLeds::Anim::ChaseGYR);
    buzz.play(BuiltInMelody::BEEP_BEEP, false);
    disp.setBlinkingText("HI", 300);
  }
}

// Main loop
void loop() {
  disp.refresh();
  buzz.update();
  leds.update();

  if (buttonPressed()) {
    esp_now_send(peerMac, (uint8_t*)"PING", 4);
  }
}`),
                        }}
                    />
                </pre>
            </section>

            <section className="nolicom-alternating" data-image-side="right" aria-labelledby="nolicom-prototype-heading">
                <div className="nolicom-alt-text">
                    <h2 id="nolicom-prototype-heading">{t("nolicom.prototype.title")}</h2>
                    <p>{t("nolicom.prototype.p1")}</p>
                    <p>{t("nolicom.prototype.p2")}</p>
                    <p>{t("nolicom.prototype.p3")}</p>
                    <p>{t("nolicom.prototype.p4")}</p>
                </div>
                <div className="nolicom-alt-image">
                    <figure>
                        <video className="nolicom-inline-video" controls playsInline preload="metadata">
                            <source src={media("first-esp-now-test-bugs-with-esp32-looping-weird-and-not-responding.MP4") + "#t=0.001"} type="video/mp4" />
                        </video>
                        <figcaption>{t("nolicom.media.firstTestCaption")}</figcaption>
                    </figure>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-build-heading">
                <h2 id="nolicom-build-heading">{t("nolicom.build.title")}</h2>
                <p>{t("nolicom.build.p1")}</p>

                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("magnifier-push-button-soldering-wide-angle.webp")} alt={t("nolicom.media.magnifierWideAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.magnifierWideCaption")}</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("first-prototype-a-lot-of-cables.webp")} alt={t("nolicom.media.firstPrototypeAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.firstPrototypeCaption")}</figcaption>
                    </figure>
                </div>
                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("prototype-on-breadboard.webp")} alt={t("nolicom.media.breadboard2Alt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.breadboard2Caption")}</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("magnifier-esp32-soldering.webp")} alt={t("nolicom.media.espSolderAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.espSolderCaption")}</figcaption>
                    </figure>
                </div>
                <div className="nolicom-video-row full-width">
                    <figure>
                        <video controls playsInline preload="metadata">
                            <source src={media("prototype-test-with-lights-and-buzzer-sound.mp4") + "#t=0.001"} type="video/mp4" />
                        </video>
                        <figcaption>{t("nolicom.media.protoTestCaption")}</figcaption>
                    </figure>
                </div>
            </section>

            <section className="project-section nolicom-workspace" aria-labelledby="nolicom-workspace-heading">
                <h2 id="nolicom-workspace-heading">{t("nolicom.workspace.title")}</h2>
                <p>{t("nolicom.workspace.p1")}</p>
                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("workspace.webp")} alt={t("nolicom.media.workspaceAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.workspaceCaption")}</figcaption>
                    </figure>
                    <figure className="nolicom-workspace-video">
                        <video controls playsInline preload="metadata">
                            <source src={media("workspace-video.MOV") + "#t=0.001"} type="video/mp4" />
                        </video>
                        <figcaption>{t("nolicom.media.workspaceVideoCaption")}</figcaption>
                    </figure>
                </div>
            </section>

            <section className="nolicom-alternating" data-image-side="left" aria-labelledby="nolicom-enclosure-heading">
                <div className="nolicom-alt-image">
                    <figure>
                        <ImageBorder src={media("3d-model-blender.webp")} alt={t("nolicom.media.blenderAlt")} frame="safari" lookAtCursor />
                        <figcaption>{t("nolicom.media.blenderCaption")}</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("3d-model-blender-wireframe.webp")} alt={t("nolicom.media.wireframeAlt")} frame="safari" lookAtCursor />
                        <figcaption>{t("nolicom.media.wireframeCaption")}</figcaption>
                    </figure>
                </div>
                <div className="nolicom-alt-text">
                    <h2 id="nolicom-enclosure-heading">{t("nolicom.enclosure.title")}</h2>
                    <p>{t("nolicom.enclosure.p1")}</p>
                    <p>{t("nolicom.enclosure.p2")}</p>
                    <p>
                        <Trans i18nKey="nolicom.enclosure.p3" components={[<em key="enclosure-em" />]} />
                    </p>

                    <div className="nolicom-media-grid">
                        <figure>
                            <ImageBorder src={media("3d-model-of-retro-case.webp")} alt={t("nolicom.media.caseShowcaseAlt")} frame="safari" lookAtCursor />
                            <figcaption>{t("nolicom.media.caseShowcaseCaption")}</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-printing-heading">
                <h2 id="nolicom-printing-heading">{t("nolicom.printing.title")}</h2>
                <p>{t("nolicom.printing.p1")}</p>
                <p>
                    <Trans i18nKey="nolicom.printing.p2" components={[<em key="printing-em" />]} />
                </p>
                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("prototype-pla-front.webp")} alt={t("nolicom.media.plaAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.plaCaption")}</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("finished-resin-print-assembled-front.webp")} alt={t("nolicom.media.resinAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.resinCaption")}</figcaption>
                    </figure>
                </div>
                <div className="nolicom-video-row full-width media-height-restrict">
                    <figure>
                        <video controls playsInline preload="metadata">
                            <source src={media("pla-3d-printer-printing.MP4") + "#t=0.001"} type="video/mp4" />
                        </video>
                        <figcaption>{t("nolicom.media.plaVideoCaption")}</figcaption>
                    </figure>
                </div>
            </section>

            <section className="project-section nolicom-finishing" aria-labelledby="nolicom-finishing-heading">
                <h2 id="nolicom-finishing-heading">{t("nolicom.finishing.title")}</h2>
                <p>{t("nolicom.finishing.p1")}</p>
                <p>{t("nolicom.finishing.p2")}</p>
                <div className="nolicom-media-grid full-width media-height-restrict">
                    <figure>
                        <ImageBorder src={media("finished-case-colored-front.webp")} alt={t("nolicom.media.paintedAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.paintedCaption")}</figcaption>
                    </figure>
                </div>
                <div className="nolicom-media-grid full-width media-height-restrict">
                    <figure>
                        <ImageBorder src={media("finished-case-colored-slight-color-cracks.webp")} alt={t("nolicom.media.cracksAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.cracksCaption")}</figcaption>
                    </figure>
                </div>
                <div className="nolicom-media-grid full-width media-height-restrict">
                    <figure>
                        <ImageBorder src={media("broken-case.webp")} alt={t("nolicom.media.brokenAlt")} lookAtCursor />
                        <figcaption>{t("nolicom.media.brokenCaption")}</figcaption>
                    </figure>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-lessons-heading">
                <h2 id="nolicom-lessons-heading">{t("nolicom.lessons.title")}</h2>
                <div className="nolicom-columns">
                    <article className="nolicom-column-card">
                        <h3>
                            <BugIcon aria-hidden="true" /> {t("nolicom.lessons.techTitle")}
                        </h3>
                        <p>
                            <Trans i18nKey="nolicom.lessons.techText" components={[<Arrow key="lessons-arrow" />]} />
                        </p>
                    </article>
                    <article className="nolicom-column-card">
                        <h3>
                            <BuildIcon aria-hidden="true" /> {t("nolicom.lessons.mechTitle")}
                        </h3>
                        <p>{t("nolicom.lessons.mechText")}</p>
                    </article>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-future-heading">
                <h2 id="nolicom-future-heading">{t("nolicom.future.title")}</h2>
                <p>{t("nolicom.future.p1")}</p>
            </section>

            <section className="project-section" aria-labelledby="nolicom-conclusion-heading">
                <h2 id="nolicom-conclusion-heading">{t("nolicom.conclusion.title")}</h2>
                <p>
                    <Trans
                        i18nKey="nolicom.conclusion.p1"
                        components={[<strong key="conclusion-strong" />, <Arrow key="conclusion-arrow" />]}
                    />
                </p>
                <p>{t("nolicom.conclusion.p2")}</p>
            </section>
        </div>
    );
}
