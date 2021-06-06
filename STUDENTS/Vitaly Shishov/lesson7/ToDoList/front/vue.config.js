const path = require('path');

module.exports = {
    devServer: {
        port: 8080,
        hot: true,
        open: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set('@core', path.join(__dirname, 'src', 'core'));
        config.resolve.alias.set('@api', path.join(__dirname, 'src', 'core', 'api'));
        config.resolve.alias.set('@store', path.join(__dirname, 'src', 'core', 'store'));
    }
}
