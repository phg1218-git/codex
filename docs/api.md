# API Documentation

## Auth
- `GET/POST /api/auth/[...nextauth]`: Auth.js endpoints (Google/Naver/Kakao).

## Profile
- `GET /api/profile`: Fetch current user profile.
- `POST /api/profile`: Upsert profile, enforces required fields via Zod.

## Survey
- `GET /api/survey`: Fetch fixed survey structure.
- `POST /api/survey`: Submit full required survey answers.

## Matching
- `GET /api/matching`: Return ranked candidates with transparent score breakdown.

## Chat
- `GET /api/chat/threads`: List user threads.
- `POST /api/chat/threads`: Open thread with partner.
- `GET /api/chat/messages?threadId=`: Poll messages.
- `POST /api/chat/messages`: Send message.
