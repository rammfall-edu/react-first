import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import { Link } from 'react-router-dom';
import { LangContext } from '../Providers';
import LangSwitcher from './LangSwitcher';
import { dictionary } from '../constants/dictionary';
import { useDictionary } from '../hooks/useDictionary';
import ThemeSwitcher from './ThemeSwitcher';
import { useToggler } from '../hooks/useToggler';

const Header = ({ balance }) => {
  const translate = useDictionary();
  const { isOpen, toggleOpen } = useToggler(
    !!localStorage.isOpen
  );

  useEffect(() => {
    if (isOpen) {
      localStorage.isOpen = isOpen;
    } else {
      delete localStorage.isOpen;
    }
  }, [isOpen]);

  return (
    <header>
      <div className="container">
        <a href="" className="logo">
          BankID
        </a>
        <button onClick={toggleOpen}>🍔</button>
        {isOpen && (
          <>
            <p>
              {translate('header.balance')}: ${balance}
            </p>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    {translate('header.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    {translate('header.contact')}
                  </Link>
                </li>
              </ul>
            </nav>
            <LangSwitcher />
            <ThemeSwitcher />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
