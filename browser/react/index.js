import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import Album from './containers/Album';
import Albums from './containers/Albums';
import Player from './containers/Player';
import Sidebar from './containers/Sidebar';
import Songs from './containers/Songs';

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app')
);
