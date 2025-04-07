export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'design' | 'coding';
  technologies?: string[];
  link?: string;
}
