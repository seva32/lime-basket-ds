const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.jsx',
  ignore: ['**/*.stories.js', 'index.js'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper'),
  },
  defaultExample: path.join(__dirname, 'styleguide/DefaultExample.md'),
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
          ],
          include: [
            path.join(__dirname, 'src/styles'),
            path.join(__dirname, 'styleguide'),
          ],
        },
      ],
    },
  },
  require: [path.join(__dirname, './src/styles/tailwind.css')],
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
        {
          name: 'Lime Basket site',
          external: true,
          href: 'https://seva32.tk',
        },
      ],
    },
    {
      name: 'Lime Basket UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/[A-Z]*.jsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
};
