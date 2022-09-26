import React from 'react';
import AppRouter from './AppRouter';
import NavBar from './Components/Layout/NavBar.js';

import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='container'>
        <NavBar/>
        <div className='container'>
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;