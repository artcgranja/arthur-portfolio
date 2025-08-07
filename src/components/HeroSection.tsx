import { ArrowRight, Download, Code, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  // Função para scroll suave
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

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
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
                
                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up font-heading">
                  Arthur <span className="text-primary">Granja</span>
                </h1>
                
                {/* Tagline */}
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-slide-up font-body">
                  AI Research & Developer with <span className="text-primary font-semibold">3+ years</span> of experience creating 
                  intelligent agents and automated workflows that transform data into actionable insights.
                </h2>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mb-8 animate-slide-up">
                  <span className="bg-card text-foreground px-4 py-2 rounded-full text-sm font-medium border border-border">AI Systems</span>
                  <span className="bg-card text-foreground px-4 py-2 rounded-full text-sm font-medium border border-border">Automations</span>
                  <span className="bg-card text-foreground px-4 py-2 rounded-full text-sm font-medium border border-border">Data Engineering</span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                  <Button 
                    size="lg"
                    className="btn-primary group px-8 py-4 text-lg font-semibold"
                    onClick={() => smoothScrollTo('featured-projects')}
                  >
                    <Code className="mr-2 h-5 w-5" />
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-border text-foreground hover:bg-card px-8 py-4 text-lg font-semibold"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Code Block */}
            <div className="relative animate-float">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground text-sm ml-2">ai-engineer.tsx</span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-muted-foreground">
                    <span className="text-primary">const</span> <span className="text-foreground">aiEngineer</span> = {'{'}
                  </div>
                  <div className="text-muted-foreground ml-4">
                    name: <span className="text-green-500">"Arthur Granja"</span>,
                  </div>
                  <div className="text-muted-foreground ml-4">
                    experience: <span className="text-yellow-500">"3+ years"</span>,
                  </div>
                  <div className="text-muted-foreground ml-4">
                    skills: [<span className="text-green-500">"Python"</span>, <span className="text-green-500">"TypeScript"</span>, <span className="text-green-500">"LLMs"</span>],
                  </div>
                  <div className="text-muted-foreground ml-4">
                    passion: <span className="text-green-500">"AI Innovation"</span>
                  </div>
                  <div className="text-muted-foreground">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;