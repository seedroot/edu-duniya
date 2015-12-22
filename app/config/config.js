(function () {
	'use strict'

	angular
		.module('edu')
		.constant('config', config)
		.config(appConfig);

	var config = {
		apiUrl: '' //insert api base url here
	}

	appConfig.$inject = ['$httpProvider', '$provide'];
	function appConfig ($httpProvider, $provide) {
		interceptor.$inject = ['$q', '$rootScope'];
		function interceptor ($q, $rootScope) {
			return = {
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
})();