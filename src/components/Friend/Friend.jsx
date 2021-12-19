import propTypes from 'prop-types';
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

Friend.propTypes = {
  id: propTypes.string,
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
};
