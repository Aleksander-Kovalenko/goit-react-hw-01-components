import propTypes from 'prop-types';

export const SectionTitle = ({ text }) => {
  return <h1>{text}</h1>;
};

SectionTitle.propTypes = {
  text: propTypes.string,
};
