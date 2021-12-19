import propTypes from 'prop-types';

import { Profile } from '../Profile/Profile';

export const ProfileList = ({ events }) => {
  return events.map(item => (
    <Profile
      key={item.tag}
      username={item.username}
      tag={item.tag}
      location={item.location}
      avatar={item.avatar}
      stats={item.stats}
    ></Profile>
  ));
};

Profile.propTypes = {
  events: propTypes.array,
};
