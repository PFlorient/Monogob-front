import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import Room from '../common/types/rooms';
import { callGetRoomsApi } from './actions/roomActions';

export type RoomsStore = {
  rooms: Room[];
  callRoomsApi: () => void;
  setRooms: (rooms: Room[]) => void;
};

export const useRooms = create<RoomsStore>()(
  devtools(
    (set, get) => ({
      rooms: [],
      callRoomsApi: () => callGetRoomsApi(get),
      setRooms: (rooms) => set({ rooms }),
    }),
    { name: 'RoomsStore' }
  )
);
