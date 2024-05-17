import PropTypes from 'prop-types';

const Display = ({ value }) => {
  return (
    <div>
      {value}
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired
};

export default Display;
