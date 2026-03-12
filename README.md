# Tattoos For Your Enemies (Next.js)

Exact replica of the LOVABLE_BUILD tattoo site, rebuilt with Next.js 14 (App Router), TypeScript, and Tailwind.

## Run

- `npm install`
- `npm run dev` — dev server
- `npm run build` && `npm start` — production

## Splash video

- **Option A (default):** Video is served from `public/videos/splash-video.mp4`.
- **Option B (Vercel Blob):** Upload the video to Vercel Blob, set `NEXT_PUBLIC_SPLASH_VIDEO_URL` to the blob URL, and the splash page will use it instead (no video file in repo).

## Routes

| Path           | Page        |
|----------------|-------------|
| `/`            | Splash      |
| `/home`        | Home        |
| `/tattoos`     | Tattoos     |
| `/illustrations` | Illustrations |
| `/flash`       | Flash       |
| `/art-show`    | Art Show    |
| `/podcast`     | Podcast     |
| `/about`       | About       |
| `/contact`     | Contact     |
| `/privacy`     | Privacy     |
