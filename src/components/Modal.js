import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Modal = ({
  handleCloseModal,
  createTransaction,
  balance,
  needUpdateBalance,
}) => {
  const [message, setMessage] = useState('');

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Create transaction</h2>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            const body = new FormData(event.target);
            const amount = body.get('amount');
            const type = body.get('type');

            if (type === 'Sending' && +amount > +balance) {
              setMessage('You dont have money');

              return;
            }

            setMessage('');

            fetch(
              'https://bank-api-transactions.herokuapp.com/api/transactions',
              {
                body,
                method: 'POST',
              }
            )
              .then((data) => data.json())
              .then((data) => {
                needUpdateBalance();
                createTransaction(data);
                handleCloseModal();
              });
          }}
        >
          {message && <p>{message}</p>}
          <select name="type">
            <option>Receiving</option>
            <option>Sending</option>
          </select>
          <input
            type="text"
            name="description"
            placeholder="Enter description"
          />
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
          />
          <div className="buttons">
            <Button type="submit" kind="secondary">
              Ok
            </Button>
            <Button onClick={handleCloseModal}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
