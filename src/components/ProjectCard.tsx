// src/components/ProjectCard.js

// A couple of SVG icons for the links.
// You can find more free icons at sites like https://heroicons.com/
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

type ProjectLinks = {
  github?: string;
  live?: string;
};

export type ProjectCardProps = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  techBadges: string[];
  links: ProjectLinks[];
};

const ProjectCard = ({
  title,
  date,
  description,
  imageUrl,
  techBadges,
  links,
}: ProjectCardProps) => {
  return (
    // Main container still uses a 4-column grid, but the element order is changed.
    <div className="mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-4">
      {/* Image Column (now first, spans 1 of 4 columns) */}
      <div className="md:col-span-1">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Content Column (now second, spans 2 of 4 columns) */}
      <div className="md:col-span-2">
        {/* Title and Links */}
        <div className="mb-2 flex items-center gap-4">
          <h3 className="text-xl font-bold text-base-content">{title}</h3>
          <div className="flex flex-row gap-2">
            {links.map((link, index) => (
              <div key={index}>
                {link?.github && (
                  <a
                    href={link.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base-content/80 transition-colors hover:text-primary"
                    aria-label={`${title} GitHub Repository`}
                  >
                    <GithubIcon />
                  </a>
                )}
                {link?.live && (
                  <a
                    href={link.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base-content/80 transition-colors hover:text-primary"
                    aria-label={`${title} Live Demo`}
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-base-content/80">{description}</p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
          {techBadges.map((tech) => (
            <div key={tech} className="badge badge-outline">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Date Column (now last, spans 1 of 4 columns, and is right-aligned on medium+ screens) */}
      <div className="md:col-span-1 md:text-right">
        <time className="font-medium text-base-content/70">{date}</time>
      </div>
    </div>
  );
};

export default ProjectCard;
