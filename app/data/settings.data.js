(function () {
	'use strict'

	angular
		.module('edu')
		.service('settingsService', settingsService);

	settingsService.$inject = ['$http', '$q', 'config'];
	function settingsService ($http, $q, config) {
		this.addCourse = function (id, _course) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/settings/' + id + '/general/course', {course: _course})
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.getCourses = function (id) {
			var deferred = $q.defer();

			$http.get(config.apiUrl + '/settings/' + id + '/general/course')
				.success(function (data) {
					deferred.resolve(data[0].course);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.updateCourse = function (id, _course) {
			var deferred = $q.defer();

			$http.put(config.apiUrl + '/settings/' + id + '/general/course', {course: _course})
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}
	}
})();