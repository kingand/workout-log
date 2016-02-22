angular.module('workout-log').controller('DashboardController', function($scope, $routeParams, $http)  {
    $scope.workouts = [];

    init();

    function init()  {
        $http.get('data/workouts.json').success(function(data) {
            $scope.workouts = data.workouts;
        });
    }
});