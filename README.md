# ProfileMomohAngular

Angular developer portfolio — a modern, responsive full-stack developer portfolio showcasing professional accomplishments, experience, technical skills, and featured projects with clean architecture and best coding practices.

Built with **Angular 20**, **TypeScript**, **Bootstrap 5**, **FontAwesome**, and **Angular Material**.

## Features

- Sticky glassmorphism navbar with dark mode toggle
- Hero section with typing animation and floating shapes
- About, Skills, Services, Projects, Gallery sections
- Experience timeline, Education, Certificates
- Animated statistics counters
- Testimonials carousel
- Blog section with latest articles
- Contact form with validation and toast notifications
- Resume download section
- Premium footer with newsletter
- Dark/Light mode with localStorage persistence
- Lazy-loaded routes with mock JSON data
- SEO meta tags, Open Graph, and Twitter Cards
- Fully responsive (mobile, tablet, desktop)

## Tech Stack

- Angular 20+ (Standalone Components, Signals)
- TypeScript
- Bootstrap 5
- FontAwesome 6
- Angular Material (Snackbar)
- SCSS with custom theme variables
- RxJS & Reactive Forms

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

### Production Build

```bash
npm run build
```

Output: `dist/developer-portfolio/`

## Project Structure

```
src/
├── app/
│   ├── components/       # All UI sections
│   ├── services/         # Portfolio, Theme, Contact, SEO, Toast
│   ├── interfaces/       # TypeScript interfaces
│   ├── models/           # Form models
│   ├── guards/           # Route guards
│   ├── pipes/            # Truncate, SafeUrl, SafeHtml
│   └── directives/       # CountUp, AnimateOnScroll, LazyImage
├── assets/
│   └── data/
│       └── portfolio.json  # Mock data (replace with API later)
├── styles/               # SCSS variables, mixins, themes, animations
└── environments/         # Environment configs
```

## Customization

1. **Personal Data**: Edit `src/assets/data/portfolio.json`
2. **Theme Colors**: Edit `src/styles/_variables.scss`
3. **Environment**: Edit `src/environments/environment.ts`
4. **SEO**: Update `src/index.html` and `src/app/services/seo.service.ts`

## Color Theme

| Token     | Value     |
|-----------|-----------|
| Primary   | `#38BDF8` |
| Secondary | `#C084FC` |
| Accent    | `#7C3AED` |
| Background| `#F8FAFC` |
| Dark BG   | `#0F172A` |

## License

MIT
