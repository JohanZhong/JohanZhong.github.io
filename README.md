# Jiehang Zhong · Academic Homepage

Personal homepage of Jiehang Zhong, an undergraduate student at Southeast University.

**Live website:** https://johanzhong.github.io/

Research interests: multimodal learning, computer vision, and graph learning.

Contact: 213241570@seu.edu.cn

## Local preview

This is a static website with no build step or package dependencies.

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173 in a browser. You can also open `index.html` directly; clipboard access requires HTTPS or localhost.

## Updating the site

- `index.html`: biography, research interests, education, links, and search metadata.
- `styles.css`: colors, typography, desktop/mobile layouts, reduced-motion and print styles.
- `script.js`: email copying, current navigation section, and copyright year. The page works without it.
- `favicon.svg`: the browser tab icon.

The page uses system fonts and local SVG artwork, with no external font, script, or image requests.

## GitHub Pages

Publish from the `main` branch, `/ (root)` directory, in the repository's **Settings → Pages**. No framework build or custom Actions workflow is required.
