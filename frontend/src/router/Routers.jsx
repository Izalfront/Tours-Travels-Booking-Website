import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

//import pages component from './pages
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Tours from './../pages/Tours';
import SearchResultList from './../pages/SearchResultList';
import TourDetail from './../pages/TourDetail';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
