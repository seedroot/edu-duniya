(function () {
    'use strict'

    angular
        .module('edu')
        .controller('CourseController', CourseController)

        CourseController.$inject=['courses', '$stateParams', 'settingsService', 'common'];
        function CourseController (courses, $stateParams, settingsService, common) {
        	var vm = this;

        	vm.courses = courses || [];
        	vm.addCourse = addCourse;

        	function addCourse () {
        		var course = {
        			course_name: vm.course_name,
        			course_code: vm.course_code
        		}
        		settingsService.addCourse($stateParams.id, course)
        			.then(function (data) {
        				vm.courses.push(data);
        				common.success('course added');
        			})
        			.catch(function (err) {
        				common.error(err);
        			})
        	}
        }
})();