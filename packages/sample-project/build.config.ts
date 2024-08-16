import { defineConfig } from 'tsup'

export default defineConfig({
  name: "sample-project",
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'node22',
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  skipNodeModulesBundle: false,
  platform: 'node'
});