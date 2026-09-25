# Storybook Angular Vite + Angular 22.2 + Analog 2.7.2 reproduction

Minimal reproduction: `@storybook/angular-vite` accepts `@analogjs/vite-plugin-angular >=2.0.0`,
but Analog `2.7.2` breaks `build-storybook` on Angular 22.2.

## Versions

- `@angular/*` / `@angular/build`: 22.2.0
- `@storybook/angular-vite` / `storybook`: 10.6.0
- `@analogjs/vite-plugin-angular`: **2.7.2** (pinned; simulates a lockfile that resolved the peer before 2.7.3)
- `vite`: 8.3.0

## Reproduce

```bash
pnpm install
pnpm peers check      # passes: 2.7.2 satisfies ">=2.0.0"
pnpm build-storybook  # fails
```

```text
■  Build failed with 5 errors:
│  [plugin @analogjs/vite-plugin-angular-optimizer]
│  AssertionError [ERR_ASSERTION]: Hash utility must be initialized by
│  awaiting `initializeHash()` before use.
│  at getXxhash (@angular/build/src/utils/hash.js:63:31)
```

## Fix

```bash
pnpm add -D @analogjs/vite-plugin-angular@2.7.3
pnpm build-storybook  # succeeds
```

Analog fixed Angular 22.2 compatibility in 2.7.3 (analogjs/analog#2576).
