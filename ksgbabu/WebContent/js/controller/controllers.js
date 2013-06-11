function HomeController($scope){

	$scope.greeting = "Welcome to ksgababu.com";
	
}

function LoginController($scope, $http){
	
	$scope.action = function(){
		var url = "http://localhost:8080/ksgbabu/myjson.json";
		  
		        $http({method: 'GET', url: url}).
		              success(function(data, status) {
		                $scope.status = status;
		                $scope.data = data;
		                window.alert(data);
		              }).
		              error(function(data, status) {
		                $scope.data = data || "Request failed";
		                $scope.status = status;
		              });
		   
	
		
	}
}

function HomeMenuController($scope){
	$scope.menuItems={1:"Home",2:"All about Me", 3:"Bolg", 4:"Login"};
}