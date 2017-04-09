angular
    .module('myApp', ['ui.router', 'ngMaterial', 'ngAria', 'angularLoad']);

// Declare app level module which depends on views, and components
angular.module('myApp')
    .config([
        '$locationProvider', '$urlRouterProvider', '$stateProvider',
        function($locationProvider, $urlRouterProvider, $stateProvider) {
            //$locationProvider.hashPrefix('#');

            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home',
                {
                    url: '/home',
                    templateUrl: '/scripts/app/views/home.html',
                    controller: 'homeController'
                })
                .state('layout-demo',
                {
                    url:'/layout-demo',
                    templateUrl: '/scripts/app/views/layout-demo.html',
                    controller:'layoutDemoController'
                });

        }
    ])
    .run(['$rootScope','$state', function($rootScope, $state) {
        console.log('Running App');
        $rootScope.$state = $state;
    }]);