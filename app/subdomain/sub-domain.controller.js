(function () {
	'use strict'

	angular
		.module('edu')
		.controller('subDomainController', subDomainController)

	subDomainController.$inject = ['config'];
	function subDomainController (config) {
		var vm = this;

		vm.client = config.hostname;
	}
})();