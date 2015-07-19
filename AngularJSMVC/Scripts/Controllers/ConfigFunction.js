var ConfigFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo', {
            templateUrl: 'routesDemo/two'
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
}
ConfigFunction.$inject = ['$routeProvider'];
