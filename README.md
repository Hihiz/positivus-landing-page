# Positivus - лендинг для digital-агентства

Современный адаптивный лендинг для digital-агентства, сверстанный по макету из Figma.

## 🌐 Demo

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square&logo=github)](https://hihiz.github.io/positivus-landing-page/)
![W3C-Validated](https://img.shields.io/badge/W3C-Validated-brightgreen?style=flat-square&logo=w3c)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-97-brightgreen?style=flat-square&logo=lighthouse)](https://developer.chrome.com/docs/lighthouse)

👉 **[Посмотреть онлайн](https://hihiz.github.io/positivus-landing-page/)**

## 🎨 Дизайн

**Автор:** [Olga](https://www.figma.com/@olgaaverchenko)  
**Макет:** [Positivus Landing Page Design](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design)  
**Лицензия макета:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 💻 Разработка

**Разработчик:** [Hihiz](https://github.com/Hihiz)

## 🛠️ Технологии

- **HTML5** - семантическая вёрстка
- **CSS** - Grid, Flexbox, кастомные свойства (Custom Properties), медиазапросы, CSS-анимации
- **Vanilla JavaScript (ES6 Modules)** - без сторонних библиотек
- **Mobile-first** подход

## 📱 Адаптивность

| Устройство                      | Ширина  |
| ------------------------------- | ------- |
| 📱 Мобильные устройства(Mobile) | 375px+  |
| 📱 Планшеты(Tablet)             | 768px+  |
| 💻 Десктопы(Desktop)            | 1024px+ |
| 🖥️ Крупные экраны(Large)        | 1280px+ |

## ✨ Возможности

- Полностью адаптивный дизайн
- Гамбургер-меню с анимацией
- Аккордеон для описания рабочего процесса
- Слайдер отзывов
- SEO-оптимизация
- Оптимизированные шрифты в формате WOFF2

## ⚡ Производительность

![Lighthouse Performance](https://img.shields.io/badge/Performance-95%2B-brightgreen?style=flat-square)
![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-95%2B-brightgreen?style=flat-square)
![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-95%2B-brightgreen?style=flat-square)
![Lighthouse SEO](https://img.shields.io/badge/SEO-95%2B-brightgreen?style=flat-square)

- Ленивая загрузка (lazy loading) для изображений

### Lighthouse скриншот

![](/screenshots/lighthouse.png)

## 📖 Доступность(Accessibility)

- Навигация с клавиатуры
- Поддержка экранных читалок (скринридеров)
- Высокий коэффициент контрастности цветовых сочетаний

## 📂 Структура проекта

```
├── css/
│ ├── base.css # сброс стилей, переменные, типографика
│ ├── layout.css # сетки, контейнеры, header/footer
│ └── responsive.css # медиазапросы
├── js/
│ ├── main.js
│ ├── hamburger.js # мобильное меню
│ ├── accordion.js # аккордеон процессов
│ └── slider.js # слайдер отзывов
├── img/
│ ├──# фотографии и иллюстрации
│ ├──# SVG-иконки
│ └──# логотипы компаний
├── fonts/ # шрифты в формате WOFF2
└── index.html
```

## 🏃 Запуск локально

> ⚠️ **Важно:** Проект использует ES6 модули (`<script type="module">`), поэтому нужен локальный HTTP-сервер.

### Способ 1: VS Code Live Server (рекомендуется)

1. Установите расширение Live Server
2. Откройте проект в VS Code
3. ПКМ по `index.html` → **Open with Live Server**
4. Сайт откроется на `http://127.0.0.1:5500`

### Способ 2: Python (встроенный сервер)

```bash
# Python 3
python -m http.server 8000
Откройте сайт http://localhost:8000
```

## 📸 Скриншоты

### Desktop (1440px)

![](/screenshots/desktop.png)

### Tablet (768px)

![](/screenshots/tablet.png)

### Mobile (375px)

![](/screenshots/mobile.png)

## 📄 Лицензия

**Автор дизайна:** [Olga](https://www.figma.com/@olgaaverchenko)  
**Макет:** [Positivus Landing Page Design](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design)  
**Лицензия:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

Полный текст лицензии [LICENSE](https://github.com/Hihiz/positivus-landing-page/blob/develop/LICENSE)
