import {
  IoArrowForwardOutline as ProjectCardArrow,
  IoLogoGithub as GithubLogo,
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
}: ProjectCardLinkProps) {
  const cardId = `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
  const getTagClassName = (tag: string) =>
    `project-tag--${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <a className="project-card-link" href={href} aria-label={ariaLabel}>
      <span className="project-card-indicator" aria-hidden="true">
        <ProjectCardArrow />
      </span>
      <article className="project-card" aria-labelledby={cardId}>
        <div className="text-container">
          <h4 id={cardId}>
            {title}{" "}
            {githubLink && (
              <a
                href={githubLink}
                className="view-github-badge"
                aria-label={`View ${title} on GitHub`}
              >
                <GithubLogo />
              </a>
            )}
          </h4>
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
