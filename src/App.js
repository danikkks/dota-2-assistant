import React from 'react'
import './App.css';
import { Router } from './components/Router';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
