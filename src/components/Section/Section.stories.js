/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Section from './Section';

export default {
  title: 'Section',
  component: Section,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
};

const Template = (args) => (
  <Section {...args}>
    <div>
      <span className="tw-pl-4 md:tw-pl-8 tw-font-body tw-mb-5 tw-inline-block">
        <b>Your nickname:</b>
        Sebs
      </span>
      <br />
      <span className="tw-pl-4 md:tw-pl-8 tw-font-body">
        <b>Registered email address:</b>
        sebs@sebs.com
      </span>
    </div>
  </Section>
);

export const SectionProfile = Template.bind({});
SectionProfile.args = {
  width: 'tw-max-w-full',
  bgColor: 'tw-bg-lime',
  height: 'tw-h-full',
  mainTitle: 'Dashboard',
  subTitle: 'Profile',
  arrow: false,
  onClickCardButton: null,
};
