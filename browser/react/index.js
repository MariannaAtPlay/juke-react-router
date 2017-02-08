import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Album from './components/Album';
import Albums from './components/Albums';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';

// ReactDOM.render(
//   <AppContainer />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRedirect to="/albums" />
      <Route path='albums' component={Albums} />
      <Route path="albums/:albumId" component={Album} />
      <Route path='artists' component={Artists} />
      <Route path="artists/:artistId" component={Artist} />
    </Route>
  </Router>,
  document.getElementById('app')
);
