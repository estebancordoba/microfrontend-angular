const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    uniqueName: 'angularApp',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'angularApp',
      library: { type: 'var', name: 'angularApp' },
      filename: 'remoteEntry.js',
      exposes: {
        './AngularApp': './src/app/app.component.ts',
      },
      shared: shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      }),
    }),
  ],
};
