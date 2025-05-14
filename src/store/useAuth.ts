import { create } from 'zustand';
import { loginUser } from '../api/services/auth/login';

type AuthState = {
  token: string | null;
  user: { username: string; email: string } | null;
  callLoginApi: (user: { username: string; password: string }) => void;
  setToken: (token: string) => void;
  clearToken: () => void;
  setUser: (user: { username: string; email: string }) => void;
  clearUser: () => void;
};

const callLoginApi = async (
  set: (state: AuthState | Partial<AuthState>) => void,
  user: { username: string; password: string }
) => {
  try {
    const response = await loginUser(user);
    set({ token: response.data.token });
    set({ user: { username: response.data.username, email: response.data.email } });
  } catch (error) {
    console.error(error);
  }
};

export const useAuth = create<AuthState>((set) => ({
  token: null,
  user: null,
  callLoginApi: (user) => callLoginApi(set, user),
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
