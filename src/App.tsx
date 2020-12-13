import React from 'react';
import './App.css';
import './assets/main.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LogInPage from './components/Pages/LogIn/LogInPage';
import MainPage from './components/Pages/Main/MainPage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AnnouncementPage from './components/Pages/Announcement/AnnouncementPage';
import AuctionsPage from './components/Pages/Auctions/AuctionsPage';
import ItemDetails from './components/Helpers/ItemDetails';
import CollectionPage from './components/Pages/Collection/CollectionPage';

function App(): JSX.Element {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LogInPage} />
        {localStorage.getItem('login') === 'true' ? (
          <>
            <Nav />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/announcement" component={AnnouncementPage} />
            <Route exact path="/auctions" component={AuctionsPage} />
            <Route exact path="/auctions/:id" component={ItemDetails} />
            <Route exact path="/collection" component={CollectionPage} />
            <Route exact path="/collection/:id" component={ItemDetails} />
          </>
        ) : (
          <Route path="/" component={LogInPage} />
        )}
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
