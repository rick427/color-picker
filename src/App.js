import React from 'react';
import './App.css';
import Palette from './components/Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
     <Palette {...seedColors} />
    </div>
  );
}

export default App;
