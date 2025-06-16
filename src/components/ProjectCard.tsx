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
  github?: string; // The '?' makes this property optional
  live?: string; // This one is also optional
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
    <div className="card mb-8 bg-base-100 shadow-xl lg:card-side">
      {/* Project Image */}
      <figure className="lg:w-1/3">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="h-full w-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body lg:w-2/3">
        <div className="flex items-start justify-between">
          {/* Title */}
          <h2 className="card-title text-2xl font-bold">{title}</h2>

          {/* Links with SVGs */}
          {links.map((link) => (
            <>
              {link?.github && (
                <a
                  href={link.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-square btn-ghost"
                >
                  <GithubIcon />
                </a>
              )}
              {link?.live && (
                <a
                  href={link.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-square btn-ghost"
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </>
          ))}
          <div className="flex space-x-2"></div>
        </div>

        <time className="-mt-2 mb-2 block text-sm font-medium text-base-content/70">
          {date}
        </time>
        {/* Description */}
        <p className="mt-2 text-base-content/80">{description}</p>

        <div className="card-actions mt-4 justify-start">
          {/* Badges for Technologies */}
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <div key={tech} className="badge badge-outline">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
