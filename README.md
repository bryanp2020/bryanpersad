# Bryan Persad — Personal Website

Static, responsive site to showcase services (Build Better Growth & Build Better Emails) and sell books.

## Structure

- `index.html` — main site
- `assets/css/styles.css` — styles
- `assets/js/script.js` — interactivity (mobile nav, theme toggle, books grid)
- `assets/img/` — images (placeholders included)
- `assets/icons/` — svg icons and favicon

## Quick Start (GitHub Pages)

1. Create a new repo (e.g. `bryan-persad`).
2. Upload all files at the repo root (ensure `index.html` is in root).
3. Enable **Settings → Pages → Deploy from Branch → `main` / root**.
4. Your site will be live at `https://<username>.github.io/<repo>/` shortly.

### Custom Domain
- Add your domain as a Pages custom domain (e.g. `bryanpersad.com`).
- Create a `CNAME` record pointing to `<username>.github.io`.
- (Optional) Add a `CNAME` file in the repo root with your domain.

## Contact Form
- The contact form uses Formspree. Replace the `action` attribute with your endpoint (e.g. `https://formspree.io/f/xxxxxxx`). Or swap to any form backend.

## Books
- Edit the `books` array in `assets/js/script.js` to update cover images and purchase links.

## Image Sizes
- `assets/img/bryan-headshot.jpg` — 1000x1200 suggested
- `assets/img/book*.jpg` — 1000x1400 suggested
- `assets/img/og-image.jpg` — 1200x630 for social

## SEO
- Update Open Graph/Twitter meta tags in `index.html` with your canonical URL and social handles.
- JSON-LD is included for Person & Organizations.

## License
MIT © 2025 Bryan Persad
