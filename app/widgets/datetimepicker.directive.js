(function () {
	'use strict'

	angular.module('edu')
	.directive('datetimepicker', function () {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {

        	$(element).on('change', function (data) {
        		console.log('in directive');
                // Triggers a digest to update your model
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(date);
                });
        	})
        }
    } 
});
})();