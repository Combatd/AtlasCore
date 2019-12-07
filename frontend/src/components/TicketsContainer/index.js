import React from 'react';
// import { withRouter } from 'react-router-dom';
import TicketBox from '../TicketBox';

class TicketsContainer extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            tickets: [],
            loggedUser: false,
            showAddModal: null,
            showEditModal: null,
            ticketToEdit: {
                title: '',
                closed_date: '',
                updated: '',
                is_open: '',
                text: '',
            }
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

        closeAndEdit = async (e) => {
            e.preventDefault();

            try {
                const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tickets/${this.state.ticketToEdit.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(this.state.ticketToEdit),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });
                
                const editResponseParsed = await editResponse.json();
                const newTicketArrayWithEdit = this.state.tickets.map( (ticket) => {
                    if (ticket.id === editResponseParsed.data.id) {
                        ticket = editResponseParsed.data
                    }
                    return ticket
                });
                this.setState({
                    tickets: newTicketArrayWithEdit,
                    showEditModal: false
                });

            } catch (error) {
                console.log(error)
            }
        }

        openAndEdit = (ticketFromTheList) => {
            this.setState({
                showEditModal: true,
                ticketToEdit: {
                    ...ticketFromTheList
                }
            })
        }

        handleEditChange = (e) => {
            this.setState({
                ticketToEdit: {
                    ...this.state.ticketToEdit,
                    [e.currentTarget.name]: e.currentTarget.value
                }
            });
        }

        showAddModal = () => {
            this.setState({
                showAddModal: true
            })
        }

        // closes all modals
        closeModal = () => {
            this.setState({
                showAddModal: false,
                showEditModal: false
            })
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
                        this.state.tickets.map(ticket => (
                            <TicketBox key={ticket._id} tickets={this.state.tickets} />
                        ))
                    }
                    </div>
                );
             }
        }

}

export default TicketsContainer;