(function () {
	'use strict'

	angular
		.module('edu', ['ui.router', 'cgNotify', 'ngStorage', 'ngFileUpload'])
		.config(appConfig)

	getInstitutes.$inject = ['adminService'];
	function getInstitutes (adminService) {
		return adminService.getInstitutes();
	}

	getCourses.$inject = ['settingsService', '$stateParams'];
	function getCourses (settingsService, $stateParams) {
		return settingsService.getCourses($stateParams.id);
	}

	getBatches.$inject = ['settingsService', '$stateParams'];
	function getBatches (settingsService, $stateParams) {
		return settingsService.getBatches($stateParams.id);
	}

	getAdmissions.$inject = ['settingsService', '$stateParams'];
	function getAdmissions (settingsService, $stateParams) {
		return settingsService.getAdmissions($stateParams.id)
	}

	getSettings.$inject = ['settingsService', '$stateParams'];
	function getSettings (settingsService, $stateParams) {
		return settingsService.getGeneralSettings($stateParams.id);
	}

	getDomain.$inject = ['DomainSettings'];
	function getDomain (DomainSettings){
		return DomainSettings.getDomain();
	}

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('blank', {
				url: '/student',
				views: {
					"main": {
						template: ''
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
				},
				resolve: {
					domain: getDomain
				}
			})
			.state('find', {
				url: '/find',
				views: {
					"main": {
						templateUrl: 'app/admin/institutes.html',
						controller: 'FindInstitutesController',
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
			.state('student', {
				url: '/settings/:id/student',
				views: {
					"main": {
						templateUrl: 'app/admission/studentdetail.html',
						controller: 'AddStudentController',
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
			.state('employee',{
				url:'/settings/:id/employee',
				views: {
					"main": {
						templateUrl: 'app/admission/employeedetail.html',
						controller: 'AddEmployeeController',
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
			.state('approval', {
				url: '/approval',
				views: {
					"main": {
						templateUrl: 'app/admin/approval.html',
						controller: 'ApprovalController',
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
				},
				resolve: {
					institutes: getInstitutes
				}
			})
			.state('settings', {
				url: '/settings/:id',
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
				url: '/settings/:id/admission',
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
				},
				resolve: {
					courses: getCourses,
					admissions: getAdmissions
				}
			})
			.state('general', {
				url: '/settings/:id/general',
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
				},
				resolve: {
					settings: getSettings
				}
			})
			.state('course', {
				url: '/settings/:id/course',
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
				},
				resolve: {
					courses: getCourses
				}
			})
			.state('batch', {
				url: '/settings/:id/batch',
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
				},
				resolve: {
					courses: getCourses,
					batches: getBatches
				}
			})
			.state('subjects', {
				url: '/settings/:id/subjects',
				views: {
					"main": {
						templateUrl: 'app/settings/subjects.html',
						controller: 'SubjectsController',
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
				},
				resolve: {
					batches: getBatches
				}
			})
	}
})();