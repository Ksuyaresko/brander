module.exports = {
    plugins: [
        require('postcss-smart-import')({ }),
        require('cssnano')({discardComments: {removeAll: true}}),
        require('precss')(),
        require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
        require("csswring")(),

    ]
}