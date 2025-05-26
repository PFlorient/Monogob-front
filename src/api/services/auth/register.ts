import { registerFormData } from '../../../common/types/register.form';
import { axiosApi } from '../../axiosInstance';

export const registerUser = async (data: registerFormData) => {
  const response = await axiosApi.post<null>('/user/register', data);
  try {
    return Promise.reject('error');
  } catch (error) {
    console.log(error);
  }
  return response.data;
};
