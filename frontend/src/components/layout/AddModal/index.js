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
        return(
            <React.Fragment>
            
                    
                <div id="modal1" class="modal">
                    <h5 class="modal-close">&#10005;</h5>
                        <div class="modal-content center">
                            <h4>Login Form</h4>
                            <br />

                            <form action="#">

                            <div class="input-field">
                                <i class="material-icons prefix">person</i>
                                <input type="text" id="name" />
                                <label for="name">Username</label>
                            </div>
                            <br />

                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="pass" />
                                <label for="pass">Password</label>
                            </div>
                            <br />

                            <div class="left" style="margin-left:20px;">
                                <input type="checkbox" id="check" />
                                <label for="check">Remember Me</label>
                            </div>
                            <br />
                            
                            <input type="submit" value="Login" class="btn btn-large" />
                            
                            </form>
                        </div>
                    
                    
                </div>

            </React.Fragment>
        )
    }

}

export default AddModal;