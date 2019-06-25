var mainAngular = angular.module('mainApp',['ngRoute', 'ngAnimate']);

mainAngular.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/page1',{
            templateUrl: 'page1.html'
        })
        .when('/page2',{
            templateUrl: 'page2.html'
        })
        .when('/page3',{
            templateUrl: 'page3.html'
        })
        .when('/page4',{
            templateUrl: 'page4.html'
        })
        .otherwise({
            redirectTo: '/page1'
        });

    $locationProvider.hashPrefix('');

});