ccjApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/cafeconjava.html",
            controller: "cafeConJavaController"
        })
        .when("/principal", {
            templateUrl: "pages/cafeconjava.html",
            controller: "cafeConJavaController",
        })
        .when("/temporadas", {
            templateUrl: "pages/temporadas.html",
            controller: "cafeConJavaController",
        })
        .when("/fotos", {
            templateUrl: "pages/fotos.html",
            controller: "cafeConJavaController",
        })
        .when("/especiales", {
            templateUrl: "pages/especiales.html",
            controller: "cafeConJavaController",
        })

        .otherwise({
            redirectTo: "/"
        });

    ;
    $locationProvider.html5Mode(true);

}]);