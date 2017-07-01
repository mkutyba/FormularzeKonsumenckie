import React, { Component } from 'react';
import NavLink from './ui-elements/NavLink';
import DrawerMenu from './ui-elements/DrawerMenu';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router'

class App extends Component {
    state = {
        navDrawerOpen: false,
    };

    handleToggleNavDrawer = () => {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        });
    };

    handleChangeRequestNavDrawer = (open) => {
        this.setState({
            navDrawerOpen: open,
        });
    };

    handleChangeList = (event, value) => {
        if (value) {
            browserHistory.push(value);
            this.setState({
                navDrawerOpen: false,
            });
        }
    };

    render() {
        const { location, children } = this.props;
        let { navDrawerOpen } = this.state;

        const title = "Formularze Konsumenckie UOKiK";

        return (
            <div>
                <AppBar
                    title={title}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggleNavDrawer}
                />

                <DrawerMenu
                    location={location}
                    onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
                    onChangeList={this.handleChangeList}
                    open={navDrawerOpen}
                />

                <div className="main">
                    {children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default App;
