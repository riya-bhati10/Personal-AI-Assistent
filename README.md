<<<<<<< HEAD

=======
# Personal Assistant Frontend

A modern, scalable React + Vite boilerplate for building personal assistant web applications.

## Features
- **React 18 + Vite**: Fast, modern development experience
- **TypeScript**: Type-safe codebase
- **Tailwind CSS**: Utility-first styling
- **ShadCN UI**: Beautiful, accessible UI components
- **Redux Toolkit**: Scalable state management
- **React Query**: Powerful async state and server cache
- **Axios**: Simple HTTP client for API calls
- **Modular Structure**: Clean separation for components, pages, routes, store, hooks, API, and utilities

## Folder Structure
```
/src
  /api        # API service functions (axios)
  /components # Reusable UI components (e.g., Button)
  /hooks      # Custom React hooks
  /lib        # Utility functions
  /pages      # Page components (e.g., Home)
  /routes     # Centralized route definitions
  /store      # Redux store and slices
  /styles     # Global styles (Tailwind)
  App.tsx     # App root, providers, and router
  main.tsx    # Vite entry point
```

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the dev server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization
- Add new pages in `/src/pages` and register them in `/src/routes/index.tsx`.
- Add new API endpoints in `/src/api/service.ts` or create more service files.
- Use and extend ShadCN UI components in `/src/components`.
- Manage global state with Redux Toolkit in `/src/store`.

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)

## License
MIT
>>>>>>> ab54480d2ab155df70aa9ffdb4f2f54af9516efd
