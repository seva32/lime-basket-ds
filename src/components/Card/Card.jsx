/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Link } from '../Link';

import '../../styles/tailwind.css';

/**
 * general purpose card por products
 * @param {string} imgSrc img tag source, req
 * @param {string} linkTo content for internal img Link's 'to' prop, req
 * @param {string} linkHref content for external img Link's 'href' prop, req
 * @param {string} buttonLinkTo content for Link's 'to' in button, req
 * @param {string} buttonLinkHref content for Link's 'href' in button, req
 * @param {string} brandLogo src for logo img, req
 * @param {Object} buttonContent button content, req
 * @param {string} mainTitle title in header's card, opt
 * @param {string} name product name, opt
 * @param {string} description product description, opt
 * @param {string} buttonSize button size, sm, md or lg, opt, defaults to md
 * @param {string} width container width, opt, defaults to 300px
 * @param {string} height container height, opt, defaults to 480px
 */

function Card({
  mainTitle,
  imgSrc,
  linkTo,
  linkHref,
  name,
  description,
  buttonLinkTo,
  buttonLinkHref,
  brandLogo,
  buttonSize,
  buttonContent,
  width,
  height,
  history, // eslint-disable-line
}) {
  return (
    <div
      className={`${width} ${height} bg-white rounded-md shadow overflow-hidden flex flex-col flex-no-wrap justify-between relative group`}
    >
      <div className="absolute left-5% top-35p md:top-40p card-logo-bg-lime w-20 h-20 rounded-2xl flex justify-center p-0.5 z-10">
        <img
          src={brandLogo}
          alt="brand logo"
          className="relative max-h-full min-w-full max-w-full object-cover"
        />
      </div>

      <div className={`absolute ${width} ${height}`}>
        <Link href={linkHref} to={linkTo}>
          <img
            src={imgSrc}
            alt="thumbnail.jpg"
            className="min-h-full max-h-full"
          />
        </Link>
      </div>

      <div
        className={`w-full flex-grow-0 flex justify-center items-center relative h-32 ${
          mainTitle ? 'bg-space' : 'bg-transparent'
        }`}
      >
        {mainTitle && <h2 className="text-dirty">{mainTitle}</h2>}
      </div>

      <div className="relative flex flex-col">
        {name && description && (
          <div className="absolute left-5% right-5% bottom-60p px-4 rounded-lg z-0">
            <Link to={linkTo} href={linkHref}>
              <div className="absolute inset-0 bg-space opacity-50 z-negative rounded-lg" />
              <h3 className="text-white">{name}</h3>
              <div className="hidden group-hover:inline-block font-body text-white">
                {description}
              </div>
            </Link>
          </div>
        )}
        <div className="z-40 absolute bottom-10p left-0 right-0">
          <Link to={buttonLinkTo} href={buttonLinkHref}>
            <Button size={buttonSize} padding="px-4">
              <div className="font-button whitespace-no-wrap">
                {buttonContent}
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  mainTitle: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  linkHref: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  buttonLinkTo: PropTypes.string,
  buttonLinkHref: PropTypes.string,
  history: PropTypes.any, // eslint-disable-line
  brandLogo: PropTypes.string.isRequired,
  buttonSize: PropTypes.string,
  buttonContent: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Card.defaultProps = {
  mainTitle: '',
  name: '',
  description: '',
  buttonSize: 'md',
  width: 'w-300p',
  height: 'h-480p',
  history: null,
  linkTo: undefined,
  linkHref: undefined,
  buttonLinkTo: undefined,
  buttonLinkHref: undefined,
};

export default Card;
