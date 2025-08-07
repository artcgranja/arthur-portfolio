# Arthur Granja - Portfolio Website

A modern, responsive portfolio website showcasing Arthur Granja's expertise in AI Research & Development, featuring a clean design with smooth animations and interactive components.

## 🚀 Overview

This portfolio website presents Arthur Granja as an AI Research & Developer with 3+ years of experience creating intelligent agents and automated workflows. The site features a dark theme with modern UI components, smooth scrolling navigation, and showcases key projects and skills.

## ✨ Features

### 🎨 Design & UX
- **Dark Theme**: Modern dark interface with custom color palette
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Interactive Navigation**: Auto-updating navigation based on scroll position
- **Modern UI Components**: Built with shadcn/ui components

### 📱 Sections
- **Hero Section**: Introduction with animated code block and CTA buttons
- **Featured Projects**: Showcase of key projects with detailed descriptions
- **Skills & Expertise**: Comprehensive skill categories with visual icons
- **About Me**: Professional experience timeline and personal information
- **Contact**: Contact form and professional links

### 🛠 Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Router**: Client-side routing for smooth navigation
- **React Query**: Data fetching and state management
- **Tailwind CSS**: Utility-first styling with custom design system
- **Component Library**: Extensive UI component library

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **React Query** - Data fetching and caching

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Beautiful icons
- **Tailwind CSS Animate** - Animation utilities

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or bun

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/arthurgranja/arthur-portfolio.git
   cd arthur-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
arthur-portfolio/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── lovable-uploads/    # Uploaded assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillsSection.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── assets/            # Images and static files
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Key Components

### HeroSection
- Animated introduction with status badge
- Interactive code block display
- Call-to-action buttons
- Tech stack pills

### FeaturedProjects
- Grid layout showcasing key projects
- Project cards with detailed descriptions
- Technology tags and links

### SkillsSection
- Categorized skills with icons
- Visual skill representation
- Hover effects and animations

### AboutSection
- Professional experience timeline
- Personal information and avatar
- Interests and hobbies

### ContactSection
- Contact form with validation
- Professional links (GitHub, LinkedIn)
- Availability status indicator

## 🎨 Design System

### Color Palette
- **Primary**: Custom blue tones
- **Accent**: Success, warning, and secondary colors
- **Surface**: Background and card colors
- **Text**: Primary, secondary, and tertiary text colors

### Typography
- **Font Family**: Inter (system fallback)
- **Monospace**: Fira Code for code blocks
- **Responsive**: Fluid typography scaling

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Upward movement animations
- **Scale In**: Subtle scaling effects
- **Float**: Gentle floating animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Projects
1. Update `src/components/FeaturedProjects.tsx`
2. Add project data to the `featuredProjects` array
3. Include project images in `src/assets/`

### Modifying Skills
1. Edit `src/components/SkillsSection.tsx`
2. Update the `skillCategories` array
3. Add new skill categories or modify existing ones

### Styling Changes
1. Modify `tailwind.config.ts` for theme changes
2. Update `src/index.css` for global styles
3. Edit component-specific styles in individual files

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The project can be deployed to any static hosting service that supports React applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m '[FEAT] Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: artcgranja@gmail.com
- **GitHub**: [github.com/artcgranja](https://github.com/artcgranja)
- **LinkedIn**: [linkedin.com/in/arthur-granja](https://www.linkedin.com/in/arthur-granja-2b5070208)

---
