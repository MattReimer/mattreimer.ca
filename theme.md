---
sidebar_position: 2
title: Theme
---

# Theme

This site is styled after [motherfuckingwebsite.com](https://motherfuckingwebsite.com/) — flat, square, serif, no gradients, no shadows, underlined links, short readable lines.

The default mode is **dark**. The toggle in the navbar switches to light — the original black-on-white motherfuckingwebsite look.

## Controlling the theme

Everything visual comes from the **palette variables** at the top of [`src/css/custom.css`](https://github.com/MattReimer/mattreimer.ca/blob/main/src/css/custom.css). There are two palettes:

- `:root` — **LIGHT** (the original website: black text on white, browser-blue links)
- `html[data-theme='dark']` — **DARK** (the default; the same website with the lights off)

Each component is mapped onto these variables, so change any one of them and the whole site follows:

| Variable               | What it controls               | Default (dark) |
| ---------------------- | ------------------------------ | -------------- |
| `--mfw-bg`             | Page background                | `#0a0a0a`      |
| `--mfw-surface`        | Navbar, footer, cards          | `#131313`      |
| `--mfw-surface-raised` | Code blocks, table headers     | `#1b1b1b`      |
| `--mfw-text`           | Body text                      | `#e8e8e8`      |
| `--mfw-muted`          | Secondary / meta text          | `#9c9c9c`      |
| `--mfw-border`         | All hairlines                  | `#2a2a2a`      |
| `--mfw-link`           | Links                          | `#8ab4ff`      |
| `--mfw-accent`         | Active nav, badges, pagination | `#8ab4ff`      |
| `--mfw-content-width`  | Max prose column width         | `46em`         |

Example — make it truly motherfucking black:

```css
html[data-theme='dark'] {
  --mfw-bg: #000000;
  --mfw-border: #1c1c1c;
}
```

## Mode behaviour

`themeConfig.colorMode` in [`docusaurus.config.ts`](https://github.com/MattReimer/mattreimer.ca/blob/main/docusaurus.config.ts) controls which mode is default and whether visitors can switch:

```ts
colorMode: {
  defaultMode: 'dark',           // 'dark' | 'light'
  respectPrefersColorScheme: false,
  disableSwitch: false,          // true -> lock to the default mode
},
```
