# Microservices Backend (Node.js + TypeScript + TurboRepo)

# Note: The project is not complete Development is in progress

# Microservices Backend (Node.js + TypeScript + TurboRepo)

A scalable Node.js + TypeScript microservices architecture using TurboRepo, designed for production-ready backend systems.
Each service is isolated, independently deployable, and follows clean-code patterns with proper testing.
This repository contains the source code for our microservice architecture, managed efficiently using **Turborepo** to optimize development, build, and deployment workflows.

📄 License
MIT License © 2025

⚙️Tech Stack
Node.js
TypeScript
Express.js
MySQL
Sequelize
TurboRepo
Jest (Unit Tests)
Docker & Docker Compose
ESLint + Prettier

## 📦 Architecture Overview

The system is split into independent services communicating primarily via HTTP/REST and a message broker (if applicable).

| Component          | Description                                                                                  | Technologies                     |
| :----------------- | :------------------------------------------------------------------------------------------- | :------------------------------- |
| `services/`        | All runnable Node.js microservices (e.g., Auth, User,Chat, Message, Notification, Gateway ). | Node.js, Express, TypeScript     |
| `packages/common/` | Shared utility code and constants used by multiple services.                                 | TypeScript, Zod (for validation) |
| `packages/events/` | Centralized location for shared message/event schemas, kafka events and types.               | TypeScript                       |

# 🚀 Microservices Backend (Node.js + TypeScript + TurboRepo)

A scalable **Node.js + TypeScript microservices architecture** using **TurboRepo**, designed for production-ready backend systems.  
Each service is isolated, independently deployable, and follows clean-code patterns with proper testing.

---

## ✨ Features

- 🔥 Microservices architecture (Auth, User, Others…)
- 🚀 TurboRepo for workspace & service orchestration
- 🐳 Docker + Docker Compose ready
- 🧪 Jest testing with service-level configs
- 📦 TypeScript across all services
- 🛡️ Middleware-based architecture
- 📡 REST APIs for each service

---

# 📁 Folder Structure

```
root/
│
├── services/
│   ├── auth-service/
│   │   ├── src/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── user-service/
│   │   ├── src/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   └── ...other services
│
├── docker-compose.yml
├── turbo.json
├── package.json
└── README.md
```

---

# 🧩 Architecture Overview

```
                   +----------------------+
                   |     API Gateway      |
                   +----------+-----------+
                              |
               ---------------------------------
               |               |               |
      +--------+-----+ +-------+------+ +-------+-------+
      | Auth Service | | User Service | | Other Services |
      +--------------+ +--------------+ +----------------+
```

---

# ⚙️ Tech Stack

- Node.js
- TypeScript
- Express.js
- TurboRepo
- Jest
- Docker & Docker Compose
- ESLint + Prettier

---

# 🚀 Getting Started

## 1️⃣ Install All Dependencies

```bash
npm install
```

---

## 2️⃣ Start All Services Using TurboRepo

```bash
npm run dev
```

---

## ▶️ Start A Single Service

```bash
cd services/auth-service
npm run dev
```

---

# 🐳 Running with Docker

## Build & Run All Microservices

```bash
docker-compose up --build
```

Each service includes its own Dockerfile:

```
services/<service-name>/Dockerfile
```

---

# 🧪 Running Tests

Each service contains:

```
tests/<service>.controller.test.ts
tsconfig.jest.json
```

## Run All Tests

```bash
npm run test:all
```

## Run Tests for a Specific Service

```bash
cd services/user-service
npm test
```

---

# 🔐 Environment Variables

Each service has its own `.env` file.

### Example (Auth Service)

```
PORT=3001
JWT_SECRET=your-secret-key
DATABASE_URL=mongodb://localhost:27017/auth
```

### Example (User Service)

```
PORT=3002
DATABASE_URL=mongodb://localhost:27017/user
```

---

# 📡 API Endpoints (Example)

### **Auth Service**

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| POST   | /auth/register | Register new user  |
| POST   | /auth/login    | Login user         |
| GET    | /auth/profile  | Get logged-in user |

---

### **User Service**

| Method | Endpoint   | Description      |
| ------ | ---------- | ---------------- |
| GET    | /users     | List all users   |
| GET    | /users/:id | Get single user  |
| PUT    | /users/:id | Update user info |
| DELETE | /users/:id | Delete user      |

---

# 🛠️ Scripts (Root Level)

| Command          | Description        |
| ---------------- | ------------------ |
| npm run dev      | Start all services |
| npm run test:all | Run all tests      |
| npm run build    | Build workspace    |
| npm run lint     | Lint all services  |

---

# 📦 Build Production Images

```bash
docker-compose -f docker-compose.yml build
```

---

# 📝 Contribution Guide

- Use TypeScript strict mode
- Use feature-based folders
- Add tests for controllers
- PRs must pass lint + tests

---

# 📄 License

MIT License © 2025

# Quick one-liner (replace <JWT> with real token from login):

`node -e "const io=require('socket.io-client'); const s=io('http://localhost:3005',{auth:{token:'<JWT>'}}); s.on('connect',()=>{console.log('connected',s.id); s.emit('join_room',1); s.emit('send_message',{roomId:1,content:'hello from client'});}); s.on('message',m=>console.log('msg',m));"`
