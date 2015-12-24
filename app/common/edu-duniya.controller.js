(function () {
	'use strict'

	angular
		.module('edu')
		.controller('eduDuniyaController', eduDuniyaController);

	eduDuniyaController.$inject = [];
	function eduDuniyaController (){
		console.log('eduDuniyaController');
	}
})();