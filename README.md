# 이어줌 (Connecting) - Project_Gamma

Production-grade open-source anonymous matchmaking platform scaffold built with Next.js App Router, TypeScript, Prisma, NextAuth, and PostgreSQL (Neon).

## 1) Full repository structure (tree)

```text
.
├── .env.example
├── .eslintrc.json
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── .prettierrc
├── README.md
├── app/
│   ├── (marketing)/
│   │   └── page.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── chat/
│   │   │   ├── messages/route.ts
│   │   │   └── threads/route.ts
│   │   ├── matching/route.ts
│   │   ├── profile/route.ts
│   │   └── survey/route.ts
│   ├── complete-profile/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/app-shell.tsx
│   ├── theme/romantic-gradient.tsx
│   └── ui/card.tsx
├── docs/
│   ├── api.md
│   ├── deployment.md
│   ├── matching-engine.md
│   ├── operations.md
│   ├── roadmap.md
│   └── route-map.md
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   ├── matching.ts
│   ├── rate-limit.ts
│   ├── sanitize.ts
│   ├── survey.ts
│   ├── types.ts
│   └── validations.ts
├── middleware.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── prisma/
│   └── schema.prisma
├── tailwind.config.ts
└── tsconfig.json
```

## 2) Local setup guide

1. Install Node.js 20+ and pnpm or npm.
2. Copy env file: `cp .env.example .env`.
3. Create Neon database and set `DATABASE_URL`.
4. Generate Prisma client and migrate:
   - `npm install`
   - `npx prisma migrate dev --name init`
   - `npx prisma generate`
5. Run dev server: `npm run dev`.
6. Open `http://localhost:3000`.

## 3) .env.example

See `.env.example` in repo root.

## 4) Prisma schema (fully commented)

See `prisma/schema.prisma` with inline comments for each model and field.

## 5) API documentation

See `docs/api.md`.

## 6) Matching algorithm design (detailed math/weight explanation)

See `docs/matching-engine.md`.

## 7) Page route map

See `docs/route-map.md`.

## 8) 2-person 2-week MVP roadmap

See `docs/roadmap.md`.

## 9) CI/CD configuration

See `.github/workflows/ci.yml` and section in `docs/deployment.md`.

## 10) Full deployment guide

See `docs/deployment.md`.

## 11) Operations guide

See `docs/operations.md`.

---

## Scaffolding status

Implemented priority runnable scaffold:
- Base Next.js App Router + TypeScript
- Prisma schema for profiles, survey, matching, chat
- Auth.js config with Google/Naver/Kakao placeholders
- Profile API
- Survey API
- Matching API
- Chat API (polling-friendly)
- UI layout + romantic pink theme components

## Branch strategy

- `main` -> production
- `develop` -> staging
- `feature/*` -> feature work

## Notes

- Survey question IDs are immutable in `lib/survey.ts`.
- First login profile completion enforced via middleware redirect.
- Security baseline includes Zod validation, input sanitization, CSRF protections via Auth.js, callback URL validation, secure cookies in production, and simple in-memory rate limiting.
