var appMain = angular.module('appMain', []);

appMain.controller('ctrlMain', ['$scope',  function($scope) {	
	$scope.AppInfo = { 
		"AppName" : "Corner Z", 
		"About" : "A web site from Z",
		"VersionInfo" : [
			{"Version" : "0.0.1", "Description" : "Test version"}
		]
	};
}]);