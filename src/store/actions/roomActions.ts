import { getRooms } from '../../api/services/rooms/getRoom';
import { RoomsStore } from '../useRooms';

export async function callGetRoomsApi(get: () => RoomsStore) {
  try {
    const response = await getRooms();
    console.log(response);
    get().setRooms(response);
  } catch (error) {
    console.error(error);
  }
}
