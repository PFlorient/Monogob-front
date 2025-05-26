import { CreateRoomData } from '../../../common/types/createRoom.form';
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

export const createRoom = async (data: CreateRoomData) => {
  console.log(data.name);
  const response = await axiosApi.post<Room>('/room/create', data);
  return response.data;
};
