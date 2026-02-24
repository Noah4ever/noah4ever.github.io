import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/nolicom.scss";
import {
    IoRadioOutline as SignalIcon,
    IoConstructOutline as BuildIcon,
    IoBugOutline as BugIcon,
    IoBatteryChargingOutline as PowerIcon,
    IoRocketOutline as FutureIcon,
    IoArrowForwardOutline as ArrowIcon,
} from "react-icons/io5";

export default function Nolicom() {
    const media = (fileName: string) => `/Projects/Nolicom/${fileName}`;

    const highlightCpp = (code: string) => {
        const escaped = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Extract comments first so other regexes don't corrupt them
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

        // Restore comments with their span wrapper
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
                <h1 id="nolicom-title">ESP32 Retro Desk Notifier</h1>
                <p className="nolicom-tagline">
                    A wireless attention device I built so two people in the same office can still communicate while wearing
                    headphones.
                </p>
            </section>

            <section className="project-section nolicom-story" aria-labelledby="nolicom-problem-heading">
                <h2 id="nolicom-problem-heading">Problem</h2>
                <blockquote>
                    <p>
                        My girlfriend and I share the same office room, and most days we both work with headphones on. Calling each
                        other didn&apos;t work, waving didn&apos;t work, flashing lights didn&apos;t work, and the only reliable option was standing up and walking around the
                        center desk.
                    </p>
                    <p>
                        That tiny interruption happened often enough to be genuinely annoying. I wanted a one-tap way to get
                        attention without talking over music or getting up.
                    </p>
                    <p>So I built a pair of desk devices: press the button <Arrow /> sound and light on the other desk.</p>
                </blockquote>
            </section>

            <section className="nolicom-alternating" data-image-side="right" aria-labelledby="nolicom-concept-heading">
                <div className="nolicom-alt-text">
                    <h2 id="nolicom-concept-heading">Concept</h2>
                    <p>
                        The concept is quite simple: two identical units, one per desk, both battery powered and USB-C chargeable. Both devices can send and receive.
                    </p>
                    <p>
                        Press the button on one device <Arrow /> the other plays a sound and blinks its LEDs.
                        No Wi-Fi router needed, just direct ESP-NOW peer-to-peer.
                    </p>
                    <p>
                        I wanted a retro design language for the
                        case because I really like that. I also have a Commodore 64. I wanted something that feels more like a desk object than a tech gadget.
                    </p>
                </div>
                <div className="nolicom-alt-image">
                    <figure>
                        <ImageBorder
                            src={media("Retro 1980s Electronic Device Design-second-mocku.webp")}
                            alt="Retro notifier concept render"
                            frame="chrome"
                            lookAtCursor
                        />
                        <figcaption>Early concept direction</figcaption>
                    </figure>
                </div>
            </section>

            <section className="nolicom-alternating" data-image-side="left" aria-labelledby="nolicom-hardware-heading">
                <div className="nolicom-alt-image">
                    <figure>
                        <ImageBorder
                            src={media("prototype-breadboard-testing-all-parts.webp")}
                            alt="Breadboard prototype with all hardware parts"
                            lookAtCursor
                        />
                        <figcaption>Full breadboard hardware prototype</figcaption>
                    </figure>
                </div>
                <div className="nolicom-alt-text">
                    <h2 id="nolicom-hardware-heading">Hardware Overview</h2>
                    <p>
                        I wanted the electronics to stay practical and repairable, so I used common, well-documented parts and
                        built everything around ESP32 power states and predictable I/O.
                    </p>
                    <p>
                        The core is straightforward:
                        <ul>
                            <li>ESP32 Wroom 32</li>
                            <li>LiPo battery</li>
                            <li>USB-C charge module (TP4056)</li>
                            <li>Step-up converter (MT3608)</li>
                            <li>Passive piezo buzzer</li>
                            <li>Three LEDs (green, yellow, red)</li>
                            <li>Push button</li>
                            <li>Power switch</li>
                            <li>Linear potentiometer</li>
                            <li>4-segment display</li>
                            <li>Shift register (74HC595)</li>
                            <li>Couple of resistors and wires</li>
                            <li>Custom 3D-printed enclosure</li>
                        </ul>
                        I started with a 2-segment display, but switched to 4 segments for more flexibility.
                    </p>
                    <p>
                        This analog slider ended up being one of my favorite details. It makes the interaction feel less
                        &quot;digital gadget&quot; and more like a tiny piece of desk hardware.
                    </p>
                </div>

            </section>

            <section className="project-section" aria-labelledby="nolicom-comms-heading">
                <h2 id="nolicom-comms-heading">Communication - ESP-NOW</h2>

                <p>
                    Protocol: <strong>ESP-NOW</strong> (direct peer-to-peer, no router required, fast and reliable).
                </p>

                <p>
                    Both ESP32 devices stay powered on and connected at all times.
                    This allows them to instantly send and receive small wireless signals
                    without any noticeable delay.
                </p>

                <ol className="nolicom-flow" aria-label="System flow">
                    <li>Both devices boot and initialize ESP-NOW in station mode.</li>
                    <li>The devices remain awake and continuously ready to communicate.</li>
                    <li>When the button is pressed, a small ESP-NOW packet is sent.</li>
                    <li>The receiver immediately starts LEDs, sound, and display feedback.</li>
                    <li>The feedback continues as long as button signals are received.</li>
                </ol>

                <figure className="nolicom-compact-media">
                    <ImageBorder
                        src={media("ESP-32-pinout.webp")}
                        alt="ESP32 pinout reference"
                        frame="chrome"
                        lookAtCursor
                    />
                    <figcaption>ESP32 reference while wiring and mapping I/O</figcaption>
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
                    <h2 id="nolicom-prototype-heading">Initial Prototype &amp; Weird ESP Bug</h2>
                    <p>
                        Before building the real device, I made a minimal prototype to learn pairing, packet flow, wake/sleep
                        behavior, and latency.
                    </p>
                    <p>
                        I hit a frustrating bug: random button detection, random send behavior, and occasional looping on one ESP32.
                        With my mobile oscilloscope I could see irregular signal behavior. After ruling out wiring/software, I
                        replaced the ESP32 module and everything worked reliably.
                    </p>
                    <p>
                        Conclusion: the first ESP32 was likely faulty. Painful debug session, but very valuable.
                    </p>
                    <p>
                        That phase changed how I debug hardware: if behavior is inconsistent in a way software can&apos;t explain,
                        test the physical module early instead of last.
                    </p>
                </div>
                <div className="nolicom-alt-image">
                    <figure>
                        <video className="nolicom-inline-video" controls playsInline preload="metadata">
                            <source src={media("first-esp-now-test-bugs-with-esp32-looping-weird-and-not-responding.MP4")} type="video/mp4" />
                        </video>
                        <figcaption>Early ESP-NOW test with unstable behavior</figcaption>
                    </figure>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-build-heading">
                <h2 id="nolicom-build-heading">Full Prototype</h2>
                <p>
                    After ESP-NOW was stable, I integrated everything into a complete breadboard prototype. This was the
                    stage where the idea finally felt real for the button, buzzer, LEDs, potentiometer, and the whole power system
                    running together as one unit.
                </p>

                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("magnifier-push-button-soldering-wide-angle.webp")} alt="Prototype on breadboard" lookAtCursor />
                        <figcaption>Magnifier soldering</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("first-prototype-a-lot-of-cables.webp")} alt="Close-up soldering work" lookAtCursor />
                        <figcaption>Breadboard integration</figcaption>
                    </figure>
                </div>
                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("prototype-on-breadboard.webp")} alt="Prototype on breadboard" lookAtCursor />
                        <figcaption>Breadboard integration 2</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("magnifier-esp32-soldering.webp")} alt="Close-up soldering work" lookAtCursor />
                        <figcaption>Fine soldering and inspection</figcaption>
                    </figure>
                </div>
                <div className="nolicom-video-row full-width">
                    <figure>
                        <video controls playsInline preload="metadata">
                            <source src={media("prototype-test-with-lights-and-buzzer-sound.mp4")} type="video/mp4" />
                        </video>
                        <figcaption>Prototype test with lights and buzzer sound</figcaption>
                    </figure>
                </div>
            </section>

            <section className="project-section nolicom-workspace" aria-labelledby="nolicom-workspace-heading">
                <h2 id="nolicom-workspace-heading">The Workspace</h2>
                <p>
                    Most of the soldering, testing, and final assembly happened right at my hobby desk.
                </p>
                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("workspace.webp")} alt="Workspace desk during the build" lookAtCursor />
                        <figcaption>Build workspace</figcaption>
                    </figure>
                    <figure className="nolicom-workspace-video">
                        <video controls playsInline preload="metadata">
                            <source src={media("workspace-video.MOV")} type="video/mp4" />
                        </video>
                        <figcaption>Workspace during the build</figcaption>
                    </figure>
                </div>
            </section>

            <section className="nolicom-alternating" data-image-side="left" aria-labelledby="nolicom-enclosure-heading">
                <div className="nolicom-alt-image">
                    <figure>
                        <ImageBorder src={media("3d-model-blender.webp")} alt="Blender enclosure model" frame="safari" lookAtCursor />
                        <figcaption>Enclosure modeling in Blender</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("3d-model-blender-wireframe.webp")} alt="Blender wireframe of enclosure" frame="safari" lookAtCursor />
                        <figcaption>Wireframe + iteration phase</figcaption>
                    </figure>
                </div>
                <div className="nolicom-alt-text">
                    <h2 id="nolicom-enclosure-heading">Case Design</h2>
                    <p>
                        I modeled the case from scratch in Blender and iterated several times to get the proportions right.
                        The priority was fitting the battery and charging board first, then tuning all the openings for the speaker,
                        potentiometer slot and USB-C access so the final interaction felt deliberate rather than cramped.
                    </p>
                    <p>
                        I went for compact proportions with retro styling, internal mounting posts, and enough wall thickness
                        that the case feels solid.
                    </p>
                    <p>
                        <em>Not so fun fact:</em> after I switched to Arch Linux, I realized I hadn&apos;t backed up the original .blend file.
                        All I have left now are the .goo slicer files for the printer. The screenshots are all that
                        remains of the original design work.
                    </p>

                    <div className="nolicom-media-grid">
                        <figure>
                            <ImageBorder src={media("3d-model-of-retro-case.webp")} alt="3D model of retro case showcase" frame="safari" lookAtCursor />
                            <figcaption>3D model of retro case showcase</figcaption>
                        </figure>
                    </div>
                </div>

            </section>

            <section className="project-section" aria-labelledby="nolicom-printing-heading">
                <h2 id="nolicom-printing-heading">3D Printing</h2>
                <p>
                    PLA gave me cheap iteration, first fit checks and no messy and toxic workflow. Resin gave me the final surface quality and cleaner edges I
                    wanted for the retro look.
                </p>
                <p>
                    Working with resin is really annoying to me because i have to wear gloves and change them all the time. The smell is also not very pleasant and feels toxic.
                    Thats why I wear a mask while working with it. The final result looks <em>incredible</em>, but I probably would have preferred a high-quality PLA print with more post-processing instead of the hassle of resin.
                </p>
                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("prototype-pla-front.webp")} alt="First PLA print" lookAtCursor />
                        <figcaption>PLA fit and alignment validation</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("finished-resin-print-assembled-front.webp")} alt="Finished resin print assembled" lookAtCursor />
                        <figcaption>Final resin print and assembly</figcaption>
                    </figure>
                </div>
                <div className="nolicom-video-row">
                    <figure>
                        <video controls playsInline preload="metadata">
                            <source src={media("pla-3d-printer-printing.MP4")} type="video/mp4" />
                        </video>
                        <figcaption>PLA print process</figcaption>
                    </figure>
                </div>
            </section>

            <section className="project-section nolicom-finishing" aria-labelledby="nolicom-finishing-heading">
                <h2 id="nolicom-finishing-heading">Finale</h2>
                <p>
                    I painted the top in a retro beige tone and the bottom in black. But the finish developed cracks. I think it was due to using too much paint or a primer mismatch. Still functional, but visually rough.
                </p>
                <p>
                    And then the final accident happened: I accidentally kicked it down the stairs. The electronics survived,
                    but the resin case shattered .
                </p>
                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("finished-case-colored-front.webp")} alt="Painted front with retro beige finish" lookAtCursor />
                        <figcaption>Painted final look</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("finished-case-colored-slight-color-cracks.webp")} alt="Paint cracks on enclosure" lookAtCursor />
                        <figcaption>Cracking issue in finish</figcaption>
                    </figure>
                </div>
                <div className="nolicom-media-grid full-width">
                    <figure>
                        <ImageBorder src={media("broken-case.webp")} alt="Broken case" lookAtCursor />
                        <figcaption>Broken case</figcaption>
                    </figure>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-lessons-heading">
                <h2 id="nolicom-lessons-heading">Lessons Learned</h2>
                <div className="nolicom-columns">
                    <article className="nolicom-column-card">
                        <h3>
                            <BugIcon aria-hidden="true" /> Technical
                        </h3>
                        <p>
                            ESP-NOW turned out to be excellent for this kind of ultra-local, low-power communication. One
                            thing I didn&apos;t expect: sleep state management needs careful design,
                            and the ADC <Arrow /> PWM brightness mapping ended up being surprisingly reliable once wired
                            correctly.
                        </p>
                    </article>
                    <article className="nolicom-column-card">
                        <h3>
                            <BuildIcon aria-hidden="true" /> Mechanical / Design
                        </h3>
                        <p>
                            Resin gives you a premium surface but it&apos;s way more annoying to work with than PLA. The paint process and compatibility
                            between primer, paint, and curing matter a lot more than I expected. Analog controls like the
                            potentiometer make the whole interaction feel better.
                        </p>
                    </article>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-future-heading">
                <h2 id="nolicom-future-heading">Future Improvements</h2>
                <p>
                    If I rebuild this (and I probably will), there are a few things I&apos;d change. Thicker internal
                    supports and softer edge geometry to improve durability. A better primer process with thinner paint
                    coats to avoid the cracking. I&apos;d also like to try a vibration motor instead of the buzzer for
                    quieter notifications, and look into a magnetic desk mount
                    with impact-resistant material for the case ;)
                </p>
            </section>

            <section className="project-section" aria-labelledby="nolicom-conclusion-heading">
                <h2 id="nolicom-conclusion-heading">Conclusion</h2>
                <p>
                    This project solved a very real desk problem with a simple interaction: <strong>press the button <Arrow /> light + sound</strong>.
                </p>
                <p>
                    It combines embedded systems, low-power wireless communication, modeling, 3D printing, analog control,
                    and a lot of practical debugging. Despite one destroying staircase incident, it worked for the intended purpose and it was worth building.
                </p>
            </section>
        </div>
    );
}
