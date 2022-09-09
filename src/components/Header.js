import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ balance }) => {
  return (
    <header>
      <div className="container">
        <a href="" className="logo">
          BankID
        </a>
        <p>Balance: ${balance}</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Header;
