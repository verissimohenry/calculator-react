import React from 'react';
import Display from '../components/Display.js';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
        <Display />
        <ButtonPanel />
    </div>  
  );
}

export default App;
