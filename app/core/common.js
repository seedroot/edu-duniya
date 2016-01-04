(function () {
	'use strict'

	angular
		.module('edu')
		.run(init)

	init.$inject = ['notify'];
	function init (notify) {
		notify.config({
			
		});
	}
})();