import PropTypes from 'prop-types';

function Alert({text,color}) {

    return (
      <>
      <div className={`alert ${color}`}>{text}</div>
      </>
    )
  }

  Alert.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  export default Alert