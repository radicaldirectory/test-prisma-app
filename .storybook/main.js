const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    //these ones do not work due to aliases not working? try removing?
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    //these ones work:
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "storybook-css-modules-preset"
  ]
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   config.module.rules.find(
  //     (rule) => rule.test.toString() === "/\\.css$/"
  //   ).exclude = /\.module\.css$/;

  //   config.module.rules.push({
  //     test: /\.module\.css$/,
  //     include: path.resolve(__dirname, "../components"),
  //     use: [
  //       "style-loader",
  //       {
  //         loader: "css-loader",
  //         options: {
  //           importLoaders: 1,
  //           modules: true
  //         }
  //       }
  //     ]
  //   });

  // config.resolve.plugins = [
  //   new TsconfigPathsPlugin({
  //     configFile: path.resolve(__dirname, "../tsconfig.json")
  //   })
  // ];

  //   // Return the altered config
  //   return config;
  // }
};
