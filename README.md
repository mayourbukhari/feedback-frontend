# Feedback App Frontend

A React frontend application for the feedback system built with Vite.

## Features

- User authentication (Login/Register)
- Feedback submission
- Admin dashboard for managing feedback
- Protected routes
- Modern UI with React Router

## Technologies Used

- React 19.1.0
- Vite 7.0.0
- React Router DOM 7.6.3
- Axios for API calls
- ESLint for code quality

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Admin.jsx
│   ├── Feedback.jsx
│   ├── Login.jsx
│   ├── ProtectedRoute.jsx
│   └── Register.jsx
├── assets/
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Environment Variables

Make sure to set up the appropriate API endpoints in your environment or update the axios configuration to point to your backend API.

## License

This project is licensed under the MIT License.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
