import React, { Component } from 'react';

import AddModal from '../layout/AddModal';



class TicketShow extends Component {
    constructor(props) {
        super(props)

        this.state = {

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



}

export default TicketShow;