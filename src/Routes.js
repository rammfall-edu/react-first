import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import TransactionDetails from './pages/TransactionDetails';
import Hooks from './pages/Hooks';

const ApplicationRoutes = () => {
  return (
    <div className="wrapper">
      <Header balance={120} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/transaction/:id"
          element={<TransactionDetails />}
        />
        <Route path="/hook" element={<Hooks />} />
      </Routes>
    </div>
  );
};

export default ApplicationRoutes;
