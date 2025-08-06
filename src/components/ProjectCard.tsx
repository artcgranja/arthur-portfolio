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
      {/* Project Image */}
      <div className="relative mb-6 overflow-hidden rounded-lg bg-muted">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay with Action Buttons */}
        <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.liveUrl && (
            <Button
              size="sm"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
              >
                <Eye className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code`}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
            {project.category}
          </Badge>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-accent-primary text-white">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {project.year}
            </p>
          </div>
          
          {/* Quick Action Links */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`View ${project.title} source code`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {variant === 'featured' ? project.longDescription || project.description : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-tag"
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons for Featured Projects */}
        {variant === 'featured' && (
          <div className="flex gap-3 pt-4">
            {project.liveUrl && (
              <Button variant="default" size="sm" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;