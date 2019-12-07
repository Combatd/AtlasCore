import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';

import TicketsContainer from './components/TicketsContainer';
import TicketBox from './components/TicketBox';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      This is the App.js
    </div>
  );
}

export default App;
