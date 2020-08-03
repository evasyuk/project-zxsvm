import React, { Component } from "react";

class TopWrapper extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }} >{this.props.children}</div>
        );
    }
}

export default TopWrapper;
