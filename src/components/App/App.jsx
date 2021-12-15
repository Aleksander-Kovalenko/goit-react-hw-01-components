import { ProfileList } from 'components/ProfileList/ProfileList';
import user from '../../user.json';

export const App = () => {
  return (
    <>
      <ProfileList events={user} />
    </>
  );
};
