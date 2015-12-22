(function () {
	'use strict'

	angular
		.module('edu', ['ui.router'])
		.config(appConfig)

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
				url: '/main',
				templateUrl: 'app/settings/settings.html',
				controller: 'settingsController',
				controllerAs: 'vm'
			})
	}
})();