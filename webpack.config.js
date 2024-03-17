module.exports = (env, argv) => {
  const mode = argv.mode || 'development'; // Fallback to 'development' if mode isn't specified
  // You can still use `env` for additional environment-specific parameters
  const configPath = `./config/webpack.${mode}.js`;

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const config = require(configPath);

  // Optionally adjust the config here based on `env` or `argv`

  return config;
};
