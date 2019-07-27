import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import UserList from './pages/user-list';
import UserDetail from './pages/user-detail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route path="/users/:id" component={UserDetail} />
    </Switch>
  </BrowserRouter>
)

export default Routes;