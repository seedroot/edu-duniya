(function () {
	'use strict'

	angular
		.module('edu')
		.service('adminService', adminService)

	adminService.$inject = ['$http', '$q', 'config'];
	function adminService ($http, $q, config) {
		this.getInstitutes = function () {
			var deferred = $q.defer();

			$http.get(config.apiUrl + '/institute')
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.setStatus = function (id, status) {
			var deferred = $q.defer();

			$http.put(config.apiUrl + '/institute' + id, status)
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}
})();