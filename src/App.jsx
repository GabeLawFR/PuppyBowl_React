import React from 'react';
import { useState } from 'react';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  // handleSearch placed here to pass down prop to Navbar, and assure continuity of prop
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query)
  };

  return (
      <div>
        <NavBar onSearch={handleSearch} />
        <MainContainer searchQuery={searchQuery}/>
        <Footer />
      </div>
  );
}

export default App
