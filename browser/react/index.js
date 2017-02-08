import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import Album from './components/Album';
import Albums from './components/Albums';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';

// ReactDOM.render(
//   <AppContainer />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path='/' component={AppContainer} />
  </Router>,
  document.getElementById('app')
);
