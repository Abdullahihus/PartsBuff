# PartsBuff

Next.js site with PostgreSQL inventory and saved customer inquiries. The database starts empty; no sample vehicles or parts are inserted.

## Run with Docker (WSL/Linux)

Make sure Docker is running and Docker Compose is available in your WSL/Linux terminal. From the cloned repository root, run:

```bash
cd partsbuff-site
cp .env.example .env
```

Edit POSTGRES_PASSWORD in .env, then run:

```bash
docker compose up --build -d
docker compose logs -f web
```

Open http://localhost:3000. Node runs inside the container; no local Node installation is required.

```bash
docker compose ps
docker compose down
```

Stopping containers preserves the database in a named volume. Do not use `docker compose down -v` unless you intend to erase the local database.
The database is only accessible inside Docker; the website binds to localhost.

## Database

Tables: vehicles, vehicle_images, parts, inquiries. The schema initializes automatically on the first start with a fresh volume. Later schema changes require migrations; restarting does not reapply schema.sql. Changing the password in .env does not change an existing database user's password.

Open a local SQL console:

```bash
docker compose exec db psql -U partsbuff -d partsbuff
```

Check empty inventory or saved requests:

```sql
SELECT count(*) FROM vehicles;
SELECT count(*) FROM parts;
SELECT id, subject, created_at FROM inquiries ORDER BY created_at DESC;
```

No inventory is required to accept part requests. New database records appear on the next page request. Only parts with status Available appear in the parts catalog. Missing vehicle photos use a neutral placeholder.

The admin page is a placeholder. Authentication, inventory editing, image uploads, and public deployment protections are future work; customer inquiries are not exposed through a public read API.

## Development and checks

With Node 24 installed, use `npm ci`, `npm run typecheck`, and `npm run build`. Set DATABASE_URL in .env.local to use a reachable PostgreSQL server for local development.

Docker uses a standalone Next.js build. Rebuild with `docker compose up --build -d` after code changes.
