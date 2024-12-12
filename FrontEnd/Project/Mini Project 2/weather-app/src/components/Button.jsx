
import PropTypes from 'prop-types';

const Button = ({ value = 'Click Me', onClick }) => {
  return (
    <div className='container mx-auto max-w-sm text-center'>
      <button className='bg-slate-300 text-center ' onClick={onClick}>{value}</button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;

