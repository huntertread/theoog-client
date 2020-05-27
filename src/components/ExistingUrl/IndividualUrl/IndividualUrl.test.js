import React from 'react';
import ReactDOM from 'react-dom';
import IndividualUrl from './IndividualUrl';


describe('IndividualUrl Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IndividualUrl urlproperties={{originalurl: 'www', id: 1}} />, div);
  });
})