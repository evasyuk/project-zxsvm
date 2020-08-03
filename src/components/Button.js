import React, { Component } from "react";

class Button extends Component {
    handleChange = (event) => {
        const { value } = event.target;
        this.setState(() => {
            return {
                value
            };
        });
    }

    render() {
        return (
            <div style={{ 'background-color': 'red', 'border-radius': 5 }} >Button</div>
        );
    }
}

export default Button;
