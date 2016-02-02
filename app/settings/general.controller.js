(function(){
	'use strict'

	angular
		.module('edu')
		.controller('GeneralSettingController', GeneralSettingController)

		GeneralSettingController.$inject = ['$localStorage', 'settingsService', '$stateParams', 'common', 'settings'];
		function GeneralSettingController ($localStorage, settingsService, $stateParams, common, settings) {
			var vm = this;
			vm.save = save;
			vm.isCurrentCheck = isCurrentCheck;
			vm.removeAcademicYear = removeAcademicYear;
			vm.updateLogo = updateLogo;

			//vm.acaYear = $localStorage.academic_year;
			vm.settings = settings;
			if(settings.logo){
				vm.logo = settings.logo;
			}
			else{
				vm.logo = '../../img/100x100.gif';
			}
			vm.acaYear = settings.academic_year;
			vm.academic_year = {};
			vm.academic_year.from_date = 'Select';
			vm.academic_year.to_date = 'Select';
			vm.upload = false;

			var currYear = new Date;
			currYear = currYear.getFullYear();
			vm.year = [];
			for (var i = currYear; i >= 2000; i--){
				vm.year.push(i);
			}

			function save (type) {
				if(type == 'academic_year'){
					var year = '01/June/' + vm.academic_year.from_date + '-' + '31/March/' + vm.academic_year.to_date;
					var academic_year = {
						year: year,
						is_current: false
					};
					settingsService.addAcademicYear($stateParams.id, academic_year)
						.then(function (data) {
							if(data == 'success'){
								vm.acaYear.push(academic_year);
							}
							else{
								common.error(data);
							}
						})
						.catch(function (err) {
							common.error(err);
						})
				}
			}

			function isCurrentCheck (index) {
				var academic_year = {
					year: vm.acaYear[index].year,
					is_current: vm.acaYear[index].is_current
				}
				settingsService.updateAcademicYear($stateParams.id, academic_year)
					.then(function (data) {
						if(data == 'success'){
							common.success('academic year updated');
						}
						else{
							common.error(data);
						}
					})
					.catch(function (err) {
						common.error(err);
					})
			}

			function removeAcademicYear (index) {
				settingsService.removeAcademicYear($stateParams.id, vm.acaYear[index].year)
					.then(function (data) {
						if(data == 'success'){
							vm.acaYear.splice(index, 1);
							common.success(data);
						}
						else{
							common.error(data);
						}
					})
					.catch(function (err) {
						common.error(err);
					})
			}

			$('#uploadLogo').on('change', function (e) {
				readURL(this);
			});

			function readURL (input) {
			    if (input.files && input.files[0]) {
			        var reader = new FileReader();
			        reader.onload = function (e) {
			        	vm.logo = {};
			        	vm.logo = e.target.result;
			            $('#img_logo').attr('src', e.target.result);
			        }
			        reader.readAsDataURL(input.files[0]);
			    }
			}

			function updateLogo () {
				settingsService.updateGeneralSettings($stateParams.id, vm.logo, 'logo')
				 	.then(function (data) {
				 		console.log(data);
				 	})
				 	.catch(function (err) {
				 		console.log(err);
				 	})
			}
		}
})
();