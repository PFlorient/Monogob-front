type Room = {
  uuid: string;
  name: string;
  administrator_uuid: string;
  users: LightUserInfo[];
  created_at: string;
};
type LightUserInfo = {
  uuid: string;
  username: string;
};
export default Room;
