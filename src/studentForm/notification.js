import React, { Component } from 'react';

import {connect} from 'react-redux';

class Notification extends Component {
    render(){
        return (
            <span className={`${this.props.enabled ? 'open' : ''} notification`}>{this.props.message}</span>
        )
    }
}

export default connect()(Notification);