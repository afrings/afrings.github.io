import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    title: '3D Printing',
    description: 'A catalogue of various 3d print designs that I\'ve made',
    image: '/images/earbuds_case.jpg',
    type: 'design',
    technologies: ['Fusion360', 'Orca Slicer', 'G-code'],
    link: 'https://example.com/3d-character'
  },
  {
    id: '2',
    title: '3d Printing',
    description: 'Modern house exterior and interior visualization with photorealistic rendering and lighting.',
    image: '/images/architecture.jpg',
    type: 'design',
    technologies: ['3ds Max', 'V-Ray', 'Corona Renderer'],
    link: 'https://example.com/architecture'
  },
];
