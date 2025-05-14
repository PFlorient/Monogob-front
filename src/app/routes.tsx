// src/app/routes.tsx
import { RouteObject } from 'react-router';
import App from './App';
import AuthPage from '../pages/Auth';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />, // layout principal (avec Outlet)
    children: [
      // { index: true, element: <HomePage /> },
      { path: 'signup', element: <AuthPage /> },
      { path: '*', element: <h1>404 - Not Found</h1> },
    ],
  },
];
