// const values =
const keys = item => Object.keys(item);
const values = item => Object.values(item);
export const InfoList = ({ item }) => {
  const title = keys(item);
  const value = values(item);
  return (
    <li key={value.id} className="item">
      <span className="label">{value[1]}</span>
      <span className="percentage">{value[2]}</span>
    </li>
  );
};
