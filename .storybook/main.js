module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  babel: async (options) => ({
    ...options,
    // any extra options you want to set
  }),
};
