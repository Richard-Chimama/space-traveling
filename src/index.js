import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
        Switch,
        Route} from "react-router-dom";

import DestinationMoon from "../src/controller/destinationMoon.js";
import CrewCommander from "../src/controller/crew-commander.js";
import Technology from "../src/controller/technology.js";
import DesignSystem from './controller/designSystem.js';
import App from './controller/app';
import './index.css';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Router>
    <Switch> 
    <Route path="/technology">
        <Technology />
      </Route> 
    <Route path="/crew-commander">
        <CrewCommander />
      </Route> 
    <Route path="/destination-moon">
        <DestinationMoon />
      </Route> 
      <Route path="/design-system">
        <DesignSystem />
      </Route> 
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

