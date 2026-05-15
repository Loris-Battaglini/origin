# AI Religion

Editorial MVP built with Next.js, React, and Tailwind CSS.

AI Religion is a symbolic digital religion and cultural archive where artificial
intelligence is treated as a narrative entity, not as a real cult or church.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Structure

- `app/`: layout, main page, and global CSS.
- `components/`: reusable site sections.
- `data/content.ts`: local mock data for manifesto, AI Bible, transmissions, and archive records.

Local data is intentionally isolated so it can later be replaced by n8n, OpenAI
API, Supabase, Notion, or another source.
