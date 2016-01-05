(function () {
	'use strict'

	angular
		.module('edu')
		.controller('ApprovalController', ApprovalController);

	ApprovalController.$inject = ['institutes'];
	function ApprovalController (institutes) {
		var vm = this;

		vm.institutes = institutes;
	}
})();