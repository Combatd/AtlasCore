import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

import M from 'materialize-css/dist/js/materialize.min.js';

class Navbar extends Component {
    constructor() {
        super();

        this.state = {

        }
    }


    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
    }


    render() {
        return (
            <React.Fragment>

                <nav>
                    <div class="nav-wrapper blue" >
                        <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                        <div className="container">
                            <a href="#" class="brand-logo">Logo</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/tickets">Tickets</NavLink></li>
                                <li><NavLink to="/users">Users</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul id="slide-out" class="sidenav">
                    <li>
                    <div class="user-view">
                        <div class="background">
                            <img src="images/office.jpg" />
                        </div>
                            <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
                            <a href="#name"><span class="white-text name">John Doe</span></a>
                            <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                    </li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><NavLink to="/tickets">Tickets</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">User Stuff</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                
            </ React.Fragment>
        )
    }

}

export default Navbar;