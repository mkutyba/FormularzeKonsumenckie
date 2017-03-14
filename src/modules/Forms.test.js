import React from 'react';
import ReactDOM from 'react-dom';
import Forms from './Forms';
import { shallow } from "enzyme";

describe('Forms', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render((
            <Forms>
                <span/>
            </Forms>
        ), div);
    });

    it('contains header', () => {
        const wrapper = shallow(
            <Forms>
                <span/>
            </Forms>
        );
        const header = <h2>Forms</h2>;

        expect(wrapper).toContainReact(header);
    });

    it('contains navigation', () => {
        const wrapper = shallow(
            <Forms>
                <span/>
            </Forms>
        );

        expect(wrapper.find('ul[role="navigation"]')).toBePresent();
    });

    it('renders children when passed in', () => {
        const wrapper = shallow(
            <Forms>
                <div className="unique" />
            </Forms>
        );
        const child = <div className="unique" />;

        expect(wrapper).toContainReact(child);
    });
});
