var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            //the timeline display
            .when('/', {
                templateUrl: 'www/views/login/loginView.html',
                controller: 'loginController'
            })
            //the login display
            .when('/privacy_policy', {
                templateUrl: 'www/views/privacy/privacyView.html',
                controller: 'privacyController'
            })
            .when('/main',{
                templateUrl: 'main.html',
                controller: 'mainController'
            })

    });

var options = {};
options.api = {};
options.api.base_url = "http://localhost:3000";
