(function () {
    'use strict'

    angular
        .module('edu')
        .controller('courseclassController', courseclassController)

        courseclassController.$inject=[];
        function courseclassController() {
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