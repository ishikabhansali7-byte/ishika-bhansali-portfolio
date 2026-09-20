# Portfolio

A fully static site — no build step, no dependencies, no framework. Open `index.html`
directly in a browser, or deploy the folder as-is to any static host.

## Files

- `index.html` — page markup (loading screen, header, footer, and the `#app` mount
  point the router renders into)
- `styles.css` — all styling (design tokens, layout, theme, page styles)
- `script.js` — routing, page templates, theme toggle, drag interactions, hero
  animation, everything else
- `knoki-thumbnail.png`, `knoki-final-product.png`, `knoki-iterations.png` — image
  assets referenced by relative path from `script.js`

All four non-HTML files must stay in the **same folder** as `index.html` — they're
linked/referenced by relative filename, not embedded.

## Running locally

Just double-click `index.html`, or from a terminal in this folder:

```
# Windows
start index.html

# macOS
open index.html
```

No dev server or `npm install` needed — it's plain HTML/CSS/JS.

## Deploying

Since this is 100% static, any static host works with zero configuration:

- **GitHub Pages** — push this folder to a repo, enable Pages on the `main` branch
- **Netlify / Vercel** — drag-and-drop the folder onto their dashboard, or connect
  the repo (no build command needed — leave it blank or set it to a no-op)
- **Any web server** — just copy the files into the web root

## Editing

- Colors, fonts, spacing: CSS custom properties at the top of `styles.css`
  (`:root` and the `html[data-theme="dark"]` override)
- Project data (Work page tiles + case-study content): the `PROJECTS` array near
  the top of `script.js`
- Page copy (About bio, Contact info, etc.): the `*Template()` functions in
  `script.js` (`homeTemplate`, `aboutTemplate`, `workTemplate`, `contactTemplate`,
  `detailTemplate`)
