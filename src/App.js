import React from 'react';
import Main from './Main';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Redirect exact from="/ucoz-test/" to="/ucoz-test/1" />
        <Route path="/ucoz-test/:id" component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
