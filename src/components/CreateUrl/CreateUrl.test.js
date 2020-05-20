import React from 'react';
import ReactDOM from 'react-dom';
import CreateUrl from './CreateUrl';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateUrl />, div);
});