import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ textHead, textBody }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBody = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="accordion">
      <div className="accordion__head" onClick={toggleBody}>
        {textHead}
      </div>
      {isOpen && (
        <div className="accordion__body">{textBody}</div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  textHead: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
};

export default Accordion;
