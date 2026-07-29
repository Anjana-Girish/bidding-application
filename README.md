# BidBuddy — Online Bidding Application

A full-stack real-time auction/bidding platform built with Next.js, where users can list items, place bids, and get notified as auctions progress.

> Note: this README is written from the project's dependencies and configuration (`package.json`, `docker-compose.yml`, `drizzle.config.ts`). If any feature below isn't wired up yet, treat it as the intended scope.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with `tailwindcss-animate` and `class-variance-authority` for component styling
- **Drizzle ORM** + **PostgreSQL** for data (schema-first, type-safe queries)
- **NextAuth** (`@auth/drizzle-adapter`) for authentication
- **AWS S3** (`@aws-sdk/client-s3`, presigned URLs) for image uploads — e.g. item listing photos
- **Knock** (`@knocklabs/react`, `@knocklabs/node`) for real-time in-app notifications — e.g. outbid alerts
- **Docker Compose** for local development (containerized Postgres/app)

## Features

- User authentication and sessions via NextAuth
- Create and browse item listings with image uploads to S3
- Place bids on active listings, backed by a PostgreSQL schema managed with Drizzle
- Real-time notifications (e.g. when you're outbid) via Knock
- Fully typed end-to-end with TypeScript and Drizzle's schema inference

## Getting Started

```bash
npm install
```

Set up your environment variables (database URL, AWS credentials, NextAuth secret, Knock API key) in `.env`, then:

```bash
# Push the Drizzle schema to your database
npm run db:push

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Alternatively, spin up the full stack with Docker:

```bash
docker-compose up
```

### Useful scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm run db:push` | Push Drizzle schema changes to the database |
| `npm run db:studio` | Open Drizzle Studio to inspect the database |

## Project Structure

```
src/           # Application source (routes, components, server logic)
public/        # Static assets
drizzle.config.ts   # Drizzle ORM configuration
docker-compose.yml  # Local dev environment
```
