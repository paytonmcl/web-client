import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import LogOut from './pages/LogOut';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/chat/:id" component={Chat} />
      <Route path="/logout" component={LogOut} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
