import { useRooms } from '../store/useRooms';
import { useAuth } from '../store/useAuth';
import React, { useEffect, useMemo } from 'react';
import ListUser from '../components/Room/ListUser';
import { Button } from '@mui/material';
import { connectToSocket } from '../api/services/socket/socketService';

const RoomPage = () => {
  const currentRoom = useRooms((state) => state.currentRoom);
  const currentUser = useAuth((state) => state.user);

  const joinRoom = useRooms((state) => state.callJoinRoom);
  const leaveRoom = useRooms((state) => state.callLeaveRoom);
  const closeRoom = useRooms((state) => state.callCloseRoom);

  const isAdmin = currentRoom?.administrator_uuid == currentUser?.uuid;
  const inRoom = currentRoom?.users.find((user) => user.uuid == currentUser?.uuid);
  const userNameInRoom = useMemo(() => {
    return currentRoom?.users.map((user) => user.username) ?? [];
  }, [currentRoom]);

  useEffect(() => {
    if (currentRoom?.uuid) {
      connectToSocket(currentRoom.uuid, {
        onPlayerJoined: (data) => useRooms.getState().updateUsersInCurrentRoom(data),
        onPlayerLeft: (data) => {
          console.log('hello', data);
          useRooms.getState().updateUsersInCurrentRoom(data);
        },
      });
    }
  }, [currentRoom?.uuid]);

  return (
    currentRoom && (
      <div className="grid px-2 lg:px-8 grid-cols-4 gap-4">
        <h2 className="text-4xl font-bold text-black mb-4 col-span-4">Room : {currentRoom.name}</h2>
        <section className="flex flex-col justify-center col-span-3">
          <h3>Nombre d&apos;utilisteurs : {userNameInRoom.length}/4</h3>
          <h3></h3>
          <ListUser users={userNameInRoom} />
        </section>
        <section>
          <div className="flex gap-2 justify-end items-end h-full">
            {isAdmin && inRoom && (
              <React.Fragment>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => closeRoom(currentRoom.uuid)}
                >
                  Stop Game
                </Button>
                <Button variant="contained">Start Game</Button>
              </React.Fragment>
            )}
            {!inRoom && <Button onClick={() => joinRoom(currentRoom.uuid)}>Join</Button>}
            {inRoom && !isAdmin && (
              <Button onClick={() => leaveRoom(currentRoom.uuid)}>Leave</Button>
            )}
          </div>
        </section>
      </div>
    )
  );
};

export default RoomPage;
