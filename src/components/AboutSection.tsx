import { Calendar, MapPin, Coffee, Heart, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import avatarImage from '@/assets/avatar.jpg';

const AboutSection = () => {
  const experiences = [
    {
      year: '2025 - Present',
      title: 'Founder & AI Research Developer',
      company: 'Nerd-o',
      description: 'Leading design and implementation of RAG-based platforms and AI-driven educational tools',
      achievements: [
        'Created a SaaS platform for AI-powered tutoring for schools',
        'Built multi-agent tutoring systems',
        'Architected scalable LLM APIs with FastAPI and Docker',
        'Integrated PGVector for high-performance vector search'
      ]
    },
    {
      year: '2024 - Present',
      title: 'Digital Solutions Analyst',
      company: 'América Energia S.A.',
      description: 'Developing and deploying AI automations for energy data processing and analytics',
      achievements: [
        'Automated invoice ingestion and analysis with Python, Selenium and BeautifulSoup',
        'Implemented RAG workflows for stakeholder reports',
        'Created real-time dashboards using Flask and PostgreSQL'
      ]
    },
    {
      year: '2023',
      title: 'Data Automation Intern',
      company: 'América Energia S.A.',
      description: 'Supported data reporting and process automation for partner companies',
      achievements: [
        'Developed energy consumption control systems',
        'Automated CRM integration with Python',
        'Built Python scripts to optimize routine workflows'
      ]
    }
  ];

  const interests = [
    { icon: Coffee, label: 'Bouldering & Climbing' },
    { icon: Heart, label: 'Pixel Art & RPG Design' },
    { icon: Award, label: 'Videogames Enthusiast' },
    { icon: Users, label: 'AI Research' }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Software engineer specializing in AI solutions, from RAG systems to scalable APIs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-5">
            <div className="project-card">
              {/* Profile Image */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-6">
                  <img
                    src={avatarImage}
                    alt="Arthur Granja - AI Research & Development"
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-success rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">Arthur Cavalcanti Granja</h3>
                <p className="text-muted-foreground mb-4">AI Research & Development</p>
                
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    São Paulo, Brasil
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    3+ Years in AI & Dev
                  </Badge>
                </div>
              </div>

              {/* Personal Description */}
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Technology professional focused on designing and implementing AI-driven systems. Skilled in Python, TypeScript, and modern frameworks for building RAG workflows and scalable services.
                </p>
                
                <p>
                  Pursuing Systems Development at FIAP, deepening expertise in software engineering and applied AI for business transformation.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Interests & Hobbies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => {
                    const Icon = interest.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{interest.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <Button className="w-full" size="lg">
                  Let's Work Together
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Professional Experience</h3>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start gap-6 pb-8">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-sm z-10"></div>
                    
                    {/* Content */}
                    <div className="flex-1 project-card hover-lift">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                        <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                          {exp.year}
                        </Badge>
                      </div>                    
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      {/* Achievements */}
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
