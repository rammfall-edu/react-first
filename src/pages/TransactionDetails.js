import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../constants';
import Card from '../components/Card';

const TransactionDetails = () => {
  const { id } = useParams();

  const transaction = data.find((item) => item.id === +id);

  if (!transaction) {
    return <h1 className="container">Not found</h1>;
  }

  return (
    <div className="container">
      <Card {...transaction} />
    </div>
  );
};

export default TransactionDetails;
