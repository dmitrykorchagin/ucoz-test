import React from 'react';
import Main from './Main';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Redirect exact from="/" to="/1" />
        <Route path="/:id" component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
