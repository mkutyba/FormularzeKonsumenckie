import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from "enzyme";

describe('Form', () => {
    const props = {
        params: {
            formName: "form name 1",
        }
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Form {...props} />, div);
    });

    it('contains header with form name', () => {
        const form = shallow(
            <Form {...props} />
        );
        const header = <h3>form name 1</h3>;

        expect(form).toContainReact(header);
    });
});
