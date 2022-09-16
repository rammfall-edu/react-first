import React, { useEffect, useState } from 'react';

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

export default Header;
