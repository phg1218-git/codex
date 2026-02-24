# Operations Guide

## 1) Monitoring strategy
- Vercel Analytics + Function logs baseline.

## 2) Log access strategy
- Use Vercel project logs by environment and endpoint.

## 3) Error tracking integration
- Optional Sentry DSN with Next.js SDK for frontend + API routes.

## 4) Secret rotation process
- Rotate OAuth secrets quarterly; update Vercel env then redeploy.

## 5) Backup strategy for Neon
- Enable Neon point-in-time restore and periodic logical dump.

## 6) Schema migration safety
- Test migrations in Preview DB first; production uses `migrate deploy` only.

## 7) Scaling considerations
- Add Redis for distributed rate limiting and caching if concurrency grows.

## 8) Future architecture evolution
- Move matching computation to queue worker.
- Upgrade chat from polling to WebSocket/SSE.
- Add feature flags and domain-driven modules.
