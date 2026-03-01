# Le Divino Web

Monorepo du site et de l'admin Le Divino (Next.js + FastAPI + MongoDB).

## Structure

- `apps/web`: Frontend public + admin (Next.js App Router)
- `apps/api`: API FastAPI
- `packages/shared`: futurs schémas/types partagés
- `docs`: documentation projet
- `scripts`: scripts d'outillage (seed, sync avis)

## Démarrage rapide

1. Copier les variables d'environnement:
   - `cp .env.example .env`
2. Lancer la stack:
   - `docker compose up --build`
3. URLs:
   - Web: `http://localhost:3000`
   - API: `http://localhost:8000`
   - API docs: `http://localhost:8000/docs`

## Étape 0 livrée

- Bootstrap monorepo
- Base Docker (web + api + mongo + minio optionnel)
- Routage public minimum (Accueil, Menu, Réservations, Événements, Contact, Avis)
- Entrée admin (`/admin/login`)
- Lint/test scaffolding (ESLint, Pytest, Playwright, CI)

