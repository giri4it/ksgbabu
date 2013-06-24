function HomeController($scope) {

	$scope.greeting = "Welcome to ksgababu.com";

}

function LoginController($scope, $http) {

	$scope.action = function() {
		var url = "http://localhost:8080/ksgbabu/myjson.json";

		$http({
			method : 'GET',
			url : url
		}).success(function(data, status) {
			$scope.status = status;
			$scope.data = data;
			window.alert(data);
		}).error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;
		});

	}
}

function HomeMenuController($scope) {
	$scope.menuItems = {
		1 : "Home",
		2 : "All about Me",
		3 : "Bolg",
		4 : "Login"
	};
}

function RegistrationController($scope, $http) {

	$scope.register = function() {
		var url = "rest/register";
		var postData = {
			"userName" : $scope.userName,
			"password" : $scope.password
		};
		alert("user Name "+ $scope.userName);
		var config = {};
		$http.post(url, postData, config
		).success(function(data, status, header, config) {
			alert("success"+status);
			$scope.status = status;
			$scope.data = data;
			window.alert(data.Success);
		}).error(function(data, status, header, config) {
			alert("error"+status);
			$scope.data = data || "Request failed";
			$scope.status = status;
		});
	}
}