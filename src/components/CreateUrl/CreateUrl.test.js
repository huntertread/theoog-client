import React from 'react';
import ReactDOM from 'react-dom';
import CreateUrl from './CreateUrl';
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

describe('CreateUrl Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><CreateUrl /></Provider>, div);
  });
})