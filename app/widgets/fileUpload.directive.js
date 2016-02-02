(function () {
	'use strict'

	angular
		.module('edu')
		.directive('fileUpload', fileUpload)

	fileUpload.$inject = [];
	function fileUpload () {
		var template = '<img ngf-thumbnail="f" class="img-responsive" />' +
						'<button type="file" ngf-select="uploadFiles($file, $invalidFiles)"' +
          				'accept="image/*" class="btn btn-info">' +
      					'{{ fileName }}</button>'

		var directive = {
			restrict: 'A',
			template: template,
			scope: { number: '=', image: '=' },
			controller: linkFunc
		}

		return directive;
	}

	linkFunc.$inject = ['$scope', '$attrs', '$element', 'settingsService', 'config', '$stateParams', '$timeout'];
	function linkFunc ($scope, $attrs, $element, settingsService, config, $stateParams, $timeout) {
		if($scope.image){
			$scope.f = $scope.image;
		}
		else{
			$scope.f = '../../img/profile/profile-1.jpg';
		}
		$scope.fileName = 'Select File';
		$scope.uploadFiles = function (file, errFiles) {
			var prop = 'slider_' + $scope.number;
			$scope.f = file;
	        $scope.errFile = errFiles && errFiles[0];
	        console.log($scope.errFiles);
	        if (file) {
	        	$timeout(function () {
	        		settingsService.updateGeneralSettings($stateParams.id, file.$ngfDataUrl, prop)
	        			.then(function (data) {
	        				console.log(data);
	        			})
	        			.catch(function (err) {
	        				console.log(err);
	        			})
	        	}, 50);
	        }
		}
	}
})();