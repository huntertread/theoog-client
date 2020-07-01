import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { setLoggedInState, setUserName, setUserId, setRegisteredState, setMobileNavState } from './redux/user/user.action'
import { setAnonUrlSubmit, setUrlError, setAnonUrlReturn, setUserUrls, setOriginalUrl } from './redux/url/url.action'
import configureStore from 'redux-mock-store'

Enzyme.configure({adapter: new Adapter()})

describe('App Component', () => {

  it('deep renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><App /></Provider>, div)
  });
  it('shallow renders without crashing', () => {
    let wrapper = mount(<Provider store={store}><App /></Provider>)
    expect(wrapper.exists()).toBe(true)
  });
  it('renders logged out content when logged out', () => {
    store.dispatch(setLoggedInState(false))
    let wrapper = mount(<Provider store={store}><App /></Provider>)
    expect(wrapper.find('.logged-out-content')).toHaveLength(1)
    expect(wrapper.find('.logged-in-content')).toHaveLength(0)
  });
  it('renders logged in content when logged in', () => {
    store.dispatch(setLoggedInState(true))
    let wrapper = mount(<Provider store={store}><App /></Provider>)
    expect(wrapper.find('.logged-out-content')).toHaveLength(0)
    expect(wrapper.find('.logged-in-content')).toHaveLength(1)
    store.dispatch(setLoggedInState(false))
  });
  it('does not render anon shortened URL info if NOT present', () => {
    let wrapper = mount(<Provider store={store}><App /></Provider>)
    expect(wrapper.find('.original-url-container')).toHaveLength(0)
    expect(wrapper.find('.short-url-container')).toHaveLength(0)
  })
  it('renders anon shortened URL info if present', () => {
    store.dispatch(setAnonUrlReturn({originalurl: 'test', id: 1}))
    let wrapper = mount(<Provider store={store}><App /></Provider>)
    expect(wrapper.find('.original-url-container')).toHaveLength(1)
    expect(wrapper.find('.short-url-container')).toHaveLength(1)
  });
  /* MOBILE TESTS */
  // it('renders hamburger icon when mobile nav closed', () => {
  //   let wrapper = mount(<Provider store={store}><App /></Provider>)
  //   store.dispatch(setMobileNavState(false))
  //   console.log(store.getState())
  //   expect(wrapper.find('.fa-bars')).toHaveLength(1)
  //   expect(wrapper.find('.mobile-nav-open')).toHaveLength(0)
  // });
  // it('renders open mobile nav when mobile nav is open', () => {
  //   store.dispatch(setMobileNavState(true))
  //   console.log(store.getState())
  //   let wrapper = mount(<Provider store={store}><App /></Provider>)
  //   expect(wrapper.find('.mobile-nav-open')).toHaveLength(1)
  //   store.dispatch(setMobileNavState(false))
  // });
})
