import PlanetCard from "../components/PlanetCard";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className="mt-20 flex flex-col items-center gap-12 text-white px-4 text-center">
      <h1 className="text-3xl font-bold">
        Hey, It's <span className="text-purple-300">Tomer</span> !<br></br>
        Welcome to my World
      </h1>
      <div className="flex flex-wrap justify-center gap-10 z-10">
        {projects.map((project) => (
          <PlanetCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
