import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Dialog } from '.';

test('Button renders', () => {
  const { getByRole } = render(<Dialog />);
  getByRole('button');
});

test('Dialog renders on button click', () => {
  const { getByRole } = render(<Dialog />);
  fireEvent.click(getByRole('button'));
  getByRole('dialog');
});
