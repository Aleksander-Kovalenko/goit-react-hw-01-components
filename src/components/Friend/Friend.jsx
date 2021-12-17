export const Friend = ({ id, isOnline, avatar, name }) => {
  console.log(name);
  return (
    <li key={id}>
      <span isOnline={isOnline}>{isOnline}</span>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </li>
  );
};
