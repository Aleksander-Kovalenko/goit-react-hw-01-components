import propTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import { List, Section } from './StatisticsList.styled';

export const StatisticsList = ({ title, data }) => {
  return (
    <Section>
      {title && <h2 className="title">{title}</h2>}

      <List>
        {data.map(element => (
          <Statistics key={element.id} label={element.label} percentage={element.percentage} />
        ))}
      </List>
    </Section>
  );
};

StatisticsList.propTypes = {
  title: propTypes.string,
  data: propTypes.array,
};
