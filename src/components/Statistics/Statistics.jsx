import { InfoList } from 'components/InfoList/InfoList';

export const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {data.map(element => (
          <InfoList item={element} />
        ))}
      </ul>
    </section>
  );
};
