import React, { Component } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

class AddCommentForm extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            text: '',
            ticketId: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    addComment = async (e) => {
        e.preventDefault()
        const createdComment = await fetch(`/api/v1/tickets/${this.props.ticketId}/comments`, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    render() {
        return(
            <React.Fragment>
                <div class="row">
                    <form onSubmit={(e) => this.addComment(e)} >
                        <label>Comment Title</label>
                        <input type="text" name="title" value={this.state.title} placeholder="Comment Title" onChange={this.handleChange} />
                        <label>Text: </label>
                        <input type="text" name="text" value={this.state.text} placeholder="Lorem Ipsum Bacon Ipsum Ham Ipsum Grass Fed Ipsum" onChange={this.handleChange} />
                        <input type="text" name="ticketId" value={this.props.ticketId} hidden />

                        <footer>
                            <input type="submit" value="Submit" />
                        </footer>
                    </form>
                </div>
 
            </React.Fragment>
        )
    }

}

export default AddCommentForm;