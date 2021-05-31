/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Card {...args} />;

export const CardProduct = Template.bind({});
CardProduct.args = {
  imgSrc:
    'https://res.cloudinary.com/seva32/image/upload/v1605875991/catsPort_i5anll.jpg',
  mainTitle: 'Product',
  linkHref: 'https://seva32.tk',
  name: 'Nice product',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Que Manilium, ab iisque M. Scaevolam M. Immo alio genere.',
  buttonLinkHref: 'https://seva32.tk',
  brandLogo:
    'https://res.cloudinary.com/seva32/image/upload/v1606484129/orderDark_qmzxur.svg',
  buttonContent: 'Add to cart',
};

export const CardNoTitle = Template.bind({});
CardNoTitle.args = {
  imgSrc:
    'https://res.cloudinary.com/seva32/image/upload/v1605875991/catsPort_i5anll.jpg',
  linkHref: 'https://seva32.tk',
  name: 'Nice product',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Que Manilium, ab iisque M. Scaevolam M. Immo alio genere.',
  buttonLinkHref: 'https://seva32.tk',
  brandLogo:
    'https://res.cloudinary.com/seva32/image/upload/v1604425921/logo_rblope.svg',
  buttonContent: 'Add to cart',
};
