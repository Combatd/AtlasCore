import React, { Component } from 'react';

// import { Modal } from ../Modal

class AddModal extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            category: '',
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState( [e.currentTarget.name]: e.currentTarget.value )
    }
    

}

export default AddModal;