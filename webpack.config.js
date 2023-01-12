module.exports = {
    entry: {
        popup: './src/popup.tsx',
        content: './src/content.tsx',
    },
    output: {
        path: '/workdir/app/js',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}