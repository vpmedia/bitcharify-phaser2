# AGENTS.md

## Overview

Integration add-on that wires the `@vpmedia/bitcharify` bitmap font generator into the Phaser v2 game engine (the modern `@vpmedia/phaser` port).

## Tech Stack

- **Language:** TypeScript (ESM, `"type": "module"`)
- **Runtime:** Node.js / Browser
- **Package Manager:** pnpm (workspaces)
- **Peer/Runtime:** `@vpmedia/phaser` (Phaser 2 modern port)
- **Build:** Rolldown + `tsc --emitDeclarationOnly`
- **Testing:** Vitest, @vitest/coverage-v8, jsdom
- **Lint/Format:** oxlint (+ `oxlint-tsgolint`), oxfmt
- **Type Checking:** TypeScript
- **Tooling:** lefthook (git hooks), commitlint (conventional commits)

## Documentation

- Lefthook: https://lefthook.dev/llms.txt
- OXC (oxlint, oxfmt): https://oxc.rs/llms.txt
- Rolldown: https://rolldown.rs/llms.txt
- Vitest: https://vitest.dev/llms.txt

## Commands

- **Install:** `pnpm install`
- **Build:** `pnpm build` (clears `dist/`, Rolldown, `.d.ts` emit)
- **Test:** `pnpm test`
- **Lint / Format / Typecheck:** `pnpm lint` / `pnpm format` / `pnpm typecheck`
- **All checks (incl. build):** `pnpm check`

## Project Structure

- `src/index.ts` — public entry point
- `src/bitcharify/` — Phaser 2 add-on implementation
- `dist/` — build output (gitignored)

## Conventions

- **Commits:** Conventional Commits (`@commitlint/config-conventional`)
- **Modules:** ESM only
- **Style:** Enforced by oxlint + oxfmt — do not hand-format

## Testing

- Vitest with coverage; configured to pass with no tests
- Place tests as `*.test.ts` co-located with source under `src/`
