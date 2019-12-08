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
        const { ticket } = this.props;

            return (
                <React.Fragment>
                    <div class="row">
                        <div class="col s12 m6">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title"> {ticket.title} </span>
                                    <p>
                                        <h4>{ticket.category}</h4>
                                        <h5>Open Status: {ticket.is_open}</h5>
                                    </p>
                                </div>
                                <div class="card-action">
                                    <a href="#">Show Ticket</a>
                                    <a onClick={}>Edit Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </React.Fragment>
            )

    }
    

}

export default TicketBox;