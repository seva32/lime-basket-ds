/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../../styles/tailwind.css';

/**
 * general purpose button
 * @param {string} size size options: lg h48, md h40, sm h32, req
 * @param {node} children children components, req
 * @param {boolean} padding add padding, ex: p-0, px-4, opt
 * @param {function} handleClick onClick function handler, opt
 * @param {function} handleKeyDown onKeyDown function handler, opt
 * @param {boolean} arrowDown places the arrow icon downwards, opt
 * @param {boolean} disabled disabled prop, opt
 * @param {boolean} noArrow dont show arrow, opt
 * @param {boolean} submit submit type, opt
 */

function Button({
  size,
  children,
  padding,
  handleClick,
  handleKeyDown,
  arrowDown,
  disabled,
  noArrow,
  submit,
}) {
  return (
    <div className={`tw-hero-button-wrap ${padding || 'tw-p-8 tw-pt-0'}`}>
      <div className="tw-bg-lime tw-hero-clip-button tw-hero-button-shadow tw-relative">
        <button
          className={classnames(
            'tw-w-full tw-flex tw-flex-no-wrap tw-justify-between tw-items-center',
            {
              'tw-h-48p': size === 'lg',
              'tw-h-40p': size === 'md',
              'tw-h-30p': size === 'sm',
            },
          )}
          type={submit ? 'submit' : 'button'}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        >
          <div
            className={classnames(
              'tw-flex tw-justify-center tw-items-center tw-w-full',
              {
                'tw-pl-6': size === 'lg',
                'tw-pl-5': size === 'md',
                'tw-pl-4': size === 'sm',
                'tw-px-6': size === 'lg' && noArrow,
                'tw-px-5': size === 'md' && noArrow,
                'tw-px-4': size === 'sm' && noArrow,
              },
            )}
          >
            {children}
          </div>
          {!noArrow && (
            <div
              className={classnames(
                `tw-flex tw-justify-center tw-items-center ${
                  arrowDown ? 'tw-transform tw-rotate-90' : ''
                }`,
                {
                  'tw-px-6': size === 'lg',
                  'tw-px-5': size === 'md',
                  'tw-px-4': size === 'sm',
                },
              )}
            >
              <img
                src="https://res.cloudinary.com/seva32/image/upload/v1605538132/arrowVector_cjpryt.svg"
                alt="button icon"
              />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

Button.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  padding: PropTypes.string,
  handleClick: PropTypes.func,
  handleKeyDown: PropTypes.func,
  arrowDown: PropTypes.bool,
  disabled: PropTypes.bool,
  noArrow: PropTypes.bool,
  submit: PropTypes.bool,
};

Button.defaultProps = {
  padding: '',
  handleClick: undefined,
  handleKeyDown: undefined,
  arrowDown: false,
  disabled: false,
  noArrow: false,
  submit: false,
};

export default Button;
