import React, { Component } from 'react';

import AddCommentForm from '../layout/AddCommentForm';
// import EditModal from '../layout/EditModal';


class TicketShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ticket: {},
            showEditModal: null,
            comments: []
        }
    }

    componentDidMount() {
        this.getTicket();
    }


    getTicket = async () => {
        // const params = this.props.match.params;
        const ticketId = this.props.match.params.id;
        console.log(ticketId);
        try {
            const ticket = await fetch(`/api/v1/tickets/${ticketId}`, {
                credentials: 'include',
                method: 'Get',
                header: {
                'Content-Type': 'application/json'
                }
            });
            const ticketJson = await ticket.json();
            console.log(ticketJson);
            this.setState({
                ticket: ticketJson,
                comments: ticketJson.comments
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
        // const [ticket] = this.state;
        // const [comments] = this.state.ticket.comments;

        return(
            <React.Fragment>
                <h1>{this.state.ticket.title}</h1>
                <h2>Category: {this.state.ticket.category}</h2>
                <h4>Creation Date: {this.state.ticket.created_at}</h4>
                <p>{this.state.ticket.text}</p>
                <div class="container">
                <AddCommentForm ticketId={this.state.ticket._id} />
                </div>
                <br/>
                <div class="container"> 
                    <h5>Comments <i class="small material-icons">chat_bubble</i></h5> 
                    <ul>

                        {
                            this.state.comments.map((comment) => {
                                return (<li>

                                    <div class="row">
                                        <div class="col s12 m8">
                                            <div class="card blue darken-1">
                                                <div class="card-content white-text">
                                                    <span class="card-title">{comment.title}</span>
                                                    <p>{comment.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>

                                )
                            })
                        }
                    </ul>
                </div>

            </React.Fragment>
        )
    }



}

export default TicketShow;