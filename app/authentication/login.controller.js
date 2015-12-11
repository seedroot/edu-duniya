(function () {
	'use strict'

	angular
		.module('edu')
		.controller('loginController', loginController)

	loginController.$inject = [];
	function loginController () {
		console.log('in login controller');
	}
})();