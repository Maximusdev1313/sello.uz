// src/App.js
import React from 'react';
import './assets/App.css';
import AppRoutes from './routes/clientRoutes'; // Import your routes
import Header from './components/header';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
        <Header />
      </Navbar>
      <div className='container'>

        <AppRoutes />
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default App;
