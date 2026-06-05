# AI--Genius
AI-Genius Auth & RBAC API
A secure, stateless authentication and Role-Based Access Control (RBAC) system built for the AI-Genius SaaS platform as part of MA 216 – Web Engineering and AI.

Features

JWT Authentication — Short-lived access tokens (15 min) paired with long-lived refresh tokens (7 days)
Refresh Token Rotation — Each refresh invalidates the old token and issues a new one, preventing token reuse attacks
Secure Cookie Handling — Refresh tokens stored in httpOnly cookies, inaccessible to JavaScript
Role-Based Access Control (RBAC) — Three roles (Free_User, Premium_User, Admin) with tiered endpoint access
MongoDB Whitelist — Refresh tokens are whitelisted in the database and revoked on logout
Error Middleware — Centralized not-found and error handling


Tech Stack
LayerTechnologyRuntimeNode.js (ESM)FrameworkExpress.jsDatabaseMongoDB + MongooseAuthJSON Web Tokens (jsonwebtoken)Password HashingbcryptjsCookie Parsingcookie-parserConfigdotenvDevnodemon


ai-genius-auth/
├── config/
│   └── db.js                  # MongoDB connection
├── middleware/
│   ├── authMiddleware.js       # JWT verification & role guards
│   └── errorMiddleware.js      # 404 + global error handler
├── routes/
│   ├── authRoutes.js           # /api/auth/*
│   └── aiRoutes.js             # /api/ai/*
├── scripts/
│   └── seed.js                 # Seeds default users into DB
├── public/                     # Static dashboard files
├── server.js                   # Entry point
├── package.json
└── .env.example
