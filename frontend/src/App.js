import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import TicketsContainer from './components/TicketsContainer';
import TicketBox from './components/TicketBox';
import TicketShow from './components/TicketShow';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/tickets" component={TicketsContainer} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
