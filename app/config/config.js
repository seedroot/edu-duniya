(function () {
	'use strict'

	var config = {
		apiUrl: 'http://ec2-54-88-231-184.compute-1.amazonaws.com:3000/api', //insert api base url here
		hostname: '' // this will be inserted from run module
	}

	angular
		.module('edu')
		.constant('config', config)
		.config(interceptorConfig)
		.run(appStart);

	interceptorConfig.$inject = ['$httpProvider', '$provide'];
	function interceptorConfig ($httpProvider, $provide) {
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

	appStart.$inject = ['$state', 'notify'];
	function appStart ($state, notify) {
		var subdomain = window.location.hostname.split('.')[0];
		if(subdomain == 'www'){
			if(window.location.href.indexOf('/#/') == -1){
				$state.go('main');
			}
		}
		else{
			if(!config.hostname){
				config.hostname = subdomain;
				if(window.location.href.indexOf('/#/') == -1){
					$state.go('subdomain');
				}
			}
		}

		notify.config({
			startTop:60,
			position: 'right'
		});
	}
})();
