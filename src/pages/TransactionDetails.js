import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const TransactionDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [transaction, setTransaction] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(
      `https://bank-api-transactions.herokuapp.com/api/transaction/${id}`
    )
      .then((data) => {
        if (data.status === 404) {
          throw new Error('Not found');
        }
        return data.json();
      })
      .then((data) => {
        setTransaction(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <Card
        message={transaction.description}
        amount={transaction.amount}
        isSending={transaction.type === 'Sending'}
        date={transaction.date}
      />
    </div>
  );
};

export default TransactionDetails;
