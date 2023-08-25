import React from 'react';
import { useState } from 'react';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  // handleSearch placed here to pass down prop to 
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query)
  };

  return (
    <div className='main-container'>
      <NavBar onSearch={handleSearch} />
      <MainContainer searchQuery={searchQuery}/>
    </div>
  );
}

export default App
