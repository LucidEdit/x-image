# HTML to Image Renderer (x-image)

A client side HTML to image conversion package that creates beautiful images from text and HTML content, perfect for social media sharing.

Developed by [Lucid](https://getlucid.app). Try it out at [getlucid.app/text-to-image](https://getlucid.app/text-to-image)!

## Package Architecture

This is a standalone NPM package that provides client-side HTML-to-image conversion. Here's how it's structured:
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

console.log(availableThemes); // ['book-excerpt', 'a4-poster', 'highlighted-book', 'dark-mono-poster', 'manifesto']

await createBeautifulTextImage(htmlContent, {
  theme: 'manifesto'
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

## Available Themes

The package includes several built-in themes:

- **`book-excerpt`** (default) - Clean book-style layout with serif fonts
- **`a4-poster`** - A4 poster format for documents
- **`highlighted-book`** - Book layout with highlighting capabilities
- **`dark-mono-poster`** - Dark theme with monospace fonts
- **`manifesto`** - Modern manifesto-style layout with mixed typography

## How Themes Work

Themes in this package are JavaScript objects that define the visual styling for your HTML content. Each theme consists of:

### Theme Structure

```typescript
interface Theme {
  name: string;                    // Unique theme identifier
  fontLinks?: string[];            // Google Fonts or external font URLs
  wrapperStyle: Record<string, string | number>;  // Styles for the main container
  elementStyles?: Record<string, Record<string, string | number>>;  // Styles for HTML elements
  customCSS?: string;              // Additional CSS if needed
}
```

### How Themes Are Applied

1. **Font Loading**: External fonts (if specified) are loaded dynamically
2. **Wrapper Styling**: The main container gets the `wrapperStyle` properties
3. **Element Styling**: Individual HTML elements receive their specific styles
4. **CSS Injection**: Any custom CSS is injected into the document head
5. **Rendering**: The styled content is rendered to a PNG image

### Example Theme

```typescript
export const myCustomTheme: Theme = {
  name: "my-custom-theme",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
  ],
  wrapperStyle: {
    width: "800px",
    padding: "60px",
    backgroundColor: "#ffffff",
    fontFamily: '"Inter", sans-serif',
    color: "#333333"
  },
  elementStyles: {
    h1: {
      fontSize: "36px",
      fontWeight: "600",
      margin: "0 0 20px 0"
    },
    p: {
      fontSize: "18px",
      lineHeight: "1.6"
    }
  }
};
```

## Creating Custom Themes

To create and use your own themes:

### 1. Define Your Theme

```typescript
import { Theme } from 'beautiful-text-images';

const myTheme: Theme = {
  name: "my-awesome-theme",
  wrapperStyle: {
    width: "900px",
    padding: "80px",
    backgroundColor: "#f0f4f8",
    fontFamily: 'system-ui, sans-serif',
    color: "#333333"
  },
  elementStyles: {
    h1: {
      fontSize: "48px",
      fontWeight: "600",
      margin: "0 0 30px 0"
    },
    p: {
      fontSize: "24px",
      lineHeight: "1.7"
    }
  }
};
```

### 2. Register and Use Your Theme

Since the package expects themes to be registered in the themes array, you'll need to either:

**Option A: Fork and modify the package**
Add your theme to `src/themes/index.ts` and rebuild.

**Option B: Use a custom approach (future feature)**
```typescript
// This would be a potential future API
import { createBeautifulTextImage, registerTheme } from 'beautiful-text-images';

registerTheme(myTheme);
await createBeautifulTextImage(htmlContent, { theme: 'my-awesome-theme' });
```

### Theme Design Tips

- **Typography**: Choose fonts that work well together and load reliably
- **Contrast**: Ensure good readability with sufficient color contrast
- **Spacing**: Use consistent padding and margins for clean layouts
- **Responsive**: Consider how your theme looks at different sizes
- **Performance**: Limit the number of external font families to improve loading speed

## API Reference

### `createBeautifulTextImage(htmlContent, options)`

Converts HTML content to a downloadable PNG image or returns a data URL.

**Parameters:**
- `htmlContent` (string): The HTML content to render
- `options` (object, optional):
  - `theme` (string): Theme name to use (default: 'book-excerpt')
  - `returnDataUrlOnly` (boolean): Return data URL instead of downloading (default: false)
  - `maxLength` (number): Maximum allowed HTML content length

**Returns:**
- `Promise<string | void>`: Data URL if `returnDataUrlOnly` is true, otherwise void

**Example:**
```typescript
// Download image
await createBeautifulTextImage('<h1>Hello</h1>');

// Get data URL
const dataUrl = await createBeautifulTextImage('<h1>Hello</h1>', {
  theme: 'manifesto',
  returnDataUrlOnly: true
});
```

### `availableThemes`

Array of available theme names.

**Type:** `string[]`

**Example:**
```typescript
import { availableThemes } from 'beautiful-text-images';
console.log(availableThemes); // ['book-excerpt', 'a4-poster', ...]
```

## Technical Details

### Dependencies

- **html-to-image**: Core library for HTML-to-image conversion
- **TypeScript**: For type safety and better developer experience

### Browser Compatibility

This package works in modern browsers that support:
- ES6+ features
- HTML5 Canvas API
- CSS3 styling
- Dynamic font loading

### Performance Considerations

- Fonts are loaded asynchronously to avoid blocking
- A 100ms delay is added after DOM insertion for proper rendering
- Images are rendered at 2x pixel ratio for high quality
- Temporary DOM elements are cleaned up after rendering

## Package Installation

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
