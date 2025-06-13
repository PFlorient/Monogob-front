import { Socket } from 'socket.io-client';
import { LightUserInfo } from '../../../common/types/rooms';

enum roomEvent {
  PLAYER_JOINED = 'playerJoined',
  LEAVE_ROOM = 'playerLeft',
  CLOSE_ROOM = 'closeRoom',
}

export interface SocketEvents {
  onPlayerJoined: (data: LightUserInfo[]) => void;
  onPlayerLeft: (data: LightUserInfo[]) => void;
}

const socketEvents = (socket: Socket, handlers: SocketEvents) => {
  socket.on(roomEvent.PLAYER_JOINED, handlers.onPlayerJoined);
  socket.on(roomEvent.LEAVE_ROOM, handlers.onPlayerLeft);
};

export default socketEvents;
