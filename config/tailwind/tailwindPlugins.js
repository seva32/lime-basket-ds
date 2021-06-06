/* eslint-disable import/no-extraneous-dependencies */

const plugin = require('tailwindcss/plugin');
const map = require('lodash.map');
const fromPairs = require('lodash.frompairs');
const selectorParser = require('postcss-selector-parser');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default;

const components = require('./tailwindComponents');

module.exports = [
  // support for the disabled pseudo-class variant
  plugin(({ addVariant, e }) => {
    addVariant('disabled', ({ modifySelectors, separator }) => {
      modifySelectors(
        ({ className }) => `.${e(`disabled${separator}${className}`)}:disabled`,
      );
    });
  }),
  // suport for pseudo-elements
  plugin(({ addVariant, e }) => {
    const escape = e || ((x) => x);
    const pseudoElements = [
      'after',
      'backdrop ',
      'before',
      'cue',
      'first-letter',
      'first-line',
      'grammar-error ',
      'marker ',
      'placeholder ',
      'selection',
    ];
    pseudoElements.forEach((pseudo) => {
      addVariant(pseudo, ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.${escape(`${pseudo}${separator}${className}`)}::${pseudo}`,
        );
      });
    });
  }),
  // adding missing groups
  plugin(({ addVariant, config }) => {
    const prefixClass = function (className) {
      const prefix = config('prefix');
      const getPrefix = typeof prefix === 'function' ? prefix : () => prefix;
      return `${getPrefix(`.${className}`)}${className}`;
    };

    const groupPseudoClassVariant = function (pseudoClass) {
      return ({ modifySelectors, separator }) =>
        modifySelectors(({ selector }) =>
          selectorParser((selectors) => {
            selectors.walkClasses((classNode) => {
              // eslint-disable-next-line no-param-reassign
              classNode.value = `group-${pseudoClass}${separator}${classNode.value}`;
              classNode.parent.insertBefore(
                classNode,
                selectorParser().astSync(
                  `.${prefixClass('group')}:${pseudoClass} `,
                ),
              );
            });
          }).processSync(selector),
        ); // eslint-disable-line
    };

    addVariant('group-focus-within', groupPseudoClassVariant('focus-within'));
    addVariant('group-focus-visible', groupPseudoClassVariant('focus-visible'));
    addVariant('group-active', groupPseudoClassVariant('active'));
    addVariant('group-visited', groupPseudoClassVariant('visited'));
    addVariant('group-disabled', groupPseudoClassVariant('disabled'));
    addVariant('group-checked', groupPseudoClassVariant('checked'));
  }),
  // custom selector concatenation
  plugin(({ addComponents }) => {
    addComponents(components);
  }),
  plugin(({ addUtilities }) => {
    addUtilities(
      {
        '.tw-empty-content': {
          content: "''",
        },
      },
      ['before', 'after'], // lo uso como after:empty-content
    );
  }),
  plugin(({ addUtilities }) => {
    addUtilities(
      {
        '.tw-border-top-solid-black': {
          'border-top': '5px solid black',
        },
        '.tw-thead-tr-md': {
          'font-size': '1.3vw',
        },
        '.tw-thead-tr-lg': {
          'font-size': '1.45vw',
        },
      },
      ['responsive', 'before', 'after'],
    );
  }),
  plugin(
    ({ theme, variants, e, addUtilities }) => {
      const aspectRatioUtilities = fromPairs(
        map(theme('aspectRatio'), (value, modifier) => {
          const aspectRatio = Array.isArray(value)
            ? value[0] / value[1]
            : value;
          return [
            `.${e(`tw-aspect-ratio-${modifier}`)}`,
            {
              paddingBottom:
                aspectRatio === 0 ? '0' : `${(1 / aspectRatio) * 100}%`,
            },
          ];
        }),
      );

      addUtilities(aspectRatioUtilities, variants('aspectRatio'));
    },
    {
      theme: {
        aspectRatio: {},
      },
      variants: {
        aspectRatio: ['responsive'],
      },
    },
  ),
  plugin(({ addUtilities, _e, theme, variants }) => {
    const colors = flattenColorPalette(theme('borderColor'));
    delete colors.default;

    const colorMap = Object.keys(colors).map((color) => ({
      [`.tw-border-t-${color}`]: { borderTopColor: colors[color] },
      [`.tw-border-r-${color}`]: { borderRightColor: colors[color] },
      [`.tw-border-b-${color}`]: { borderBottomColor: colors[color] },
      [`.tw-border-l-${color}`]: { borderLeftColor: colors[color] },
    }));
    const utilities = Object.assign({}, ...colorMap);

    addUtilities(utilities, variants('borderColor'));
  }),
  plugin(({ addBase, config }) => {
    addBase({
      h1: { fontSize: config('theme.fontSize.2xl') },
      h2: { fontSize: config('theme.fontSize.xl') },
      h3: { fontSize: config('theme.fontSize.lg') },
    });
  }),
];
