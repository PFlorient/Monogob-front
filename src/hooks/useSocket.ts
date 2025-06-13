import { useEffect } from 'react';
import { SocketEvents } from '../api/services/socket/socketEvents';
import { connectToSocket, disconnectFromSocket } from '../api/services/socket/socketService';

const useSocket = (roomUuid: string | undefined, handlers: SocketEvents) => {
  useEffect(() => {
    if (roomUuid) {
      connectToSocket(roomUuid, handlers);
    }

    return () => {
      disconnectFromSocket();
    };
  }, [handlers, roomUuid]);
};

export default useSocket;
