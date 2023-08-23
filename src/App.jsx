import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App
