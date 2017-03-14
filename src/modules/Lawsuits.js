import React, { Component } from 'react';
import NavLink from './ui-elements/NavLink'

class Lawsuits extends Component {
    render() {
        return (
            <div>
                <h2>Lawsuits</h2>

                <ul role="navigation">
                    <li><NavLink to="/lawsuits/lawsuit1">Lawsuit 1</NavLink></li>
                    <li><NavLink to="/lawsuits/lawsuit2">Lawsuit 2</NavLink></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

Lawsuits.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default Lawsuits;
