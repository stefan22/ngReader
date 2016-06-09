var myApp = angular.module('myApp',[
	'ngRoute'

]);

myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'views/home.html',
		controller:'HomeController'
	}).when('/settings', {
		templateUrl:'views/settings.html',
		controller:'SettingsController'
	}).
	otherwise({
		redirectTo: '/'
	});
});



myApp.controller('HomeController', ['$scope', function($scope) {
	$scope.welcome = "hey wasup!";

	$scope.selectedMail;

	$scope.setSelectedMail = function(mail) {
		$scope.selectedMail = mail;
	};

	$scope.isSelected = function(mail) {
		if($scope.selectedMail) {
			return $scope.selectedMail == mail;
		}
	}
}]);


myApp.controller('MailListingController', ['$scope','$http', function($scope,$http) {
	$scope.email = [];

	$http({
		method:'GET',
		url:'src/js/mail.json'
	}).
	success(function(data,status,headers) {
		$scope.email = data.all;
		console.log('yay');
	}).
	error(function(data,status,headers) {
		console.log('no way!');
	});

}]);


myApp.controller('ContentController', ['$scope', function($scope) {

}]);


myApp.controller('SettingsController', ['$scope', function($scope) {
	$scope.settings = {
		name: "Max",
		email: "max@maximus.com"
	};

}]);



