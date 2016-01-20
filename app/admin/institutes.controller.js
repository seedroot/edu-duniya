(function () {
	'use strict'

	angular
		.module('edu')
		.controller('FindInstitutesController', FindInstitutesController)

	FindInstitutesController.$inject = [];
	function FindInstitutesController () {
		var vm = this;

		var map = new GMaps({
		  div: '#map',
		  lat: 19.456178,
		  lng: 72.813967
		});

		vm.findCollege =  function() {
			map.addMarker({
			  lat: vm.lat,
			  lng: vm.long,
			  title: vm.collegeName,
			  infoWindow: {
				  content: vm.collegeName
				}
			});
		}
	}
})();