# Todo App (React + Vite)

> A responsive and aesthetically designed to-do web application built using React, Bootstrap, HTML5, and CSS3.

## Features

- Add new tasks with a name and due date
- Delete tasks
- Clean, user-friendly UI with Bootstrap and CSS Modules
- Component-based architecture (AddTodo, TodoItem, TodoItems, AppName, WelcomeMessage)
- State management using React hooks (`useState`)
- Built and optimized using Vite and ESLint

## Technologies Used

- React 19 (functional components, hooks)
- Bootstrap 5
- CSS Modules
- Vite (build tool)
- ESLint (code quality)

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd 5-todo-app-version-three
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/` — Main source code
  - `components/` — Reusable React components
  - `App.jsx` — Main app logic
  - `App.css` — App-level styles
- `public/` — Static assets
- `index.html` — HTML entry point

## Limitations

- Tasks are not persisted (no localStorage)
- No advanced React optimizations (no useMemo/useCallback)
- No TypeScript
