# Soe Thura Naing — Portfolio

A modern, animated portfolio website built with **React + Vite**, **Framer Motion**, and **react-icons**.

Features: dark/light theme toggle, 3D rotating tech cube, particle background, typing effect, glassmorphism cards with 3D tilt, animated skill bars, timeline, and a contact form.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:4000

## Build for production

```bash
npm run build
```

The static site is generated in the `dist/` folder. Preview it with `npm run preview`.

## Deploy for free

### Vercel (recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Import the repository — Vercel auto-detects Vite. Click **Deploy**.

### Netlify
1. Push to GitHub, then at [app.netlify.com](https://app.netlify.com) click **Add new site → Import an existing project**.
2. Build command: `npm run build` — Publish directory: `dist`.
3. Or drag-and-drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for an instant deploy with no GitHub needed.

## Project structure

```
src/
├── components/     # Navbar, Hero, About, Skills, Projects, Timeline,
│                   # Volunteering, Contact, Footer, ParticleBackground, CursorGlow
├── context/        # ThemeContext (dark/light mode)
├── hooks/          # useTypingEffect
├── index.css       # Design tokens + shared styles
└── App.jsx
public/
└── Soe-Thura-Naing-CV.pdf   # served by the "Download CV" button
```
