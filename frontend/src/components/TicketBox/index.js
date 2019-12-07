import React, { Component}  from 'react';

class TicketBox extends Component  {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.text}</h3>
            </div>
        )
    }
    

}

export default TicketBox;