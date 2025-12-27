# 🔐 PassVault – Frontend (React + Vite)

PassVault is a modern, clean, and responsive **frontend-only** web application for a secure password manager.
This repository contains **only the frontend UI**, built using **React, Vite, and TypeScript**.

The project is designed to be API-ready and can be easily connected to any backend (Node.js, Laravel, Firebase, etc.).

---

## ✨ Features

- 🔑 Login page UI
- ⚡ Fast development with Vite
- 🧩 Component-based React architecture
- 🎨 Clean and minimal UI
- 📱 Responsive design
- 🌙 Dark mode ready (can be extended)
- 🔐 Security-focused form design

---

## 🛠️ Tech Stack

- React 18
- Vite
- TypeScript
- CSS
- Modern ES Modules

---

## 📂 Project Structure

```text
src/
├── assets/
│   └── icon.png          # App logo / icon
│
├── components/           # Reusable UI components (future use)
│
├── pages/
│   ├── Login.tsx         # Login page
│   └── login.css         # Login page styles
│
├── App.tsx               # Root component
├── App.css               # App-level styles
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

---

### ✅ Prerequisites

Make sure you have installed:

- Node.js **v18 or above**
- npm (comes with Node.js)

Check versions:
```bash
node -v
npm -v
```

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/passvault.git
cd passvault/frontend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Development Server

```bash
npm run dev
```

The app will be available at:

👉 **http://localhost:5173**

---

### 4️⃣ Build for Production

```bash
npm run build
```

---

### 5️⃣ Preview Production Build

```bash
npm run preview
```

---

## 🔌 Backend Integration (Planned)

This frontend is ready to integrate with a backend API providing endpoints like:

- `POST /login`
- `POST /register`
- `GET /vault`
- `POST /vault`
- `PUT /vault/:id`
- `DELETE /vault/:id`

Recommended structure for API integration:

```text
src/
└── services/
    └── api.ts
```

---

## 🧩 Planned Features

- 📝 Register page
- 📊 Dashboard
- 🔐 Password vault
- ➕ Add / Edit passwords
- 🔑 Password generator
- ⚙️ Settings & profile
- 🌙 Dark mode

---

## 👨‍💻 Author

**Mano**  
Web Developer | Full‑Stack | Security‑Focused Apps

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and feel free to contribute!
