import { ArrowRight, Download, Code, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center dark-bg"
    >
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="animate-fade-in">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 bg-accent-primary/10 text-accent-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
                  <div className="w-2 h-2 bg-accent-success rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
                
                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 animate-slide-up">
                  Arthur <span className="text-accent-primary">Granja</span>
                </h1>
                
                {/* Tagline */}
                <h2 className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl leading-relaxed animate-slide-up">
                  AI Research & Developer com <span className="text-accent-primary font-semibold">3+ anos</span> criando 
                  agentes inteligentes e fluxos automatizados que transformam dados em insights acionáveis.
                </h2>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mb-8 animate-slide-up">
                  <span className="bg-surface text-text-primary px-4 py-2 rounded-full text-sm font-medium">Python</span>
                  <span className="bg-surface text-text-primary px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="bg-surface text-text-primary px-4 py-2 rounded-full text-sm font-medium">AI Agents</span>
                  <span className="bg-surface text-text-primary px-4 py-2 rounded-full text-sm font-medium">Data Engineering</span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                  <Link to="/projects">
                    <Button 
                      size="lg"
                      className="bg-accent-primary text-white hover:bg-accent-primary/90 group px-8 py-4 text-lg font-semibold"
                    >
                      <Code className="mr-2 h-5 w-5" />
                      View Projects
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-surface text-text-primary hover:bg-surface px-8 py-4 text-lg font-semibold"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Code Block */}
            <div className="relative animate-float">
              <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-success rounded-full"></div>
                  <span className="text-text-tertiary text-sm ml-2">ai-engineer.tsx</span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-text-tertiary">
                    <span className="text-accent-primary">const</span> <span className="text-text-primary">aiEngineer</span> = {'{'}
                  </div>
                  <div className="text-text-tertiary ml-4">
                    name: <span className="text-accent-success">"Arthur Granja"</span>,
                  </div>
                  <div className="text-text-tertiary ml-4">
                    experience: <span className="text-accent-warning">"3+ years"</span>,
                  </div>
                  <div className="text-text-tertiary ml-4">
                    skills: [<span className="text-accent-success">"Python"</span>, <span className="text-accent-success">"TypeScript"</span>, <span className="text-accent-success">"AI Agents"</span>],
                  </div>
                  <div className="text-text-tertiary ml-4">
                    passion: <span className="text-accent-success">"AI Innovation"</span>
                  </div>
                  <div className="text-text-tertiary">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;