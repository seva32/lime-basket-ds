(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-router-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-router-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lime = {}, global.React, global.reactRouterDom));
}(this, (function (exports, React, reactRouterDom) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "*,\n:root {\n  box-sizing: border-box;\n  /* outline: 1px solid red; */\n}\n\n/* ::-webkit-scrollbar {\n  display: none;\n} */\n\n/* ! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com */\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\nh1 {\n  font-size: 30px;\n  font-size: 39px;\n}\n\nh2 {\n  font-size: 24px;\n  font-size: 32px;\n}\n\nh3 {\n  font-size: 20px;\n  font-size: 28px;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  /* font-family: initial; */\n  font-size: 62.5%; /* 1rem = 10p */\n}\n\nbody {\n  /* background: center / cover repeat-y\n    url('https://res.cloudinary.com/seva32/image/upload/v1605282234/background_fkjiss.jpg'); */\n}\n\nhtml,\nbody {\n  height: 100%; /* needed for container min-height */\n}\n\nh1 {\n  font-family: Bebas Neue;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 4.5rem;\n  line-height: 5.2rem;\n  /* identical to box height */\n  letter-spacing: -0.02rem;\n}\n\nh2 {\n  font-family: Bebas Neue;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 2.5rem;\n  line-height: 3rem;\n  letter-spacing: -0.02rem;\n}\n\nh3 {\n  font-family: Bebas Neue;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1.5rem;\n  line-height: 1.8125rem;\n  letter-spacing: -0.02rem;\n}\n\n@font-face {\n  font-family: 'Bebas Neue';\n\n  font-weight: 400;\n\n  font-display: block;\n\n  src: url('/fonts/bebas.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: Montserrat;\n\n  font-weight: 200;\n\n  font-display: block;\n\n  src: url('/fonts/montserrat-200.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: Montserrat;\n\n  font-weight: 400;\n\n  font-display: block;\n\n  src: url('/fonts/montserrat.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: Montserrat;\n\n  font-weight: 500;\n\n  font-display: block;\n\n  src: url('/fonts/montserrat-500.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: Montserrat;\n\n  font-weight: 600;\n\n  font-display: block;\n\n  src: url('/fonts/montserrat-600.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: Montserrat;\n\n  font-weight: 700;\n\n  font-display: block;\n\n  src: url('/fonts/montserrat-700.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: Inter;\n\n  font-weight: 400;\n\n  font-display: block;\n\n  src: url('/fonts/inter.woff2') format('woff2');\n}\n\n.bg-space {\n  background-color: #1a1b41ff;\n}\n\n.bg-lime {\n  background-color: #baff29ff;\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-2xl {\n  border-radius: 1rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.table {\n  display: table;\n}\n\n.group:hover .group-hover\\:inline-block {\n  display: inline-block;\n}\n\n.hidden {\n  display: none;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.flex-grow-0 {\n  flex-grow: 0;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-32 {\n  height: 8rem;\n}\n\n.h-30p {\n  height: 30px;\n}\n\n.h-40p {\n  height: 40px;\n}\n\n.h-48p {\n  height: 48px;\n}\n\n.h-480p {\n  height: 480px;\n}\n\n.max-h-full {\n  max-height: 100%;\n}\n\n.max-w-full {\n  max-width: 100%;\n}\n\n.min-h-full {\n  min-height: 100%;\n}\n\n.min-w-full {\n  min-width: 100%;\n}\n\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.opacity-50 {\n  opacity: 0.5;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.p-0 {\n  padding: 0px;\n}\n\n.p-8 {\n  padding: 2rem;\n}\n\n.p-0\\.5 {\n  padding: 0.125rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.pt-0 {\n  padding-top: 0px;\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pl-5 {\n  padding-left: 1.25rem;\n}\n\n.pl-6 {\n  padding-left: 1.5rem;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.inset-0 {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.right-0 {\n  right: 0;\n}\n\n.left-0 {\n  left: 0;\n}\n\n.right-5 {\n  right: 1.25rem;\n}\n\n.left-5 {\n  left: 1.25rem;\n}\n\n.bottom-10p {\n  bottom: 10px;\n}\n\n.top-35p {\n  top: 35px;\n}\n\n.bottom-60p {\n  bottom: 60px;\n}\n\n.right-5\\% {\n  right: 5%;\n}\n\n.left-5\\% {\n  left: 5%;\n}\n\n* {\n  --tw-shadow: 0 0 #0000;\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n\n.text-dirty {\n  --tw-text-opacity: 1;\n  color: rgba(242, 242, 242, var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.w-20 {\n  width: 5rem;\n}\n\n.w-300p {\n  width: 300px;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-40 {\n  z-index: 40;\n}\n\n.z-negative {\n  z-index: -1;\n}\n\n.transform {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-90 {\n  --tw-rotate: 90deg;\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@-webkit-keyframes cycle {\n  0% {\n    top: 0px;\n  }\n\n  4% {\n    top: 0px;\n  }\n\n  16% {\n    top: 0px;\n    opacity: 1;\n    z-index: 0;\n  }\n\n  20% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  21% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n\n  92% {\n    top: -325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  96% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  100% {\n    top: 0px;\n    opacity: 1;\n  }\n}\n\n@keyframes cycle {\n  0% {\n    top: 0px;\n  }\n\n  4% {\n    top: 0px;\n  }\n\n  16% {\n    top: 0px;\n    opacity: 1;\n    z-index: 0;\n  }\n\n  20% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  21% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n\n  92% {\n    top: -325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  96% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  100% {\n    top: 0px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes cycletwo {\n  0% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  16% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  20% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  24% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  36% {\n    top: 0px;\n    opacity: 1;\n    z-index: 0;\n  }\n\n  40% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  41% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n\n  100% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n}\n\n@keyframes cycletwo {\n  0% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  16% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  20% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  24% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  36% {\n    top: 0px;\n    opacity: 1;\n    z-index: 0;\n  }\n\n  40% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  41% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n\n  100% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n}\n\n@-webkit-keyframes cyclethree {\n  0% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  36% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  40% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  44% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  56% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  60% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  61% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n\n  100% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n}\n\n@keyframes cyclethree {\n  0% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  36% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  40% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  44% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  56% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  60% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  61% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n\n  100% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n}\n\n@-webkit-keyframes cyclefour {\n  0% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  56% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  60% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  64% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  76% {\n    top: 0px;\n    opacity: 1;\n    z-index: 0;\n  }\n\n  80% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  81% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n\n  100% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n}\n\n@keyframes cyclefour {\n  0% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  56% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  60% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  64% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  76% {\n    top: 0px;\n    opacity: 1;\n    z-index: 0;\n  }\n\n  80% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  81% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n\n  100% {\n    top: -325px;\n    opacity: 0;\n    z-index: -1;\n  }\n}\n\n@-webkit-keyframes cyclefive {\n  0% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  76% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  80% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  84% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  96% {\n    top: 0px;\n    opacity: 1;\n    z-index: 0;\n  }\n\n  100% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n}\n\n@keyframes cyclefive {\n  0% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  76% {\n    top: -325px;\n    opacity: 0;\n  }\n\n  80% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  84% {\n    top: 0px;\n    opacity: 1;\n  }\n\n  96% {\n    top: 0px;\n    opacity: 1;\n    z-index: 0;\n  }\n\n  100% {\n    top: 325px;\n    opacity: 0;\n    z-index: 0;\n  }\n}\n\n@-webkit-keyframes fullexpand {\n  0%, 20%, 40%, 60%, 80%, 100% {\n    width: 0%;\n    opacity: 0;\n  }\n\n  4%, 24%, 44%, 64%, 84% {\n    width: 0%;\n    opacity: 0.3;\n  }\n\n  16%, 36%, 56%, 76%, 96% {\n    width: 100%;\n    opacity: 0.7;\n  }\n\n  17%, 37%, 57%, 77%, 97% {\n    width: 100%;\n    opacity: 0.3;\n  }\n\n  18%, 38%, 58%, 78%, 98% {\n    width: 100%;\n    opacity: 0;\n  }\n}\n\n@keyframes fullexpand {\n  0%, 20%, 40%, 60%, 80%, 100% {\n    width: 0%;\n    opacity: 0;\n  }\n\n  4%, 24%, 44%, 64%, 84% {\n    width: 0%;\n    opacity: 0.3;\n  }\n\n  16%, 36%, 56%, 76%, 96% {\n    width: 100%;\n    opacity: 0.7;\n  }\n\n  17%, 37%, 57%, 77%, 97% {\n    width: 100%;\n    opacity: 0.3;\n  }\n\n  18%, 38%, 58%, 78%, 98% {\n    width: 100%;\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes wiggle {\n  0%, 100% {\n    transform: rotate(-3deg);\n  }\n\n  50% {\n    transform: rotate(3deg);\n  }\n}\n\n@keyframes wiggle {\n  0%, 100% {\n    transform: rotate(-3deg);\n  }\n\n  50% {\n    transform: rotate(3deg);\n  }\n}\n\n@-webkit-keyframes expanse {\n  0% {\n    transform: scale(0.9);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 35px rgba(67, 65, 144, 0);\n  }\n\n  100% {\n    transform: scale(0.9);\n    box-shadow: 0 0 0 0 rgba(67, 65, 144, 0);\n  }\n}\n\n@keyframes expanse {\n  0% {\n    transform: scale(0.9);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 35px rgba(67, 65, 144, 0);\n  }\n\n  100% {\n    transform: scale(0.9);\n    box-shadow: 0 0 0 0 rgba(67, 65, 144, 0);\n  }\n}\n\n@-webkit-keyframes moveNavbarDown {\n  0% {\n    transform: translateY(-5rem);\n  }\n\n  100% {\n    transform: translateY(0rem);\n  }\n}\n\n@keyframes moveNavbarDown {\n  0% {\n    transform: translateY(-5rem);\n  }\n\n  100% {\n    transform: translateY(0rem);\n  }\n}\n\n.font-body {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.375rem;\n}\n\n.font-button {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.04rem;\n  text-transform: uppercase;\n}\n\n.hero-clip-button {\n  -webkit-clip-path: polygon(\n    3% 0,\n    97% 0,\n    100% 8%,\n    100% 92%,\n    97% 100%,\n    3% 100%,\n    0 92%,\n    0 8%\n  );\n  clip-path: polygon(\n    3% 0,\n    97% 0,\n    100% 8%,\n    100% 92%,\n    97% 100%,\n    3% 100%,\n    0 92%,\n    0 8%\n  );\n}\n\n.hero-button-shadow {\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.hero-button-wrap {\n  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));\n}\n\n.card-logo-bg-lime {\n  background-color: rgba(186, 255, 41, 0.3);\n  border-radius: 1.625rem;\n}\n\n/* product grid start */\n\n/* #columns:hover figure:not(:hover) {\n  opacity: 0.6;\n} */\n\n/* product grid end */\n\n/* modal  start */\n\n/* modal end */\n\n/* reviews start */\n\n/* reviews end */\n\n/* hamburger menu start */\n\n/* hamburger menu end */\n\n/* insta card start */\n\n/* insta card end */\n\n@media (max-width: 767px) {\n  html {\n    font-size: 55%;\n  }\n\n  /* navbar start */\n\n  /* .menu-btn:not(:checked) ~ .menu,\n  .menu-btn:not(:checked) ~ .backdrop {\n    display: none;\n  }\n\n  .menu-btn:checked ~ .menu,\n  .menu-btn:checked ~ .backdrop {\n    display: block;\n  } */\n\n  /* navbar end */\n\n  /* product gallery details start */\n\n  /* product gallery details end */\n\n  /* products list start */\n\n  /* products list end */\n}\n\n/* @layer components {\n  .btn-blue {\n    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;\n  }\n\n  .btn-blue:hover {\n    @apply bg-blue-700;\n  }\n} */\n\n@media (min-width: 768px) {\n  .md\\:top-40p {\n    top: 40px;\n  }\n}\n";
  styleInject(css_248z);

  var propTypes = {exports: {}};

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = ReactPropTypesSecret_1;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = factoryWithThrowingShims();
  }

  var PropTypes = propTypes.exports;

  var classnames$1 = {exports: {}};

  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  (function (module) {
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames() {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				if (arg.length) {
  					var inner = classNames.apply(null, arg);
  					if (inner) {
  						classes.push(inner);
  					}
  				}
  			} else if (argType === 'object') {
  				if (arg.toString === Object.prototype.toString) {
  					for (var key in arg) {
  						if (hasOwn.call(arg, key) && arg[key]) {
  							classes.push(key);
  						}
  					}
  				} else {
  					classes.push(arg.toString());
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  }(classnames$1));

  var classnames = classnames$1.exports;

  function Button({
    size,
    children,
    padding,
    handleClick,
    handleKeyDown,
    arrowDown,
    disabled,
    noArrow,
    submit
  }) {
    return /* @__PURE__ */ React__default['default'].createElement("div", {
      className: `hero-button-wrap ${padding || "p-8 pt-0"}`
    }, /* @__PURE__ */ React__default['default'].createElement("div", {
      className: "bg-lime hero-clip-button hero-button-shadow relative"
    }, /* @__PURE__ */ React__default['default'].createElement("button", {
      className: classnames("w-full flex flex-no-wrap justify-between items-center", {
        "h-48p": size === "lg",
        "h-40p": size === "md",
        "h-30p": size === "sm"
      }),
      type: submit ? "submit" : "button",
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      disabled
    }, /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classnames("flex justify-center items-center w-full", {
        "pl-6": size === "lg",
        "pl-5": size === "md",
        "pl-4": size === "sm",
        "px-6": size === "lg" && noArrow,
        "px-5": size === "md" && noArrow,
        "px-4": size === "sm" && noArrow
      })
    }, children), !noArrow && /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classnames(`flex justify-center items-center ${arrowDown ? "transform rotate-90" : ""}`, {
        "px-6": size === "lg",
        "px-5": size === "md",
        "px-4": size === "sm"
      })
    }, /* @__PURE__ */ React__default['default'].createElement("img", {
      src: "https://res.cloudinary.com/seva32/image/upload/v1605538132/arrowVector_cjpryt.svg",
      alt: "button icon"
    })))));
  }
  Button.propTypes = {
    size: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    padding: PropTypes.string,
    handleClick: PropTypes.func,
    handleKeyDown: PropTypes.func,
    arrowDown: PropTypes.bool,
    disabled: PropTypes.bool,
    noArrow: PropTypes.bool,
    submit: PropTypes.bool
  };
  Button.defaultProps = {
    padding: "",
    handleClick: void 0,
    handleKeyDown: void 0,
    arrowDown: false,
    disabled: false,
    noArrow: false,
    submit: false
  };

  const truncate = (str, max) => {
    const len = str.length;
    if (len < max)
      return str;
    return `${str.substring(0, max)}...`;
  };

  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const Link = (_a) => {
    var _b = _a, {
      children,
      className,
      onClick,
      href,
      to,
      maxLength
    } = _b, other = __objRest(_b, [
      "children",
      "className",
      "onClick",
      "href",
      "to",
      "maxLength"
    ]);
    const onKeyPressHandler = () => {
    };
    const classNames = classnames(className, {});
    const content = /* @__PURE__ */ React__default['default'].createElement(React__default['default'].Fragment, null, maxLength > 0 ? React__default['default'].Children.map(children, (child) => typeof child === "string" ? truncate(child, maxLength) : child) : children);
    if (to) {
      return /* @__PURE__ */ React__default['default'].createElement(reactRouterDom.Link, __spreadValues({
        to,
        className: classNames
      }, other), content);
    }
    if (href) {
      return /* @__PURE__ */ React__default['default'].createElement("a", __spreadValues({
        href,
        className: classNames,
        target: "_blank",
        rel: "noopener noreferrer"
      }, other), content);
    }
    if (onClick) {
      return /* @__PURE__ */ React__default['default'].createElement("span", __spreadValues({
        className: classNames,
        onClick,
        role: "link",
        tabIndex: 0,
        onKeyPress: onKeyPressHandler
      }, other), content);
    }
    return null;
  };
  Link.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    maxLength: PropTypes.number
  };
  Link.defaultProps = {
    children: null,
    className: null,
    onClick: void 0,
    href: null,
    to: null,
    maxLength: -1
  };

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
    history
  }) {
    return /* @__PURE__ */ React__default['default'].createElement("div", {
      className: `${width} ${height} bg-white rounded-md shadow overflow-hidden flex flex-col flex-no-wrap justify-between relative group`
    }, /* @__PURE__ */ React__default['default'].createElement("div", {
      className: "absolute left-5% top-35p md:top-40p card-logo-bg-lime w-20 h-20 rounded-2xl flex justify-center p-0.5 z-10"
    }, /* @__PURE__ */ React__default['default'].createElement("img", {
      src: brandLogo,
      alt: "brand logo",
      className: "relative max-h-full min-w-full max-w-full object-cover"
    })), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: `absolute ${width} ${height}`
    }, /* @__PURE__ */ React__default['default'].createElement(Link, {
      href: linkHref,
      to: linkTo
    }, /* @__PURE__ */ React__default['default'].createElement("img", {
      src: imgSrc,
      alt: "thumbnail.jpg",
      className: "min-h-full max-h-full"
    }))), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: `w-full flex-grow-0 flex justify-center items-center relative h-32 ${mainTitle ? "bg-space" : "bg-transparent"}`
    }, mainTitle && /* @__PURE__ */ React__default['default'].createElement("h2", {
      className: "text-dirty"
    }, mainTitle)), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: "relative flex flex-col"
    }, name && description && /* @__PURE__ */ React__default['default'].createElement("div", {
      className: "absolute left-5% right-5% bottom-60p px-4 rounded-lg z-0"
    }, /* @__PURE__ */ React__default['default'].createElement(Link, {
      to: linkTo,
      href: linkHref
    }, /* @__PURE__ */ React__default['default'].createElement("div", {
      className: "absolute inset-0 bg-space opacity-50 z-negative rounded-lg"
    }), /* @__PURE__ */ React__default['default'].createElement("h3", {
      className: "text-white"
    }, name), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: "hidden group-hover:inline-block font-body text-white"
    }, description))), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: "z-40 absolute bottom-10p left-0 right-0"
    }, /* @__PURE__ */ React__default['default'].createElement(Link, {
      to: buttonLinkTo,
      href: buttonLinkHref
    }, /* @__PURE__ */ React__default['default'].createElement(Button, {
      size: buttonSize,
      padding: "px-4"
    }, /* @__PURE__ */ React__default['default'].createElement("div", {
      className: "font-button whitespace-no-wrap"
    }, buttonContent))))));
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
    history: PropTypes.any,
    brandLogo: PropTypes.string.isRequired,
    buttonSize: PropTypes.string,
    buttonContent: PropTypes.node.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
  };
  Card.defaultProps = {
    mainTitle: "",
    name: "",
    description: "",
    buttonSize: "md",
    width: "w-300p",
    height: "h-480p",
    history: null,
    linkTo: void 0,
    linkHref: void 0,
    buttonLinkTo: void 0,
    buttonLinkHref: void 0
  };

  exports.Button = Button;
  exports.Card = Card;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.js.map
