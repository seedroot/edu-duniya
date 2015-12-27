(function () {
	'use strict'

	angular
		.module('edu')
		.controller('settingsController', settingsController)

	settingsController.$inject = ['config'];
	function settingsController (config) {
		//console.log(config.hostname);
		$(".live-tile, .flip-list").not(".exclude").liveTile();
	}
})();