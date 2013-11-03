// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries
      'bower_components/jquery/jquery.js',
      'bower_components/jquery-throttle-debounce/jquery.ba-throttle-debounce.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      // our app
      'js/*.js',

      // tests
      'test/*.js',

      // templates
      'tpl/*.html'
    ],

    // generate js files from html templates
    preprocessors: {
      'tpl/*.html': 'ng-html2js'
    },

    autoWatch: true
    // browsers: ['Chrome']
  });
};
