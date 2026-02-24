# Deployment Guide

## 1) Neon DB setup
1. Create project in Neon.
2. Copy pooled connection string to `DATABASE_URL`.
3. Ensure SSL mode required.

## 2) OAuth setup
### Google
- Google Cloud Console > OAuth consent + Web app credentials.
- Callback: `https://<domain>/api/auth/callback/google`.

### Naver
- Register app in Naver Developer Center.
- Callback: `https://<domain>/api/auth/callback/naver`.

### Kakao
- Register app in Kakao Developers.
- Callback: `https://<domain>/api/auth/callback/kakao`.

## 3) Vercel setup
1. Import GitHub repo.
2. Set production branch `main`.
3. Use preview for `develop` + `feature/*`.

## 4) Environment variables
- Set all `.env.example` variables in Vercel per environment.

## 5) Prisma production migration
- Run `npx prisma migrate deploy` on production build step.

## 6) Domain connection
- Connect custom domain in Vercel Domains tab.

## 7) HTTPS verification
- Verify TLS issued by Vercel automatically.

## 8) Preview separation
- Separate env values for Preview/Production in Vercel settings.

## 9) Rollback strategy
- Redeploy previous successful Vercel deployment.
- Keep backward-compatible Prisma migrations; avoid destructive changes in same release.

## CI/CD
- GitHub Actions runs typecheck, lint, and build on PRs.
