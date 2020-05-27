import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('App Component', () => {
  it('deep renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  });
  it('shallow renders without crashing', () => {
    const wrapper = shallow(<App /> )
    expect(wrapper.exists()).toBe(true)
  });
  it('renders logged out content when logged out', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({loggedIn: false})
    expect(wrapper.find('.logged-out-content')).toHaveLength(1)
    expect(wrapper.find('.logged-in-content')).toHaveLength(0)
  });
  it('renders logged in content when logged in', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({loggedIn: true})
    expect(wrapper.find('.logged-out-content')).toHaveLength(0)
    expect(wrapper.find('.logged-in-content')).toHaveLength(1)
  });
  it('renders hamburger icon when mobile nav closed', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({mobileNavOpen: false})
    expect(wrapper.find('.fa-bars')).toHaveLength(1)
    expect(wrapper.find('.mobile-nav-open')).toHaveLength(0)
  });
  it('renders open mobile nav when mobile nav is open', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({mobileNavOpen: true})
    expect(wrapper.find('.mobile-nav-open')).toHaveLength(1)
  });
  it('renders anon shortened URL info if present', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({anonUrlReturn: {originalurl: 'test', id: 1}})
    expect(wrapper.find('.original-url-container')).toHaveLength(1)
    expect(wrapper.find('.short-url-container')).toHaveLength(1)
  });
  it('does not render anon shortened URL info if NOT present', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.original-url-container')).toHaveLength(0)
    expect(wrapper.find('.short-url-container')).toHaveLength(0)
  })
})
