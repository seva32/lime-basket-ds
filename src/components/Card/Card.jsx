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
      className={`${width} ${height} tw-bg-white tw-rounded-md tw-shadow tw-overflow-hidden tw-flex tw-flex-col tw-flex-no-wrap tw-justify-between tw-relative tw-group`}
    >
      <div className="tw-absolute tw-left-5% tw-top-35p md:tw-top-40p tw-card-logo-bg-lime tw-w-20 tw-h-20 tw-rounded-2xl tw-flex tw-justify-center tw-p-0.5 tw-z-10">
        <img
          src={brandLogo}
          alt="brand logo"
          className="tw-relative tw-max-h-full tw-min-w-full tw-max-w-full tw-object-cover"
        />
      </div>

      <div className={`tw-absolute ${width} ${height}`}>
        <Link href={linkHref} to={linkTo}>
          <img
            src={imgSrc}
            alt="thumbnail.jpg"
            className="tw-min-h-full tw-max-h-full"
          />
        </Link>
      </div>

      <div
        className={`tw-w-full tw-flex-grow-0 tw-flex tw-justify-center tw-items-center tw-relative tw-h-32 ${
          mainTitle ? 'tw-bg-space' : 'tw-bg-transparent'
        }`}
      >
        {mainTitle && <h2 className="tw-text-dirty">{mainTitle}</h2>}
      </div>

      <div className="tw-relative tw-flex tw-flex-col">
        {name && description && (
          <div className="tw-absolute tw-left-5% tw-right-5% tw-bottom-60p tw-px-4 tw-rounded-lg tw-z-0">
            <Link to={linkTo} href={linkHref}>
              <div className="tw-absolute tw-inset-0 tw-bg-space tw-opacity-50 tw-z-negative tw-rounded-lg" />
              <h3 className="tw-text-white">{name}</h3>
              <div className="tw-hidden group-hover:tw-inline-block tw-font-body tw-text-white">
                {description}
              </div>
            </Link>
          </div>
        )}
        <div className="tw-z-40 tw-absolute tw-bottom-10p tw-left-0 tw-right-0">
          <Link to={buttonLinkTo} href={buttonLinkHref}>
            <Button size={buttonSize} padding="tw-px-4">
              <div className="tw-font-button tw-whitespace-no-wrap">
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
  width: 'tw-w-300p',
  height: 'tw-h-480p',
  history: null,
  linkTo: undefined,
  linkHref: undefined,
  buttonLinkTo: undefined,
  buttonLinkHref: undefined,
};

export default Card;
