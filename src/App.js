import React from 'react';
import './App.css';
import Palette from './components/Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import {Route, Switch} from 'react-router-dom';

function App() {
  console.log(generatePalette(seedColors[2]))
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>}/>
      <Route exact path="/palette/:id" render={() => <h1>Individula components</h1>} />
    </Switch>
    // <div>
    //  <Palette palette={generatePalette(seedColors[2])} />
    // </div>
  );
}

export default App;
