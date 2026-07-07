# 🤖 InterviewIQ.AI

> **AI-powered mock interview platform** — Practice interviews, get instant AI feedback, and track your progress.

![InterviewIQ.AI](https://img.shields.io/badge/InterviewIQ-AI%20Powered-black?style=for-the-badge&logo=openai)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)

---

## ✨ Features

- 🔐 **Google Authentication** — Sign in instantly with your Google account
- 🤖 **AI Mock Interviews** — Powered by OpenRouter (GPT-4o-mini)
- 📄 **Resume Upload** — Upload your resume for personalized interview questions
- 🎭 **Multiple Interview Types** — Technical, HR, and Mixed interviews
- 📊 **Detailed Reports** — AI-generated performance feedback after every session
- 📜 **Interview History** — Track all your past interviews
- 💳 **Credits & Payments** — Razorpay-powered credit system
- ⏱️ **Live Timer** — Timed interview sessions

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite, TailwindCSS, Redux Toolkit |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose) |
| **AI** | OpenRouter API (GPT-4o-mini) |
| **Auth** | Firebase (Google Sign-In) |
| **Payments** | Razorpay |
| **Deployment** | Render (Backend + Frontend) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Firebase project (Google Auth enabled)
- OpenRouter API key
- Razorpay account

### 1. Clone the repository
```bash
git clone https://github.com/Arvind-Singh00/InterviewIQ.AI.git
cd InterviewIQ.AI
```

### 2. Setup Server
```bash
cd server
npm install
```

Create a `.env` file in `/server`:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CORS_ORIGIN=http://localhost:5173
```

```bash
npm run dev
```

### 3. Setup Client
```bash
cd client
npm install
```

Create a `.env` file in `/client`:
```env
VITE_SERVER_URL=http://localhost:8000
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

```bash
npm run dev
```

Open **http://localhost:5173** 🎉

---

## 🌐 Deployment (Render)

### Backend — Web Service
| Setting | Value |
|---|---|
| Root Directory | `server` |
| Build Command | `npm install` |
| Start Command | `npm start` |

### Frontend — Static Site
| Setting | Value |
|---|---|
| Root Directory | `client` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

> ⚠️ Set `CORS_ORIGIN` on the backend to your deployed frontend URL after deployment.

---

## 📁 Project Structure

```
InterviewIQ.AI/
├── client/                  # React frontend (Vite)
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── redux/           # State management
│   │   └── utils/           # Firebase config
│   └── public/
├── server/                  # Express backend
│   ├── controllers/         # Route handlers
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── services/            # OpenRouter & Razorpay
│   ├── middlewares/         # Auth & file upload
│   └── config/              # DB & token config
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/google` | Google sign-in / register |
| `GET` | `/api/auth/logout` | Logout |
| `GET` | `/api/user/current-user` | Get current user |
| `POST` | `/api/interview/create` | Create interview session |
| `GET` | `/api/interview/history` | Get interview history |
| `POST` | `/api/payment/create-order` | Create Razorpay order |

---

## 📸 Screenshots

> Coming soon

---

## 📄 License

MIT © [Arvind Singh](https://github.com/Arvind-Singh00)
