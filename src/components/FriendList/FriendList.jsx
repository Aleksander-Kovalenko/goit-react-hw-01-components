import { Friend } from '../Friend/Friend';
export const FriendList = ({ events }) => {
  return (
    <ul>
      {events.map(item => {
        console.log(item.id);
        <Friend id={item.id} isOnLine={item.isOnLine} avatar={item.avatar} name={item.name} />;
      })}
    </ul>
  );
};
