import * as React from 'react';

import { StyledSystemProps } from '../../typings/styled-system';

import DynamicComponent from './dynamic-component';
import { TypographyStyles } from './typography-styles';

export type TypographyComponentProps = {
  Title: React.FC<StyledSystemProps>;
  Headline: React.FC<StyledSystemProps>;
  Subline: React.FC<StyledSystemProps>;
  Paragraph: React.FC<StyledSystemProps>;
};

export const createComponent: (
  textStyle: StyledSystemProps,
  displayName: string
) => React.FC<StyledSystemProps> = (textStyle, displayName) => {
  const component: React.FC<StyledSystemProps> = ({ children, ...props }) => (
    <DynamicComponent {...textStyle} {...props}>
      {children}
    </DynamicComponent>
  );

  component.displayName = displayName;

  return component;
};

export const Typography: TypographyComponentProps = {
  Title: createComponent(TypographyStyles.Title, 'Title'),
  Headline: createComponent(TypographyStyles.Headline, 'Headline'),
  Subline: createComponent(TypographyStyles.Subline, 'Subline'),
  Paragraph: createComponent(TypographyStyles.Paragraph, 'Paragraph'),
};