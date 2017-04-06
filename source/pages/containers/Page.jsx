import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Error404 from './Error404';
import Header from '../../shared/components/Header';

function Pages() {
  return (
    <main role="application">
      <Header />
      <Switch>
        {/* List of products */}
        <Route
          path="/"
          exact
          component={Home}
        />
        {/* product detail */}
        <Route
          path="/post/:id"
          exact
          component={Post}
        />
        {/* user profile */}
        <Route
          path="/user/:id"
          exact
          component={Profile}
        />
        {/* 404 */}
        <Route component={Error404} />
      </Switch>
    </main>
  );
}

export default Pages;
