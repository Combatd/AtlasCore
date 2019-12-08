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

    componentDidMount() {
        M.AutoInit();
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
                    <form class="col s12">
                        <div class="row">
                        <div class="input-field col s6">
                            <input id="input_text" type="text" data-length="10" />
                            <label for="input_text">Input text</label>
                        </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea2" class="materialize-textarea" data-length="120" />
                            <label for="textarea2">Textarea</label>
                        </div>
                        </div>
                    </form>
                </div>
 
            </React.Fragment>
        )
    }

}

export default AddCommentForm;