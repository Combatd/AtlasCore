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
            this.props.getTickets()
        }

        getTickets = async () => {
            try {
                const tickets = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tickets/`, {
                    credentials: 'include',
                    method: 'Get',
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })

                const ticketsJson = await tickets.json();
                this.setState({
                    tickets: ticketsJson.data
                });


            } catch (error) {
                console.log(error);
            }
        }

        closeAndAdd = async (e, ticket) => {
            e.preventDefault();

            try {
                
                const createdTicketResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tickets`, {
                    credentials: 'include',
                    method: 'POST',
                    body: JSON.stringify(ticket),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            } catch (error) {
                console.log(error);
            }

        }

        deleteTicket = async (id) => {
            const deleteTicketResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tickets/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const deleteTicketParsed = deleteTicketResponse.json();
            // after removing from db, remove ticket from state
            this.setState({
                tickets: this.state.tickets.filter( (ticket) => ticket.id !== id)
            });

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