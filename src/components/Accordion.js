import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useToggler } from '../hooks/useToggler';

const Accordion = ({ textHead, textBody }) => {
  const { isOpen, toggleOpen } = useToggler();

  return (
    <div className="accordion">
      <div className="accordion__head" onClick={toggleOpen}>
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
