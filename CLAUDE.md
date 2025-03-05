# Development Commands and Guidelines for aepronunciation.com

## Build/Dev Commands
- `npx docusaurus start` - Start local development server
- `npx docusaurus build` - Build production site to `/build` directory
- `npx docusaurus serve` - Serve built website locally
- `npx docusaurus clear` - Clear build cache

## Code Style Guidelines
- **React Components**: Functional components with named exports
- **Imports**: Group imports by: React/libraries, Docusaurus, site components, styles
- **TypeScript**: Use JSDoc annotations with `@ts-check` for type checking
- **Naming**: PascalCase for components, camelCase for functions/variables
- **CSS**: Use CSS modules with `.module.css` extension
- **Content**: Follow Docusaurus MDX conventions for content

## Error Handling
- Set `onBrokenLinks: 'throw'` for production builds
- Use React error boundaries for component error handling
- Add descriptive error messages in user-facing components

## Project Structure
- `/src/components`: React components
- `/src/pages`: Website pages
- `/src/css`: Global styles
- `/static`: Static assets