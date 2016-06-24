
angular.module('flapperNews', ['ui.router','templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  .state('posts', {
    url: '/posts/{id}',
    templateUrl: 'posts/_posts.html',
    controller: 'PostsCtrl'
  });
  function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }])
