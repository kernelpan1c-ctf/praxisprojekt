angular.module('app')

    .controller('privacyController', function($scope, $location){
    $scope.eror_message = '';

    $scope.privacy = function(){
        $location.path("/main");
    };
    //TODO: Weiterleitung auf eine Fehler/Infoseite
    $scope.decline = function(){
        //$location.path("/");
    };
});