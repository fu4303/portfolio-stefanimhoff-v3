import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import {
  Default,
  MultipleParagraphs,
  Author,
  Source,
  SourceUrl,
  AuthorSourceUrl,
  AuthorSource,
} from './Blockquote.stories';

describe('Blockquote', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('with multiple paragraphs', () => {
    test('renders correctly', () => {
      const { container } = render(<MultipleParagraphs />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<MultipleParagraphs />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with author', () => {
    test('renders correctly', () => {
      const { container } = render(<Author />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Author />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with source', () => {
    test('renders correctly', () => {
      const { container } = render(<Source />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Source />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with source and URL', () => {
    test('renders correctly', () => {
      const { container } = render(<SourceUrl />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<SourceUrl />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with author, source and URL', () => {
    test('renders correctly', () => {
      const { container } = render(<AuthorSourceUrl />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<AuthorSourceUrl />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with author and source', () => {
    test('renders correctly', () => {
      const { container } = render(<AuthorSource />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<AuthorSource />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
