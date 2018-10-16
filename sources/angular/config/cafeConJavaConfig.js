ccjApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/principal.html",
            controller: "cafeConJavaController"
        })
        .when("/cafe_con_java", {
            templateUrl: "pages/principal.html",
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