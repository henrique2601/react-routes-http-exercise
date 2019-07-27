import React from 'react';
import {
  BrowserRouter,
  Switch,
  Routes
} from 'react-router-dom';

import UserList from './pages/user-list';
import UserDetail from './pages/user-detail';

const Routes = () => {
  <BrowserRouter>
    <Switch>
      <Route path="/users/" component={UserList} />
      <Route path="/users/:id" component={UserDetail} />
    </Switch>
  </BrowserRouter>
}