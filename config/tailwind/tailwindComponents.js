module.exports = {
  // general
  '.tw-break-inside-avoid': {
    '-webkit-break-inside': 'avoid',
    '-moz-break-inside': 'avoid',
    'break-inside': 'avoid',
  },
  // carousel
  '.tw-slides *': {
    'user-select': 'none',
    '-ms-user-select': 'none',
    '-moz-user-select': 'none',
    '-khtml-user-select': 'none',
    '-webkit-user-select': 'none',
    '-webkit-touch-callout': 'none',
  },
  '.tw-slide-image:hover + .tw-carousel-controls label': {
    opacity: 0.5,
  },
  '.tw-carousel-controls label:hover': {
    opacity: 1,
  },
  'input:checked + .tw-slide-container .tw-slide-image': {
    opacity: 1,
    transform: 'scale(1)',
    transition: 'opacity 1s ease-in-out',
  },
  'input#img-1:checked ~ .tw-carousel-dots label#img-dot-1': {
    opacity: 1,
  },
  'input#img-2:checked ~ .tw-carousel-dots label#img-dot-2': {
    opacity: 1,
  },
  'input#img-3:checked ~ .tw-carousel-dots label#img-dot-3': {
    opacity: 1,
  },
  'input:checked + .tw-slide-container .tw-carousel-controls label': {
    display: 'block',
  },
  '.tw-font-0': {
    'font-size': 0,
  },
  // animejs slider
  '.tw-absolute-centerX': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%, -50%)',
  },
  '.tw-absolute-center': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '.tw-slider__arrow::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    width: '1em',
    height: '1em',
    'border-style': 'solid',
    'border-width': '4px 0 0 4px',
  },
  '.tw-slider__arrow_prev::before': {
    transform: 'rotate(-45deg)',
  },
  '.tw-slider__arrow_next::before': {
    transform: 'rotate(135deg)',
  },
  '.tw-nav-control::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    width: '0.5em',
    height: '0.5em',
    'border-radius': '50%',
    background: 'currentColor',
  },
  '.tw-slider-list::before': {
    content: "''",
    display: 'block',
    'padding-top': 'calc(9 / 16 * 100%)',
  },
  '.tw-slider-list__item': {
    transform: 'translateX(100%)',
  },
  '.tw-slider-list__item_active': {
    transform: 'translateX(0)',
  },
};
