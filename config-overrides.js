const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "process": require.resolve("process/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "assert": require.resolve("assert/"),
        "os": require.resolve("os-browserify/browser"),
        "path": require.resolve("path-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),
        "fs": false,  // Disable fs polyfill
        "worker_threads": false,
        "module": false,  // Disable module polyfill
    });
    config.resolve.fallback = fallback;

    config.plugins = (config.plugins || []).concat([new webpack.ProvidePlugin({
        process: 'process/browser', Buffer: ['buffer', 'Buffer'],  // Ensure Buffer is polyfilled
    }),]);

    config.mode = 'production';
    config.devtool = false;

    return config;
};
