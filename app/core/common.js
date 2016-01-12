(function () {
	'use strict'

	angular
		.module('edu')
		.factory('common', common)

	common.$inject = ['notify'];
	function common (notify) {

		var service = {
			success: success,
			error: error
		};

		return service;

		function success (text) {
			notify({
				message: text,
				duration: 3000,
				classes: 'success'
			});
		}

		function error (text) {
			notify({
				message: text,
				duration: 3000,
				classes: 'danger'
			});
		}
	}
})();