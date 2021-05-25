import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
// import livereload from "rollup-plugin-livereload";
// import serve from "rollup-plugin-serve";

const packageJson = require('./package.json');

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-scripts': 'ReactScripts',
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/, Object.keys(externals)],
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
    babel({
      babelHelpers: 'runtime',
      exclude: '!(node_modules/@storybook/addons/src/index.js)node_modules/**',
    }),
    commonjs(),
    // serve({
    //   open: true,
    //   verbose: true,
    //   contentBase: ["", "public"],
    //   host: "localhost",
    //   port: 3000,
    // }),
    // livereload({ watch: "lib" }),
  ],
};
