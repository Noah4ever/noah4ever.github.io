import {
  IoArrowForwardOutline as ProjectCardArrow,
  IoLogoGithub as GithubLogo,
  IoOpenOutline as LiveIcon,
  IoStarOutline as StarIcon,
} from "react-icons/io5";
import { useEffect, useMemo, useState } from "react";

type ProjectCardLinkProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  ariaLabel?: string;
  imageAlt?: string;
  tags?: string[];
  githubLink?: string;
  githubStarsFallback?: number;
  liveLink?: string;
};

export default function ProjectCardLink({
  title,
  description,
  imageSrc,
  href,
  ariaLabel,
  imageAlt,
  tags,
  githubLink,
  githubStarsFallback,
  liveLink,
}: ProjectCardLinkProps) {
  const [githubStars, setGithubStars] = useState<number | null>(
    githubStarsFallback ?? null,
  );

  const cardId = `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
  const getTagClassName = (tag: string) =>
    `project-tag--${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const repoPath = useMemo(() => {
    if (!githubLink) return null;
    try {
      const { pathname } = new URL(githubLink);
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length < 2) return null;
      return `${parts[0]}/${parts[1]}`;
    } catch {
      return null;
    }
  }, [githubLink]);

  useEffect(() => {
    if (!repoPath) return;

    const controller = new AbortController();
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoPath}`,
          {
            signal: controller.signal,
          },
        );
        if (!response.ok) return;
        const data = (await response.json()) as { stargazers_count?: number };
        if (typeof data.stargazers_count === "number") {
          setGithubStars(data.stargazers_count);
        }
      } catch {
        // Keep badge visible even if GitHub API is unavailable.
      }
    };

    void fetchStars();

    return () => {
      controller.abort();
    };
  }, [repoPath]);

  const formattedStars = useMemo(() => {
    if (githubStars == null || githubStars <= 2) return null;
    return new Intl.NumberFormat(undefined, {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(githubStars);
  }, [githubStars]);

  const handleBadgeClick = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <a className="project-card-link" href={href} aria-label={ariaLabel}>
      <span className="project-card-indicator" aria-hidden="true">
        <ProjectCardArrow />
      </span>
      <article className="project-card" aria-labelledby={cardId}>
        <div className="text-container">
          <h4 id={cardId}>{title}</h4>
          {(liveLink || githubLink) && (
            <div className="project-card-badges">
              {liveLink && (
                <span
                  className="view-live-badge"
                  role="link"
                  tabIndex={0}
                  onClick={handleBadgeClick(liveLink)}
                  aria-label={`View ${title} live`}
                >
                  <LiveIcon /> Live
                </span>
              )}
              {githubLink && (
                <span
                  className="view-github-badge"
                  role="link"
                  tabIndex={0}
                  onClick={handleBadgeClick(githubLink)}
                  aria-label={`View ${title} on GitHub`}
                >
                  <GithubLogo />
                  {formattedStars && (
                    <>
                      <StarIcon />
                      <span>{formattedStars}</span>
                    </>
                  )}
                </span>
              )}
            </div>
          )}
          <p>{description}</p>
        </div>
        {tags && (
          <ul className="project-card-tags">
            {tags.map((tag) => (
              <li key={tag} className={getTagClassName(tag)}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </article>
      <div className="project-card-media">
        <img
          src={imageSrc}
          alt={imageAlt ?? `${title} preview`}
          loading="lazy"
        />
      </div>
    </a>
  );
}
