app.config(function($routeProvider) {
        $routeProvider
			.when('/', {
                templateUrl : 'template/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'template/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'template/contact.html',
                controller  : 'contactController'
            });
    });