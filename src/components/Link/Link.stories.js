/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Link from './Link';

export default {
  title: 'Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const LinkExample = Template.bind({});
LinkExample.args = {
  children: 'seva32.tk/about',
  href: 'https://seva32.tk',
};

export const LinkMaxLength = Template.bind({});
LinkMaxLength.args = {
  children: 'seva32.tk/about',
  href: 'https://seva32.tk',
  maxLength: 10,
};
