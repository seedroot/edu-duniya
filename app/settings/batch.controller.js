(function(){
	'use strict'

	angular
		.module('edu')
		.controller('BatchController', BatchController)

		BatchController.$inject = ['courses', 'batches', '$localStorage', 'settingsService', 'common', '$stateParams'];
		function BatchController (courses, batches, $localStorage, settingsService, common, $stateParams) {
			var vm = this;
			vm.aca_year = $localStorage.academic_year;
			vm.courses = courses;
			vm.batches = batches;
			vm.addBatch = addBatch;

			function addBatch () {
				var batch = {
					institute_id: $stateParams.id,
					name: vm.batch_name,
					course_name: vm.course,
					academic_year: vm.academic_year
				};
				console.log(batch);
				settingsService.addBatch(batch)
					.then(function (data) {
						vm.batches.push(data);
						common.success('Batch Added');
					})
					.catch(function (err) {
						common.error(err);
					})
			}
		}
})
();