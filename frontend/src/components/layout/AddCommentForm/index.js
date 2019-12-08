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

}