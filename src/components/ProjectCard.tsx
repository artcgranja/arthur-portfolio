import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
}

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

const ProjectCard = ({ project, variant = 'default' }: ProjectCardProps) => {
  const cardClasses = variant === 'featured'
    ? 'project-card hover-glow group'
    : 'project-card group';

  return (
    <article className={cardClasses}>
      <div className="relative mb-6 overflow-hidden rounded-lg bg-muted">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.liveUrl && (
            <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`}>
                <Eye className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
            {project.category}
          </Badge>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-accent-primary text-white">Featured</Badge>
          </div>
        )}
      </div>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{project.year}</p>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200" aria-label={`View ${project.title} live demo`}>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {variant === 'featured' ? project.longDescription || project.description : project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        {variant === 'featured' && (
          <div className="flex gap-3 pt-4">
            {project.liveUrl && (
              <Button variant="default" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

// Example projects array
export const projects: Project[] = [
  {
    id: 'energy-invoice-automation',
    title: 'Energy Invoice Automation',
    description: 'Automated download and processing of energy invoices.',
    longDescription: 'Built with Python, Selenium, and PostgreSQL to ingest, parse, and store invoice data, reducing manual effort by 80%.',
    image: '/assets/projects/invoice-automation.png',
    technologies: ['Python', 'Selenium', 'PostgreSQL', 'Docker'],
    category: 'Automation',
    githubUrl: 'https://github.com/arthurgranja/energy-invoice-automation',
    featured: true,
    year: '2024'
  },
  {
    id: 'nerdo-rag-platform',
    title: 'Nerd-o RAG Platform',
    description: 'Retrieval-Augmented Generation tutoring system.',
    longDescription: 'Engineered multi-agent AI tutor using LangChain, OpenAI embeddings, and PGVector, deployed via FastAPI and Docker.',
    image: '/assets/projects/nerdo-rag.png',
    technologies: ['LangChain', 'OpenAI', 'PGVector', 'FastAPI'],
    category: 'AI',
    githubUrl: 'https://github.com/arthurgranja/nerdo-rag-platform',
    featured: true,
    year: '2025'
  },
  {
    id: 'pixel-art-generator',
    title: 'Pixel Art Generator',
    description: 'AI-powered pixel art for D&D characters.',
    longDescription: 'Developed image-generation pipelines and prompt engineering workflows to produce high-resolution vertical pixel art.',
    image: '/assets/projects/pixel-art-generator.png',
    technologies: ['Image Generation', 'TypeScript', 'React'],
    category: 'Creative',
    year: '2024'
  },
  {
    id: 'connect-app',
    title: 'Connect Mobile App',
    description: 'Proximity-based social networking application.',
    longDescription: 'Built with React Native frontend and Django backend integrating maps and chat for professional networking.',
    image: '/assets/projects/connect-app.png',
    technologies: ['React Native', 'Django', 'PostgreSQL'],
    category: 'Mobile',
    year: '2025'
  }
];

export default ProjectCard;