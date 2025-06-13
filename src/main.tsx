import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './app/routes/routes';
import './common/styles/index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
