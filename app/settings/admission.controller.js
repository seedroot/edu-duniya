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
		if(admissions.length){
			vm.fields = admissions[0].additional_field;
		}
		else{
			vm.fields = [];
		}

		vm.save = save;
		vm.addField = addField;

		// $('#start_date').datetimepicker({
		// 	format: 'DD/MM/YYYY'
		// });
  //       $('#end_date').datetimepicker({
		// 	format: 'DD/MM/YYYY'
		// });

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
        			vm.admissions.push(payload);
        			common.success('Admission Saved');
        		})
        		.catch(function (err) {
        			common.error(err);
        		})
        }

        function addField () {
        	var payload = {
        		name: vm.field_name,
        		status: vm.status,
        		is_mandatory: vm.is_mandatory || false,
        		input_type: vm.input_type
        	};
        	//Do not pass $stateParams.id, use admission_id instead
        	settingsService.addField($stateParams.id, payload)
        		.then(function (data) {
        			vm.fields.push(payload);
        			common.success('Field Added');
        		})
        		.catch(function (err) {
        			common.error(err);
        		})
        }
	}
})();