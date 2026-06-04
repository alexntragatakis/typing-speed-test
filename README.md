# Typing Speed Test

A typing speed test built with React and TypeScript designed to measure typing speed and accuracy. The application manages time-based state, user input events, and UI updates using modular, type-safe component architecture. Results are persisted to a PostgreSQL database and displayed on a global leaderboard.

### Live Demo

Check out the live version here: [https://typing-speed-test-thhq.onrender.com](https://typing-speed-test-thhq.onrender.com)

### Features

- Randomized typing tests from a predefined word bank, producing a new sequence of words on each test restart
- Per-character visual feedback by dynamically updating letter styles based on input accuracy against expected characters
- Words per minute (WPM) and accuracy calculations, with WPM calculation depending on elapsed time and accuracy to avoid inflated results
- Configurable word count test options and color themes
- Score submission and global leaderboard with filtering by word count

### Tech Stack

- **Frontend:** React, TypeScript, Vite, Bootstrap
- **Backend:** Node.js, Express, Neon (PostgreSQL)
