import React, { useState } from 'react';

import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';
import Modal from './components/Modal';

const Application = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const data = [
    {
      message: 'Top up balance',
      amount: 20,
      date: '2021-01-01',
      id: 1,
      isSending: true,
    },
    {
      message: 'Credit',
      amount: 654,
      date: '2021-01-01',
      id: 2,
    },
    {
      message: 'Pay for fee',
      amount: 621,
      date: '2021-01-01',
      id: 3,
    },
    {
      message: 'Sending to Yura',
      amount: 865,
      date: '2021-01-01',
      id: 4,
    },
    {
      message: 'Pay for education',
      amount: 9,
      date: '2021-01-01',
      id: 5,
      isSending: true,
    },
  ];

  const components = data.map(
    ({ isSending, amount, date, message, id }) => {
      return (
        <Card
          key={id}
          date={date}
          isSending={isSending}
          amount={amount}
          message={message}
        />
      );
    }
  );

  return (
    <main>
      <Header balance={120} />
      <div className="container">
        <div className="row">
          <h1>Transactions:</h1>
          <Button onClick={() => setIsOpen(true)}>
            New transaction
          </Button>
        </div>
        <ul>{components}</ul>
      </div>
      {isOpen && <Modal handleCloseModal={closeModal} />}
    </main>
  );
};

export default Application;
