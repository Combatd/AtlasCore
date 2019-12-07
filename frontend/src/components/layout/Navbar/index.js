import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <React.Fragment>

                <nav>
                    <div class="nav-wrapper blue" >
                        <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                        <div className="container">
                            <a href="#" class="brand-logo">Logo</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><a href="sass.html">Sass</a></li>
                                <li><a href="badges.html">Components</a></li>
                                <li><a href="collapsible.html">JavaScript</a></li>
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

                </ul>
                
            </ React.Fragment>
        )
    }

}

export default Navbar;