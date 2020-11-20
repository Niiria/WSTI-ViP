import React from 'react';
import './App.css';
import './assets/main.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <div className="flex justify-center bg-red-600"> First page</div>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
