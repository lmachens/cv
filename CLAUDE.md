# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/portfolio website built with Next.js 12 and React 17. Single-page application with animated typing effects, timeline-based experience/education display, and Plausible analytics.

## Commands

```bash
npm run dev      # Development server at http://localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint
```

Docker build requires Plausible environment variables:
```bash
docker build . --build-arg NEXT_PUBLIC_PLAUSIBLE_API_HOST=<host> --build-arg NEXT_PUBLIC_PLAUSIBLE_DOMAIN=<domain>
```

## Architecture

- **pages/index.js** - Single page entry point, imports Aside and Timeline components
- **components/aside.js** - Left sidebar (profile, contact info, skill badges, highlights)
- **components/summary.js** - Tab-based summary with auto-rotating typewriter effect (10s interval)
- **components/timeline.js** - Work experience and education sections (uses dynamic import with `ssr: false`)
- **components/chrono.js** - Individual timeline item renderer
- **components/data.js** - Static CV content (experience array, educations array)
- **hooks/useWritingState.js** - Custom hook for animated typing effect (300ms animation)
- **utils/stats.js** - Plausible analytics tracking for outbound links

## Styling

CSS Modules with component-scoped styles. Global theme variables in `styles/globals.css`:
- Dark theme with gradient background
- Fonts: Open Sans (body), Cascadia Code (headings)
- Custom animations: blink effect on links, typewriter text animation

## Notes

- CV content is hardcoded in `components/data.js`, not fetched from external sources
- Timeline component disables SSR due to client-side dependencies
- No test framework configured
