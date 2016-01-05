(function () {
	'use strict'

	angular
		.module('edu')
		.service('authService', authService);

	authService.$inject = ['$http', '$q', 'config'];
	function authService ($http, $q, config) {
		this.register = function (_data) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/institute',  {institute: _data})
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.login = function (_data) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/auth/login', _data)
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.forgotPassword = function (_data) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/auth/forgotPassword', _data)
				.success(function (data) {
					deferred.resolve(data);
				})
				.catch(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}
	}
})();