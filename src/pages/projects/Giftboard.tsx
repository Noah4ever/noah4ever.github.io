import "@styles/pages/giftboard.scss";
import { useThemeStore } from "@/stores/ThemeStore";
import {
    IoGiftOutline as GiftIcon,
    IoLinkOutline as LinkIcon,
    IoShieldCheckmarkOutline as ReserveIcon,
    IoCloudUploadOutline as UploadIcon,
    IoStarOutline as PriorityIcon,
    IoBrowsersOutline as FrontendIcon,
    IoServerOutline as BackendIcon,
} from "react-icons/io5";

export default function Giftboard() {
    const theme = useThemeStore((state) => state.theme);
    const showDarkmodeScreenshots = theme === "dark";

    const themedProjectImage = (stem: string) => {
        const suffix = showDarkmodeScreenshots ? "-darkmode" : "";
        return `/Projects/${stem}${suffix}.png`;
    };

    const themePreviewImage = theme === "dark"
        ? "/Projects/giftboard-theme-lightmode.png"
        : "/Projects/giftboard-theme-darkmode.png";

    return (
        <>
            <section className="giftboard-hero" aria-labelledby="giftboard-title">
                <div className="giftboard-hero-icon" aria-hidden="true">
                    <GiftIcon />
                </div>
                <h1 id="giftboard-title">Giftboard</h1>
                <p className="giftboard-tagline">
                    A gift wishlist I built so <a href="https://ashley.thiering.org" className="giftboard-inline-link">my girlfriend</a> doesn't have to
                    coordinate everyone's presents anymore.
                </p>
            </section>

            <section
                className="project-section giftboard-story"
                aria-labelledby="giftboard-why-heading"
            >
                <h2 id="giftboard-why-heading">Why I built this</h2>
                <blockquote>
                    <p>
                        Every year around my birthday, my girlfriend had to coordinate all the gifts. Friends and family would ask
                        her what I wanted, and she'd end up juggling a mental list of
                        who's getting what - making sure nobody buys the same thing,
                        while keeping everything a surprise from me.
                    </p>
                    <p>
                        It was stressful for her and not a great system. So I
                        built Giftboard: I add what I'd like, share the link, and
                        everyone can coordinate on their own. Reservations are hidden
                        from me so the surprise stays intact and she can enjoy the birthday too.
                    </p>
                </blockquote>
            </section>

            <section
                className="project-section"
                aria-labelledby="giftboard-what-heading"
            >
                <h2 id="giftboard-what-heading">What it does</h2>
                <p>
                    You create a wishlist, add items with a link or your own image,
                    and share it. If you paste an Amazon link the app automatically
                    pulls the product image and price. Everyone{" "}
                    <em>except</em> the wishlist owner can see which gifts are already
                    reserved so no duplicates are purchased.
                </p>
                <p>
                    You can also set priority levels on wishes so people know what
                    matters most to you.
                </p>
            </section>

            {/* Screenshots */}
            <section
                className="giftboard-gallery"
                aria-labelledby="giftboard-gallery-heading"
            >
                <h2 id="giftboard-gallery-heading" className="sr-only">
                    Screenshots
                </h2>
                <div className="giftboard-gallery-grid">

                    <figure className="giftboard-gallery-item">
                        <img
                            src={themedProjectImage("giftboard-hero")}
                            alt="Giftboard hero view in the alternate theme"
                            loading="lazy"
                        />
                        <figcaption>Hero view</figcaption>
                    </figure>
                    <figure className="giftboard-gallery-item">
                        <img
                            src={themedProjectImage("giftboard-wishes-overview")}
                            alt="Giftboard wishes overview in the alternate theme"
                            loading="lazy"
                        />
                        <figcaption>Wishes overview as List owner</figcaption>
                    </figure>
                    <figure className="giftboard-gallery-item">
                        <img
                            src={themePreviewImage}
                            alt="Giftboard theme preview in the alternate theme"
                            loading="lazy"
                        />
                        <figcaption>Theme preview</figcaption>
                    </figure>
                </div>
            </section>

            {/* How it works */}
            <section
                className="project-section"
                aria-labelledby="giftboard-how-heading"
            >
                <h2 id="giftboard-how-heading">How it works</h2>
                <ul className="giftboard-how-list" role="list">
                    <li>
                        <span className="giftboard-how-icon" aria-hidden="true">
                            <LinkIcon />
                        </span>
                        <div>
                            <strong>Amazon auto-fetch</strong>
                            <p>
                                Paste a product link and the backend scrapes the
                                image and price automatically.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="giftboard-how-icon" aria-hidden="true">
                            <UploadIcon />
                        </span>
                        <div>
                            <strong>Custom images</strong>
                            <p>
                                Not everything is on Amazon. You can upload your own
                                picture for any wish.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="giftboard-how-icon" aria-hidden="true">
                            <ReserveIcon />
                        </span>
                        <div>
                            <strong>Hidden reservations</strong>
                            <p>
                                Others mark what they'll buy and the owner never
                                sees it.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="giftboard-how-icon" aria-hidden="true">
                            <PriorityIcon />
                        </span>
                        <div>
                            <strong>Priorities</strong>
                            <p>
                                Flag how much you want each item so people can
                                decide what to get.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* Tech */}
            <section
                className="project-section"
                aria-labelledby="giftboard-tech-heading"
            >
                <h2 id="giftboard-tech-heading">Tech</h2>
                <div className="giftboard-tech-grid">
                    <article className="giftboard-tech-card">
                        <div className="giftboard-tech-card-icon" aria-hidden="true">
                            <FrontendIcon />
                        </div>
                        <h3>Frontend</h3>
                        <p>
                            React + TypeScript, styled with SCSS. Responsive
                            and works on any screen size.
                        </p>
                    </article>
                    <article className="giftboard-tech-card">
                        <div className="giftboard-tech-card-icon" aria-hidden="true">
                            <BackendIcon />
                        </div>
                        <h3>Backend</h3>
                        <p>
                            A small REST API that scrapes Amazon product data
                            and stores everything in a JSON file. I might
                            switch to a database if it grows but this was simpler for now.
                        </p>
                    </article>
                </div>
            </section>
            <section className="giftboard-bottom-image" aria-labelledby="giftboard-bottom-image-heading">
                <h2 id="giftboard-bottom-image-heading" className="sr-only">
                    Additional screenshot
                </h2>
                <figure className="giftboard-bottom-image-figure">
                    <img
                        src={themedProjectImage("giftboard-create-wish")}
                        alt="Giftboard create wish view in the alternate theme"
                        loading="lazy"
                    />
                    <figcaption>Adding a wish</figcaption>
                </figure>
            </section>

            <section className="giftboard-bottom-image" aria-labelledby="giftboard-bottom-image-heading">
                <figure className="giftboard-bottom-image-figure">
                    <img
                        src={themedProjectImage("giftboard-board-overview")}
                        alt="Giftboard board overview in the alternate theme"
                        loading="lazy"
                    />
                    <figcaption>Board overview</figcaption>
                </figure>
            </section>
        </>
    );
}
