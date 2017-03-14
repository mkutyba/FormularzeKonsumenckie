import React from 'react';
import ReactDOM from 'react-dom';
import Lawsuits from './Lawsuits';
import { shallow } from "enzyme";

describe('Lawsuits', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render((
            <Lawsuits>
                <span/>
            </Lawsuits>
        ), div);
    });

    it('contains header', () => {
        const wrapper = shallow(
            <Lawsuits>
                <span/>
            </Lawsuits>
        );
        const header = <h2>Lawsuits</h2>;

        expect(wrapper).toContainReact(header);
    });

    it('contains navigation', () => {
        const wrapper = shallow(
            <Lawsuits>
                <span/>
            </Lawsuits>
        );

        expect(wrapper.find('ul[role="navigation"]')).toBePresent();
    });

    it('renders children when passed in', () => {
        const wrapper = shallow(
            <Lawsuits>
                <div className="unique" />
            </Lawsuits>
        );
        const child = <div className="unique" />;

        expect(wrapper).toContainReact(child);
    });
});
