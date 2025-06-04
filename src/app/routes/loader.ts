import ApiError from '../../common/errors/ApieError';
import { useRooms } from '../../store/useRooms';

const roomsLoader = async () => {
  useRooms.getState().callRoomsApi();
};

const currentRoomLoader = async (uuid: string) => {
  const store = useRooms.getState();
  try {
    const room = await store.callRoomApiByUuid(uuid);
    return room;
  } catch (error: unknown) {
    const e = error as { response?: { status?: number } };
    if (e.response?.status === 401) {
      throw new ApiError('Tu n’es pas autorisé à voir cette room.', 401);
    }
    throw new ApiError('Erreur inconnue', e.response?.status || 500);
  }
};

export { roomsLoader, currentRoomLoader };
