(function(){
	'use strict'

	angular
		.module('edu')
		.controller('BatchController', BatchController)

		BatchController.$inject = ['courses'];
		function BatchController (courses) {
			var vm = this;
			vm.aca_year = [];
			console.log(courses);
			vm.courses = courses;
		}
})
();