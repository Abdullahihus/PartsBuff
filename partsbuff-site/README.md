# PartsBuff

A modern Next.js starter for PartsBuff — used auto parts, part-out vehicles, vehicle listings, services, inquiries, and an admin dashboard shell.

## Run locally

1. Install Node.js 24+
2. Open this folder in VS Code
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Visit `http://localhost:3000`

## Included
- Responsive PartsBuff homepage
- Vehicle / part-out inventory
- Dynamic vehicle detail pages
- Used parts table
- Services page
- Contact / part request form
- API route for inquiry submissions
- Admin dashboard UI shell
- PostgreSQL starter schema in `db/schema.sql`
- Local placeholder vehicle artwork (no copied business assets)

## Next production steps
1. Create Supabase/PostgreSQL project.
2. Apply `db/schema.sql`.
3. Replace `data/inventory.ts` with database queries.
4. Save `/api/inquiries` submissions to the database and/or email.
5. Add Supabase Auth to `/admin`.
6. Add image uploads with Supabase Storage.
7. Add real PartsBuff address, phone, business hours, logo, inventory, and domain.

## Stack
- Next.js 16.3.3
- React 19.2
- TypeScript
- Plain responsive CSS (no UI dependency required)
- PostgreSQL/Supabase-ready schema

This starter uses original PartsBuff branding and sample content rather than copying BMR Auto's branding, copy, or images.
