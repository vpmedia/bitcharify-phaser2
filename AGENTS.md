# AGENTS.md

## Overview

Integration add-on that wires the `@vpmedia/bitcharify` bitmap font generator into the Phaser v2 game engine (the modern `@vpmedia/phaser` port).

## Tech Stack

Read [package.json](package.json) for the language, runtime, dependencies and tooling.

## Documentation

- Lefthook: https://lefthook.dev/llms.txt
- OXC (oxlint, oxfmt): https://oxc.rs/llms.txt
- Rolldown: https://rolldown.rs/llms.txt
- TypeScript: https://context7.com/websites/typescriptlang/llms.txt
- Vitest: https://vitest.dev/llms.txt

## Commands

- **Install:** `pnpm install`
- **Build:** `pnpm build` (clears `dist/`, Rolldown, `.d.ts` emit)
- **Test:** `pnpm test`
- **Lint / Format / Typecheck:** `pnpm lint` / `pnpm format` / `pnpm typecheck`
- **All checks (incl. build):** `pnpm check`

## Conventions

- **Commits:** Conventional Commits (`@commitlint/config-conventional`)
- **Modules:** ESM only
- **Style:** Enforced by oxlint + oxfmt — do not hand-format

## Testing

- Vitest with coverage; configured to pass with no tests
- Place tests as `*.test.ts` co-located with source under `src/`

## Reference Documentation

Read on demand:

- [clean-code.md](docs/agents/clean-code.md) — general clean-code guidelines: naming, functions, comments, error handling, classes, testing, and refactoring.
