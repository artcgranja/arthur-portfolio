import { Mail, Phone, MapPin, Send, Github, LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'artcgranja@gmail.com',
      href: 'mailto:artcgranja@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/artcgranja',
      href: 'https://github.com/artcgranja'
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/arthur-granja',
      href: 'https://www.linkedin.com/in/arthur-granja-2b5070208'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Ready to bring your ideas to life? I'm always excited to work on new challenges and create innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="project-card hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground font-heading">
                Send a Message
              </CardTitle>
              <p className="text-muted-foreground font-body">
                Tell me about your project and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project type or inquiry"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button className="btn-primary w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-body">
                I'm currently available for freelance work. 
                Whether you have a project in mind or just want to chat about AI and technology, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability Status */}
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-foreground font-heading">Currently Available</h4>
                </div>
                <p className="text-muted-foreground text-sm font-body">
                  I'm looking for new opportunities and projects. 
                  Response time is typically within 48 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
