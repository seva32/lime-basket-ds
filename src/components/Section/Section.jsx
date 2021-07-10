/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ProfileCard = ({
  width,
  height,
  bgColor,
  mainTitle,
  subTitle,
  children,
  arrow,
  onClickCardButton,
}) => (
  <div>
    <section
      className={classnames(
        `${width} ${height} ${bgColor} tw-bg-no-repeat tw-bg-cover tw-block tw-relative`,
      )}
    >
      {arrow && (
        <button
          type="button"
          className="focus:tw-shadow-custom tw-absolute tw--top-30p tw-left-20p tw-flex tw-items-center tw-my-0 tw-p-2 tw-rounded tw-text-space"
          onClick={onClickCardButton}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,9.059V6.5c0-0.256-0.098-0.512-0.293-0.708C11.512,5.597,11.256,5.5,11,5.5s-0.512,0.097-0.707,0.292L4,12l6.293,6.207  C10.488,18.402,10.744,18.5,11,18.5s0.512-0.098,0.707-0.293S12,17.755,12,17.5v-2.489c2.75,0.068,5.755,0.566,8,3.989v-1  C20,13.367,16.5,9.557,12,9.059z"
            />
          </svg>
        </button>
      )}
      <aside className="tw-info-card tw-w-full tw-relative tw-rounded-md tw-p-20p tw-mx-auto md:tw-ml-4 tw-flex tw-flex-col tw-justify-start tw-items-baseline tw-group">
        <header className="tw-text-left">
          <h3 className="tw-text-space tw-font-2rem">{mainTitle}</h3>
        </header>
        <main className="tw-w-full">
          <div className="tw-mb-5 tw-mt-5 tw-w-full">
            <span className="tw-font-subtitle tw-tracking-normal tw-text-space">
              {subTitle}
            </span>
          </div>
          {children}
        </main>
      </aside>
    </section>
  </div>
);

ProfileCard.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  mainTitle: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
  subTitle: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  arrow: PropTypes.bool,
  onClickCardButton: PropTypes.func,
};

ProfileCard.defaultProps = {
  subTitle: '',
  arrow: false,
  onClickCardButton: () => {},
};

export default ProfileCard;
