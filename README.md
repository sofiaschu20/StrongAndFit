# Lean & Strong — Landing Page

A React + Vite landing page for a 12-week women's fitness program.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Other scripts

- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build locally

## Customizing

- **Content** (program name, benefits, phases, testimonials, pricing, FAQ) lives in arrays at the top of `src/App.jsx`.
- **Colors & fonts** are CSS variables at the top of `src/styles.css`.
- **Signup form**: `handleSubmit` in the `Join` component currently just logs to the console — connect it to your email provider or backend.
