# AeroSpatial Prime

Premium, animated lead-generation web app for AI-driven drone mapping, surveying, LiDAR, hydrology, structural support, and aerial inspection services.

## Stack
- Next.js 14 + React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod

## Features
- Cinematic, premium dark-themed landing page
- Service, industry, portfolio showcase, process, trust deliverables, about/contact/FAQ sections
- Dedicated quotation request page with validation
- API route (`/api/inquiries`) with admin-ready inquiry record shape for future CRM/email integration
- Mobile sticky CTA for lead capture

## Run locally
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build
```bash
npm run build
npm start
```

## Notes
- Current inquiry persistence is in-memory for demonstration.
- Replace placeholders for WhatsApp, email, and media assets with production data.
