const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = async ({ config }) => {
    config.resolve.extensions.push('.vue', '.css', '.less', '.scss', '.sass', '.html')
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                // Use for external files if necessary
                // options: {
                //     data: `
				// 		@import "@/scss/common/_functions.scss";
				// 		@import "@/scss/variables/_global.scss";
				// 		@import "@/scss/variables/_media.scss";
				// 		@import "@/scss/common/_mixins.scss";
				// 		@import "@/scss/common/_media.scss";
				// 	`
                // }
            }
        ],
    })
    config.module.rules.push({ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' });
    config.module.rules.push({
        test: /\.(stories|story)\.mdx$/,
        use: [
            {
                loader: 'babel-loader',
            },
            {
                loader: '@mdx-js/loader',
                options: {
                    compilers: [createCompiler({})],
                },
            },
        ],
    });
    config.module.rules.push({
        test: /\.(stories|story)\.[tj]sx?$/,
        loader: require.resolve('@storybook/source-loader'),
        exclude: [/node_modules/],
        enforce: 'pre',
    });
    return config;
};