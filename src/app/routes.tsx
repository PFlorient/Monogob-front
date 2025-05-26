// src/app/routes.tsx
import { RouteObject } from 'react-router';
import App from './App';
import AuthPage from '../pages/Auth';
import RoomsPage from '../pages/Rooms';
import { useRooms } from '../store/useRooms';
import RoomPage from '../pages/Room';

const roomsLoader = async () => {
  useRooms.getState().callRoomsApi();
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />, // layout principal (avec Outlet)
    children: [
      // { index: true, element: <HomePage /> },
      { path: 'signup', element: <AuthPage /> },
      { path: 'rooms', element: <RoomsPage />, loader: roomsLoader },
      { path: 'room/:uuid', element: <RoomPage /> },
      { path: '*', element: <h1>404 - Not Found</h1> },
    ],
  },
];
