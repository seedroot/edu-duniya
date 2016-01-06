(function () {
	'use strict'

	angular
		.module('edu')
		.controller('ApprovalController', ApprovalController);

	ApprovalController.$inject = ['institutes', 'adminService'];
	function ApprovalController (institutes, adminService) {
		var vm = this;
		vm.institutes = institutes;
		vm.setStatus = setStatus;

		function setStatus (index) {
			var inst = vm.institutes[index];
			var status = {id: inst.uid, approved_by: 'admin'};
			if(inst.is_approved){
				status.is_approved = true;
			}
			else{
				status.is_approved = false;
			}
			adminService.setStatus(inst.uid, status)
				.then(function (data) {
					console.log(data);
				})
				.catch(function (err) {
					console.log(err);
				});
		}
	}
})();