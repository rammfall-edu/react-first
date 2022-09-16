import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Header = ({ balance }) => {
  return (
    <header>
      <div className="container">
        <a href="" className="logo">
          BankID
        </a>
        <p>Balance: ${balance}</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Header;
