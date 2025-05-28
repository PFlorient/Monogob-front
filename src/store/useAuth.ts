// useAuth.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { callLoginApi, logout } from './actions/authActions';

type User = {
  username: string;
  email: string;
  token: string;
};

export type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  callLoginApi: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
};

export const useAuth = create<AuthStore>()(
  devtools(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }, false, 'setUser'),
      clearUser: () => set({ user: null }, false, 'clearUser'),

      callLoginApi: (credentials) => callLoginApi(get, credentials),
      logout: () => logout(set),
    }),
    { name: 'AuthStore' }
  )
);
