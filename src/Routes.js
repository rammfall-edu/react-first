import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import TransactionDetails from './pages/TransactionDetails';
import Hooks from './pages/Hooks';
import Calculator from './pages/Calculator';

const ApplicationRoutes = () => {
  const [balance, setBalance] = useState(0);
  const [isTransactionCreated, setIsTransactionCreated] =
    useState(false);

  const needUpdateBalance = () =>
    setIsTransactionCreated((prevState) => !prevState);

  useEffect(() => {
    fetch(
      'https://bank-api-transactions.herokuapp.com/api/account'
    )
      .then((data) => data.json())
      .then((data) => setBalance(data.account));
  }, [isTransactionCreated]);

  return (
    <div className="wrapper">
      <Header balance={balance} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              balance={balance}
              needUpdateBalance={needUpdateBalance}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/transaction/:id"
          element={<TransactionDetails />}
        />
        <Route path="/hook" element={<Hooks />} />
        <Route
          path="/calculator"
          element={<Calculator />}
        />
      </Routes>
    </div>
  );
};

export default ApplicationRoutes;
