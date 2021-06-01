import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '.';

test('Checkbox renders', () => {
  const { getByRole } = render(<Checkbox />);

  getByRole('checkbox');
});
