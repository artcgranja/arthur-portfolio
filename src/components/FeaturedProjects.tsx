import ProjectCard, { Project, projects } from './ProjectCard';

const FeaturedProjects = () => {
  // Projetos específicos para o layout
  const featuredProjects: Project[] = [
    {
      id: 'energy-invoice-automation',
      title: 'Energy Invoice Automation',
      description: 'Developed an AI-based automation workflow using LangChain and LLMs to extract and structure energy invoice data from any format. The system performs semantic interpretation of documents and the extracted data is organized into a structured pipeline ready for analysis.',
      longDescription: 'Developed an AI-based automation workflow using LangChain and LLMs to extract and structure energy invoice data from any format (PDF, image, or text). The system performs semantic interpretation of documents, automatically identifying fields like total value, consumption, dates, and tax information, even with varied layouts. Extracted data is organized into a structured pipeline ready for analysis, dashboard visualization, and internal system integration. This approach eliminated the need for fixed rules or traditional OCR, making the process more robust, scalable, and adaptable to new distributors and formats.',
      image: '/assets/projects/invoice-automation.png',
      technologies: ['Python', 'LangChain', 'LLMs', 'PostgreSQL', 'Docker'],
      category: 'Automation',
      githubUrl: 'https://github.com/arthurgranja/energy-invoice-automation',
      featured: true,
      year: '2025'
    },
    {
      id: 'nerdo-rag-platform',
      title: 'Nerd-o Educational AI',
      description: 'Educational SaaS with integrated AI, personalized, secure and connected to school curriculum.',
      longDescription: 'A comprehensive educational SaaS platform featuring integrated AI that acts as a personalized tutor for students and assistant for teachers. Built with multi-agent system architecture and RAG technology for curriculum-aligned responses.',
      image: '/assets/projects/nerdo-rag.png',
      technologies: ['Python', 'TypeScript', 'Multi Agent', 'FastAPI', 'Next.js', 'PGVector'],
      category: 'AI',
      liveUrl: 'https://www.nerd-o.com',
      featured: true,
      year: '2025'
    },
    {
      id: 'placeholder-project',
      title: 'Coming Soon',
      description: 'New exciting project in development.',
      longDescription: 'A new innovative project is currently in development. Stay tuned for updates!',
      image: '/assets/projects/placeholder.png',
      technologies: ['React', 'TypeScript', 'AI'],
      category: 'Development',
      featured: true,
      year: '2025'
    }
  ];

  return (
    <section id="featured-projects" className="py-20 bg-card">
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

        {/* Featured Projects Grid - Layout específico */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Energy Invoice Automation - Canto esquerdo */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <ProjectCard project={featuredProjects[0]} variant="default" />
          </div>
          
          {/* Nerd-o RAG Platform - Centro (maior) */}
          <div className="animate-slide-up lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <ProjectCard project={featuredProjects[1]} variant="featured" />
          </div>
          
          {/* Placeholder - Canto direito */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <ProjectCard project={featuredProjects[2]} variant="default" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;