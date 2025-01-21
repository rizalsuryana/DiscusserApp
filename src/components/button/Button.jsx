import React from 'react';
import PropTypes from 'prop-types';

const Button = (attributes) => {
  const { type, children, className } = attributes;

  return (
    <button className={className} type={type === 'submit' ? 'submit' : 'button'} >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  children: '',
  className: '',
};

export default Button;