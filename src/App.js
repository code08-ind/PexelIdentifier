import React from 'react';
import About from './About';
import Error from './Error';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/identify" component={About} />
        <Route path="/*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
