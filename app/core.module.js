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
						controller: 'EduDuniyaController',
						controllerAs: 'vm'
					}
				}
			})
			.state('subdomain', {
				url: '/landing',
				views: {
					"main": {
						templateUrl: 'app/subdomain/sub-domain.html',
						controller: 'SubdomainController',
						controllerAs: 'vm'
					}
				}
			})
			.state('login', {
				url: '/login',
				views: {
					"main": {
						templateUrl: 'app/authentication/login.html',
						controller: 'LoginController',
						controllerAs: 'vm'
					}
				}
			})
			.state('register', {
				url: '/register',
				views: {
					"main": {
						templateUrl: 'app/authentication/register.html',
						controller: 'RegisterController',
						controllerAs: 'vm'
					}
				}
			})
			.state('settings', {
				url: '/settings',
				views: {
					"main": {
						templateUrl: 'app/settings/settings.html',
						controller: 'SettingsController',
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
						controller: 'AdmissionController',
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
			.state('general', {
				url: '/settings/general',
				views: {
					"main": {
						templateUrl: 'app/settings/general.html',
						controller: 'GeneralSettingController',
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
			.state('course', {
				url: '/settings/course',
				views: {
					"main": {
						templateUrl: 'app/settings/course.html',
						controller: 'CourseController',
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
			.state('batch', {
				url: '/settings/batch',
				views: {
					"main": {
						templateUrl: 'app/settings/batch.html',
						controller: 'BatchController',
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
			.state('subjects', {
				url: '/settings/subjects',
				views: {
					"main": {
						templateUrl: 'app/settings/subjects.html',
						controller: 'subjectsController',
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