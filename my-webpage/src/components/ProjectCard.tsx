import React from 'react';
import { Project } from '../types/Project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        {/* Placeholder div for image - in a real app, you'd use actual images */}
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
          <Image 
            src={project.image} 
            alt="Profile Picture" 
            fill
            className="object-cover"
            priority
          />
          <span className="text-gray-400">{project.title} Image</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            View Project →
          </a>
        )}
        
        <div className="mt-2 text-xs text-gray-500">
          <span className="capitalize">{project.type} Project</span>
        </div>
      </div>
    </div>
  );
}
