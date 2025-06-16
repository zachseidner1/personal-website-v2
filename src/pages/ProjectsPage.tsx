// src/components/ProjectsPage.js

import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";

// You can easily update your projects by modifying this array
const projectsData: ProjectCardProps[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal website built to showcase my skills and projects. Designed with a clean and modern UI using React, Tailwind CSS, and DaisyUI.",
    date: "06/15/2025",
    imageUrl:
      "https://via.placeholder.com/600x400/a78bfa/ffffff?text=Project+One",
    techBadges: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    links: [
      {
        github: "#", // Replace with your GitHub link
        live: "#", // Replace with your live demo link
      },
    ],
  },
  {
    title: "E-Commerce Platform",
    date: "06/15/2025",

    description:
      "A full-featured e-commerce site with product listings, a shopping cart, and a checkout process. The backend is powered by Node.js and connects to a PostgreSQL database.",
    imageUrl:
      "https://via.placeholder.com/600x400/60a5fa/ffffff?text=Project+Two",
    techBadges: ["React", "Node.js", "Express", "PostgreSQL", "Redux", "JWT"],
    links: [
      {
        github: "#",
        live: "#",
      },
    ],
  },
  {
    title: "Data Visualization Dashboard",
    date: "06/15/2025",

    description:
      "An interactive dashboard for visualizing complex datasets. Features dynamic charts and filters, built with D3.js for powerful and customizable graphs.",
    imageUrl:
      "https://via.placeholder.com/600x400/f87171/ffffff?text=Project+Three",
    techBadges: ["JavaScript", "D3.js", "API", "SASS"],
    links: [
      {
        github: "#",
      },
    ],
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page Title and Description */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-base-content lg:text-5xl">
            Professional
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-base-content/80">
            Here is my work & technical experience, along with some of the
            projects I've worked on. You can find more on my GitHub page.
          </p>
        </div>

        {/* Grid of Project Cards */}
        <div>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              techBadges={project.techBadges}
              links={project.links}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
