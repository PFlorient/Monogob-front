import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import Room from '../common/types/rooms';
import { callGetRoomByUuid, callGetRoomsApi } from './actions/roomActions';

export type RoomsStore = {
  rooms: Room[];
  currentRoom: Room | null;
  error: unknown | null;
  callRoomsApi: () => void;
  callRoomApiByUuid: (uuid: string) => Promise<Room>;
  setRooms: (rooms: Room[]) => void;
  setCurrentRoom: (currentRoom: Room) => void;
  setError: (error: unknown) => void;
};

export const useRooms = create<RoomsStore>()(
  devtools(
    (set, get) => ({
      rooms: [],
      currentRoom: null,
      callRoomsApi: () => callGetRoomsApi(get),
      callRoomApiByUuid: (uuid) => callGetRoomByUuid(uuid, get),
      setRooms: (rooms) => set({ rooms }),
      setCurrentRoom: (currentRoom) => set({ currentRoom }),
      setError: (error) => set({ error }),
    }),
    { name: 'RoomsStore' }
  )
);
