'use strict';

/**
 * @ngdoc overview
 * @name prealarmFrontendApp
 * @description
 * # prealarmFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('prealarmFrontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ng-backstretch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /
    //
    // Now set up the states
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/welcome');
    $urlRouterProvider.when('/app', '/app/main');

    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl',
        data: {
          requireLogin: false
        }
      })
      .state('app', {
        url: '/app',
        templateUrl: 'views/app.html',
        controller: 'AppCtrl',
        data: {
          requireLogin: true // this property will apply to all children of 'app'
        }
      })
      .state('app.main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        data: {
          requireLogin: true // this property will apply to all children of 'app'
        }
      })
      .state('app.about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        data: {
          requireLogin: false
        }
      });

  })
  .run(function ($rootScope, $state, loginModal) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        // get me a login modal!
        loginModal()
          .then(function () {
            return $state.go(toState.name, toParams);
          })
          .catch(function () {
            return $state.go('welcome');
          });
      }
    });

  })
  .service('loginModal', function ($uibModal, $rootScope) {

    function assignCurrentUser (user) {
      $rootScope.currentUser = user;
      return user;
    }

    return function() {
      var instance = $uibModal.open({
        templateUrl: 'views/loginModalTemplate.html',
        controller: 'LoginModalCtrl',
        controllerAs: 'LoginModalCtrl'
      })

      return instance.result.then(assignCurrentUser);
    };

  })
  .factory('UserServiceApi', function ($q) {

    return {
      login: function(email, password) {
        var deferred = $q.defer();
        if (password == 'passw0rd' && email) {
          deferred.resolve({
            uid: email,
            cn: email,
            email: email,
            title: 'Web Developer',
            thumbnailImageUrl: "images/user2-160x160.jpg",
            loginTime: new Date()
          });
        } else {
          deferred.reject('Login failed!');
        }
        return deferred.promise;
      }

    }

  })
  .controller('WelcomeCtrl', function ($rootScope, $scope, $state, UserServiceApi) {
    // Welcome Controller
    $scope.doLogin = function (email, password) {
      UserServiceApi.login(email, password).then(function (user) {
        // Login success, inject into currentUser into $rootScope
        $rootScope.currentUser = user;
        $state.go('app');
      }).catch(function() {
        $state.go('welcome');
      });
    };
  })
  .controller('AppCtrl', function ($scope, UserServiceApi) {
    // App Controller
  })
  .controller('LoginModalCtrl', function ($scope, UserServiceApi) {

    this.cancel = $scope.$dismiss;

    this.submit = function (email, password) {
      UserServiceApi.login(email, password).then(function (user) {
        $scope.$close(user);
      });
    };

  })
  .config(function ($httpProvider) {

    $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
      var loginModal, $http, $state;

      // this trick must be done so that we don't receive
      // `Uncaught Error: [$injector:cdep] Circular dependency found`
      $timeout(function () {
        loginModal = $injector.get('loginModal');
        $http = $injector.get('$http');
        $state = $injector.get('$state');
      });

      return {
        responseError: function (rejection) {
          if (rejection.status !== 401) {
            return rejection;
          }

          var deferred = $q.defer();

          loginModal()
            .then(function () {
              deferred.resolve( $http(rejection.config) );
            })
            .catch(function () {
              $state.go('welcome');
              deferred.reject(rejection);
            });

          return deferred.promise;
        }
      };
    });

  });
