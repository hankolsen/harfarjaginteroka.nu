import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router';
import Home from './containers/Home';
import Trainstation from './containers/Trainstation';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/train-station" component={Trainstation} />
      {/*<Route path="/topics" component={Topics} />*/}
    </Router>
  );
}

export default App;
