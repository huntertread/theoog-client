import React from 'react';
import ReactDOM from 'react-dom';
import CreateUrl from './CreateUrl';


describe('CreateUrl Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateUrl />, div);
  });
})