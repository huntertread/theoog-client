import React from 'react';
import ReactDOM from 'react-dom';
import ExistingUrlContainer from './ExistingUrlContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExistingUrlContainer urls={[]} />, div);
});