import propTypes from 'prop-types';

import { Friend } from 'components/Friend/Friend';
import { ListFriends } from './FriendList.styled';

export const FriendList = ({ events }) => {
  return (
    <ListFriends>
      {events.map(item => (
        <Friend key={item.id} isOnline={item.isOnline} avatar={item.avatar} name={item.name} />
      ))}
    </ListFriends>
  );
};

FriendList.propTypes = {
  events: propTypes.array,
};
