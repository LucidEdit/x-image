# HTML to Image Renderer

A server-side HTML to image conversion package, designed to work with Next.js applications. This package is primarily used by the Lucid editor for exporting HTML content as images.

## Package Architecture

This is a standalone NPM package that provides server-side HTML-to-image conversion. Here's how it's structured:
```
beautiful-text-images/
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
    "name": "beautiful-text-images",  // Package name
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

## Frontend Usage

This package can be used directly in the browser to convert HTML content to images. Here's how to use it:

### Basic Usage

```typescript
import { createBeautifulTextImage } from 'beautiful-text-images';

const htmlContent = `
  <div>
    <h1>Hello World</h1>
    <p>This is a test image</p>
  </div>
`;

await createBeautifulTextImage(htmlContent);
```

### Using Themes

The package comes with built-in themes that you can use:

```typescript
import { createBeautifulTextImage, availableThemes } from 'beautiful-text-images';

console.log(availableThemes); // ['book-excerpt', ...]

await createBeautifulTextImage(htmlContent, {
  theme: 'book-excerpt'
});
```

### Getting Data URL Only

If you want to get the image data URL instead of triggering a download:

```typescript
import { useState } from 'react';
import { createBeautifulTextImage } from 'beautiful-text-images';

function ImagePreview() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const generateImage = async () => {
    const htmlContent = `
      <div>
        <h1>Hello World</h1>
        <p>This is a test image</p>
      </div>
    `;

    const dataUrl = await createBeautifulTextImage(htmlContent, {
      returnDataUrlOnly: true
    });

    setImageUrl(dataUrl);
  };

  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>
      {imageUrl && <img src={imageUrl} alt="Generated content" />}
    </div>
  );
}
```

### Options

The `createBeautifulTextImage` function accepts the following options:

- `theme` (string): The name of the theme to use (default: 'book-excerpt')
- `returnDataUrlOnly` (boolean): If true, returns the data URL instead of triggering download
- `maxLength` (number): Maximum allowed length of the HTML content

## Integration with Lucid

This package is used by the Lucid editor (main app) for converting editor content to images. The integration happens in several parts:

### 1. Package Linking

In Lucid's `package.json`, this package can be linked in two ways:

```json
{
  "dependencies": {
    // Development: Local File Link
    "beautiful-text-images": "file:../beautiful-text-images",
    
    // Production: Version from npm
    "beautiful-text-images": "^0.1.0"
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
   npm link beautiful-text-images
   ```

   Or update Lucid's package.json to use local files:
   ```json
   {
     "dependencies": {
       "beautiful-text-images": "file:../beautiful-text-images"
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
