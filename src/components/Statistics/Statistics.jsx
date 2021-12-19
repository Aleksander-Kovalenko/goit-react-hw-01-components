import propTypes from 'prop-types';

import { ItemHistory, Label } from './Statistics.styled';

export const Statistics = ({ id, label, percentage }) => {
  return (
    <ItemHistory key={id}>
      <Label>{label}</Label>
      <span>{percentage}</span>
    </ItemHistory>
  );
};

Statistics.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
};
