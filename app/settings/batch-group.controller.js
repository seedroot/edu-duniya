(function(){
	'use strict'

	angular
		.module('edu')
		.controller('batchgroupController',batchgroupController)

		batchgroupController.$inject = [];
		function batchgroupController () {
			var vm = this;
			vm.groups = [{
				coursename: 'Grade1 English',
				groupname: 'Batch1'
			},
			{
				coursename: 'Grade2 English',
				groupname: 'batch2'
			},
			{
				coursename: 'Grade3 English',
				groupname: 'batch3'
			}]
		}
})
();