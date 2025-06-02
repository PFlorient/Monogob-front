import { loginFormData } from '../../../common/types/login.form';
import { axiosApi } from '../../axiosInstance';

type loginResponse = {
  token: string;
  username: string;
  email: string;
};
export const loginUser = (data: loginFormData) => {
  return axiosApi.post<loginResponse>('/user/login', data);
};
