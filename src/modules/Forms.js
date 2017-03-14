import React, { Component } from 'react';
import NavLink from './ui-elements/NavLink'

class Forms extends Component {
    render() {
        return (
            <div>
                <h2>Forms</h2>

                <ul role="navigation">
                    <li><NavLink to="/forms/form1">Form 1</NavLink></li>
                    <li><NavLink to="/forms/form2">Form 2</NavLink></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

Forms.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default Forms;
