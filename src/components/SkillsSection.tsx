import { Code, Server, Cloud, Database, Monitor, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Lightbulb,
      title: 'Research & Innovation',
      description: 'Exploring emerging technologies and advanced AI methodologies',
      skills: ['LLM Applications', 'AI Architecture', 'Software Engineering', 'Technology Research', 'Innovation Strategies', 'AI Ethics & Safety'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Code,
      title: 'AI & Data Engineering',
      description: 'Development of custom AI solutions and data-driven automations',
      skills: ['RAG', 'MCP', 'Multi-Agent Systems', 'Generative AI', 'Data Mining', 'Process Automation'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust, efficient, and scalable backend services',
      skills: ['Python', 'FastAPI', 'Flask', 'Django', 'REST APIs', 'Microservices', 'Docker'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Cloud,
      title: 'Process Analysis & Consulting',
      description: 'Optimizing business workflows and providing strategic consultancy',
      skills: ['Process Analysis', 'Operational Consulting', 'Workflow Optimization', 'Strategic Planning', 'Business Insights'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Database,
      title: 'Database & Infrastructure',
      description: 'Designing and managing scalable data solutions',
      skills: ['SQL', 'NoSQL', 'Vector Databases', 'PgVector', 'Cloud Infrastructure', 'Git & CI/CD'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Creating intuitive and integrated web solutions',
      skills: ['TypeScript', 'JavaScript', 'React.js', 'System Integration', 'API Integration', 'Java'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern digital experiences, 
            from frontend interfaces to scalable backend systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group project-card hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${category.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-foreground uppercase tracking-wide">
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-border text-muted-foreground transition-all duration-200 ease-out hover:text-primary hover:border-primary"
                          style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;