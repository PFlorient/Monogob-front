import { getRoom, getRooms } from '../../api/services/rooms/getRoom';
import Room from '../../common/types/rooms';
import { RoomsStore } from '../useRooms';

export const callGetRoomsApi = async (get: () => RoomsStore) => {
  const response = await getRooms().catch((error) => {
    get().setError(error.response);
    return [];
  });

  get().setRooms(response);
};

export const callGetRoomByUuid = async (
  uuid: string,
  get: () => RoomsStore
): Promise<Room | null> => {
  const response = await getRoom(uuid).catch((error) => {
    get().setError(error.response);
    throw error;
  });
  get().setCurrentRoom(response);
  return response;
};
