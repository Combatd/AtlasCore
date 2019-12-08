import React, { Component } from 'react';

import AddCommentForm from '../layout/AddCommentForm';
// import EditModal from '../layout/EditModal';


class TicketShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ticket: {},
            showEditModal: null

        }
    }

    componentDidMount() {
        this.getTicket();
    }


    getTicket = async () => {
        const [params] = this.props.match.params;
        const ticketId = params.id;

        try {
            const ticket = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tickets/${ticketId}`, {
                credentials: 'include',
                method: 'Get',
                'Content-Type': 'application/json'
            });
            const ticketJson = await ticket.json();
            console.log(ticketJson);
            this.setState({
                ticket: ticketJson.data.ticket,
                comments: ticketJson.data.comments
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   

    render() {
        const [ticket] = this.state;
        const [comments] = this.state.ticket.comments;

        return(
            <React.Fragment>
                <h1>{ticket.title}</h1>
                <h2>Category: {ticket.category}</h2>
                <h4>Creation Date: {ticket.created_at}</h4>
            </React.Fragment>
        )
    }



}

export default TicketShow;