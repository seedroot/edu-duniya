(function () {
	'use strict'

	angular
		.module('edu')
		.controller('SubdomainController', SubdomainController)

	SubdomainController.$inject = ['config'];
	function SubdomainController (config) {
		var vm = this;

		vm.client = config.hostname;
	}
})();