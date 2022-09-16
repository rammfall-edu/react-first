import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Spinner from '../components/Spinner';

const Home = ({ balance, needUpdateBalance }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  function createTransaction(transaction) {
    setTransactions((prevState) => {
      return [...prevState, transaction];
    });
  }

  useEffect(() => {
    fetch(
      'https://bank-api-transactions.herokuapp.com/api/transactions'
    )
      .then((data) => data.json())
      .then((data) => {
        setTransactions(Object.values(data));
        setIsLoading(false);
      });
  }, []);

  const components = transactions.map(
    ({ type, amount, date, description, id }) => {
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
              isSending={type === 'Sending'}
              amount={amount}
              message={description}
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
              setIsOpen(true);
            }}
          >
            New transaction
          </Button>
        </div>
        {isLoading ? <Spinner /> : <ul>{components}</ul>}
      </div>
      {isOpen && (
        <Modal
          needUpdateBalance={needUpdateBalance}
          createTransaction={createTransaction}
          handleCloseModal={closeModal}
          balance={balance}
        />
      )}
    </main>
  );
};

export default Home;
