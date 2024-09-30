// config-overrides.js
const { override } = require('customize-cra');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = override((config) => {
  if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'GenerateSW'
    );

   
    config.plugins.push(
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/custom-service-worker.js',
        swDest: 'service-worker.js',
      })
    );
  }
  return config;
});
