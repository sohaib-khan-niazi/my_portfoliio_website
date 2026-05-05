# Muhammad Sohaib Khan Niazi Portfolio

Single-page React portfolio built with Vite for GitHub Pages.

## Edit Your Content

Most portfolio text lives in:

```txt
src/data/portfolio.js
```

Update that file to change your name, contact links, CV path, skills, experience, projects, certifications, education, and languages.

Your downloadable CV is served from:

```txt
public/Muhammad_Sohaib_CV.pdf
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production site is generated in `dist/`.

## GitHub Pages

This project uses `base: './'` in `vite.config.js`, so the built site can work from either a user page or a repository page.

For a simple manual deploy:

```bash
npm run build
```

Then publish the `dist/` folder using your preferred GitHub Pages workflow.
