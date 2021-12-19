import propTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';

export const StatisticsList = ({ title, data }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {data.map(element => (
          <Statistics key={element.id} label={element.label} percentage={element.percentage} />
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  title: propTypes.string,
  data: propTypes.array,
};
