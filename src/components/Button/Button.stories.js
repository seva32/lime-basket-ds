import React from 'react'; // eslint-disable-line

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Button {...args} />;

export const ButtonSM = Template.bind({});
ButtonSM.args = {
  size: 'sm',
  children: (
    <div className="tw-font-button tw-whitespace-no-wrap">Button SM</div>
  ),
};

export const ButtonMD = Template.bind({});
ButtonMD.args = {
  size: 'md',
  children: (
    <div className="tw-font-button tw-whitespace-no-wrap">Button MD</div>
  ),
};

export const ButtonLG = Template.bind({});
ButtonLG.args = {
  size: 'lg',
  children: (
    <div className="tw-font-button tw-whitespace-no-wrap">Button LG</div>
  ),
};
