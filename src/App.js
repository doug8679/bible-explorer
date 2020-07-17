import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <HomePage />
    </div>
  );
}

export default App;
