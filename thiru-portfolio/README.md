# Thirumalaivasan K N – Portfolio

A record of my work as a Software Engineer at Psiog: Microsoft Power Platform, SharePoint and platform integrations.

**Live site:** `https://<your-github-username>.github.io/<repo-name>/`

## Built with

- React 19 + Vite
- Plain CSS (no UI framework), Space Grotesk + Inter fonts
- Deployed to GitHub Pages by GitHub Actions on every push to `main`

## Updating content

All text, links, jobs, projects and skills are in **`src/data/profile.js`**. Edit that file and push; the site rebuilds by itself.

| To change… | Edit in `src/data/profile.js` |
|---|---|
| Name, role, intro, links | `profile` |
| Add a résumé button | Put the PDF at `public/resume.pdf`, then set `resumeUrl: './resume.pdf'` |
| Jobs | `experience` (newest first; `current: true` shows the **Active** tag) |
| Projects | `projects` (add the image to `src/assets/projects/` and import it at the top) |
| Skills | `skills` |
| College years | `education.years`, e.g. `'2021 – 2025'` |
| Claude logo | Save the official logo as `src/assets/logos/claude.svg` (or `.png`). It appears on the Claude, Claude Code and Claude + Power Apps items automatically. |
| Any other logo | Drop the file into `src/assets/logos/` and reference it with `logo('file-name.ext')` |

Images: use WebP, about 800 px wide for project screenshots. Keep files small so the site loads fast.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Project structure

```
src/
  App.jsx              page sections
  components/Icons.jsx inline SVG icons
  data/profile.js      ALL site content
  styles.css           design tokens, layout, motion
  assets/              photo, logos, project images (WebP)
public/favicon.svg
.github/workflows/deploy.yml  GitHub Pages deploy
```
