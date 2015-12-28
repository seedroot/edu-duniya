(function () {
	'use strict'

	angular
		.module('edu')
		.controller('SettingsController', SettingsController)

	SettingsController.$inject = ['config'];
	function SettingsController (config) {
		//console.log(config.hostname);
		$(".live-tile, .flip-list").not(".exclude").liveTile();
	}
})();