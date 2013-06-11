angular.module('app', []).config(
		[ '$routeProvider', function($routeProvider) {
						
			$routeProvider.when('/home', {
				templateUrl : 'partials/home.html',
				controller : HomeController
			});
			$routeProvider.when('/login', {
				templateUrl : 'partials/login.html',
				controller : LoginController
			}).otherwise({
				redirectTo : '/home'
			});
		} ]);