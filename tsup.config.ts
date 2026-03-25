import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  sourcemap: true,
  clean: false, // Don't clean dist before build
  noClean: true, // Prevent tsup from deleting dist/styles.css
  external: ['react', 'react-dom'],
  outDir: 'dist'
});
