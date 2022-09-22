import React from 'react'
import { shallow } from 'enzyme'
import App from '../App';
import ComB from '../ComB';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

test('renders learn react link', () => {
    expect(wrapped.find(ComB).length).toEqual(1)
});
