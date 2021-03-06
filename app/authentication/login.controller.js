(function () {
	'use strict'

	angular
		.module('edu')
		.controller('LoginController', LoginController)

	LoginController.$inject = ['authService', '$state', 'common', '$localStorage'];
	function LoginController (authService, $state, common, $localStorage) {
		var vm = this;
		vm.login = login;

		function login() {
			if(vm.user_name == 'admin' && vm.password == 'admin'){
				$state.go('approval');
			}
			else if(vm.user_name == 'student' && vm.password == 'passwd'){
				$localStorage.user_type = 'student';
				$state.go('blank');
			}
			else if(vm.user_name == 'employee' && vm.password == 'passwd'){
				$localStorage.user_type = 'employee';
				$state.go('blank');
			}
			else{
				var object = {
					user_name: vm.user_name,
					password: vm.password
				};
				authService.login(object)
					.then(function (data) {
						if(typeof data != 'string'){
							$localStorage.user_type = 'institute';
							$state.go('settings', {id: data.user.institute_id});
						}
						else{
							common.error(data);
						}
					})
					.catch(function (err) {
						console.log(err);
					})

			}
		}
	}
})();