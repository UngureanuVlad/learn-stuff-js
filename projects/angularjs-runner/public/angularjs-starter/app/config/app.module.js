var app = angular
		.module('learnstuff', [ 'ngResource', 'toastr', 'ngAnimate', 'ngRoute', 'ui.bootstrap', 'ngFileUpload' ])
		.config(
				[
						'$httpProvider',
						function($httpProvider) {
							$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
						} ]);
app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{{');
	$interpolateProvider.endSymbol('}}');
});

app.config(function(toastrConfig) {
	angular.extend(toastrConfig, {
		autoDismiss : false,
		containerId : 'toast-container',
		closeButton : true,
		debug : false,
		newestOnTop : false,
		progressBar : true,
		positionClass : 'toast-top-center',
		showDuration : '300',
		hideDuration : '1000',
		timeOut : '5000',
		extendedTimeOut : '1000',
		showEasing : 'swing',
		hideEasing : 'linear',
		showMethod : 'fadeIn',
		hideMethod : 'fadeOut',
		maxOpened : 0,
		newestOnTop : true,
		positionClass : 'toast-top-right',
		preventDuplicates : false,
		preventOpenDuplicates : false,
		target : 'body'
	});
});
