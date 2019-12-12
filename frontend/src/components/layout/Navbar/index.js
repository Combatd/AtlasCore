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
                    <div className="nav-wrapper grey" >
                        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <div className="container">
                            <a href="#" className="brand-logo">AtlasCore</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/tickets">Tickets</NavLink></li>
                                <li><NavLink to="/users">Users</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li>
                    <div className="user-view">
                            {/* <a href="#user"><img className="circle" src="images/yuna.jpg" /></a> */}
                            {/* <a href="#name"><span className="white-text name">John Doe</span></a> */}
                            {/* <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a> */}
                    </div>
                    </li>
                    {/* <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li> */}
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/tickets">Tickets</NavLink></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">User Stuff</a></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>
                
            </ React.Fragment>
        )
    }

}

export default Navbar;