import React from 'react';
import { render } from '@testing-library/react';

import { Popover } from '.';

test('Popover renders', () => {
  const { getByRole } = render(<Popover />);

  getByRole('button');
});
