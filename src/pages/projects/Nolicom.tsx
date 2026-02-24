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

        return escaped
            .replace(/(\/\/.*$)/gm, '<span class="ts-comment">$1</span>')
            .replace(
                /("(?:\\.|[^"\\])*")/g,
                '<span class="ts-string">$1</span>',
            )
            .replace(
                /\b(if|else|return|const|void|true|false)\b/g,
                '<span class="ts-keyword">$1</span>',
            )
            .replace(/\b(esp_now_send|analogRead|ledcWrite|esp_sleep_enable_ext0_wakeup|esp_deep_sleep_start)\b/g, '<span class="ts-type">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="ts-number">$1</span>');
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
                        The concept is intentionally simple: two identical units, one per desk, both battery powered and fully
                        symmetric. Either device can both send and receive.
                    </p>
                    <p>
                        Press the button on one device <Arrow /> the other plays a sound and blinks its LEDs.
                        No Wi-Fi router needed, just direct ESP-NOW peer-to-peer. I wanted a retro design language for the
                        case, something that feels more like a desk object than a tech gadget.
                    </p>
                    <p>
                        That symmetry mattered to me because it keeps things natural. No &quot;base station&quot;, no hierarchy,
                        no setup friction once paired.
                    </p>
                </div>
                <div className="nolicom-alt-image">
                    <figure>
                        <ImageBorder
                            src={media("Retro-Style 80s-Inspired Digital Device-Design-mockup.webp")}
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
                        The core is straightforward: two ESP32 boards, a LiPo battery with USB-C charging, a buzzer for audio
                        feedback, three LEDs, a push button, and a custom 3D-printed enclosure. I also started with a 2-segment
                        anode display early on, but later switched to 4 segments for more flexibility.
                    </p>
                    <div className="nolicom-feature-card">
                        <span aria-hidden="true">
                            <BuildIcon />
                        </span>
                        <div>
                            <strong>Brightness control (analog feel)</strong>
                            <p>
                                A linear potentiometer controls LED brightness through ADC <Arrow /> PWM mapping. That gives
                                tactile, analog-feeling control with adjustable visibility and less glare in darker rooms.
                            </p>
                        </div>
                    </div>
                    <p>
                        This analog slider ended up being one of my favorite details. It makes the interaction feel less
                        &quot;digital gadget&quot; and more like a tiny piece of desk hardware.
                    </p>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-comms-heading">
                <h2 id="nolicom-comms-heading">Communication – ESP-NOW</h2>
                <p>
                    Protocol: <strong>ESP-NOW</strong> (direct peer-to-peer, no router, low latency, low power).
                </p>
                <p>
                    The key requirement was waking fast, sending a tiny signal reliably, then going back to sleep for battery
                    life. ESP-NOW matched that model better than classic Wi-Fi for this use case.
                </p>
                <ol className="nolicom-flow" aria-label="System flow">
                    <li>Device is in deep sleep.</li>
                    <li>Button press wakes ESP32.</li>
                    <li>ESP32 sends ESP-NOW packet.</li>
                    <li>Receiver wakes, verifies sender, plays sound, flashes LEDs (with potentiometer brightness).</li>
                    <li>Both devices return to sleep.</li>
                </ol>
                <figure className="nolicom-compact-media">
                    <ImageBorder src={media("ESP-32-pinout.webp")} alt="ESP32 pinout reference" frame="chrome" lookAtCursor />
                    <figcaption>ESP32 reference while wiring and mapping I/O</figcaption>
                </figure>
                <pre className="code-block">
                    <code
                        className="code-highlight"
                        dangerouslySetInnerHTML={{
                            __html: highlightCpp(String.raw`void loop() {
    const int brightness = analogRead(34);
    ledcWrite(0, map(brightness, 0, 4095, 0, 255));

    if (buttonPressed()) {
        esp_now_send(peerMac, (uint8_t*)"PING", 4);
    }

    esp_sleep_enable_ext0_wakeup(GPIO_NUM_0, 0);
    esp_deep_sleep_start();
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
                    <video className="nolicom-inline-video" controls playsInline preload="metadata">
                        <source src={media("first-esp-now-test-bugs-with-esp32-looping-weird-and-not-responding.MP4")} type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-build-heading">
                <h2 id="nolicom-build-heading">Full Prototype</h2>
                <p>
                    After ESP-NOW was stable, I integrated everything into a complete breadboard prototype. This was the
                    stage where the idea finally felt real — button, buzzer, LEDs, potentiometer, and the whole power system
                    running together as one unit.
                </p>
                <div className="nolicom-media-grid two-up">
                    <figure>
                        <ImageBorder src={media("prototype-on-breadboard.webp")} alt="Prototype on breadboard" lookAtCursor />
                        <figcaption>Breadboard integration</figcaption>
                    </figure>
                    <figure>
                        <ImageBorder src={media("magnifier-esp32-soldering.webp")} alt="Close-up soldering work" lookAtCursor />
                        <figcaption>Fine soldering and inspection</figcaption>
                    </figure>
                </div>
                <div className="nolicom-video-row full-width">
                    <video controls playsInline preload="metadata">
                        <source src={media("prototype-test-with-lights-and-buzzer-sound.mp4")} type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className="project-section nolicom-workspace" aria-labelledby="nolicom-workspace-heading">
                <h2 id="nolicom-workspace-heading">The Workspace</h2>
                <p>
                    Most of the soldering, testing, and final assembly happened right at my desk. Here&apos;s a glimpse of
                    the setup during the build.
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
                    <h2 id="nolicom-enclosure-heading">Enclosure Design (Blender)</h2>
                    <p>
                        I modeled the case from scratch in Blender and iterated several times to get the proportions right.
                        The priority was fitting the battery and charging board first, then tuning all the openings — speaker,
                        potentiometer slot, USB-C access — so the final interaction felt deliberate rather than cramped.
                    </p>
                    <p>
                        I went for compact proportions with retro styling, internal mounting posts, and enough wall thickness
                        that the case feels solid. Cable routing was one of those details that took more iterations than expected.
                    </p>
                    <p>
                        Fun fact: after I switched to Arch Linux, I realized I hadn&apos;t backed up the original .blend file.
                        All I have left now are the .goo slicer files for the printer. The screenshots below are all that
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
                <h2 id="nolicom-printing-heading">Printing Journey: PLA to Resin</h2>
                <p>
                    PLA gave me cheap iteration, first fit checks and no messy workflow. Resin gave me the final surface quality and cleaner edges I
                    wanted for the retro look.
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
                    <video controls playsInline preload="metadata">
                        <source src={media("pla-3d-printer-printing.MP4")} type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className="project-section nolicom-finishing" aria-labelledby="nolicom-finishing-heading">
                <h2 id="nolicom-finishing-heading">Painting, Power System &amp; Final Accident</h2>
                <div className="nolicom-feature-card">
                    <span aria-hidden="true">
                        <PowerIcon />
                    </span>
                    <div>
                        <strong>Power system</strong>
                        <p>
                            Each unit runs on a LiPo battery with an internal charging module and USB-C port. Modern
                            charging in a retro housing.
                        </p>
                    </div>
                </div>
                <p>
                    I painted it in a retro beige tone, but the finish developed cracks — probably a primer/paint/cure
                    mismatch. Still functional, but visually rough.
                </p>
                <p>
                    And then the final accident happened: I accidentally kicked it down the stairs. The electronics survived,
                    but the resin case shattered.
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
                            thing I didn&apos;t expect: a faulty microcontroller can perfectly mimic a software bug. The
                            oscilloscope was essential for catching that. Deep sleep state management needs careful design,
                            and the ADC <Arrow /> PWM brightness mapping ended up being surprisingly reliable once wired
                            correctly.
                        </p>
                    </article>
                    <article className="nolicom-column-card">
                        <h3>
                            <BuildIcon aria-hidden="true" /> Mechanical / Design
                        </h3>
                        <p>
                            Resin gives you a premium surface but it&apos;s way more brittle than PLA — reinforcement ribs
                            would&apos;ve saved my case from the staircase incident. The paint process and compatibility
                            between primer, paint, and curing matter a lot more than I expected. Analog controls like the
                            potentiometer make the whole interaction feel better. And Blender turned out to be a great tool
                            for functional enclosure work, not just artistic modeling.
                        </p>
                    </article>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-future-heading">
                <h2 id="nolicom-future-heading">Future Improvements</h2>
                <div className="nolicom-feature-card">
                    <span aria-hidden="true">
                        <FutureIcon />
                    </span>
                    <div>
                        <p>
                            If I rebuild this (and I probably will), there are a few things I&apos;d change. Thicker internal
                            supports and softer edge geometry to improve durability. A better primer process with thinner paint
                            coats to avoid the cracking. I&apos;d also like to try a vibration motor instead of the buzzer for
                            quieter notifications, maybe add a small OLED for status info, and look into a magnetic desk mount
                            with impact-resistant material for the case.
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-section" aria-labelledby="nolicom-conclusion-heading">
                <h2 id="nolicom-conclusion-heading">Conclusion</h2>
                <p>
                    This project solved a very real desk problem with a simple interaction: <strong>press the button <Arrow /> light + sound</strong>.
                </p>
                <p>
                    It combines embedded systems, low-power wireless communication, CAD modeling, 3D printing, analog control,
                    and a lot of practical debugging. Despite one staircase incident, it worked — and it was worth building.
                </p>
            </section>
        </div>
    );
}
