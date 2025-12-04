# Clock & Stopwatch (React + TypeScript + Vite)

A simple React app featuring:
- Live digital clock (updates every second)
- Stopwatch with start, stop, and reset

## Requirements
- Node.js 18+
- PowerShell (Windows)

## Scripts
```powershell
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Project Structure
- `src/components/Clock.tsx`: Digital clock
- `src/components/Stopwatch.tsx`: Stopwatch
- `src/App.tsx`: Page layout
- `src/main.tsx`: App bootstrap
- `src/styles.css`: Basic styles

## Notes
- The stopwatch uses `requestAnimationFrame` for smooth updates and accuracy.
