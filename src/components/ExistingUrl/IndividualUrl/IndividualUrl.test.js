import React from 'react';
import ReactDOM from 'react-dom';
import IndividualUrl from './IndividualUrl';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndividualUrl />, div);
});