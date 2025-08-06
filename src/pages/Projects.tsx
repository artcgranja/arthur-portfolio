import { useState } from 'react';
import { Search, Filter, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      longDescription: "A comprehensive e-commerce platform built with modern technologies. The application features a responsive React frontend, robust Node.js backend with Express, and PostgreSQL database. Key features include user authentication with JWT, Stripe payment integration, real-time inventory management, and a complete admin dashboard for managing products, orders, and users.",
      image: project1,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      category: "Full-Stack",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/arthurgranja/ecommerce",
      date: "2024",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and advanced filtering capabilities.",
      longDescription: "A sophisticated task management application designed for team collaboration. Built with React and TypeScript on the frontend, and Node.js with Socket.io for real-time functionality. Features include drag-and-drop task management, real-time updates, team workspaces, advanced filtering and search, time tracking, and comprehensive reporting dashboard.",
      image: project2,
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Node.js"],
      category: "Frontend",
      demoUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/arthurgranja/task-manager",
      date: "2024",
      status: "Completed"
    },
    {
      id: 3,
      title: "Weather Analytics API",
      description: "RESTful API for weather data analytics with machine learning predictions and comprehensive documentation.",
      longDescription: "A powerful weather analytics API that provides comprehensive weather data analysis and machine learning-powered predictions. Built with Python, Flask, and integrated with multiple weather data sources. Features include historical weather data analysis, predictive modeling using scikit-learn, RESTful API endpoints, comprehensive API documentation with Swagger, and real-time weather alerts system.",
      image: project3,
      technologies: ["Python", "Flask", "PostgreSQL", "Redis", "Docker"],
      category: "Backend",
      demoUrl: "https://weather-api.example.com",
      githubUrl: "https://github.com/arthurgranja/weather-api",
      date: "2023",
      status: "Completed"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and modern design principles. Features smooth animations and responsive design.",
      longDescription: "A modern, responsive portfolio website showcasing development skills and projects. Built with React, TypeScript, and Tailwind CSS. Features include smooth animations with Framer Motion, responsive design across all devices, optimized performance with lazy loading, SEO optimization, and contact form integration.",
      image: project1,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      category: "Frontend",
      demoUrl: "https://arthurgranja.dev",
      githubUrl: "https://github.com/arthurgranja/portfolio",
      date: "2024",
      status: "Completed"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Full-stack real estate platform with property listings, virtual tours, and integrated messaging system.",
      longDescription: "A comprehensive real estate platform connecting buyers, sellers, and agents. Features property listings with advanced search and filtering, virtual 360° tours, integrated messaging system between parties, mortgage calculator, and agent dashboard for managing listings and clients.",
      image: project2,
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
      category: "Full-Stack",
      demoUrl: "https://realestate.example.com",
      githubUrl: "https://github.com/arthurgranja/real-estate",
      date: "2023",
      status: "Completed"
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure blockchain-based voting system ensuring transparency and immutability of election results.",
      longDescription: "A revolutionary voting system built on blockchain technology to ensure complete transparency and immutability. Developed using Solidity smart contracts, Web3.js integration, and React frontend. Features include voter authentication, encrypted ballot casting, real-time result tracking, and comprehensive audit trails.",
      image: project3,
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      demoUrl: "https://voting.example.com",
      githubUrl: "https://github.com/arthurgranja/blockchain-voting",
      date: "2023",
      status: "In Progress"
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Blockchain"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen dark-bg">
      <Navigation activeSection="projects" />
      <div className="container-custom py-20 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            My Projects
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            from concept to deployment.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-surface border-border text-text-primary"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(category)}
                  className={`${
                    selectedFilter === category
                      ? "bg-accent-primary text-white"
                      : "bg-surface text-text-secondary border-border hover:bg-border"
                  }`}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-text-secondary">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group animate-fade-in opacity-0"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-primary/20 hover:translate-y-[-8px] transform">
                {/* Project Image */}
                <div className="relative overflow-hidden group/image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <Badge 
                      variant="secondary" 
                      className={`backdrop-blur-sm ${
                        project.status === 'Completed' 
                          ? 'bg-accent-success/20 text-accent-success border border-accent-success/30' 
                          : 'bg-accent-warning/20 text-accent-warning border border-accent-warning/30'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <Badge 
                      variant="outline" 
                      className="backdrop-blur-sm bg-surface/50 border-accent-primary/30 text-accent-primary"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-accent-primary/90 backdrop-blur-sm border border-accent-primary text-white hover:bg-accent-primary transform scale-90 hover:scale-100 transition-all duration-200"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-surface/90 backdrop-blur-sm border-border text-text-secondary hover:bg-border transform scale-90 hover:scale-100 transition-all duration-200"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative">
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-3 text-text-tertiary">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full text-xs font-medium border border-accent-primary/20 hover:bg-accent-primary/20 transition-all duration-200 cursor-pointer transform hover:scale-105"
                        style={{
                          animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-accent-primary text-white hover:bg-accent-primary/90 hover:scale-105 transition-all duration-200"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border text-text-secondary hover:bg-border hover:scale-105 transition-all duration-200"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">No projects found</h3>
            <p className="text-text-secondary">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;