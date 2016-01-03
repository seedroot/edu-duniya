(function(){
	'use strict'

	angular
		.module('edu')
		.controller('BatchController',BatchController)

		BatchController.$inject = [];
		function BatchController () {
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