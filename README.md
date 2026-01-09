# Simple HTML with Tailwind CSS

This project uses Tailwind CSS with simple HTML (no framework).

## Quick Start (CDN Method - Simplest)

The `index.html` file uses Tailwind CSS via CDN, so you can simply open it in your browser. No installation needed!

## Alternative: Build Method (Optional)

If you want to use the build process instead of CDN:

1. Install dependencies:
```bash
npm install
```

2. Build CSS:
```bash
npm run build-css
```

3. Update `index.html` to use the compiled CSS:
   - Remove the CDN script tag
   - Add: `<link href="./output.css" rel="stylesheet">`

## Files

- `index.html` - Main HTML file with Tailwind CSS
- `tailwind.config.js` - Tailwind configuration
- `input.css` - Source CSS file (for build method)
- `package.json` - npm dependencies

