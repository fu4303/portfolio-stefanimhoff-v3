import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Main } from '../main';
import { SEO, LayoutProps } from '..';

import { Styled } from './minimal-layout.styles';

export const MinimalLayout: React.FC<LayoutProps> = ({
  children,
  debug = false,
  homeTo,
  size = 'fullsize',
  variant = 'default',
}) => (
  <>
    <SEO />
    <Helmet bodyAttributes={{ class: variant }} />
    <Main>
      <Styled.Header>
        <Styled.HeaderHomeLink to={homeTo} />
        <Styled.HeaderThemeToggle />
      </Styled.Header>
      {children}
    </Main>
  </>
);
