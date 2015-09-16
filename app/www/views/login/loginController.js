angular.module('app')

    .controller('loginController', function ($scope, $location) {
        $scope.user = {id: '', password: ''};
        $scope.error_message = '';

        $scope.login = function () {
            //placeholder: check if MN and password are correct ==true
            if ($scope.user.id == $scope.user.password) {
                //placeholder: check if privacy policy has been accepted == false
                if (1 == 1) {
                    $location.path("/privacy_policy");
                } else {
                    //placeholder: redirect to first page when logged in
                    $location.path("/main");
                }
            } else {
                $scope.error_message = 'login failed for ' + $scope.user.id;
            }
        };
    });