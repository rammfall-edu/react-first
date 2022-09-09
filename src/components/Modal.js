import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Modal = ({ handleCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Create transaction</h2>
        <div className="buttons">
          <Button
            onClick={handleCloseModal}
            kind="secondary"
          >
            Ok
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
