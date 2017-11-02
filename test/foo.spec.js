import Foo from '../src/foo.js';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import AmountInputField from '../src/amount-input-field.jsx';
import { mount, shallow } from 'enzyme';

describe('foo', () => {
  it('should..', () => {
    let foo = new Foo();
    expect(foo.bar()).toBe('this is bar');
    const wrapper = shallow(<AmountInputField/>);
  });
});
