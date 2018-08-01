import React, { Component } from 'react';

import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User>Jaydeep</User>
                <User age="30">Sam</User>
                <User age="40">Akash</User>
            </div>
        )
    }
}

export default Users;