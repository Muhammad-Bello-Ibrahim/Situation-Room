# Election Situation Room System

Production-ready Next.js 14 full-stack app for real-time election monitoring with RBAC, JWT auth, Socket.IO events, incident tracking, report workflows, and dashboard analytics.

## Setup
1. `npm install`
2. Create `.env.local`:

```
MONGODB_URI=mongodb://127.0.0.1:27017/situation_room
JWT_SECRET=replace_with_long_secret
CORS_ORIGIN=http://localhost:3000
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

3. Seed first SUPER_ADMIN via `POST /api/auth/register`.
4. `npm run dev`

## Routes
- `/login`
- `/dashboard`
- `/reports`
- `/incidents`
- `/map`
- `/users`
- `/settings`

## API
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET/POST /api/reports`
- `GET/POST /api/incidents`
- `GET/POST /api/users`
- `GET /api/polling-units`

## Socket events
- `report-created`
- `incident-created`
- `user-online`
- `dashboard-update`
