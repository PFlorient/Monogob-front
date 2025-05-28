import { loginUser } from '../../api/services/auth/login';
import { AuthStore } from '../useAuth';

export async function callLoginApi(
  get: () => AuthStore,
  credentials: { username: string; password: string }
) {
  try {
    const response = await loginUser(credentials);
    get().setUser({ ...response.data });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function logout(set: (partial: Partial<AuthStore>) => void) {
  set({ user: null });
  console.log('Utilisateur déconnecté');
}
