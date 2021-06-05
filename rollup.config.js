// import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';

const name = require('./package.json').main.replace(/\.js$/, '');

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-scripts': 'ReactScripts',
};

const bundle = (config) => ({
  ...config,
  input: 'src/index.js',
  // external: (id) => !/^[./]/.test(id),
  external: [/@babel\/runtime/, Object.keys(externals)],
});

export default [
  bundle({
    plugins: [
      image(),
      postcss({
        extensions: ['.css'],
      }),
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      peerDepsExternal(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      }),
      commonjs(),
      esbuild({
        // All options are optional
        include: /\.[jt]sx?$/, // default, inferred from `loaders` option
        exclude: /node_modules/, // default
        sourceMap: false, // default
        minify: process.env.NODE_ENV === 'production',
        target: 'es2017', // default, or 'es20XX', 'esnext'
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        tsconfig: 'tsconfig.json', // default
        // Add extra loaders
        loaders: {
          // Add .json files support
          // require @rollup/plugin-commonjs
          '.json': 'json',
          // Enable JSX in .js files too
          '.js': 'jsx',
        },
      }),
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'umd',
        sourcemap: true,
        exports: 'named',
        name: 'lime',
        globals: {
          '@babel/runtime/helpers/esm/inheritsLoose': '_inheritsLoose',
          '@babel/runtime/helpers/esm/extends': '_extends',
          '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose':
            '_objectWithoutPropertiesLoose',
        },
      },
      // {
      //   file: `${name}.mjs`,
      //   format: 'es',
      //   sourcemap: true,
      //   exports: 'named',
      // },
    ],
  }),
  // bundle({
  //   plugins: [
  //     image(),
  //     postcss({
  //       extensions: ['.css'],
  //     }),
  //     nodeResolve({
  //       extensions: ['.js', '.jsx'],
  //     }),
  //     peerDepsExternal(),
  //     replace({
  //       'process.env.NODE_ENV': JSON.stringify('production'),
  //       preventAssignment: true,
  //     }),
  //     commonjs(),
  //     dts(),
  //   ],
  //   output: {
  //     file: `${name}.d.ts`,
  //     format: 'es',
  //     exports: 'named',
  //   },
  // }),
];
