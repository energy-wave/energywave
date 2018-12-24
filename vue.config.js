const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    }
}