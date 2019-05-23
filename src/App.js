import React, {Component} from 'react';
import './App.css';
import Palette from './components/Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import {Route, Switch} from 'react-router-dom';

class App extends Component() {

  findPalette(id) {
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render(){
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette list goes here</h1>}/>
        <Route 
           exact path="/palette/:id" 
           render={routeProps => <Palette palette ={generatePalette(this.findPalette(routeProps.match.params.id))}/>} />
      </Switch>
      // <div>
      //  <Palette palette={generatePalette(seedColors[2])} />
      // </div>
    );
  }
}

export default App;
