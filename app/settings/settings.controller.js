(function () {
	'use strict'

	angular
		.module('edu')
		.controller('SettingsController', SettingsController)

	SettingsController.$inject = ['config', '$stateParams'];
	function SettingsController (config, $stateParams) {
		var vm = this;

		vm.institute_id = $stateParams.id;
		$(".live-tile, .flip-list").not(".exclude").liveTile();
	}
})();