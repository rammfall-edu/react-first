import React, { useContext } from 'react';
import { LangContext } from '../Providers';
import { useDictionary } from '../hooks/useDictionary';

const LangSwitcher = () => {
  const { lang, setLang } = useContext(LangContext);
  const translate = useDictionary();

  return (
    <select
      defaultValue={lang}
      onChange={({ target: { value } }) => {
        setLang(value);
        localStorage.lang = value;
      }}
    >
      <option value="ua">
        {translate('lang.switcher.ua')}
      </option>
      <option value="en">
        {translate('lang.switcher.en')}
      </option>
    </select>
  );
};

export default LangSwitcher;
