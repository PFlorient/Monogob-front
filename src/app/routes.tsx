// src/app/routes.tsx
import { RouteObject } from 'react-router';
import AuthPage from '../pages/Auth';
import RoomsPage from '../pages/Rooms';
import { useRooms } from '../store/useRooms';
import RoomPage from '../pages/Room';
import Layout from '../components/layout/layout';

const roomsLoader = async () => {
  useRooms.getState().callRoomsApi();
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />, // layout principal (avec Outlet)
    children: [
      // { index: true, element: <HomePage /> },
      { path: 'signup', element: <AuthPage /> },
      { path: 'rooms', element: <RoomsPage />, loader: roomsLoader },
      { path: 'room/:uuid', element: <RoomPage /> },
      { path: '*', element: <h1>404 - Not Found</h1> },
    ],
  },
];
