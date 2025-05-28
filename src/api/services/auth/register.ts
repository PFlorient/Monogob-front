import { registerFormData } from '../../../common/types/register.form';
import { axiosApi } from '../../axiosInstance';

export const registerUser = async (data: registerFormData) => {
  return await axiosApi.post<null>('/user/register', data);
};
