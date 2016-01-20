(function () {
	'use strict'

	angular
		.module('edu')
		.controller('menuController', menuController);

	menuController.$inject = ['$localStorage'];
	function menuController ($localStorage) {
		var vm = this;
		vm.menus = [];
		var user_type = $localStorage.user_type;

		if(user_type == 'institute')
		{
			vm.menus = [{
				title: 'Dashboard',
				sref: '',
				is_active: true
			},
			{
				title: 'Profile',
				sref: '',
				is_active: false
			},
			{
				title: 'Courses',
				sref: 'course',
				is_active: false
			},
			{
				title: 'Batch',
				sref: 'batch',
				is_active: false
			},
			{
				title: 'Subjects',
				sref: 'subjects',
				is_active: false
			},
			{
				title: 'Admission',
				sref: 'admission',
				is_active: false
			}];
		}
		else if(user_type == 'student'){
			vm.menus = [{
				title: 'Dashboard',
				sref: '',
				is_active: true
			},
			{
				title: 'Profile',
				sref: '',
				is_active: false
			},
			{
				title: 'Exams',
				sref: '',
				is_active: false
			},
			{
				title: 'Results',
				sref: '',
				is_active: false
			},
			{
				title: 'Admission',
				sref: '',
				is_active: false
			}];
		}
		else if(user_type == 'employee'){
			vm.menus = [{
				title: 'Dashboard',
				sref: '',
				is_active: true
			},
			{
				title: 'Profile',
				sref: '',
				is_active: false
			},
			{
				title: 'Start Exams',
				sref: '',
				is_active: false
			},
			{
				title: 'Tasks',
				sref: '',
				is_active: false
			},
			{
				title: 'Requisitions',
				sref: '',
				is_active: false
			}];
		}
	}
})();