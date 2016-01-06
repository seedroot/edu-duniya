(function () {
	'use strict'

	angular
		.module('edu')
		.controller('LoginController', LoginController)

	LoginController.$inject = ['authService', '$state'];
	function LoginController (authService, $state) {
		var vm = this;
		vm.login = login;

		function login() {
			var object = {
				user_name: vm.user_name,
				password: vm.password
			};
			authService.login(object)
				.then(function (data) {
					console.log(data);
					if(data != 'incorrect username or password'){
						$state.go('settings');
					}
				})
				.catch(function (err) {
					console.log(err);
				})
		}
	}
})();