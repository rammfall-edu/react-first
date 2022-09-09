import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, type, kind, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', {
        'button--primary': kind === 'primary',
        'button--secondary': kind === 'secondary',
      })}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  kind: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  kind: 'primary',
};

export default Button;
