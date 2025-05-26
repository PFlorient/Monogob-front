type Room = {
  uuid: string;
  name: string;
  admnistrator_uuid: string;
  users_uuid: string[];
  created_at: string;
};

export default Room;
