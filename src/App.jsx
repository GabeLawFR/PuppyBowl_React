import React from 'react';
import { useState } from 'react';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  

  return (
    <div className='main-container'>
      <NavBar />
      <MainContainer />
    </div>
  );
}

export default App
