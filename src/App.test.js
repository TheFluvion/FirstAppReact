import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//https://testing-library.com/docs/dom-testing-library/cheatsheet

test('renders learn react link', async() => {
  const {findByText} = render(<App />);
  const linkElement = findByText(/Ultima busqueda/i);
  expect(linkElement).toBeInTheDocument();
});
