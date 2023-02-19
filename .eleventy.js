const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {
  config.addPlugin(syntaxHighlight);

  config.addWatchTarget("./assets/css");

  config.addPassthroughCopy("./assets");
  config.addPassthroughCopy("./src/**/*.{jpg,png}");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
