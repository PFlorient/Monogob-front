import { Button } from '@mui/material';
import logo from '../assets/img/accueil_paint.png';
import TableListRoom from '../components/TableListRoom';
import { useRooms } from '../store/useRooms';
import { useContext, useState } from 'react';
import CreateRoomForm from '../components/forms/CreateRoomForm';
import { createRoom } from '../api/services/rooms/getRoom';
import { CreateRoomData } from '../common/types/createRoom.form';
import { useAuth } from '../store/useAuth';
import { LayoutContext } from '../components/layout/layout';

const HomePage = () => {
  const [fieldNewRoom, setfieldNewRoom] = useState(false);
  const listRooms = useRooms((state) => state.rooms);
  const user = useAuth((state) => state.user);
  const { openAuthenticationModal } = useContext(LayoutContext);
  const reloadRooms = () => {
    useRooms.getState().callRoomsApi();
  };
  const registerRoom = async (data: CreateRoomData) => {
    await createRoom(data);
    reloadRooms();
    setfieldNewRoom(false);
  };
  const clickButtonNewRoom = () => {
    if (user) {
      setfieldNewRoom((prev) => !prev);
    } else {
      console.log('user not connected');
      openAuthenticationModal();
    }
  };
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-black mb-4">Bienvenue au Gobcass !</h2>
        <TableListRoom listRooms={listRooms} isConnected={Boolean(user)} />
        <div className="flex justify-between w-full mt-2">
          <Button onClick={reloadRooms} variant="contained">
            refresh
          </Button>
          <Button onClick={() => clickButtonNewRoom()} variant="contained">
            Create Room
          </Button>
          {fieldNewRoom && <CreateRoomForm onSubmit={registerRoom} />}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
