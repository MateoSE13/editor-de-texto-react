import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Asegúrate de que este archivo existe y se llama correctamente

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
