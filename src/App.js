// src/App.js
import React from 'react';
import './assets/App.css';
import AppRoutes from './routes/clientRoutes'; // Import your routes
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <AppRoutes />
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
