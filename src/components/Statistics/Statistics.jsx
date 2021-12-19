import propTypes from 'prop-types';

export const Statistics = ({ id, label, percentage }) => {
  return (
    <li key={id}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
};

Statistics.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
};
