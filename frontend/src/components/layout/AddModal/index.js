import React, { Component } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

class AddModal extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            category: '',
            text: ''
        }
    }

    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });

        // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
        // var collapsibleElem = document.querySelector('.collapsible');
        // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
    }

    handleChange = (e) => {
        this.setState({ 
            [e.currentTarget.name]: e.currentTarget.value 
        })
    }
    
    render() {
        // const [title, category, text] = this.state;
        // const [closeAndAdd] = this.props;
        
        return(
            <React.Fragment>
            
                    
                <div id="modal1" className="modal" style={{'display': this.props.showAddModal ? "block" : null}}>
                    <h5 className="modal-close" onClick={this.props.closeModal}>&#10005;</h5>
                        <div className="modal-content center">
                            <h4>Add Ticket</h4>
                            <br />

                            <form onSubmit={e => this.props.closeAndAdd(e, this.state)}>

                            <div className="input-field">
                                <i className="material-icons prefix">person</i>
                                <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
                                <label htmlFor="title">Title</label>
                            </div>
                            <br />
                            <h6>Select Category</h6>
                            <div className="input-field">
                                
                                <p>
                                    <label htmlFor="computer">
                                        <input id="computer" value={this.state.category} className="with-gap" name="category" type="radio" />
                                        <span>Computer</span>
                                    </label>
                                </p>
                                <p>
                                    <label htmlFor="phone">
                                        <input id="phone" value={this.state.category} className="with-gap" name="category" type="radio" />
                                        <span>Phone</span>
                                    </label>
                                </p>
                                <p>
                                    <label htmlFor="other">
                                        <input id="other" value={this.state.category} className="with-gap" name="category" type="radio" />
                                        <span>Other</span>
                                    </label>
                                </p>
                                

                            </div>
                            <br />
                            
                            <h6>Describe the Problem</h6>
                            <div className="input-field">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="text" name="text" value={this.state.text} onChange={this.handleChange} />
                                <label htmlFor="text">Text</label>
                            </div>
                            
                            <input type="submit" value="Login" className="btn btn-large" />
                            
                            </form>
                        </div>
                    
                    
                </div>

            </React.Fragment>
        )
    }

}

export default AddModal;