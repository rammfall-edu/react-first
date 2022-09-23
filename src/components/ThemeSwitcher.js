import React, { useContext } from 'react';
import { ThemeContext } from '../Providers';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const sun = '☼';
  const moon = '☽';

  return (
    <button
      onClick={() => {
        setTheme((prevState) => {
          return prevState === 'dark' ? 'light' : 'dark';
        });
      }}
    >
      {theme === 'dark' ? moon : sun}
    </button>
  );
};

export default ThemeSwitcher;
