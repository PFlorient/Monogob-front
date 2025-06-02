import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Room from '../common/types/rooms';
import { Navigate } from 'react-router';

export interface TableListRoomProps {
  listRooms: Room[];
}

const TableListRoom = ({ listRooms }: TableListRoomProps) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="list room">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Number player</TableCell>
              <TableCell>Created_at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRooms.map((room) => (
              <TableRow key={room.uuid} onClick={() => Navigate({ to: `/room/${room.uuid}` })}>
                <TableCell>{room.name}</TableCell>
                <TableCell>{room.users_uuid.length}</TableCell>
                <TableCell>{room.created_at}</TableCell>
              </TableRow>
            ))}
            {!listRooms.length && (
              <TableRow>
                <TableCell colSpan={3}>No room found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableListRoom;
