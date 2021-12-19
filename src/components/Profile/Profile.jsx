import propTypes from 'prop-types';

import {
  Container,
  Avatar,
  UserName,
  Label,
  Quantity,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container key={tag}>
      <div>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.object,
};
