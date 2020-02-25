import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { ColorSwatch } from '../ColorSwatch';
import { Emojify } from '../Emojify';
import { SEO } from '../SEO';
import { Spoiler } from '../Spoiler';
import { TextLink, BlockLink } from '../TextLink';
import { Typography } from '../Typography';
import { UnorderedList } from '../UnorderedList';
import { OrderedList } from '../OrderedList';
import { InlineCode } from '../InlineCode';
import { KeyboardShortcut } from '../KeyboardShortcut';
import { Sample } from '../Sample';
import { Variable } from '../Variable';
import { RubyAnnotation } from '../RubyAnnotation';
import { Table } from '../Table';
import { HorizontalRule } from '../HorizontalRule';

const { Title, Headline, Subline, Paragraph } = Typography;

const shortcodes = {
  BlockLink,
  ColorSwatch,
  Emojify,
  Headline,
  KeyboardShortcut,
  Paragraph,
  RubyAnnotation,
  SEO,
  Sample,
  Spoiler,
  Subline,
  TextLink,
  Title,
  Variable,
  a: TextLink,
  h1: Title,
  h2: Headline,
  h3: Subline,
  h4: Subline,
  h5: Subline,
  h6: Subline,
  hr: HorizontalRule,
  inlineCode: InlineCode,
  ol: OrderedList,
  p: Paragraph,
  table: Table,
  ul: UnorderedList,
};

const MDXProviderContainer: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);

export { MDXProviderContainer };
