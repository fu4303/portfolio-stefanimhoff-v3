import React from 'react';
import styled from 'styled-components';

import { Main } from '../main';

import { Column } from '.';

const Box = styled.div`
  align-items: center;
  background: rgba(25, 25, 25, 0.3);
  display: flex;
  justify-content: center;
`;

const rowProps = {
  marginBottom: true,
  debug: true,
};

export default {
  component: Column,
  title: 'Layout/Column',
};

export const Default = () => (
  <Main>
    <Column {...rowProps}>
      <Box>Default</Box>
    </Column>
  </Main>
);

export const Fullsize = () => (
  <Main>
    <Column variant="fullsize" {...rowProps}>
      <Box>fullsize</Box>
    </Column>
  </Main>
);

export const Regular = () => (
  <Main>
    <Column variant="regular" {...rowProps}>
      <Box>regular</Box>
    </Column>
  </Main>
);

export const Narrow = () => (
  <Main>
    <Column variant="narrow" {...rowProps}>
      <Box>narrow</Box>
    </Column>
  </Main>
);