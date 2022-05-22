// Karma configuration
// Generated on Sat May 21 2022 21:03:32 GMT+0800 (China Standard Time)
const webpackConfig = require('./webpack.config');

function removeRule(rules, testReg) {
  return rules.filter(rule => rule.test.toString() !== testReg.toString());
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-coverage'
    ],


    // list of files / patterns to load in the browser
    files: [
      './src/*',
      './test/**/*.spec.ts'
    ],


    // list of files / patterns to exclude
    exclude: [
      // './test/dist/src/algorithm/textAlgorithm.d.ts' // might not effect
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      'test/**/*.spec.ts': [
        'webpack',
      ],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        // { type: 'lcov', subdir: '.' }, // html文件
        { type: 'text-summary' }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,

    webpack: {
      ...webpackConfig,
      module: {
        ...webpackConfig.module,
        rules: [
          ...removeRule(webpackConfig.module.rules, /.ts$/),
          {
            test: /.ts$/,
            use: [
              'babel-loader',
              {
                loader: 'ts-loader',
                options: {
                  compilerOptions: {
                    // must be not generate declarationDir, else karma will be run fail
                    declaration: false,
                    declarationDir: undefined,
                  }
                }
              }
            ],
          },
        ]
      },
      // don't need config target entry and output
      entry: undefined,
      output: undefined,
    },
  })
}
