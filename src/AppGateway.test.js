import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AppGateway from './AppGateway';
import App from './App'

Enzyme.configure({adapter: new Adapter()})

describe('AppGateway Component', () => {
  it('deep renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppGateway />, div)
  });
  it('shallow renders without crashing', () => {
    const wrapper = shallow(<AppGateway /> )
    expect(wrapper.exists()).toBe(true)
  });
  it('renders the app component when url hash is emtpy', () => {
    window.location.hash = ''
    const wrapper = shallow(<AppGateway />)
    expect(wrapper.containsMatchingElement(<App /> )).toEqual(true)
  });
  it('redirects a user to destination when hash is present in URL', () => {
    window.location.hash = 12
    const wrapper = shallow(<AppGateway />)
    expect(wrapper.containsMatchingElement(<App />)).toEqual(false)
  })
})

