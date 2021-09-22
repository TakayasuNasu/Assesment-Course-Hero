const CracoAlias = require("craco-alias");

module.exports = {
  mode: process.env.REACT_APP_ENVIROMENT,
  output: {
    path: __dirname,
  },
  webpack: {
    configure: {},
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
