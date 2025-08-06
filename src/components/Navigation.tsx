import { useState } from 'react';
import { Menu, X, Github, LinkedinIcon, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NavigationProps {
  activeSection?: string;
}

const Navigation = ({ activeSection = 'home' }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '/', isRoute: true },
    { id: 'projects', label: 'Projects', href: '/projects', isRoute: true },
    { id: 'about', label: 'About', href: '#about', isRoute: false },
    { id: 'contact', label: 'Contact', href: '#contact', isRoute: false },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/artcgranja', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/arthur-granja-2b5070208', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:artcgranja@gmail.com', label: 'Email' },
  ];

  return (
    <>
      {/* Skip Navigation for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
                aria-label="Home"
              >
                Portfolio
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  item.isRoute ? (
                    <Link
                      key={item.id}
                      to={item.href}
                      className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === item.id ? 'active' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === item.id ? 'active' : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
              <Button variant="outline" size="sm" className="ml-4">
                Download CV
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
                {navItems.map((item) => (
                  item.isRoute ? (
                    <Link
                      key={item.id}
                      to={item.href}
                      className={`nav-link block px-3 py-2 rounded-md text-base font-medium ${
                        activeSection === item.id ? 'active' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`nav-link block px-3 py-2 rounded-md text-base font-medium ${
                        activeSection === item.id ? 'active' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 px-3 py-4 border-t border-border mt-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
                
                <div className="px-3 pb-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;