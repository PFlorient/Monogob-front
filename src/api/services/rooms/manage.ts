import { CreateRoomData } from '../../../common/types/createRoom.form';
import Room from '../../../common/types/rooms';
import { axiosApi } from '../../axiosInstance';

export const createRoom = async (data: CreateRoomData): Promise<Room> => {
  const response = await axiosApi.post<Room>('/room/create', data);
  return response.data;
};

export const joinRoom = async (uuid: string): Promise<Room> => {
  const response = await axiosApi.get<Room>(`/room/join/${uuid}`);
  return response.data;
};

export const leaveRoom = async (uuid: string): Promise<Room> => {
  const response = await axiosApi.get<Room>(`/room/leave/${uuid}`);
  return response.data;
};

export const closeRoom = async (uuid: string): Promise<null> => {
  const response = await axiosApi.get<null>(`/room/close/${uuid}`);
  return response.data;
};
