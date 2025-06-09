import { useParams } from 'react-router';
import { useRooms } from '../store/useRooms';
import { useAuth } from '../store/useAuth';

const RoomPage = () => {
  const params = useParams();
  const currentRoom = useRooms((state) => state.currentRoom);
  const currentUser = useAuth((state) => state.user);
  const isAdmin = currentRoom?.administrator_uuid == currentUser?.uuid;
  const isInRoom = currentRoom?.users.find((user) => user.uuid == currentUser?.uuid);
  return (
    <section className="mt-16">
      Bienvenu dans la room : {params.uuid} <br /> is admin : {isAdmin ? 'true' : 'false'} <br />
      {currentRoom?.administrator_uuid}
      <br />
      {currentUser?.uuid}
      <br />
      {currentRoom?.administrator_uuid == currentUser?.uuid ? 'true' : 'false'}
      COMPOSANT LISTE UTILISATEUR
      <br />
      <br />
      <br />
      COMPOSANT LANCEMENT DE ROOM (uniquement à l'admin)
    </section>
  );
};

export default RoomPage;
