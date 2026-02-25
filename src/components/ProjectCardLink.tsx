import {
  IoArrowForwardOutline as ProjectCardArrow,
  IoLogoGithub as GithubLogo,
  IoOpenOutline as LiveIcon,
} from "react-icons/io5";

type ProjectCardLinkProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  ariaLabel?: string;
  imageAlt?: string;
  tags?: string[];
  githubLink?: string;
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
  liveLink,
}: ProjectCardLinkProps) {
  const cardId = `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
  const getTagClassName = (tag: string) =>
    `project-tag--${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

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
