import React from 'react';
import 'jest-styled-components';

import { render, cleanup } from '../../utils/test-utils';

import { Header } from './Header';

afterEach(cleanup);

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with prop siteTitle', () => {
    const { container } = render(
      <Header siteTitle="I am the title of the site" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});