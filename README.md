# X-Image

A web application for converting HTML content to beautiful images, perfect for social media sharing and visual content creation.

Developed by [Lucid](https://getlucid.app). Try it out at [getlucid.app/text-to-image](https://getlucid.app/text-to-image)!

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **UI Components**: Shadcn UI
- **Backend**: Postgres, Supabase, Drizzle ORM, Server Actions
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- pnpm (`npm install -g pnpm`)
- Supabase CLI

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd x-image
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up Supabase:

Follow the [Supabase Local Development Guide](https://supabase.com/docs/guides/local-development/cli/getting-started) to set up your local Supabase instance.

```bash
# Start Supabase (this will automatically create the x-images storage bucket and apply RLS policies)
npx supabase start
```

The local setup automatically configures:
- x-images storage bucket for community image uploads
- Row Level Security (RLS) policies for public access
- Database schema and seed data

4. Set up environment variables:

Copy the `.env.example` file to `.env.local` and update the variables as needed:

```bash
cp .env.example .env.local
```

5. Run database migrations:

```bash
pnpm db:migrate
```

6. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **HTML to Image Conversion**: Transform HTML content into beautiful PNG images
- **Multiple Themes**: Choose from various built-in themes for different styles
- **Community Feed**: Browse and share images created by the community
- **Public Storage**: Images are automatically stored and made publicly accessible
- **Modern UI**: Clean, responsive design with intuitive user experience

## Available Themes

The application includes several built-in themes:

- **`book-excerpt`** (default) - Clean book-style layout with serif fonts
- **`a4-poster`** - A4 poster format for documents
- **`highlighted-book`** - Book layout with highlighting capabilities
- **`dark-mono-poster`** - Dark theme with monospace fonts
- **`manifesto`** - Modern manifesto-style layout with mixed typography

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

The app is configured for deployment on Vercel.

## License

MIT 
