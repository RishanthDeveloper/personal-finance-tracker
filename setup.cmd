@echo off
cd frontend
call npm install
call npm install react-router-dom recharts lucide-react axios @tanstack/react-query react-hook-form zod @hookform/resolvers clsx tailwind-merge
call npm install -D tailwindcss postcss autoprefixer
call npx tailwindcss init -p
