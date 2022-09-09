import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({
  date,
  message,
  amount,
  isSending = false,
}) => {
  return (
    <li
      className={classNames('card', {
        'card--sending': isSending,
        'card--receiving': !isSending,
      })}
    >
      <p className="date">{date}</p>
      <p className="message">{message}</p>
      <p className="amount">${amount}</p>
    </li>
  );
};

Card.propTypes = {
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  isSending: PropTypes.bool,
};

export default Card;
