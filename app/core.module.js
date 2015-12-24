(function () {
	'use strict'

	angular
		.module('edu', ['ui.router'])
		.config(appConfig)

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig ($stateProvider, $urlRouterProvider) {
		console.log('appConfig');
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'app/common/edu-duniya.html',
				controller: 'eduDuniyaController',
				controllerAs: 'vm'
			})
			.state('subdomain', {
				url: '/',
				templateUrl: 'app/common/sub-domain.html',
				controller: 'subDomainController',
				controllerAs: 'vm'
			})
			.state('settings', {
				url: '/settings',
				templateUrl: 'app/settings/settings.html',
				controller: 'settingsController',
				controllerAs: 'vm'
			})
	}
})();