import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor() {
        super();

        this.state = {
            fullName: '',
            email: '',
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const registerResponse = await fetch(`api/v1/users/register`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();
        if (parsedResponse.status.message === 'Success, user is registered') {
            console.log('success login')
            this.props.closeAndLogUser(parsedResponse.data)
        }
    }
    
    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">

                        <br />
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text"
                            name="fullName"
                            value={this.state.fullName}
                            onChange={this.handleChange}
                            placeholder="John Doe"
                        />
                        <br />
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="email@example.com"
                        />
                        <br />
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Username"
                        />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password"
                        />
                        <br />
                       
                        <br />
                        <input type="submit" value="Submit" />
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterForm;