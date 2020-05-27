import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Register Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Register registered={false}/>, div);
  });
  it('renders a register button when not selected', () => {
    const wrapper = shallow(<Register registered={true} /> )
    expect(wrapper.find('.register-button')).toHaveLength(1)
    expect(wrapper.find('.registration-form-container')).toHaveLength(0)
  });
  it('renders the registration form when selected', () => {
    const wrapper = shallow(<Register registered={false}/> )
    expect(wrapper.find('.register-button')).toHaveLength(0)
    expect(wrapper.find('.registration-form-container')).toHaveLength(1)
  });
})