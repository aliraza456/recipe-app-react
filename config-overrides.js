const { override } = require('customize-cra');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = override((config) => {
  if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'GenerateSW'
    );

    config.plugins.push(
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './public/custom-service-worker.js', 
        swDest: './src/serviceWorkerRegistration.js', 
      })
    );
  }
  return config;
});
