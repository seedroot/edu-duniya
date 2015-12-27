(function () {
	'use strict'

	angular
		.module('edu', ['ui.router'])
		.config(appConfig)

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
				url: '/home',
				views: {
					"main": {
						templateUrl: 'app/eduduniya/edu-duniya.html',
						controller: 'eduDuniyaController',
						controllerAs: 'vm'
					}
				}
			})
			.state('subdomain', {
				url: '/landing',
				views: {
					"main": {
						templateUrl: 'app/subdomain/sub-domain.html',
						controller: 'subDomainController',
						controllerAs: 'vm'
					}
				}
			})
			.state('login', {
				url: '/login',
				views: {
					"main": {
						templateUrl: 'app/authentication/login.html',
						controller: 'loginController',
						controllerAs: 'vm'
					}
				}
			})
			.state('settings', {
				url: '/settings',
				views: {
					"main": {
						templateUrl: 'app/settings/settings.html',
						controller: 'settingsController',
						controllerAs: 'vm'
					},
					"header": {
						templateUrl: 'app/layouts/header.html',
						controller: 'headerController',
						controllerAs: 'vm'
					},
					"menu": {
						templateUrl: 'app/layouts/side-menu.html',
						controller: 'menuController',
						controllerAs: 'vm'
					},
					"footer": {
						templateUrl: 'app/layouts/footer.html',
						controller: 'footerController',
						controllerAs: 'vm'
					}
				}
			})
			.state('admission', {
				url: '/settings/admission',
				views: {
					"main": {
						templateUrl: 'app/settings/admission.html',
						controller: 'admissionController',
						controllerAs: 'vm'
					},
					"header": {
						templateUrl: 'app/layouts/header.html',
						controller: 'headerController',
						controllerAs: 'vm'
					},
					"menu": {
						templateUrl: 'app/layouts/side-menu.html',
						controller: 'menuController',
						controllerAs: 'vm'
					},
					"footer": {
						templateUrl: 'app/layouts/footer.html',
						controller: 'footerController',
						controllerAs: 'vm'
					}
				}
			})
	}
})();