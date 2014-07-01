var myapp = angular.module('myapp', ['ui.router']);
myapp.config(function($stateProvider,$locationProvider,$urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/index");
  //
  // Now set up the states
  $stateProvider
    .state('reddit', {
      url: "/reddit",
      templateUrl: "partials/reddit.ejs",
      controller: redditCtrl
    })
    .state('index', {
      url: "/",
      
      templateUrl: "partials/a.ejs"
    })
    .state('dcard', {
      url: "/dcard",
      templateUrl: "partials/dcard.ejs",

      controller: dcardCtrl
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});