/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
// import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import configureStore from '../utils/configureStore';

// const initialState = {
//   app: {
//     name: 'Pizza Delivery',
//   },
// };
// const store = configureStore({ initialState });
// export default class Wrapper extends Component {
//   render() {
//     return <Provider store={store}>{this.props.children}</Provider>;
//   }
// }

import React from 'react';
import PropTypes from 'prop-types';

import '../src/styles/tailwind.css';

function Wrapper({ children }) {
  return <div>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
