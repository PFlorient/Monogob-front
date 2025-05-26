import { useParams } from 'react-router';

const RoomPage = () => {
  const params = useParams();
  return <div>Bienvenu dans la room : {params.uuid}</div>;
};

export default RoomPage;
