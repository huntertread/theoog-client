import React from 'react';
import ReactDOM from 'react-dom';
import ExistingUrlContainer from './ExistingUrlContainer';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Existing Url Container Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExistingUrlContainer urls={[]} />, div);
  });
  it('renders the correct number of individual URLs based on length of urls prop', () => {
    const wrapper = shallow(<ExistingUrlContainer urls={[{originalurl: 'www', id: 1}, {originalurl: 'www', id: 1}]} />)
    expect(wrapper.find('IndividualUrl')).toHaveLength(2)
  })
})