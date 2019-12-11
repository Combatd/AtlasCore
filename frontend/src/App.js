import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import TicketsContainer from './components/TicketsContainer';
import TicketShow from './components/TicketShow';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/tickets" component={TicketsContainer} />
          <Route exact path="/tickets/:id" component={TicketShow} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
