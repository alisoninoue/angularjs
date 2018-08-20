angular.module('alurapic',['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        // foto no singular!

        $routeProvider.when('/foto/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });


        $routeProvider.when('/foto/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.otherwise({redirectTo: '/fotos'});

    });