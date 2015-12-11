(function () {
	'use strict'

	angular
		.module('edu')
		.controller('settingsController', settingsController)

	settingsController.$inject = [];
	function settingsController () {
		console.log('inside settings controller');
	}
})();