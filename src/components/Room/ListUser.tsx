import userPicture from '../../assets/img/caractere_paint.png';
export interface ListUserProps {
  users: string[];
}

const ListUser = ({ users }: ListUserProps) => {
  return (
    <div className="flex gap-4">
      {users.map((user) => (
        <div className="flex flex-col justify-center items-center" key={user}>
          <img src={userPicture} alt="user picture" />
          <span>{user}</span>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
