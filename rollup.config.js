import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import path from 'path';

import pkg from './package.json';

const PROJECT_NODE_MODULES = path.resolve(__dirname, './node_modules');

export default {
  input: 'src/index.js',
  external: ['react-router', 'react-router-dom', /@babel\/runtime/],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    alias({
      entries: [
        {
          find: 'react-router-dom',
          replacement: path.join(PROJECT_NODE_MODULES, 'react-router-dom/'),
        },
      ],
    }),
    external(),
    postcss({
      modules: false,
    }),
    url(),
    babel({
      babelHelpers: 'runtime',
      exclude: ['node_modules/**', '*.stories.js'],
      presets: ['@babel/react'],
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    json(),
  ],
};
