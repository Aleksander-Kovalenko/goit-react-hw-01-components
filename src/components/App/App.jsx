import { SectionTitle } from 'components/SectionTitle/SectionTitle.jsx';
import { ProfileList } from 'components/ProfileList/ProfileList';
import { FriendList } from 'components/FriendList/FriendList';
// import { StatisticsList } from 'components/StatisticsList/StatisticsList';

import { Statistics } from 'components/Statistics/Statistics';
import user from '../../user.json';
import data from '../../data.json';
import friendlyList from '../../friends.json';

export const App = () => {
  return (
    <>
      <SectionTitle text="Task-1" />
      <ProfileList events={user} />
      <SectionTitle text="Task-2" />
      <Statistics title="Upload stats" data={data} /> {/*  Добавить ключи */}
      <SectionTitle text="Task-3" />
      <FriendList events={friendlyList} />
    </>
  );
};
