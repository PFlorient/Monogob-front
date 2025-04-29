// src/app/routes.tsx
import { RouteObject } from 'react-router';
import App from './App';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />, // layout principal (avec Outlet)
    children: [{ path: '*', element: <h1>404 - Not Found</h1> }],
  },
];
