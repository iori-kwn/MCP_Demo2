# Figma Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS, based on a Figma design.

## Features

- 🎨 **Pixel-perfect implementation** of Figma design
- ⚡ **Fast development** with Vite
- 🔧 **TypeScript** for type safety
- 🎯 **Tailwind CSS** for styling
- 📱 **Responsive design** for all devices
- 🧩 **Component-based architecture**
- ✨ **Modern React** with hooks and functional components

## Project Structure

```
src/
├── components/
│   ├── icons/
│   │   ├── FigmaIcon.tsx       # Figma logo SVG component
│   │   └── SocialIcons.tsx     # Social media icons (Twitter, Instagram, YouTube, LinkedIn)
│   ├── Card.tsx                # Reusable card component with horizontal/vertical layouts
│   ├── CardGrid.tsx            # 3x2 grid section with feature cards
│   ├── ContentSection.tsx      # Content section with main features
│   ├── Footer.tsx              # Footer with links and social media
│   ├── Header.tsx              # Navigation header with auth buttons
│   ├── Hero.tsx                # Hero section with title and subtitle
│   ├── ImageSection.tsx        # Two-column image placeholder section
│   └── LandingPage.tsx         # Main page component that assembles all sections
├── App.tsx                     # Root application component
├── main.tsx                    # React entry point
└── index.css                   # Global styles with Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open your browser:**
   Navigate to \`http://localhost:3000\` to view the application.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Design System

The project follows the design system specified in the original Figma file:

### Typography

- **Font Family:** Inter
- **Title Hero:** 72px, Bold, 1.2 line height
- **Heading:** 24px, Semi Bold, 1.2 line height
- **Subheading:** 20px, Regular, 1.2 line height
- **Body Base:** 16px, Regular, 1.4 line height
- **Body Strong:** 16px, Semi Bold, 1.4 line height

### Colors

- **Primary Text:** #1e1e1e
- **Secondary Text:** #757575
- **Background:** #ffffff
- **Secondary Background:** #f5f5f5
- **Placeholder:** #e3e3e3
- **Borders:** #d9d9d9

## Components

### Header

- Navigation with dynamic menu items
- Authentication buttons (Log in / Sign up)
- Figma logo
- Responsive design with hover effects

### Hero

- Large title with subtitle
- Centered layout
- Typography following design system

### ImageSection

- Two-column layout with placeholder images
- Responsive spacing

### ContentSection

- Feature cards in horizontal layout
- Dynamic content with call-to-action buttons
- Consistent spacing and typography

### CardGrid

- 3x2 grid of feature cards
- Vertical card layout
- Hover effects and responsive design

### Footer

- Company logo and social media links
- Three-column link organization
- Consistent typography and spacing

### Card Component

- Supports both horizontal and vertical layouts
- Optional call-to-action buttons
- Hover effects and transitions
- Image placeholders
- Consistent styling

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality assurance

## Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature-name\`
3. Make your changes and commit: \`git commit -m 'Add feature'\`
4. Push to the branch: \`git push origin feature-name\`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
