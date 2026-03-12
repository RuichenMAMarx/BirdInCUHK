# Repository Guidelines

## Project Structure & Module Organization
This repository is a static bird guide website. Main pages live at the root: `index.html` and `birdsdetail.html` drive the list and detail views, while `birds.html` is an alternate entry page. Shared styles are in `css/style.css`, and all bird data plus page rendering logic live in `js/script.js`. Store bird photos in `img/` and bird-call media in `audio/`. Keep image paths stable because the JavaScript data objects reference files directly, for example `img/bird03.jpg`.

## Build, Test, and Development Commands
No build step is required. For quick checks, open `index.html` in a browser. For safer local testing with query parameters and asset loading, run a simple static server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000/index.html`. Use `node --check js/script.js` to catch JavaScript syntax errors before submitting changes.

## Coding Style & Naming Conventions
Use 2-space indentation in HTML, CSS, and JavaScript. Prefer semantic, descriptive class names such as `bird-grid`, `detail-content`, and `hero-content`. In `js/script.js`, use camelCase for variables and functions, and keep each bird record in the same field order (`id`, `cnName`, `enName`, `scientificName`, `image`, etc.). Name new assets with lowercase, hyphen-free patterns already used here, such as `bird11.jpg`.

## Testing Guidelines
There is no automated test suite yet, so rely on focused manual testing. Verify that the bird list renders, each card opens `birdsdetail.html?id=...`, invalid IDs show the fallback message, and all linked images/audio load correctly. Recheck mobile layout after editing `css/style.css`, especially the detail page image and content stack.

## Commit & Pull Request Guidelines
Git history is not available in this workspace snapshot, so use short imperative commit messages such as `Add cinereous tit profile` or `Update bird detail links`. Keep commits scoped to one logical change. Pull requests should include a brief summary, affected files, manual test notes, and screenshots for any visual or content-heavy updates.

## Content Maintenance Tips
When adding a bird, update the `birds` array in `js/script.js` and add matching media files to `img/` or `audio/`. Preserve the existing bilingual content style and ensure all source links from research notes are captured in the detail view.
