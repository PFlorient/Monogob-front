import Room from '../../../common/types/rooms';
import { axiosApi } from '../../axiosInstance';

export const getRooms = async () => {
  const response = await axiosApi.get<Room[]>('/room');
  return response.data;
};

export const getRoom = async (uuid: string) => {
  const response = await axiosApi.get<Room>(`/room/${uuid}`);
  return response.data;
};
