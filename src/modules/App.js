import React, { Component } from 'react';
import NavLink from './ui-elements/NavLink'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Formularze Konsumenckie</h1>

                <ul role="navigation">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>O co tu chodzi?</NavLink></li>
                    <li><NavLink to="/forms">Formularze i wnioski</NavLink></li>
                    <li><NavLink to="/lawsuits">Pozwy, skargi i inne</NavLink></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

export default App;
