import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
