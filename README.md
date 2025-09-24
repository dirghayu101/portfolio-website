# Portfolio Guided

A modern, full-stack portfolio and blog platform built with Next.js, Tailwind CSS, and Prisma. Designed for developers to showcase projects, write articles, and manage content with a beautiful, responsive UI.

## Features

- Personal portfolio homepage
- Blog/articles with MDX support and code highlighting
- Responsive navbar with mobile hamburger menu
- Project and article management
- Contact form modal
- Dark mode ready (optional)
- Optimized images with Next.js
- Styled with Tailwind CSS and Typography plugin
- Prisma ORM for database access

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [Prisma](https://www.prisma.io/)
- [MDX](https://mdxjs.com/)
- [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus) for code highlighting

## Getting Started

1. **Install dependencies:**

   ```sh
   cd client
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in required values.

3. **Set up the database:**

   ```sh
   npx prisma generate
   npx prisma migrate dev
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Folder Structure

- `client/` — Next.js app and frontend code
- `client/src/components/` — React components
- `client/src/app/` — App directory (Next.js routing)
- `client/prisma/` — Prisma schema
- `db/` — Database scripts and references

## Customization

- Edit `client/src/components/home/sections/Navbar.tsx` for navigation
- Add articles in `client/src/static/articles/articles-writeups/`
- Update styles in `client/src/app/globals.css`

## License

MIT
