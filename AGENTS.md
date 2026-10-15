# Bouwklanten — Development Notes

## Stack
- Vite + React + TypeScript
- Tailwind CSS for styling
- lucide-react for icons
- No backend; static frontend only

## Running locally
```
npm install
npm run dev
```
Dev server runs on port 5173 (mapped to host 3000 in docker-compose.base44.yml).

## Docker (Base44 sandbox)
```
docker compose -f docker-compose.base44.yml up -d
```

## Notes
- No external services or secrets required
- Google Fonts (Inter, Sora) loaded via index.html
- Before/after slider uses Unsplash images
- Scroll-reveal animations use IntersectionObserver (no animation library)
