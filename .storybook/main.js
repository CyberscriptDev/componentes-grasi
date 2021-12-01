module.exports = {
  stories: [
    {
      files: "*.stories.*",
    },
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
};
