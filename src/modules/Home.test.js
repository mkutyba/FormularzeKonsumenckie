import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { shallow } from "enzyme";

describe('Home', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
    });

    it('contains header', () => {
        const wrapper = shallow(
            <Home />
        );
        const header = <h2>Home</h2>;

        expect(wrapper).toContainReact(header);
    });
});
