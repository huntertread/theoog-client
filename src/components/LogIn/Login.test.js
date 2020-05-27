import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './LogIn';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('LogIn Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogIn loggedIn={false} activeUserName={'test'}/>, div);
  });
  it('renders username and password inputs when logged out', () => {
    const wrapper = shallow(<LogIn loggedIn={false} />)
    expect(wrapper.find('.login-container')).toHaveLength(1)
    expect(wrapper.find('.logout-container')).toHaveLength(0)
  });
  it('renders a logout button when logged in', () => {
    const wrapper = shallow(<LogIn loggedIn={true} />)
    expect(wrapper.find('.login-container')).toHaveLength(0)
    expect(wrapper.find('.logout-container')).toHaveLength(1)
  })
})