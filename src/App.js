import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" component="" />
      </Routes>
    </>
  );
}
