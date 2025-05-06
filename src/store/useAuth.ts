import { create } from 'zustand';

type AuthState = {
  token: string | null;
  user: { name: string; email: string } | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  setUser: (user: { name: string; email: string }) => void;
  clearUser: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  token: null,
  user: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
