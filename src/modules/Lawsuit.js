import React, { Component } from 'react';

class Lawsuit extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.params.lawsuitName}</h3>
            </div>
        );
    }
}

export default Lawsuit;
