(function () {
	'use strict'

	var config = {
		apiUrl: '', //insert api base url here
		hostname: ''
	}

	angular
		.module('edu')
		.constant('config', config)
		.config(interceptorConfig)
		.config(appStart);

	interceptorConfig.$inject = ['$httpProvider', '$provide'];
	function interceptorConfig ($httpProvider, $provide) {
		console.log('interceptorConfig');
		interceptor.$inject = ['$q', '$rootScope'];
		function interceptor ($q, $rootScope) {
			return {
				'request': function (config) {
					if(window.localStorage.getItem('authToken')){
						config.headers.authToken = window.localStorage.getItem('authToken');
					}
					return config || $q.when(config);
				},
				'response': function (response) {
					return response || $q.when(response);
				},
				'requestError': function (rejection) {
					return $q.when(rejection);
				},
				'responseError': function (rejection) {
					return $q.when(rejection);
				}
			};
		}

		$provide.factory('httpInterceptor', interceptor);
		$httpProvider.interceptors.push('httpInterceptor');
	}

	appStart.$inject = ['$injector'];
	function appStart ($injector) {
		console.log('appStart');
		console.log(window.location.hostname.split('.')[0]);
		var subdomain = window.location.hostname.split('.')[0];
		if(subdomain == 'www'){
			$injector.get('$state').go('main');
		}
		else{
			config.hostname = subdomain;
			$injector.get('$state').go('subdomain');
		}
	}
})();