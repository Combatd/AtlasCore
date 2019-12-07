import React, { Component}  from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

class TicketBox extends Component  {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }



    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Card Title</span>
                                <p>{this.props.text}</p>
                            </div>
                            <div class="card-action">
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
    

}

export default TicketBox;