module.exports = function (config) {
  config.set({

    basePath: '',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',

      'tests/app.js',
      'src/providers/*.js',
      'src/components/**/*.js',

      // fixtures
      //'tests/mock/*.json',
      'tests/**/**/tests.*.js'
    ],

    autoWatch: false,

    reporters: ['junit', 'coverage', 'progress'],

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],
    port: 8080,

    preprocessors: {
      'src/providers/**/*.js': ['coverage']
    },

    junitReporter: {
      outputDir: 'tests/coverage/surefire-reports/',
      outputFile: undefined,
      suite: ''
    },

    coverageReporter: {
      type: "lcov",
      dir: 'tests/coverage',
      file: '../../lcovUT.info'
    },
    singleRun: true,
    logLevel: config.LOG_INFO
  });
};
