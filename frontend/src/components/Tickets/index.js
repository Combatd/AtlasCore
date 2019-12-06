import React from 'react';
import { withRouter } from 'react-router-dom';
import TicketBox from '../TicketBox';

class Ticket extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            tickets: []
        }
    }

        componentWillMount() {
            this.props.fetchTickets()
        }

        // uplift state with new tickets
        componentWillReceiveProps(newState) {
            this.setState( { tickets: newState.tickets } )
        }

        render() {
            if (this.state.tickets.length === 0) {
                return(
                    <div>
                        There are currently no tickets!
                    </div>
                )
            } else {
                return (
                    <div>
                    <h2>All Tickets</h2>
                    {
                        this.state.tickets.map(tweet => (
                            <TicketBox key={tweet._id} text={tweet.text} />
                        ))
                    }
                    </div>
                );
             }
        }

}

export default withRouter(Ticket);