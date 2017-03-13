import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render((
            <App>
                <span/>
            </App>
        ), div);
    });

    it('contains header', () => {
        const wrapper = shallow(
            <App>
                <span/>
            </App>
        );
        const header = <h1>Formularze Konsumenckie</h1>;

        expect(wrapper).toContainReact(header);
    });

    it('contains navigation', () => {
        const wrapper = shallow(
            <App>
                <span/>
            </App>
        );

        expect(wrapper.find('ul[role="navigation"]')).toBePresent();
    });

    it('renders children when passed in', () => {
        const wrapper = shallow(
            <App>
                <div className="unique" />
            </App>
        );
        const child = <div className="unique" />;

        expect(wrapper).toContainReact(child);
    });
});
