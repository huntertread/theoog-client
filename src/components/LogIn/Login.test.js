import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './LogIn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogIn />, div);
});