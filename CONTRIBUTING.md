# Contributing Guide

Thank you for your interest in the Jim Hillier Portfolio project! This guide outlines the development setup and contribution guidelines.

## 🛠️ Development Setup

### Prerequisites
- Node.js 18 or later
- PostgreSQL database access
- Git for version control

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Start development server: `npm run dev`

## 📋 Project Standards

### Code Style
- **TypeScript** for all new code
- **ESLint** configuration for consistent formatting
- **Prettier** for code formatting (if configured)
- **Meaningful variable names** and clear function documentation

### Component Architecture
- **Functional components** with React hooks
- **Shadcn/ui components** for UI consistency
- **Tailwind CSS** for styling with design system variables
- **Responsive design** with mobile-first approach

### Database Standards
- **Drizzle ORM** for all database interactions
- **Type-safe schemas** in `shared/schema.ts`
- **Migrations** for schema changes
- **Validation** with Zod schemas

## 🧪 Testing Guidelines

### Manual Testing
- Test all responsive breakpoints
- Verify accessibility with keyboard navigation
- Check color contrast ratios
- Test on multiple browsers

### Performance
- Optimize images and assets
- Monitor bundle sizes with Vite analyzer
- Test loading performance on slow connections

## 📝 Documentation

### Code Documentation
- Document complex business logic
- Add JSDoc comments for exported functions
- Keep README.md updated with new features

### Commit Messages
Use clear, descriptive commit messages:
```
feat: add contact form validation
fix: resolve mobile navigation layout issue
docs: update deployment instructions
style: improve button hover animations
```

## 🚀 AI-Assisted Development

This project demonstrates modern AI-assisted development practices:

### Vibe Coding Principles
- **Contextual prompts** for iterative development
- **AI pair programming** with Replit Agent
- **Rapid prototyping** and refinement cycles
- **Human oversight** for architecture decisions

### Best Practices
- Provide clear, specific prompts to AI assistants
- Review and test all AI-generated code
- Maintain consistent coding standards
- Document AI-assisted development decisions

## 🔄 Development Workflow

### Feature Development
1. Create feature branch from main
2. Develop with AI assistance using contextual prompts
3. Test functionality thoroughly
4. Update documentation as needed
5. Submit pull request with clear description

### AI Integration Tips
- Use descriptive file names and clear project structure
- Provide context about existing patterns and conventions
- Test AI suggestions before implementing
- Maintain human decision-making for architecture choices

## 📦 Dependencies Management

### Adding New Dependencies
- Use `npm install` for new packages
- Prefer well-maintained packages with TypeScript support
- Update package.json scripts if needed
- Document any new build requirements

### Updating Dependencies
- Regularly update to patch versions
- Test thoroughly after major version updates
- Check for breaking changes in changelogs

## 🎨 Design System

### Color Palette
- **Primary**: Pawsome orange (#f97316)
- **Secondary**: Pawsome blue (#3b82f6)
- **Accent**: Pawsome yellow (#eab308)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Primary font**: Inter for clean, professional appearance
- **Headings**: Bold weights for hierarchy
- **Body text**: Regular weight with good line height

### Component Guidelines
- Use existing Shadcn/ui components when possible
- Follow established spacing patterns (Tailwind spacing scale)
- Maintain consistent border radius and shadow styles
- Ensure proper focus states for accessibility

## 🐛 Bug Reports

When reporting bugs:
- Describe the expected vs actual behavior
- Include steps to reproduce
- Specify browser and device information
- Attach screenshots if helpful

## 💡 Feature Requests

For new features:
- Explain the use case and user benefit
- Consider impact on existing functionality
- Discuss technical implementation approach
- Align with project goals and AI-first development

## 📞 Questions & Support

- **Email**: hillier.jim@gmail.com
- **Project Issues**: Use GitHub Issues for bug reports and feature requests
- **Development Questions**: Include relevant code context and specific questions

---

*This project showcases the future of software development through AI-assisted "vibe coding" - contextual, iterative development with human oversight.*