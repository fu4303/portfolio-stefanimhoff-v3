import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { Default } from './KeyboardShortcut.stories';

describe('KeyboardShortcut', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
