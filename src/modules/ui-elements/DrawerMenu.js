import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import loadMenuItems from '../helpers/loadMenuItems.js';

const SelectableList = makeSelectable(List);

class DrawerMenu extends Component {
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
        const { location, onRequestChangeNavDrawer, onChangeList, open } = this.props;

        return (
            <Drawer
                docked={false}
                open={open}
                onRequestChange={onRequestChangeNavDrawer}
            >
                <SelectableList
                    value={location.pathname}
                    onChange={onChangeList}
                >
                    {this.state.menu.map((menuItem) => (
                        <ListItem primaryText={menuItem.label} value={menuItem.key} key={menuItem.key} />
                    ))}
                </SelectableList>
            </Drawer>
        );
    }
}

DrawerMenu.propTypes = {
    location: React.PropTypes.object.isRequired,
    onChangeList: React.PropTypes.func.isRequired,
    onRequestChangeNavDrawer: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
};

export default DrawerMenu;
