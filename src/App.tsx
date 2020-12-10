import React, { useState } from 'react';
import './App.css';
import './assets/main.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LogInPage from './components/LogInPage';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AnnouncementPage from './components/AnnouncementPage';
import AuctionsPage from './components/AuctionsPage';
import AuctionDetails from './components/AuctionDetails';

function App(): JSX.Element {
  const [logInPage, setLogInPage] = useState(true);
  //CONTROL THE LOGIN
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <LogInPage setLogInPage={setLogInPage} />
        </Route>
        {logInPage ? (
          <>
            <Nav />
            <Route exact path="/main">
              <MainPage />
            </Route>
            <Route exact path="/announcement">
              <AnnouncementPage />
            </Route>
            <Route exact path="/auctions">
              <AuctionsPage />
            </Route>
            <Route exact path="/auctions/:id">
              <AuctionDetails />
            </Route>
            <Route exact path="/collection">
              <div>collection</div>
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
