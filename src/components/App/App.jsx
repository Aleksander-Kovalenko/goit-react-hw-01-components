import { SectionTitle } from 'components/SectionTitle/SectionTitle.jsx';
import { ProfileList } from 'components/ProfileList/ProfileList';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';

import user from '../../user.json';
import data from '../../data.json';
import friendlyList from '../../friends.json';
import transactions from '../../transactions.json';

export const App = () => {
  return (
    <>
      <SectionTitle text="Task-1" />
      <ProfileList events={user} />
      <SectionTitle text="Task-2" />
      <StatisticsList data={data} title="Upload stats" />
      <SectionTitle text="Task-3" />
      <FriendList events={friendlyList} />
      <SectionTitle text="Task-4" />
      <Transactions events={transactions} />
    </>
  );
};
