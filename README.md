# HTML to Image Renderer (x-image)

A server-side HTML to image conversion package, designed to work with Next.js applications. This package is primarily used by the Lucid editor for exporting HTML content as images.

## Package Architecture

This is a standalone NPM package that provides server-side HTML-to-image conversion. Here's how it's structured:
```
beautiful-text-images/
├── package.json        # Package manifest
├── tsconfig.json      # TypeScript configuration
├── tsup.config.ts     # Build configuration
├── src/               # Source code
│   ├── index.ts       # Main entry point
│   ├── lib/           # Core library code
│   ├── themes/        # Theme definitions
│   ├── types/         # TypeScript type definitions
├── dist/              # Built code (generated)
├── test-render.ts     # Test rendering utility
└── node_modules/      # Dependencies (generated)
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

### Package Installation

You can install the package via npm:

```bash
npm install beautiful-text-images
```

Or using pnpm:

```bash
pnpm add beautiful-text-images
```

## Development Workflow

### Local Development

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Watch for Changes:**
   ```bash
   pnpm dev  # Runs tsup in watch mode
   ```

### Building

```bash
pnpm build  # Outputs to dist/
```

## Contributing

1. Fork the repository at https://github.com/LucidEdit/x-image
2. Create your feature branch
3. Make your changes
4. Submit a pull request

## License

MIT 
