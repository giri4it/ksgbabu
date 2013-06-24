angular.module('app', []).config(
		[ '$routeProvider', function($routeProvider) {
						
			$routeProvider.when('/home', {
				templateUrl : 'partials/home.html',
				controller : HomeController
			});
			$routeProvider.when('/poker/register', {
				templateUrl : 'partials/poker/register.html',
				controller : RegistrationController
			});
			$routeProvider.when('/pokerHome', {
				templateUrl : 'partials/poker/pokerHome.html',
				controller : HomeController
			});
			$routeProvider.when('/login', {
				templateUrl : 'partials/login.html',
				controller : LoginController
			}).otherwise({
				redirectTo : '/home'
			});
		} ]);