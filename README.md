# Frontend Project Template

Welcome to the frontend template! This template provides a solid foundation for building modern React applications with TypeScript and Tailwind CSS.

## Technologies Used

- [React v18](https://18.react.dev/)
- [Vite](https://vitejs.dev/) - Build tool and development server
- [TypeScript v5](https://www.typescriptlang.org/docs/)
- [ESLint v8](https://eslint.org)
- [Prettier v3](https://prettier.io/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [TanStack Router v1](https://tanstack.com/router/latest)

## Development Tools

### Required

- Node.js v18 or higher
- npm v9 or higher
- Git

### Recommended VSCode Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense

## Getting Started

First, be sure to read the style guide and git commits documentation:

- [Style guide](./docs/style-guide/style-guide.md)
- [Git commit documentation](./docs/git-commits/conventional-git-commits.md)

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
VITE_SERVER_BASE_URL=http://localhost:3001
```

4. Start the development server:

```bash
npm run dev
```

## Code Quality Tools

### ESLint

Two options are available:

1. (Recommended) Install the ESLint extension for VSCode and follow the recommended settings.
2. Run the command:

```bash
npm run lint
```

### Prettier

Two options are available:

1. (Recommended) Install the Prettier extension for VS Code and configure it to format on save. [Guide: How to Use Prettier in Visual Studio Code](https://www.freecodecamp.org/news/how-to-use-prettier-in-visual-studio-code/)
2. Run the command:

```bash
npm run prettier
```

## Code Standards

### General Rules

- Maximum line length: 80 characters
- Maximum file length: 200 lines
- Use meaningful and descriptive names for variables, functions, and components
- Write self-documenting code with clear intentions
- Keep components small and focused on a single responsibility
- Use TypeScript types/interfaces for props and state

### File Naming Conventions

- React Components: PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- Utility files: camelCase (e.g., `formatDate.ts`, `useAuth.ts`)
- Test files: ComponentName.test.tsx (e.g., `Button.test.tsx`)
- Style files: ComponentName.styles.ts (e.g., `Button.styles.ts`)

## Project Structure

```
src/
├── assets/            # Static files
│   ├── images/
│   └── fonts/
├── components/        # Reusable UI components
│   ├── common/       # Basic UI elements
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── hooks/            # Custom React hooks
├── pages/            # Route pages
├── routes/           # Routing configuration
├── services/         # API and external services
│   ├── api/         # API clients
│   └── storage/     # Local storage services
├── stores/          # State management
├── types/           # TypeScript types
├── utils/           # Utility functions
└── main.tsx         # Entry point
```

## Git Workflow

### Branch Structure

- `main`: Protected branch, requires PR approval
- `dev`: Protected branch, requires PR approval
- Feature branches: Individual development work

### Creating a Feature Branch

```bash
git checkout -b feature/your-feature-name
git push -u origin feature/your-feature-name
```

### Branch Naming Convention

- Feature: `feature/feature-name`
- Bugfix: `bugfix/issue-description`
- Hotfix: `hotfix/issue-description`
- Release: `release/version-number`

## Component Development Guidelines

- Use functional components with hooks
- Keep components focused and single-responsibility
- Use TypeScript interfaces for props
- Implement proper error handling
- Write meaningful comments for complex logic
- Use Tailwind CSS for styling

Example component:

```jsx
import React from "react"

export const Button = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {children}
      </button>
    </div>
  )
}
```

## Contribution Guidelines

1. Create a feature branch from `dev`
2. Write clean, documented code following project standards
3. Test your changes thoroughly
4. Submit a pull request with a clear description of changes
5. Ensure all checks pass (linting, type checking)
6. Request review from team members
7. Address review feedback
8. Keep documentation updated

## Troubleshooting

If you encounter issues:

1. Run `npm install` to ensure dependencies are up-to-date
2. Check for linting errors with `npm run lint`
3. Clear npm cache: `npm cache clean --force`
4. Delete `node_modules` and reinstall dependencies
5. Review console for error messages
6. Check project issue tracker for known issues
7. Contact project maintainers if issues persist

## Documentation Index

- [Git Commit Guidelines](./docs/git-commits/conventional-git-commits.md)
- [Style Guide](./docs/style-guide/style-guide.md)
- [Architecture](./docs/architecture.md)
- [Project Structure](./docs/structure.md)
- [Component Library](./docs/components.md)
- [Routing Documentation](./docs/routing.md)
- [Theme Configuration](./docs/theme.md)

## Documentation Maintenance

- Keep documentation in sync with code changes
- Update README when adding new tools or processes
- Review documentation during sprint retrospectives
- Encourage team feedback on documentation clarity
- Version documentation alongside code

---

_Last updated: January 2024_
