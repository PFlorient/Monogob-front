// src/index.tsx
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './app/routes';
import './common/styles/index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
