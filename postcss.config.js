

module.exports = {
    plugins: [
        require('postcss-smart-import')({ }),
        require('postcss-color-alpha')({}),
        require('postcss-color')({}),
        require('postcss-color-mix')({}),
        require('postcss-colour-functions')(),
        require('postcss-cssnext')({}),
        require('rucksack-css')({
            autoprefixer: false,
        }),
        require('cssnano')({discardComments: {removeAll: true}}),
        require('precss')({}),
        require('lost')({}),
        require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
        require("csswring")(),
    ]
}
