# Boilerplate AGENTS.md

## Project Structure

- `src/main.ts`: minimal plugin entry bundled by esbuild.
- `src/ui/config.tsx`: example TSX config UI.
- `manifest.json`: example plugin metadata copied into `dist/` after builds.
- `preview.png`: example preview copied into `dist/` when present.
- `dist/`: generated build output; do not edit by hand.

## Commands

- `pnpm run build`: build minified plugin JS, then copy metadata/assets.
- `pnpm run build:dev`: build JS with inline sourcemaps, then copy metadata/assets.
- `pnpm run build:js`: bundle only `src/main.ts`.
- `pnpm run check`: run TypeScript project checks.
- `pnpm run analyze`: inspect the bundled JS output.
- `pnpm run apply`: copy `dist/` into the BetterNCM dev plugin directory.

## Rules

To be added
