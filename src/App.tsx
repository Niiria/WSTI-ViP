import React, { useState } from 'react';
import './App.css';
import './assets/main.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>Setup</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
