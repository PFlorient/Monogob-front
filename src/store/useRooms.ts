import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import Room, { LightUserInfo } from '../common/types/rooms';
import {
  callCloseRoom,
  callGetRoomByUuid,
  callGetRooms,
  callJoinRoom,
  callLeaveRoom,
} from './actions/roomActions';

export type RoomsStore = {
  rooms: Room[];
  currentRoom: Room | null;
  error: unknown | null;
  callRoomsApi: () => void;
  callRoomApiByUuid: (uuid: string) => Promise<Room>;
  callJoinRoom: (uuid: string) => Promise<Room>;
  callLeaveRoom: (uuid: string) => Promise<Room>;
  callCloseRoom: (uuid: string) => Promise<null>;
  setRooms: (rooms: Room[]) => void;
  setCurrentRoom: (currentRoom: Room | null) => void;
  updateUsersInCurrentRoom: (users: LightUserInfo[]) => void;
  setError: (error: unknown) => void;
};

export const useRooms = create<RoomsStore>()(
  devtools(
    (set, get) => ({
      rooms: [],
      currentRoom: null,
      callRoomsApi: () => callGetRooms(get),
      callRoomApiByUuid: (uuid) => callGetRoomByUuid(uuid, get),
      callJoinRoom: (uuid) => callJoinRoom(uuid, get),
      callLeaveRoom: (uuid) => callLeaveRoom(uuid, get),
      callCloseRoom: (uuid) => callCloseRoom(uuid, get),
      setRooms: (rooms) => set({ rooms }),
      setCurrentRoom: (currentRoom) => set({ currentRoom }),
      updateUsersInCurrentRoom: (users: LightUserInfo[]) =>
        set((state) => ({
          currentRoom: state.currentRoom ? { ...state.currentRoom, users } : null,
        })),
      setError: (error) => set({ error }),
    }),
    { name: 'RoomsStore' }
  )
);
