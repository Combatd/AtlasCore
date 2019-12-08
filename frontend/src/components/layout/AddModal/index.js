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
    
    render() {
        const [title, category, text] = this.state;
        const [closeAndAdd] = this.props;
        
        return(
            <React.Fragment>
            
                    
                <div id="modal1" class="modal">
                    <h5 class="modal-close">&#10005;</h5>
                        <div class="modal-content center">
                            <h4>Login Form</h4>
                            <br />

                            <form onSubmit={e => closeAndAdd(e, this.state)}>

                            <div class="input-field">
                                <i class="material-icons prefix">person</i>
                                <input type="text" id="title" name="title" value={title} onChange={this.handleChange} />
                                <label for="title">Title</label>
                            </div>
                            <br />

                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <p>
                                    <label for="Computer">
                                        <input id="Computer" class="with-gap" name="category" type="radio" checked />
                                        <span>Computer</span>
                                    </label>
                                </p>
                                <p>
                                    <label for="Phone">
                                        <input id="Phone" class="with-gap" name="categpry" type="radio" />
                                        <span>Phone</span>
                                    </label>
                                </p>
                                <p>
                                    <label for="Other">
                                        <input id="Other" class="with-gap" name="category" type="radio" />
                                        <span>Other</span>
                                    </label>
                                </p>
                                

                            </div>
                            <br />

                            <div class="input-field">
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea id="text" name="text" value={text} onChange={this.handleChange} />
                                <label for="text">Text</label>
                            </div>
                            
                            <input type="submit" value="Login" class="btn btn-large" />
                            
                            </form>
                        </div>
                    
                    
                </div>

            </React.Fragment>
        )
    }

}

export default AddModal;