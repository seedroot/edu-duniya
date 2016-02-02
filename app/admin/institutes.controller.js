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
			GMaps.geocode({
				address: vm.address,
				callback: function (results, status) {
					if(status == 'OK'){
						var latlng = results[0].geometry.location;
						map.setCenter(latlng.lat(), latlng.lng());
				      	map.addMarker({
				        	lat: latlng.lat(),
				        	lng: latlng.lng()
				     	 });

				      	var paths = [
						[results[0].geometry.bounds.getSouthWest().lat(), results[0].geometry.bounds.getSouthWest().lng()],
						[results[0].geometry.bounds.getNorthEast().lat(), results[0].geometry.bounds.getNorthEast().lng()]
						];

						console.log(results[0]);

				      	var polygon = map.drawPolygon({
						  paths: paths, // pre-defined polygon shape
						  strokeColor: '#BBD8E9',
						  strokeOpacity: 1,
						  strokeWeight: 3,
						  fillColor: '#BBD8E9',
						  fillOpacity: 0.6
						});
					}
				}
			});
			
		}
	}
})();