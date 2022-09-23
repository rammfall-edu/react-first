import React, {
  createContext,
  useEffect,
  useState,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApplicationRoutes from './Routes';

export const LangContext = createContext({});
export const ThemeContext = createContext({});

const Providers = () => {
  const [lang, setLang] = useState(
    localStorage.lang || 'en'
  );
  const [theme, setTheme] = useState(
    localStorage.theme || 'light'
  );

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.theme = theme;
  }, [theme]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <ApplicationRoutes />
        </BrowserRouter>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
};

export default Providers;
