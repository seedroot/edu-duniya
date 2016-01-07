(function () {
	'use strict'

	angular
		.module('edu')
		.controller('LoginController', LoginController)

	LoginController.$inject = ['authService', '$state', 'common'];
	function LoginController (authService, $state, common) {
		var vm = this;
		vm.login = login;

		function login() {
			var object = {
				user_name: vm.user_name,
				password: vm.password
			};
			authService.login(object)
				.then(function (data) {
					if(typeof data != 'string'){
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
})();