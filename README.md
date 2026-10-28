# mattreimer.ca

My personal homepage, built with [Docusaurus](https://docusaurus.io/), deployed automatically to GitHub Pages.

## How it works

- All content is **Markdown** — the homepage lives in [`src/pages/index.md`](src/pages/index.md) and docs in [`docs/`](docs/).
- Managed with **Yarn 4** (Berry) via Corepack — the version is pinned in `package.json`.
- A GitHub Actions workflow (`.github/workflows/pages.yml`) runs on every push to `main`: it installs dependencies, builds the static site, and deploys it to GitHub Pages.
- Live at: <https://mattreimer.github.io/mattreimer.ca/>

## Local development

```sh
corepack enable          # one-time: activate the pinned Yarn version
yarn install
yarn start               # dev server at http://localhost:3000
yarn build               # production build into ./build
yarn serve               # preview the production build
```

## Deploying

Just push to `main` — the workflow in `.github/workflows/pages.yml` builds and deploys automatically. You can also trigger it manually from the **Actions** tab on GitHub.