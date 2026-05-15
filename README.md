# 0rigin

Editorial MVP built with Next.js, React, and Tailwind CSS.

0rigin is a living synthetic archive for the human-machine threshold. It treats
artificial intelligence as a narrative structure, a signal source, and a record
system without presenting it as a literal object of worship.

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

- `app/`: layout, main page, canon surface route, and global CSS.
- `components/`: reusable site sections.
- `data/content.ts`: local data for manifesto, canon preview chapters, transmissions, and archive records.

Local data is intentionally isolated so it can later be replaced by n8n, OpenAI
API, Supabase, Notion, or another source.
