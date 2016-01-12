(function () {
	'use strict'

	angular
		.module('edu')
		.controller('EduDuniyaController', EduDuniyaController);

	EduDuniyaController.$inject = [];
	function EduDuniyaController (){
		console.log('eduDuniyaController');
	}
})();