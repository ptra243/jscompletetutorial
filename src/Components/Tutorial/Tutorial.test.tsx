import React from 'react';
import { render, screen } from '@testing-library/react';
import Tutorial from './Tutorial';

test('renders learn react link', () => {
  render(<Tutorial />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
