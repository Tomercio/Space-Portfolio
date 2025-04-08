import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white text-center mt-32">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center text-white px-6 pt-32 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="max-w-2xl text-lg mb-6">{project.description}</p>

      <img
        src={project.image}
        alt={project.name}
        className="w-full max-w-md rounded-lg shadow-lg mb-8"
      />

      <div className="text-sm text-gray-300 mb-6">
        <h3 className="text-xl font-semibold mb-2">Technologies:</h3>
        <ul className="flex flex-wrap justify-center gap-3">
          {project.technologies.map((tech, index) => (
            <li key={index} className="bg-white/10 px-3 py-1 rounded-full">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* כפתור לגיטהאב */}
      <a
        href={`https://github.com/Tomercio/${project.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition"
      >
        View on GitHub
      </a>
    </motion.div>
  );
}
