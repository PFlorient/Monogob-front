import { io, Socket } from 'socket.io-client';
import socketEvents, { SocketEvents } from './socketEvents';

let socketInstance: Socket | null = null;
const joinedRooms = new Set<string>();

export const connectToSocket = (roomUuid: string, handlers: SocketEvents) => {
  if (!socketInstance) {
    socketInstance = io(import.meta.env.VITE_SOCKET_URL);
  }

  if (!joinedRooms.has(roomUuid)) {
    socketInstance.emit('joinRoom', roomUuid);
    joinedRooms.add(roomUuid);
  }

  socketEvents(socketInstance, handlers);

  return socketInstance;
};

export const disconnectFromSocket = () => {
  if (socketInstance) {
    socketInstance.disconnect();
    socketInstance = null;
  }
};

export const emitEvent = (event: string, data: unknown) => {
  if (socketInstance) {
    socketInstance.emit(event, data);
  }
};

export const getSocket = () => socketInstance;
