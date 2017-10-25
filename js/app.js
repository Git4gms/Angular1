var app = angular.module('testApp', ['ngRoute']);

app.controller('homeController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});
app.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});
app.controller('aboutController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});
app.controller('contactController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

