# your-ui-lib

Reusable React UI component library. **No Tailwind CSS setup required in your app!**

## Features
- Prebuilt styles included (no Tailwind install or config needed)
- Automatic style injection (no manual import required)
- ESM & CommonJS builds
- Only React is a peer dependency

## Usage

### 1. Install
```
npm install your-ui-lib
```

### 2. Use in your React app
```tsx
import { Button } from 'your-ui-lib';

function App() {
  return <Button>Click me</Button>;
}
```

**You do NOT need to install or configure Tailwind CSS.**
All required styles are included and injected automatically.

## Development

### Build CSS
```
npm run build:css
```

### Build JS/TS
```
npm run build:js
```

### Full Build
```
npm run build
```

## Publish to npm
1. Update `package.json` name/version
2. Login: `npm login`
3. Build: `npm run build`
4. Publish: `npm publish --access public`

## Final dist structure
```
dist/
  styles.css
  index.cjs
  index.mjs
  index.d.ts
```
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
