module.exports = function(config) {
  config.set({
    basePath: 'tests/',
    browsers: ['PhantomJS'],
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
    files: [
      '**/*.js'
    ],
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    preprocessors: {
      '**/*.js': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }],
        postLoaders: [{
          test: /\.js$/,
          exclude: /(node_modules|tests)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
