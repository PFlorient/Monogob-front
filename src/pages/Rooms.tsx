import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useRooms } from '../store/useRooms';
import { Link } from 'react-router';
import { useState } from 'react';
import { CreateRoomData } from '../common/types/createRoom.form';
import CreateRoomForm from '../components/forms/CreateRoomForm';
import { createRoom } from '../api/services/rooms/getRoom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RoomsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const listRooms = useRooms((state) => state.rooms);

  const reloadRooms = () => {
    useRooms.getState().callRoomsApi();
  };

  const registerRoom = async (data: CreateRoomData) => {
    await createRoom(data);
    reloadRooms();
    setOpenModal(false);
  };
  return (
    <div>
      Rooms
      <Button onClick={() => setOpenModal(true)}>create room</Button>
      <Button onClick={reloadRooms}>refresh</Button>
      <TableContainer component={Paper}>
        <Table aria-label="list room">
          <TableHead>
            <TableRow>
              <TableCell>Rooms uuid</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Number player</TableCell>
              <TableCell>Created_at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRooms.map((room) => (
              <TableRow component={Link} to={`/room/${room.uuid}`} key={room.uuid}>
                <TableCell>{room.uuid}</TableCell>
                <TableCell>{room.name}</TableCell>
                <TableCell>{room.users_uuid.length}</TableCell>
                <TableCell>{room.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={style}>
          <CreateRoomForm onSubmit={registerRoom} />
        </Box>
      </Modal>
    </div>
  );
};

export default RoomsPage;
