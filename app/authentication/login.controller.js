(function () {
	'use strict'

	angular
		.module('edu')
		.controller('LoginController', LoginController)

	LoginController.$inject = [];
	function LoginController () {
		console.log('in login controller');
	}
})();