(function () {
	'use strict'

	angular
		.module('edu')
		.controller('AdmissionController', AdmissionController);

	AdmissionController.$inject = ['$localStorage', 'courses', 'settingsService','$stateParams', 'admissions', 'common'];
	function AdmissionController ($localStorage, courses, settingsService, $stateParams, admissions, common) {
		var vm = this;
		vm.aca_year = $localStorage.academic_year;
		vm.courses = courses;
		vm.admissions = admissions

		vm.save = save;

		$('#start_date').datepicker();
        $('#end_date').datepicker();

        function save () {
        	var payload = {
        		institute_id: $stateParams.id,
        		academic_year: vm.academic_year,
        		course_name: vm.course,
        		start_date: vm.start_date,
        		end_date: vm.end_date
        	};
        	settingsService.addAdmission($stateParams.id, payload)
        		.then(function (data) {
        			common.success('Admission Saved');
        		})
        		.catch(function (err) {
        			common.error(err);
        		})
        }
	}
})();