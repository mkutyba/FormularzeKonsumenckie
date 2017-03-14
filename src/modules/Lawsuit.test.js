import React from 'react';
import ReactDOM from 'react-dom';
import Lawsuit from './Lawsuit';
import { shallow } from "enzyme";

describe('Lawsuit', () => {
    const props = {
        params: {
            lawsuitName: "lawsuit name 1",
        }
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Lawsuit {...props} />, div);
    });

    it('contains header with lawsuit name', () => {
        const form = shallow(
            <Lawsuit {...props} />
        );
        const header = <h3>lawsuit name 1</h3>;

        expect(form).toContainReact(header);
    });
});
