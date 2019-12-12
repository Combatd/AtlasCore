import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

import M from 'materialize-css/dist/js/materialize.min.js';

class HomePage extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return(
           <div>
    
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br/><br/>
        <h1 class="header center grey-text">AtlasCore</h1>
        <div class="row center">
          <h5 class="header col s12 light">For your Information Technology Needs</h5>
        </div>
        <div class="row center">
          <NavLink to="/tickets" id="download-button" class="btn-large waves-effect waves-light blue">Tickets</NavLink>
        </div>
        <br/><br/>
      </div>
    </div>
    <div class="container">
      <div class="section">
       
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
              <h5 class="center">Charge-on</h5>
              <p class="light">Power up your productivity with Technology</p>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
              <h5 class="center">Stay Connected</h5>
              <p class="light">Help is a Support Ticket or Email away</p>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
              <h5 class="center">Extend</h5>
              <p class="light">IT Support Plans for Peace of Mind</p>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <div class="section">
      </div>
    </div>
    <footer class="page-footer blue-grey">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Need Assistance?</h5>
                    <p class="grey-text text-lighten-4">Create a <NavLink to="/tickets">Ticket</NavLink> at any time of day or night.</p>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Navigation</h5>
            <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/tickets">Tickets</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
            </ul>
          </div>
         
        </div>
      </div>
      
    </footer>
    
    
  </div>



        )
    }
}

export default HomePage;