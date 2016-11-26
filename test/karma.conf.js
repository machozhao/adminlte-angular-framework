// Karma configuration
// Generated on 2016-11-05

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'bower_components/eve-raphael/eve.js',
      'bower_components/raphael/raphael.min.js',
      'bower_components/mocha/mocha.js',
      'bower_components/morris.js/morris.js',
      'bower_components/jvectormap/jquery-jvectormap.js',
      'bower_components/jvectormap/tests/assets/jquery-jvectormap-world-mill-en.js',
      'bower_components/gnob/gnob.js',
      'bower_components/underscore/underscore.js',
      'bower_components/moment/moment.js',
      'bower_components/timepicker/lib/timepicker/timepicker.js',
      'bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',
      'bower_components/daterangepicker/lib/daterangepicker/daterangepicker.js',
      'bower_components/datepicker/js/bootstrap-datepicker.js',
      'bower_components/bootstrap-wysihtml5/src/bootstrap-wysihtml5.js',
      'bower_components/jquery-slimscroll/jquery.slimscroll.js',
      'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
      'bower_components/fastclick/lib/fastclick.js',
      'bower_components/bootstrap-slider/bootstrap-slider.js',
      'bower_components/chart.js/dist/Chart.js',
      'bower_components/ckeditor/ckeditor.js',
      'bower_components/colorpicker/jquery.colorpicker.js',
      'bower_components/datatables/media/js/jquery.dataTables.js',
      'bower_components/Flot/jquery.flot.js',
      'bower_components/fullcalendar/dist/fullcalendar.js',
      'bower_components/iCheck/icheck.min.js',
      'bower_components/PACE/pace.js',
      'bower_components/select2/dist/js/select2.js',
      'bower_components/jt.timepicker/jquery.timepicker.js',
      'bower_components/AdminLTE/dist/js/app.js',
      'bower_components/AdminLTE/dist/js/demo.js',
      'bower_components/ng-backstretch/dist/ng-backstretch.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
