/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';

import { truncate } from '../../helpers';

const STATUS = {
  HOVERED: 'hovered', // TODO
  NORMAL: 'normal', // TODO
};

/**
 * general purpose link, external and internal
 * @param {Object} children link content, opt
 * @param {string} className classname, opt
 * @param {Object} onClick function, opt
 * @param {string} href external links, opt
 * @param {string} to internal link, opt
 * @param {number} maxLength max length of characters, opt
 * @version 1.1.11
 * @author [Sebastian Fantini](https://github.com/seva32)
 */

const Link = ({
  children,
  className,
  onClick,
  href,
  to,
  maxLength,
  ...other
}) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  const onKeyPressHandler = () => {};

  const classNames = classnames(className, {
    //   'custom-class': prop,
  });

  // prettier-ignore
  const content = (
    <span
      className={status}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {maxLength > 0
        ? React.Children.map(children, (child) =>
          (typeof child === 'string' ? truncate(child, maxLength) : child))
        : children}
    </span>
  );

  if (typeof window === 'undefined') return null;

  if (to) {
    return (
      <RouterLink to={to} className={classNames} {...other}>
        {content}
      </RouterLink>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...other}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <span
        className={classNames}
        onClick={onClick}
        role="link"
        tabIndex={0}
        onKeyPress={onKeyPressHandler}
        {...other}
      >
        {content}
      </span>
    );
  }

  return null;
};

Link.propTypes = {
  /** link content, opt */
  children: PropTypes.node,
  /** classname, opt */
  className: PropTypes.string,
  /** function, opt */
  onClick: PropTypes.func,
  /** external links, opt */
  href: PropTypes.string,
  /** internal link, opt */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** max length of characters, opt */
  maxLength: PropTypes.number,
};

Link.defaultProps = {
  children: null,
  className: null,
  onClick: undefined,
  href: null,
  to: null,
  maxLength: -1,
};

export default Link;
