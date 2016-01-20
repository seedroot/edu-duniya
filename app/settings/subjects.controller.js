(function () {
	'use strict'

	angular
		.module('edu')
		.controller('SubjectsController', SubjectsController);

	SubjectsController.$inject = ['batches', 'settingsService', '$stateParams', 'common'];
	function SubjectsController (batches, settingsService, $stateParams, common) {
		var vm = this;
		vm.batches = batches;
		vm.cSubjects = [];
		vm.electives = [];
		vm.newElectSubjects = [{
			subject_name: '',
			subject_code: ''
		}];

		vm.addSubject = addSubject;
		vm.getSubjects = getSubjects;
		vm.addMoreElectSubjects = addMoreElectSubjects

		function addSubject (type) {
			if(!vm.batch_id){
				return;
			}
			var payload = {};
			if(type == 'compulsory'){
				payload = {
					subject_name: vm.cSubjectName,
					subject_code: vm.cSubjectCode
				}
			}
			else{
				payload = {
					elective_name: vm.electiveName,
					subjects: vm.newElectSubjects
				}
			}
			settingsService.addSubject($stateParams.id, vm.batch_id, payload, type)
				.then(function (data) {
					if(type == 'compulsory'){
						vm.cSubjects.push(data);
					}
					else{
						vm.electives.push(data);
					}
					common.success('Subject added');
				})
				.catch(function (err) {
					common.error(err);
				})
		}

		function getSubjects () {
			settingsService.getSubjects($stateParams.id, vm.batch_id)
				.then(function (data) {
					console.log(data.subjects);
					vm.cSubjects = data.subjects.compulsory;
					vm.electives = data.subjects.electives;
				})
				.catch(function (err) {
					console.log(err);
				});
		}

		function addMoreElectSubjects () {
			var obj = {
				subject_name: '',
				subject_code: ''
			}

			vm.newElectSubjects.push(obj);
		}
	}
})();