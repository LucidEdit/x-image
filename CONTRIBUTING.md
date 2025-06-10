# Contributing to X-Image

Thank you for your interest in contributing to X-Image! We welcome contributions from everyone.

## Getting Started

### Prerequisites
- Node.js (v18 or newer)
- pnpm (`npm install -g pnpm`)
- Supabase CLI

### Development Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/x-image.git
cd x-image
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up Supabase:
```bash
npx supabase start
```

4. Copy environment variables:
```bash
cp .env.example .env.local
```

5. Run database migrations:
```bash
pnpm db:migrate
```

6. Start the development server:
```bash
pnpm dev
```

## How to Contribute

### Reporting Issues
- Use the issue templates to report bugs or request features
- Search existing issues before creating a new one
- Provide clear reproduction steps for bugs

### Making Changes
1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards:
   - Use TypeScript for type safety
   - Follow the existing code style
   - Write meaningful commit messages
   - Add tests if applicable

3. Test your changes:
   ```bash
   pnpm lint
   pnpm build
   ```

4. Commit your changes:
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. Push and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

### Pull Request Guidelines
- Fill out the PR template completely
- Keep PRs focused and atomic
- Update documentation if needed
- Ensure all checks pass
- Be responsive to feedback

## Code Style
- We use ESLint and Prettier for code formatting
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

## Project Structure
- `app/` - Next.js app router pages and components
- `components/` - Reusable UI components
- `lib/` - Utility functions and hooks
- `db/` - Database schema and migrations
- `actions/` - Server actions

## Questions?
Feel free to open a discussion or reach out if you have any questions! 