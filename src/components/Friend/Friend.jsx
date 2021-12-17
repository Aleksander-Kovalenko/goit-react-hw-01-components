import { ItemFriend, Status, Avatar, NameFriend } from './Friend.styled';

export const Friend = ({ id, isOnline, avatar, name }) => {
  return (
    <ItemFriend key={id}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} />
      <NameFriend>{name}</NameFriend>
    </ItemFriend>
  );
};
