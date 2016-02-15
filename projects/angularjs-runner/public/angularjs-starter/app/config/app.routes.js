app.config(function($routeProvider, $httpProvider) {
	$routeProvider.when('/', {
		templateUrl : '/angularjs-starter/app/views/login.html',
		controller : 'loginController'
	}).when('/directives', {
		templateUrl : '/angularjs-starter/app/views/directives.html',
		controller : 'directivesController'
	}).when('/resources', {
		templateUrl : '/angularjs-starter/app/views/resources.html',
		controller : 'resourcesController'
	}).when('/profile', {
		templateUrl : '/angularjs-starter/app/views/profile.html',
		controller : 'profileController'
	}).otherwise('/');

});
