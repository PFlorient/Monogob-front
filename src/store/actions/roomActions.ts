import { getRoom, getRooms } from '../../api/services/rooms/getRoom';
import { closeRoom, joinRoom, leaveRoom } from '../../api/services/rooms/manage';
import Room from '../../common/types/rooms';
import { RoomsStore } from '../useRooms';

export const callGetRooms = async (get: () => RoomsStore) => {
  const response = await getRooms().catch((error) => {
    get().setError(error.response);
    return [];
  });

  get().setRooms(response);
};

export const callGetRoomByUuid = async (uuid: string, get: () => RoomsStore): Promise<Room> => {
  const response = await getRoom(uuid).catch((error) => {
    get().setError(error.response);
    throw error;
  });
  get().setCurrentRoom(response);
  return response;
};

export const callJoinRoom = async (uuid: string, get: () => RoomsStore): Promise<Room> => {
  const response = await joinRoom(uuid).catch((error) => {
    get().setError(error.response);
    throw error;
  });
  get().setCurrentRoom(response);
  return response;
};

export const callLeaveRoom = async (uuid: string, get: () => RoomsStore): Promise<Room> => {
  const response = await leaveRoom(uuid).catch((error) => {
    get().setError(error.response);
    throw error;
  });
  get().setCurrentRoom(response);
  return response;
};

export const callCloseRoom = async (uuid: string, get: () => RoomsStore): Promise<null> => {
  const response = await closeRoom(uuid).catch((error) => {
    get().setError(error.response);
    throw error;
  });
  get().setCurrentRoom(response);
  return response;
};
