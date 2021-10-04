const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/control.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist'
    }
};