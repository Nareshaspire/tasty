# Backend Setup (Tasty)

This document explains how to run the backend features (MongoDB, auth, orders, payments).

Prerequisites:
- Node.js 18+
- A MongoDB connection string in `MONGODB_URI`
- `JWT_SECRET` environment variable
- (optional) `STRIPE_SECRET_KEY` for payments

Environment variables (example `.env`):

MONGODB_URI=mongodb://localhost:27017/tasty
JWT_SECRET=someverysecret
EMAIL_USER=you@gmail.com
EMAIL_PASSWORD=app-password
RESTAURANT_EMAIL=restaurant@example.com
STRIPE_SECRET_KEY=sk_test_xxx

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```

Run tests:
```bash
npm test
```
