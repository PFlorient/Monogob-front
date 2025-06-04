import { useParams } from 'react-router';

const RoomPage = () => {
  const params = useParams();
  return <section className="mt-16">Bienvenu dans la room : {params.uuid}</section>;
};

export default RoomPage;
