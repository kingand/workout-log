angular.module('workout-log').directive('wlogExerciseDetail', function()  {
    return  {
        scope:  {
            exercise: '='
        },
        templateUrl: 'directives/exercise/exercise-detail.html'
    };
});