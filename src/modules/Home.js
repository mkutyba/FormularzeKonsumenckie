import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import loadMenuItems from './helpers/loadMenuItems.js';
import { browserHistory } from 'react-router'

class Home extends Component {
    state = {
        menu: [],
    };

    componentDidMount() {
        const self = this;
        loadMenuItems((items) => {
            self.setState({
                menu: items,
            });
        });
    };

    render() {
        return (
            <div>
                <h2>Prawa konsumenta - Przydatne formularze, wzory pism</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nulla enim id numquam ex eveniet quibusdam officia deserunt unde quisquam tempore soluta, minus similique, itaque mollitia laudantium? Laborum, eum error.
                </p>

                <div className="buttons-row">
                    {
                        this.state.menu
                            .filter((menuItem) => {
                                return menuItem.key !== '/'
                            })
                            .map((menuItem) => (
                                <RaisedButton primary={true} label={menuItem.label} key={menuItem.key} onTouchTap={() => {browserHistory.push(menuItem.key)}} />
                            ))
                    }
                </div>
            </div>
        );
    }
}

export default Home;
