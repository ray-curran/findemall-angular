angular.module('MyApp', ['ngRoute', 'uiGmapgoogle-maps'])
  .config(function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
      })
      .otherwise({
        templateUrl: 'partials/404.html'
      });


    uiGmapGoogleMapApiProvider.configure({
         //    key: 'your api key',
         v: '3.25', //defaults to latest 3.X anyhow
         libraries: 'weather,geometry,visualization'
     });

  })
  .run(function($rootScope, $window) {
    if ($window.localStorage.user) {
      $rootScope.currentUser = JSON.parse($window.localStorage.user);
    }
  });
