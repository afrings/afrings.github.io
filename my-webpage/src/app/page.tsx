

import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-gray-200">
          <Image 
            src="/images/earbuds_case.jpg" 
            alt="Profile Picture" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A showcase of my 3D design and coding projects
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
