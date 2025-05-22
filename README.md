# HTML to Image Renderer

A server-side HTML to image conversion package, designed to work with Next.js applications. This package is primarily used by the Lucid editor for exporting HTML content as images.

## Package Architecture

This is a standalone NPM package that provides server-side HTML-to-image conversion. Here's how it's structured:

```
html-to-image-renderer/
├── package.json        # Package manifest
├── tsconfig.json      # TypeScript configuration
├── tsup.config.ts     # Build configuration
├── src/               # Source code
│   └── index.ts       # Main entry point
├── dist/              # Built code (generated)
└── node_modules/      # Dependencies (generated)
```

### Key Files Explained

- **package.json**: Defines the package configuration
  ```json
  {
    "name": "html-to-image-renderer",  // Package name
    "version": "0.1.0",               // Package version
    "main": "dist/index.js",          // CommonJS entry point
    "module": "dist/index.mjs",       // ES Modules entry point
    "types": "dist/index.d.ts"        // TypeScript types
  }
  ```

- **tsup.config.ts**: Configures the build process
  ```typescript
  {
    format: ['cjs', 'esm'],  // Outputs both formats
    dts: true,               // Generates type definitions
    external: ['puppeteer']  // External dependencies
  }
  ```

## Integration with Lucid

This package is used by the Lucid editor (main app) for converting editor content to images. The integration happens in several parts:

### 1. Package Linking

In Lucid's `package.json`, this package can be linked in two ways:

```json
{
  "dependencies": {
    // Development: Local File Link
    "html-to-image-renderer": "file:../html-to-image-renderer",
    
    // Production: Version from npm
    "html-to-image-renderer": "^0.1.0"
  }
}
```

### 2. Integration Points

1. **API Route** (`lucid/app/api/render-image/route.ts`):
   - Handles image conversion requests
   - Uses this package server-side

2. **Client Hook** (`lucid/lib/hooks/use-html-to-image.ts`):
   - Provides React hook for image generation
   - Communicates with the API route

3. **Export Menu** (`lucid/components/editor/editor-export-menu.tsx`):
   - UI component for triggering exports
   - Uses the hook for image generation

## Development Workflow

### Local Development

1. **Link Package to Lucid:**
   ```bash
   # In this directory
   npm link

   # In Lucid directory
   npm link html-to-image-renderer
   ```

   Or update Lucid's package.json to use local files:
   ```json
   {
     "dependencies": {
       "html-to-image-renderer": "file:../html-to-image-renderer"
     }
   }
   ```

2. **Watch for Changes:**
   ```bash
   npm run dev  # Runs tsup in watch mode
   ```

### Building

```bash
npm run build  # Outputs to dist/
```

### Publishing

```bash
npm version patch  # Bump version
npm publish       # Publish to npm
```

## Package Design Decisions

1. **Server-Side Rendering**
   - Uses Puppeteer for high-quality rendering
   - Runs on the server to handle heavy processing
   - Avoids client-side performance issues

2. **Dual Format Output**
   - CommonJS for Node.js compatibility
   - ES Modules for modern bundlers
   - TypeScript types for better DX

3. **External Dependencies**
   - Puppeteer is marked as external
   - Keeps package size minimal
   - Allows consumers to manage versions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Submit a pull request

## License

MIT 