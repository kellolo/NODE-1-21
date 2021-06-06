const path = require('path');

module.exports = {
  devServer: {
    proxy: 'http://localhost:5000'
  },
  chainWebpack: config => {
    config.resolve.alias.set('@api', path.join(__dirname, 'src', 'core', 'api'));
    config.resolve.alias.set('@views', path.join(__dirname, 'src', 'views'));
    config.resolve.alias.set('@components', path.join(__dirname, 'src', 'components'));
    config.resolve.alias.set('@store', path.join(__dirname, 'src', 'core', 'store'));
    config.resolve.alias.set('@core', path.join(__dirname, 'src', 'core'));
    config.resolve.alias.set('@plugins', path.join(__dirname, 'src', 'core', 'plugins'));
  }
};