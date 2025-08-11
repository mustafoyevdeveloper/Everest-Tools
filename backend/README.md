# EVEREST TOOLS — Backend

Express + MongoDB (Mongoose) asosidagi auth API.

## Endpointlar
- POST `/api/auth/signup` — { name, email, password }
- POST `/api/auth/login` — { email, password }
- GET `/api/users/me` — Bearer token talab etadi

Response’da `user` va `token` qaytariladi. `token` — 7 kun amal qiladi.

## Boshlash
1. `cd backend`
2. `npm install`
3. `.env` faylini yarating (`.env.example` nusxa oling):
```
MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
JWT_SECRET=super_secret_key
PORT=5000
```
4. `npm run dev`

## Eslatma
- Email lowercase qilinadi
- Parol kamida 6 ta belgi bo‘lishi shart
- `protect` middleware Bearer tokenni tekshiradi, `adminOnly` faqat adminlarga ruxsat beradi