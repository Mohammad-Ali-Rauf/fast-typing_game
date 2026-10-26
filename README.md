<div align="center">

# ⌨️ Fast Typing Game

**A lightweight typing speed game built with vanilla HTML, CSS & JavaScript.**

Type the displayed word before the clock runs out — every correct word buys you extra time.

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](index.html)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](style.css)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](script.js)

</div>

---

## 🎯 About

Fast Typing Game challenges you to type common English words as fast as possible against a ticking clock. It's deliberately lightweight — **no frameworks, no build tools, no installation** — just open `index.html` and start typing.

The word pool contains ~200 of the most frequently used English words, so it doubles as casual touch-typing practice.

## ✨ Features

- ⏱️ **Countdown timer** — race the clock right from page load
- ⏳ **Time bonus** — each correct word adds **+2 seconds**
- 🎚️ **3 difficulty levels** — Easy, Medium and Hard
- 💾 **Persistent settings** — your difficulty is saved in `localStorage`
- 🏆 **Live score counter** and one-click **Play Again**
- 🚫 **No dependencies** — pure vanilla JS

## 🕹️ How to Play

1. **Read** the word shown in the center of the card.
2. **Type** it into the input field (exact match required).
3. Each correct word gives **+1 score** and **+2 bonus seconds**.
4. When the timer hits **0**, your final score is shown.

> 💡 The input field auto-focuses on page load — just start typing.

## 🎚️ Difficulty

| Difficulty | Starting Time |
|:---:|:---:|
| 🟢 Easy | 10 seconds |
| 🟡 Medium | 6 seconds |
| 🔴 Hard | 3 seconds |

Change it anytime via the tools icon (🔧) in the bottom-left corner. Your choice is remembered across sessions.

## 🚀 Getting Started

```bash
git clone https://github.com/Mohammad-Ali-Rauf/fast-typing_game.git
cd fast-typing_game
```

Then either open `index.html` in your browser, or run a local server:

```bash
python -m http.server 8000   # or: npx serve .
```

and visit **http://localhost:8000**.

## 📁 Project Structure

```
fast-typing_game/
├── index.html   # Markup: game card, settings panel, game-over overlay
├── style.css    # Styling: layout, animations, responsive card design
├── script.js    # Game logic: timer, scoring, word generation, persistence
└── README.md
```

## 🛠️ Tech Stack

HTML5, CSS3 and vanilla JavaScript (ES6), plus [Open Sans](https://fonts.google.com/specimen/Open+Sans) and [Font Awesome](https://fontawesome.com/) via CDN.

## 📄 License

This project currently has no explicit license. Open an issue if you'd like to use it in your own work.
