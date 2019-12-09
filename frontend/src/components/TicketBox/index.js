import React, { Component}  from 'react';
import { Link } from 'react-router-dom'
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
                                    <span class="card-title"> {this.props.ticket.title} </span>
                                    <p>
                                        <h4>{this.props.ticket.category}</h4>
                                        <h5>Open Status: {this.props.ticket.is_open}</h5>
                                    </p>
                                </div>
                                <div class="card-action">
                                    <Link to={`/tickets/${this.props.id}`}>Show Ticket</Link>
                                    <a href="#" onClick={ () => this.props.openAndEdit(this.props.ticket) }>Edit Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </React.Fragment>
            )

    }
    

}

export default TicketBox;