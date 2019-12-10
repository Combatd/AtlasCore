import React, { Component } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

class AddCommentForm extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            text:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    render() {
        return(
            <React.Fragment>
                <div class="row">
                    <form onSubmit={(e) => this.props.closeAndAdd(e, this.state)} >
                        <label>Comment Title</label>
                        <input type="text" name="title" value={this.state.title} placeholder="Comment Title" onChange={this.handleChange} />
                        <label>Text: </label>
                        <input type="textarea" name="text" value={this.state.text} placeholder="Lorem Ipsum Bacon Ipsum Ham Ipsum Grass Fed Ipsum" onChange={this.handleChange} />

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