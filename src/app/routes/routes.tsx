// src/app/routes.tsx
import { redirect, RouteObject } from 'react-router';
import RoomPage from '../../pages/Room';
import HomePage from '../../pages/Home';
import Layout from '../../components/layout/layout';
import RouteErrorHandler from '../../components/layout/RouteErrorHandler';
import { roomsLoader, currentRoomLoader } from './loader';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: roomsLoader,
      },
      {
        path: 'room',
        loader: () => redirect('/'),
      },
      {
        path: 'room/:uuid',
        element: <RoomPage />,
        loader: async ({ params }) => {
          const uuid = params.uuid;
          if (!uuid) return redirect('/');
          return await currentRoomLoader(uuid);
        },
        errorElement: <RouteErrorHandler />, // 👈 ajouté ici
      },
      {
        path: '*',
        element: <h1>404 - Not Found</h1>,
      },
    ],
  },
];
