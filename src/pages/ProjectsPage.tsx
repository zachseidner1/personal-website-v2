import { experienceData, projectsData } from "@/data/portfolioData";
import ProjectCard from "../components/ProjectCard";
// Import motion and the Variants type from framer-motion
import { motion, type Variants } from "framer-motion";

const ProjectsPage = () => {
  // Explicitly type cardVariants with the Variants type
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page Title and Description */}
        <div className="mb-12">
          <h1 className="text-center text-4xl font-extrabold text-base-content lg:text-5xl">
            Professional
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-base-content/80">
            Here is my work & technical experience, along with some of the
            projects I've worked on. You can find more on my GitHub page.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-base-content lg:text-4xl">
            Experience
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <ProjectCard {...experience} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h2 className="mb-8 text-3xl font-bold text-base-content lg:text-4xl">
              Projects
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
