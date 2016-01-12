(function () {
	'use strict'

	angular
		.module('edu')
		.controller('RegisterController', RegisterController);

	RegisterController.$inject = ['authService', 'notify'];
	function RegisterController (authService, notify) {
		var vm = this;

		vm.inst = {};
		vm.register = register;

		function register () {
			authService.register(vm.inst)
				.then(function (data) {
					console.log(data);
				})
				.catch(function (err) {
					console.log(err);
				})
		}
	}
})();