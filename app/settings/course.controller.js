(function () {
    'use strict'

    angular
        .module('edu')
        .controller('CourseController', CourseController)

        CourseController.$inject=[];
        function CourseController () {
        	var vm = this;

        	vm.course = [{
				coursecode: 1,
				coursename: 'English'
			},
			{
				coursecode: 2,
				coursename: 'Hindi'
			},
			{
				coursecode: 3,
				coursename: 'Marathi'
			}]
        }
})();