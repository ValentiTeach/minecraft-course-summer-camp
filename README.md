# Logika — Minecraft: від Intern до Senior

Лендінг літнього гуртка школи програмування Logika (філія Коломия).
React + Vite, без зайвих залежностей.

## Стек

- **React 18** — компонентна структура
- **Vite** — швидка збірка
- **CSS** — один глобальний файл, CSS-змінні для теми
- **IntersectionObserver** — reveal-анімації через custom hook

Без Tailwind, без Framer Motion, без TypeScript — щоб було легко правити та запускати.

## Структура проєкту

```
logika-react/
├── index.html              # Vite entry, тут підключені шрифти
├── package.json
├── vite.config.js
├── vercel.json             # конфіг для Vercel (Vite preset)
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # композиція секцій
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx        # heading з підсвіченою L
│   │   ├── Concept.jsx     # 3 дисципліни
│   │   ├── CareerLadder.jsx # 6 розкладних рангів
│   │   ├── Program.jsx     # таби тижнів + сітка днів
│   │   ├── DayModal.jsx    # popup з детальним планом дня
│   │   ├── Skills.jsx      # темний блок з результатами
│   │   ├── Info.jsx        # практична інфа + price card
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── ranks.js        # дані 6 посад
│   │   └── days.js         # дані 10 днів
│   ├── hooks/
│   │   └── useReveal.js    # scroll-triggered animation hook
│   └── styles/
│       └── global.css      # весь дизайн в одному файлі
```

## Запуск локально

```bash
npm install
npm run dev
```

Відкриється на `http://localhost:5173`.

## Білд

```bash
npm run build      # збирає в /dist
npm run preview    # переглянути білд локально
```

## Деплой на Vercel

### Варіант 1 — через GitHub (рекомендовано)

1. Створи репо на GitHub (наприклад `logika-minecraft-course`).
2. Запуш проєкт:
   ```bash
   git init
   git add .
   git commit -m "init: minecraft course landing"
   git branch -M main
   git remote add origin https://github.com/ValentiTeach/logika-minecraft-course.git
   git push -u origin main
   ```
3. Заходь у [vercel.com](https://vercel.com) → **Add New… → Project** → імпортуй репо.
4. Vercel сам розпізнає Vite з `vercel.json`. Тисни **Deploy**.
5. Через ~30 секунд отримаєш URL типу `logika-minecraft-course.vercel.app`.

### Варіант 2 — через Vercel CLI

```bash
npm i -g vercel
vercel        # перший раз — заведе проєкт
vercel --prod # деплой у продакшн
```

### Кастомний домен

В Vercel → Project Settings → Domains → додай свій (наприклад `mine.logika.if.ua` або через існуючий `tenshool.pp.ua`). DNS оновлюється за 5–60 хв.

## Що варто доробити

- **Телефон у CTA** — у `src/components/Info.jsx` замінити `tel:+380` на реальний номер.
- **Ціна** — навмисно без цифри, додай у тому ж `Info.jsx` блоці `.price-card`.
- **OG-image** — для гарного шерингу в Telegram/Viber, поклади `og.png` (1200×630) у `public/` і додай meta-теги в `index.html`.
- **Форма запису** — якщо хочеш, щоб батьки не телефонували, а лишали заявку: підключи Supabase (як на HistoricUP), додай простий компонент `EnrollForm.jsx`.

## Як редагувати контент

- **Тексти днів** → `src/data/days.js`
- **Посади та що вивчається** → `src/data/ranks.js`
- **Скіли на темному блоці** → масив `SKILLS` всередині `src/components/Skills.jsx`
- **Практична інформація** → масиви `INFO_ROWS` та `PRICE_LINES` всередині `src/components/Info.jsx`
- **Кольори, шрифти, відступи** → CSS-змінні зверху `src/styles/global.css`

---

Made with ☕ in Коломия.
