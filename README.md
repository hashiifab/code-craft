# 🚀 CodeCraft – Next.js 15 SaaS Code Editor

![Demo App](/public/screenshot-for-readme.png)

A modern fullstack code editor built with Next.js 15, designed for collaborative editing, real-time updates, and seamless user experience. Perfect for developers who want to build, share, and explore code snippets online.

---

## 🛠 Tech Stack

### Backend
- **Convex** – Realtime Database & Functions
- **Clerk** – Authentication

### Frontend
- **Next.js 15** – App Router
- **TypeScript**
- **Tailwind CSS**
- **Radix UI**
- **Lucide Icons**

---

## 🌟 Features

- 💻 Online IDE supporting 10+ programming languages  
- 🎨 5 customizable VSCode-inspired themes  
- 📁 Community-based snippet sharing  
- 💎 Real-time syncing with Convex  
- 🔒 Secure authentication with Clerk  
- 🚀 Easy deployment via Vercel  
- 💰 Pro subscriptions with Lemon Squeezy  

---

## 📁 Folder Structure

```bash
code-craft/
├── convex/              # Backend (Convex)
│   ├── http.ts
│   ├── schema.ts
│   └── ...
├── src/
│   ├── app/             # App Router (Next.js)
│   │   ├── (root)/      # Main layout
│   │   ├── pricing/     # Pricing page
│   │   └── ...
│   ├── components/      # UI components
│   ├── store/           # Zustand state management
│   └── ...
├── public/              # Static assets
└── ...
```

## 🖥 Local Setup

```bash
npm install
npm run dev
```

## 🔑 Environment Variables

Buat file `.env` dengan konten:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_CONVEX_URL=your_url
CONVEX_DEPLOYMENT=your_deployment
```

Tambahkan di Convex Dashboard:
```
CLERK_WEBHOOK_SECRET=your_secret
LEMON_SQUEEZY_WEBHOOK_SECRET=your_secret
```

## 👨‍💻 Author
- GitHub: [@hashiifabdillah](https://github.com/hashiifab)
- LinkedIn: [Hashiif Abdillah](https://www.linkedin.com/in/hashiif-abdillah-665373297/)
```
