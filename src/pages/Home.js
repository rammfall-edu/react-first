import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { data } from '../constants';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState(data);

  function closeModal() {
    setIsOpen(false);
  }

  const components = transactions.map(
    ({ isSending, amount, date, message, id }) => {
      const handleDelete = () => {
        setTransactions((prevState) => {
          return prevState.filter(
            (transaction) => transaction.id !== id
          );
        });
      };

      return (
        <div key={id}>
          <Link to={`/transaction/${id}`}>
            <Card
              date={date}
              isSending={isSending}
              amount={amount}
              message={message}
            />
          </Link>
          <button onClick={handleDelete}>x</button>
        </div>
      );
    }
  );

  return (
    <main>
      <div className="container">
        <div className="row">
          <h1>Transactions:</h1>
          <Button
            onClick={() => {
              setTransactions((prevState) => {
                const transaction = {
                  isSending: false,
                  amount: 452,
                  date: '2030-09-45',
                  message: 'Top up money',
                  id: Math.random(),
                };
                return [transaction, ...prevState];
              });
            }}
          >
            New transaction
          </Button>
        </div>
        <ul>{components}</ul>
      </div>
      {isOpen && <Modal handleCloseModal={closeModal} />}
    </main>
  );
};

export default Home;
