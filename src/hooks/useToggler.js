import { useState } from 'react';

export const useToggler = (opened = false) => {
  const [isOpen, setIsOpen] = useState(opened);
  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return {
    isOpen,
    toggleOpen,
  };
};
