# 🌍 Belarus Travel & Tour Booking App

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS Modules](https://img.shields.io/badge/Styling-CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)

Интерактивное веб-приложение для исследования туристических направлений и бронирования авторских туров по Беларуси. Проект разработан на современном стеке **React 19**, **Redux Toolkit**, **React Router v7** и сборщике **Vite**.

---

## ✨ Основной функционал

- 🗺 **Каталог туристических направлений:** Интерактивная витрина туров (Мозырь, Гродно, замки Мир и Несвиж, Браславские озёра и др.) с фильтрацией по типу отдыха и продолжительности.
- 📖 **Детальная страница тура (`/travelpage`):**
  - Подробное описание маршрута, ключевых достопримечательностей и фотогалерея.
  - Пошаговая программа тура по дням.
  - Актуальный расчет стоимости и сводка включенных услуг.
- 📝 **Модальное окно бронирования:**
  - Интерактивная форма с кастомным React-хуком (`useFormFields`).
  - Валидация в реальном времени: регулярные выражения для проверки корректности Email и номера телефона, проверка обязательных полей.
  - Обратная связь при успешной отправке заявки.
- 🔄 **Централизованное управление состоянием:**
  - Хранилище на **Redux Toolkit** (`travelSlice`) для хранения и предоставления данных каталога, активного выбранного тура и истории взаимодействия.
- 📱 **Адаптивный интерфейс:**
  - Модульные стили (CSS Modules), исключающие конфликты имен классов.
  - Плавная навигация с автоматическим возвратом к началу страницы (`ScrollToTop`).

---

## 🛠 Стек технологий

- **Фреймворк:** [React 19](https://react.dev/) (Функциональные компоненты, Hooks: `useState`, `useEffect`, кастомные хуки).
- **Стейт-менеджер:** [Redux Toolkit](https://redux-toolkit.js.org/) (`createSlice`, Redux Store, Middleware).
- **Маршрутизация:** [React Router DOM v7](https://reactrouter.com/) (Клиентский роутинг, вложенные пути).
- **Сборка и dev-сервер:** [Vite](https://vitejs.dev/) (Мгновенный HMR, быстрая сборка).
- **Стилизация:** CSS Modules, адаптивная верстка (Flexbox, Grid, Media Queries).
- **Качество кода:** ESLint 9 с плагинами для React Hooks и React Refresh.

---

## 📂 Структура проекта

```
travel-booking-react/
├── index.html               # Точка входа HTML
├── package.json             # Зависимости и npm-скрипты
├── vite.config.js           # Конфигурация Vite и React-плагина
├── eslint.config.js         # Правила линтинга
├── public/                  # Статические ресурсы
├── img/                     # Фотографии туров и иконки
├── css/                     # Глобальные и модульные стили
│   ├── booking_form.module.css
│   ├── homepage.module.css
│   └── ...
├── pages/                   # Страницы приложения
│   ├── homepage.jsx         # Главная страница с промо-блоками
│   ├── travels.jsx          # Каталог доступных туров
│   ├── travelpage.jsx       # Страница с деталями выбранного тура
│   ├── bookingForm.jsx      # Компонент формы бронирования с валидацией
│   ├── navigation.jsx       # Навигационный бар
│   ├── footer.jsx           # Подвал сайта
│   └── autoScrollToTop.jsx  # Вспомогательный компонент сброса скролла
├── store/                   # Управление состоянием (Redux)
│   ├── store.js             # Инициализация Redux Store
│   ├── travelSlice.js       # Срез данных туров и бронирований
│   └── middleware.js        # Кастомные middleware
└── src/
    └── main.jsx             # Монтирование корневого компонента в DOM
```

---

## 🚀 Запуск проекта локально

### Требования
- Установленный [Node.js](https://nodejs.org/) (версии 18.x или новее)
- Менеджер пакетов `npm` (или `pnpm` / `yarn`)

### Шаги установки:

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/yk-jivi/travel-booking-react.git
   cd travel-booking-react
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите сервер для разработки:**
   ```bash
   npm run dev
   ```
   Приложение откроется по адресу `http://localhost:5173/`

4. **Сборка для продакшена:**
   ```bash
   npm run build
   ```

---

## 👩‍💻 Автор

**Юлия (Yuliya)**  
- Студентка БГТУ (Информационные системы и технологии)  
- Специализация: Frontend Development, UI/UX Design & Databases  
- GitHub: [@yk-jivi](https://github.com/yk-jivi)
