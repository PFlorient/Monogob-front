// src/app/routes.tsx
import { RouteObject } from 'react-router';
import App from './App';
import SignUpPage from '../pages/SignUp';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />, // layout principal (avec Outlet)
    children: [
      // { index: true, element: <HomePage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: '*', element: <h1>404 - Not Found</h1> },
    ],
  },
];
