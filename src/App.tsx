import React, { useState } from 'react';
import './App.css';
import './assets/main.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LogInPage from './components/LogInPage';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App(): JSX.Element {
  const [logInPage, setLogInPage] = useState(false);
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <LogInPage setLogInPage={setLogInPage} />
        </Route>
        {logInPage ? (
          <>
            <Route exact path="/main">
              <MainPage />
            </Route>
            <Route exact path="/annoucement">
              <div>annoucement</div>
            </Route>
            <Route exact path="/auctions">
              <div>auctions</div>
            </Route>
            <Route exact path="/auctions/:id">
              <div>auctions/:id</div>
            </Route>
          </>
        ) : (
          <LogInPage setLogInPage={setLogInPage} />
        )}
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
