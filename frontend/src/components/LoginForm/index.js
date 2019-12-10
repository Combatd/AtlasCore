import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            showError: null
        };

    }


    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(`api/v1/users/login/`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
        if (parsedResponse.status.message === 'user is logged in') {
            this.props.closeAndLogUser(parsedResponse.data)
        } else {
            this.setState({
                showError: true
            })
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            placeholder="Email"
                        />
                        <br />
                        <label>Password</label>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        {
                            this.state.showError ? <h2>email or password is incorrect</h2> : null
                        }
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;