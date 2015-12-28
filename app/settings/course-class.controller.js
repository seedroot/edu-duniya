(function () {
    'use strict'

    angular
        .module('edu')
        .controller('CourseClassController', CourseClassController)

        CourseClassController.$inject=[];
        function CourseClassController() {
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
})
();