var app = angular.module('app', ['ngRoute', 'timer']);

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
            .when('/home',{
                templateUrl: 'www/views/timer/timerView.html',
                controller: 'timerController'
            })
            .when('/settings',{
                templateUrl: 'www/views/settings/settingsView.html',
                controller: 'settingsController'
            })
            .when('/main',{
                templateUrl: 'www/views/timer/timerView.html',
                controller: 'timerController'
            })
        
    });

var options = {};
options.api = {};
options.api.base_url = "http://localhost:3000";
