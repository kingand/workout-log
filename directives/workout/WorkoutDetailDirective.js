angular.module('workout-log').directive('wlogWorkoutDetail', function()  {
    return  {
        scope:  {
            workout: '='
        },
        templateUrl: 'directives/workout/workout-detail.html'
    };
});