(function () {
	'use strict'

	angular
		.module('edu', ['ui.router'])
		.config(appConfig)

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'app/authentication/login.html',
				controller: 'loginController',
				controllerAs: 'vm'
			})
			.state('main', {
				url: '/main',
				templateUrl: 'app/settings/settings.html',
				controller: 'settingsController',
				controllerAs: 'vm'
			})
			.state('general-setting', {
				url: '/setting/general',
				templateUrl: 'app/settings/general-setting.html',
				controller: 'generalsettingController',
				controllerAs: 'vm'
			})
			.state('course-class', {
				url: '/setting/course',
				templateUrl: 'app/settings/course-class.html',
				controller: 'courseclassController',
				controllerAs: 'vm'
			})
			.state('batch-group', {
				url: '/setting/group',
				templateUrl: 'app/settings/batch-group.html',
				controller: 'batchgroupController',
				controllerAs: 'vm'
			})
	}
})();