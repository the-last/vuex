module.exports = {
    // webpack 的配置
    // module: {
    //   rules: [
    //     {
    //       resourceQuery: /blockType=docs/,
    //       loader: require.resolve('./docs-loader.js')
    //     }
    //   ]
    // }
    configureWebpack: (config) => {
        config.module.rules.push({
        // 
        //   test: /(.*\/)*([^.]+).docs/,
        //   loader: require.resolve('./docs-loader.js')
            resourceQuery: /blockType=docs/,
            loader: require.resolve('./docs-loader.js')
        });

        config.module.rules.push({
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]_[hash:base64:8]'
                    }
                },
                'style-loader'
            ]
        })

    }
}