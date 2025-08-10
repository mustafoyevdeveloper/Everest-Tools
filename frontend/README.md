# EVEREST TOOLS — Frontend

Zamonaviy qurilish asboblari va xizmatlari uchun veb-ilova (Next.js, React, Tailwind CSS).

## Texnologiyalar
- **Next.js** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS** (custom theme)
- **Framer Motion** (animatsiyalar)
- **Radix UI** (UI komponentlar)
- **Three.js** va **@react-three/fiber** (3D model)
- **Zod** (validatsiya)
- **react-hook-form** (formalar)
- **Lucide Icons**

## Loyihaning tuzilmasi
```
frontend/
├── app/                # Sahifalar va routing (Next.js App Router)
│   ├── about/          # Biz haqimizda
│   ├── admin/          # Admin panel
│   ├── auth/           # Kirish, ro‘yxatdan o‘tish
│   ├── cart/           # Savatcha
│   ├── contact/        # Aloqa
│   ├── docs/           # Hujjatlar
│   ├── help/           # Yordam
│   ├── liked/          # Yoqtirganlar
│   ├── news/           # Yangiliklar
│   ├── page.tsx        # Bosh sahifa (hero, 3D model)
│   ├── products/       # Mahsulotlar katalogi
│   ├── services/       # Xizmatlar
│   ├── support/        # Yordam markazi
│   └── ...
├── components/         # UI va umumiy komponentlar
│   ├── navigation.tsx  # Navbar
│   ├── footer.tsx      # Footer
│   ├── admin-sidebar.tsx
│   └── ui/             # Reusable UI (button, input, card, ...)
├── contexts/           # Global contextlar (theme, language, auth)
├── hooks/              # Custom React hooklar
├── lib/                # Utility funksiyalar
├── public/             # Statik fayllar va rasmlar
├── styles/             # Global va custom CSS
├── package.json        # Asosiy package-lar
├── tailwind.config.ts  # Tailwind sozlamalari
└── ...
```

## Ishga tushirish
1. `cd frontend`
2. `npm install` yoki `pnpm install`
3. `npm run dev`

## Muhim fayllar
- `app/layout.tsx` — umumiy layout va provayderlar
- `components/navigation.tsx` — navbar
- `components/footer.tsx` — footer
- `contexts/theme-context.tsx` — light/dark mode
- `contexts/language-context.tsx` — ko‘p til

## Litsenziya
MIT 