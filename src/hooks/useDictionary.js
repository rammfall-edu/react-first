import { useContext } from 'react';
import { LangContext } from '../Providers';
import { dictionary } from '../constants/dictionary';

export const useDictionary = () => {
  const { lang } = useContext(LangContext);

  return (key) => {
    return dictionary[lang][key];
  };
};
