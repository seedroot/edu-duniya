(function () {
	'use strict'

	angular
		.module('edu')
		.service('DomainSettings', DomainSettings)

	DomainSettings.$inject = ['$http', '$q', 'config'];
	function DomainSettings ($http, $q, config) {
		var self = this;

		self.getDomain = function () {
			var deferred = $q.defer();
			$http.get(config.apiUrl + '/settings/' + config.hostname + '/general/domain')
				.success(function (settings) {
					self.getInstitute(settings.institute_id)
						.then(function (institute) {
							var data = {
								institute: institute,
								settings: settings
							};
							deferred.resolve(data);
						})
						.catch(function (error) {
							deferred.reject('error in retrieving institute details');
						})
				})
				.error(function (err) {
					deferred.reject('error in retrieving institute settings');
				})

			return deferred.promise;
		}

		self.getInstitute = function (id) {
			var deferred = $q.defer();
			$http.get(config.apiUrl + '/institute/' + id)
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