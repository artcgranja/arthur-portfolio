import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProjectCard, { Project } from './ProjectCard';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const FeaturedProjects = () => {
  const featuredProjects: Project[] = [
    {
      id: '1',
      title: 'EcoMetrics Dashboard',
      description: 'Real-time sustainability tracking platform for enterprises',
      longDescription: 'A comprehensive analytics dashboard that helps companies track their environmental impact in real-time. Features interactive charts, automated reporting, and AI-powered insights for carbon footprint optimization.',
      image: project1Image,
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'Web Application',
      liveUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com',
      featured: true,
      year: '2024'
    },
    {
      id: '2',
      title: 'ShopFlow Mobile',
      description: 'Next-generation e-commerce mobile application',
      longDescription: 'A modern mobile commerce solution built with React Native, featuring AI-powered product recommendations, seamless payment integration, and advanced inventory management.',
      image: project2Image,
      technologies: ['React Native', 'Redux', 'Node.js', 'Stripe API', 'MongoDB'],
      category: 'Mobile App',
      liveUrl: 'https://apps.apple.com/app/shopflow',
      githubUrl: 'https://github.com',
      featured: true,
      year: '2024'
    },
    {
      id: '3',
      title: 'DevDocs API',
      description: 'Developer documentation platform with interactive examples',
      longDescription: 'An intelligent documentation platform that automatically generates interactive API documentation with live code examples, testing environments, and comprehensive SDK generation.',
      image: project3Image,
      technologies: ['Next.js', 'MDX', 'Prisma', 'OpenAPI', 'Docker'],
      category: 'Developer Tools',
      liveUrl: 'https://devdocs.example.com',
      githubUrl: 'https://github.com',
      featured: true,
      year: '2023'
    }
  ];

  return (
    <section id="featured-projects" className="py-20 bg-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my most impactful work, featuring innovative solutions 
            that solve real-world problems with modern technologies.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard project={project} variant="featured" />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="group px-8 py-4 text-lg hover-lift"
            asChild
          >
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;