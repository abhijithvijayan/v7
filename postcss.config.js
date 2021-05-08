module.exports = {
    plugins: {
        'tailwindcss': {
            config: './tailwind.config.js'
        },
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
    },
}