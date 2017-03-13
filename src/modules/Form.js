import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.params.formName}</h3>
            </div>
        );
    }
}

export default Form;
