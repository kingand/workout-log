angular.module('workout-log').config(['$routeProvider',
    function($routeProvider)  {
        $routeProvider
            .when('/',
                {
                    redirectTo: '/dashboard'
                }
            )
            .when('/dashboard',
                {
                    templateUrl: 'views/dashboard/dashboardView.html',
                    controller: 'DashboardController'
                }
            )
            .otherwise(
                {
                    redirectTo: '/'
                }
            );
    }
]);