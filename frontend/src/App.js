import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import TicketsContainer from './components/TicketsContainer';
import TicketShow from './components/TicketShow';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/tickets" component={TicketsContainer} />
          <Route exact path="/tickets/:id" component={TicketShow} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
